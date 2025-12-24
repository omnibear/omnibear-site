---
title: "Help"
date: 2018-09-01T11:26:07-04:00
---

It takes a lot of moving parts to get an IndieWeb site working. Omnibear offers logging to help you troubleshoot any issues when authenticating to your site or posting to your micropub endpoint.

## Verify your site works

If you’re having trouble logging in or posting, the first thing to do is to determine whether the problem is with Omnibear or with your [micropub server](/getting-started/micropub). Test out a different micropub client, such as [Quill](https://quill.p3k.io/). If you have the same problem there, the issue is most likely something with your website configuration. If the other client works, the problem is with Omnibear.

## Enable logging

Go to the settings page and check the box labeled "Record debug logs" to enable logging.

![Enable logging in the settings page](/images/logging-option.png)

Unchecking this box and saving settings will delete existing logs. “Info” and “warning” logs will not be saved while it is unchecked. “Error” logs will save, but they will not be visible until the option is enabled.

## Review logs

With logging enabled, a “Logs” option will appear in the navigation bar of the Omnibear popup window. Click this to view logs.

![Click Logs in the footer to open logs](/images/logging-nav.png)

All logs will be displayed in this screen. Some logs contain additional information, indicated by a “+” icon. Click the log entry to expand the pane to display the data.

![Logging screen](/images/logging-example.png)

Logs are only stored locally on your machine and are not reported to a server.

## Reporting issues

If you think you’ve found a problem with Omnibear, report it by [opening an issue on GitHub](https://github.com/omnibear/omnibear/issues). Be sure to copy the relevant logs as shown above and paste them into the issue.
