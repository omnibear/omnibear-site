---
title: "Mentions"
weight: 3
date: 2026-01-03T06:40:26.973Z
---

After Omnibear posts to your site using _micropub_, you'll want the recipient to be notified.
Webmentions are the recommended way to achieve this.
This isn't required to posting to your own site but allows other IndieWeb sites to display your response.

<!--more-->

## What are webmentions?

Webmentions are a way to inform another site that it was mentioned.
It is defined by an open specification [published by the W3C](https://www.w3.org/TR/webmention/#abstract-p-1) along with other emerging social web protocols.
This typically happens behind-the-scenes and enables other sites to incorporate responses.

## How are webmentions used?

Each site can decide how to handle mentions differently.
Some sites ignore them, some only are seen by the site's admins, but many sites choose to list [responses](https://indieweb.org/responses) below posts.
This typically involves checking the page that sent the mention, checking that the mention is visible, and parsing the page for the reply content.

Marking up your site with [Microformats syntax](https://microformats.org/wiki/Main_Page) such as [h-entry](https://microformats.org/wiki/h-entry) allows the webmention receiver to understand the site that sent the mention.
An h-entry can identify details like when the post was published, it's title, author, and main content.
Without Microformats, sites can still display a link to your mention, but the extra syntax does allow for a richer cross-site experience.

## Sending webmentions manually

After you publish your post, you can manually send a webmention.

Some tools for doing this include

- [webmention.app](https://webmention.app/check)
- [Telegraph](https://telegraph.p3k.io)

Because webmentions are fairly simple messages, you could also [send a mention with cURL](https://indieweb.org/Webmention-developer#How_to_send_webmentions_with_cURL).

## Sending webmentions automatically

To enable automatic webmention sending on your site, you need a tool to review your posts and send out mentions. Depending on which <abbr title="Content Management System">CMS</abbr> you use, this can be as easy as installing a plugin, or it could take a little more technical expertise. Here are some common options:

- [Wordpress Webmention Plugin](https://wordpress.org/plugins/webmention/#description)
- [webmention.app](https://webmention.app/docs)

## Receiving Webmentions

For you to use Omnibear, you don't need to accept webmentions on your site since your replies are sent to the receipient's website.
But if you would like to receive replies, you should also consider adding support to receive webmentions.
You can use a site like [webmention.io](https://webmention.io/) to accept webmentions for you by adding a link tag to your page.

If Omnibear shows a "W" badge when viewing your site, you already have a webmention receiver!
If you would like to further test your webmention received, see the instructions on [webmention.rocks](https://webmention.rocks/).

Once you have a webmention receiver, you can choose how you would like to display webmentions.
Typically, this involves parsing the contents for replies and displaying them as comments.
But some people prefer to keep mentions private.
If you are using webmention.io to receive mentions, you can use a tool like [webmention.js](https://github.com/PlaidWeb/webmention.js) to display them.

## Bridging Mentions

Omnibear supports finding the reply URL for posts on Mastodon and Bluesky.
However, those networks don't typically listen for webmentions so they won't see your reply by default.
You will need something to translate between your website and the social networks' underlying protocols.

If you syndicate (repost) entries on your site to the network that was mentioned, you may be all set.
If you have a Wordpress site with the [ActivityPub plugin](https://wordpress.org/plugins/activitypub/), replies may get translated to fediverse sites like Mastodon.
Otherwise, you might consider using a service to help translate between web and network content.
[Bridgy Fed](https://fed.brid.gy/) is a bridge with great cross-platform support.
It also supports bridging social replies back to your site via webmentions and microformats.
Follow the [web getting started docs](https://fed.brid.gy/docs#web-get-started) for more details on how to set up bridgy fed.
