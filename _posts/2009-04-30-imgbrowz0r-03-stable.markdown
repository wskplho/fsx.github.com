---
layout: post
title: ImgBrowz0r 0.3 Stable!
author: Frank
date: 2009-04-30 23:35:00 +0200
categories: [PHP, ImgBrowz0r, Major release]
---

Yup, a stable release of ImgBrowz0r. And lots of things are improved and fixed
since the beta.

Here's the list of changes:

 * The functions that generate the navigation are removed from
   imgbrowz0r::display() and are now public functions.
 * Fixed a small bug in the url check part.
 * Added the random thumbnails again.
 * "Random thumbnails" can also be disabled now. Instead the same thumbnail will
   be shown each time or nothing at all.
 * Added a "read limit" that limits the amount of thumbnails that are used for
   the random thumbnail fucntion (this can speed things up).
 * Thumbnails are now refreshed if the orginal image has changed.
 * The supported file types are now stored in a variable.
 * Fixed a bug in imgbrowz0r::get_ext().
 * Fixed a bug in directory check in imgbrowz0r::make_thumb().
 * Directory statistics now in a  separate function, imgbrowz0r::statistics().
 * Removed check if GD extension is loaded. gd_info() function check is enough.
 * Removed imgbrowz0r::output_style().
 * Cleaned up page navigation generator.
 * Replaced some hard-coded values for the thumbnail height and width with
   variables in imgbrowz0r::make_thumb().

ImgBrowz0r can he download [here](http://github.com/FSX/imgbrowz0r/downloads). I'm
planning to make some script and articles related to ImgBrowz0r in the future.
