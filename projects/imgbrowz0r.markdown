---
layout: page
title: ImgBrowz0r
---

ImgBrowz0r (pronounced Imagebrowzor or I-m-g-browzor) if a class written in
PHP5 (tested with 5.2.9) that enables you to set up a simple gallery with basic
configuration to 10 minutes. It's also possible to integrate it into a CMS or
your existing website. You can also change various other things like
sorting order and thumbnail sizes (etc. etc.).

It does things like generating thumbnails, generating pagination/breadcrumbs
and outputs XHTML that is provided with classes and ID's so everything can be
extended and changed with Javascript and CSS.

The only thing you have to do is install it and upload your images. And maybe
clean the cache once in a while.

The current stable version is **0.3.7**. I recommend upgrading if you are using
an older version. 0.3.* has much improvements and bugs fixes.

ImgBrowz0r can be downloaded from the [downloads page][downloads]. The
development version can be downloaded from [Github][source]. And the
[changelog][] can be found [here][changelog].

 [downloads]: http://github.com/FSX/imgbrowz0r/downloads
 [source]: http://github.com/FSX/imgbrowz0r
 [changelog]: http://github.com/FSX/imgbrowz0r/blob/master/CHANGELOG


Feature requests and bugs can be sent to [Github][issues]. And you can sent me
a mail if you got problems (see the *about* page). A demo is located at
[images.61924.nl][demo].

 [issues]: http://github.com/FSX/imgbrowz0r/issues
 [demo]: http://images.61924.nl


## Requirements

 - PHP >=5.2
 - [GD](http://php.net/manual/en/book.image.php)
 - [Exif](http://php.net/manual/en/book.exif.php) (optional)


## Features

 * Infinite nesting of directories.
 * Automatic thumbnail creation and caching.
 * Thumbnail is refreshed if the orginal image is changed.
 * Transparency in PNG and GIF images is preserved in the thumbnail.
 * Valid XHTML 1.0 Strict output.
 * Easy to integrate into any website or CMS.
 * Easy to style and extend with CSS and Javascript.
 * Ability to configure time display, timezone and DST.
 * Represent a directory with a (random) thumbnail.
 * Sorting of images can be configured.
 * Div based layout for the gallery.
 * Images (and the cache) can be stored on different locations/(sub)domains on
   the server as long it's reachable by the browser.
 * Support for gif, jpg, jpeg, jpe, jif, jfif, jfi and png images.
 * Page navigation and breadcrumbs.


## Guides/Tutorials

 * [Imgbrowz0r vs. WordPress (V2)](http://css-tricks.com/forums/viewtopic.php?f=10&t=4160)
 * [Building a Photo Gallery (CSS-Tricks screencast)](http://css-tricks.com/video-screencasts/64-building-a-photo-gallery/)
 * [Extending ImgBrowz0r](/posts/00020-extending-imgbrowz0r-1.html)
