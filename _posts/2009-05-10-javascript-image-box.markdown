---
layout: post
title: Javascript image box
author: Frank
date: 2009-05-10 20:15:00 +0200
categories: [Javascript, Jsimgbox, Major-release]
---

I wrote a simple "lightbox" script for Mootools that doesn't need extra images
or CSS, but it doesn't have those fancy efects.

I couldn't find something simple (I'm lazy. I don't want to add extra images
and CSS each time) so I tried to write something myself. And thanks to some guys
at #mootools (freenode) this thing works now. :D

It only needs the [Mootools](http://mootools.net/download) 1.2.2 core and is
easy to use.

Like this:

{% highlight html %}
<script src="js/mootools-1.2.2-core-nc.js" type="text/javascript"></script>
<script src="js/jsimgbox-0.1.js" type="text/javascript"></script>

<script type="text/javascript">
window.addEvent('domready', function()
{
    new Jsimgbox('.img-thumbnail a');
});
{% endhighlight %}

Jsimgbox (Javascrip image box) can be downloaded from [files.61924.nl](http://files.61924.nl/jsimgbox/).
And a demo can be found at: [images.61924.nl](http://images.61924.nl).

It's only tested in Opera 9.64 and Firefox 3.0.10 on Xubuntu 9.04. If would be
cool if someone could test this in some other browsers. :)
