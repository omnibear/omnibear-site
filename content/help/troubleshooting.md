---
title: "Troubleshooting"
date: 2026-01-04T02:30:07.907Z
weight: 1
---

When you hae issues with Omnibear, it is helpful to narrow down the source of your problem.

<!--more-->

## Verify Your Site Works

If you’re having trouble logging in or posting, the first thing to do is to determine whether the problem is with Omnibear or with your [micropub server](/getting-started/micropub). Test out a different micropub client, such as [Quill](https://quill.p3k.io/) or [Sparkles](https://sparkles.sploot.com/). If you have the same problem there, the issue is most likely something with your website configuration. If the other client works, the problem is with Omnibear.

## Check the Logs

When troubleshooting an issue, the Omnibear logs may be helpful.
Follow the [logging guide](../logging) for how to enable and view the logs.

## Reauthenticate

If you are having issues sending posts to your site, try logging out and logging back in.
This will update your authentication in case that is out of date.

## Reinstall

If reauthenticating does not fix your issue, uninstall Omnibear and start with a fresh install from your browser's extension.

## Review Known Issues

Review open [GitHub Issues](https://github.com/omnibear/omnibear/issues) to look for related issues.
Someone else may have reported the problem and you can check if a fix is available.

## Contact

If all else fails and there are no open issues, [reach out for help](../contact).
