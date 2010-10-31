---
layout: post
title: ImgBrowz0r 0.3 Beta
author: Frank
date: 2009-04-22 22:35:00 +0200
categories: [PHP, ImgBrowz0r, Beta-release]
---

After almost 7 months it's almost here, ImgBrowz0r 0.3. I'm now releasing a beta
version which already has a lot of improvements.

I was already working on 0.3 last year, but the code got messy and I was also
working on Shinobu. I've started working on ImgBrowz0r again in March when I saw
how much it was downloaded (+400 times!).

Well, here's the list of changes:

 * Most of it is rewritten.
 * Categories are called directories now.
 * Images can be dropped into the root gallery directory directly.
 * All thumbnails are now stored in a centralized cache.
 * The table based layout is replaced with a div based layout.
 * The sorting order of images and directories can now be set in the configuration.
 * The images and cache can now be placed on different locations/domains on a server.
 * Dropped base64 encoding for the category location in the url.
 * Improved quality of GIF thumbnails.
 * Improved page navigation.
 * Improved for environments that use url rewriting.
 * Added support for unlimited nesting of categories (directories).
 * Added support for daylight saving time (DST).
 * Added support for uppercase file extensions.
 * Added support for .jpeg, .jpe, .jif, .jfif and .jfi file extensions.
 * Added breadcrumbs navigation.
 * Added imgbrowz0r::output_style() to output a style for the div based layout.

The [beta can be download here](http://github.com/FSX/imgbrowz0r/downloads).

I hope everyone likes it. And let me know if you found a bug.
