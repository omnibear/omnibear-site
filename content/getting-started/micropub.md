---
title: "Micropub"
date: 2018-08-31T11:09:26-04:00
weight: 2
---

Omnibear posts to your site using _micropub_. Micropub is a web protocol used to create, update, and delete posts on your website using third-party clients (apps). It is an open specification [published by the W3C](https://www.w3.org/TR/micropub/#abstract-p-1) along with other emerging social web protocols.

<!--more-->

Once your website supports micropub, you can use any micropub client to post to your site, not just Omnibear. [Quill](https://quill.p3k.io/) is another popular client; see [the IndieWeb wiki](https://indieweb.org/Micropub/Clients) for a list of other available clients.

## Setting up micropub

To enable micropub on your site, you need a _micropub server_. Depending on which <abbr title="Content Management System">CMS</abbr> you use, this can be as easy as installing a plugin, or it could take a little more technical expertise. Here are some of the most common options, beginning with the easiest and working up to the more involved.

### Micro.blog

[Micro.blog](https://micro.blog) supports micropub out of the box. If you use Micro.blog for your site, then you’re already set up! You can skip ahead to learn a little more about how micropub works, but don’t have to if you don’t want to.

### Wordpress

To get started with Wordpress, you will need to install the [micropub plugin](https://wordpress.org/plugins/micropub/). This will add a micropub server to your WordPress site. For more details, see plugin’s documentation.

**Note**: You will also need to install the IndieAuth plugin for [authentication](/getting-started/authentication). Alternately, you can use the [IndieWeb package](https://wordpress.org/plugins/indieweb/); this is an installer for several IndieWeb plugins, including both micropub and IndieAuth.

### Static Sites

If you use a static site generator such as [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), or [Eleventy](https://www.11ty.io/), you will have to setup your own micropub server to add new posts to your site repository. Thankfully, there are a few servers available to do this for you, but they will require a little configuration.

 - [benjis/micropub](https://github.com/benjifs/micropub): Serverless Netlify functions
 - [IndieKit](https://getindiekit.com/): A Node.js based micropub server
 - [webpage-micropub-to-github](https://github.com/voxpelli/webpage-micropub-to-github): A Heroku deployable app tested with Jekyll and Hugo


Once you have the server set up, you will need to add a `link` tag to your site indicating where your micropub server can be found ([see below](#how-it-works)).

### Other options

If none of these suit your needs, there are several other micropub servers available. See [this list](https://indieweb.org/Micropub/Servers) for more options.

## How it works

When you login to Omnibear, it fetches your website homepage, and looks for a `<link rel="micropub">` tag in the page `<head>`. This link tag should include an `href` attribute matching your micropub server URL. For example:

```html
<link rel="micropub" href="https://example.com/micropub">
```

This tells Omnibear (or any other micropub client) where it can post new entries to. When it posts, it includes your [authentication token](/getting-started/authentication) which the micropub server will use to verify you have permissions to modify the site content.

As long as the token is valid, the micropub server will post your new entry, and will let the client know the final URL where the new post will appear.
