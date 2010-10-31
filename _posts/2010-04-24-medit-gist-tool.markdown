---
layout: post
title: Medit Gist Tool
author: Frank
date: 2010-04-23 21:36:00 +0200
categories: [Medit, Gist, Github]
---

A small tool for Medit to create Gists on Github. It uses Pygist to create the
Gist and Gxmessage/Xmessage to display the URL.

First install [Pygist][1] ([AUR][2]) and [Gxmessage][3]. Gxmessage is
optional though. If Gxmessage isn't found, Xmessage will be used.

Then start [Medit][4], open the *Preferences* windows and go the the *Tools* tab.
Create a new tool, Gist, and use the following code (and settings):

<script type="text/javascript" src="http://gist.github.com/376938.js"></script>

Or take a look at the screenshot:

<a href="{{ site.cdn }}/img/medit-gist-tool-code.png" class="jsimgbox">
  <img src="{{ site.cdn }}/img/medit-small-gist-tool-code.png" alt="Gist Tool" />
</a>
*(Click for larger version)*

The Gist tool can now be accessed via *Tools > Gist* in the menu. After 2 or 3
seconds you'll get a dialog with the URL:

![Gist URL]({{ site.cdn }}/img/medit-git-tool-url.png)


 [1]: http://github.com/mattikus/pygist
 [2]: http://aur.archlinux.org/packages.php?O=0&K=pygist&do_Search=Go
 [3]: http://homepages.ihug.co.nz/~trmusson/programs.html#gxmessage
 [4]: http://medit.bitbucket.org/
