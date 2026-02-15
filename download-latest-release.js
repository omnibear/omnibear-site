// download-latest-release.js
// This script fetches the latest release from the omnibear/omnibear GitHub repo and writes a markdown file in the releases folder.

const https = require("https");
const fs = require("fs");
const path = require("path");

const owner = "omnibear";
const repo = "omnibear";
const releasesDir = path.join(__dirname, "content", "releases");

function fetchLatestRelease(callback) {
  const options = {
    hostname: "api.github.com",
    path: `/repos/${owner}/${repo}/releases/latest`,
    method: "GET",
    headers: {
      "User-Agent": "Node.js",
      Accept: "application/vnd.github+json",
    },
  };

  https
    .get(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        if (res.statusCode === 200) {
          callback(null, JSON.parse(data));
        } else {
          callback(
            new Error(`GitHub API responded with status ${res.statusCode}`)
          );
        }
      });
    })
    .on("error", (err) => {
      callback(err);
    });
}

function writeMarkdown(release) {
  const releaseVersion = release.tag_name.replace("v", "");
  const filename = `${releaseVersion}.md`;
  const filePath = path.join(releasesDir, filename);

  let assetLinks = release.assets
    .map((asset) => `- [${asset.name}](${asset.browser_download_url})`)
    .join("\n");

  let content = `---
title: "Omnibear version ${releaseVersion}"
date: ${release.published_at}
author: Anthony Ciccarello
---

${release.body || ""}
<!--more-->

Files available for manual install on the [GitHub releases page](${
    release.html_url
  }).

${assetLinks}

`;

  const changelogRegex = /\*\*Full Changelog.*$/m;
  const changelogLink = content.match(changelogRegex)[0];
  content =
    content
      .replace(changelogRegex, "")
      .replace(/\n## What's Changed.*$/m, "")
      .replaceAll(
        / https:\/\/github.com\/omnibear\/omnibear\/pull\/(\d*)/g,
        (substring, prId) => ` [#${prId}](${substring.substring(1)})`
      ) +
    changelogLink +
    "\n";

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Release notes written to ${filePath}`);
}

fetchLatestRelease((err, release) => {
  if (err) {
    console.error("Error fetching release:", err.message);
    process.exit(1);
  }
  if (!fs.existsSync(releasesDir)) {
    fs.mkdirSync(releasesDir, { recursive: true });
  }
  writeMarkdown(release);
});
