---
layout: post
title: Firefox userChrome.css
author: Frank
date: 2009-07-29 13:46:10 +0200
categories: [Firefox, CSS, Customization]
---

Some nice CSS for the userChrome.css file in Firefox. It enables you to
customize the Firefox interface.

I found this on [Lifehacker][1] and added some of my own rules and stuff I found
on the [Arch Linux forum][2] (only tested with the default Firefox UI):

{% highlight css %}
@namespace url("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul");
@namespace html url("http://www.w3.org/1999/xhtml");

/* Active tab */
.tabbrowser-strip {  }
.tabbrowser-tab { -moz-appearance: none !important;margin-right: 5px !important;padding: 0 5px !important;-moz-border-radius: 0px !important }
.tabbrowser-tab[selected="true"] { background-color: #ddd !important;margin-bottom: 1px !important }

/* Hide show all tabs button */
/* .tabs-alltabs-button { display: none !important } */

/* Remove new tab button */
/* .tabs-newtab-button { display: none } */

/* Remove close button from active tab */
.tabbrowser-tab[selected="true"] > .tab-close-button { display: none !important }

/* Remove magnifying glass button from search box */
.search-go-button-stack { display: none !important }

/* Remove the Edit and Help menus
   Id's for all toplevel menus:
   file-menu, edit-menu, view-menu, go-menu, bookmarksMenu, tools-menu, helpMenu */
#bookmarksMenu, #helpMenu { display: none !important }

/* Remove Home button */
#home-button { display: none }

/* Remove go button */
#go-button { display: none !important; }

/* Remove the bookmark star */
#star-button { display: none !important }

/*Remove magnifying glass button from search box*/
.search-go-button { display: none !important; }

/* Remove forward button drop down arrow */
#back-forward-dropmarker { display: none !important; }

/* Get rid of dropdown indicator in url bar */
#urlbar > dropmarker { display: none !important; }

/* Remove Web Search from Tools Menu */
menuitem[label="Web Search"] { display: none; }
menuitem[label="Web Search"] + menuseparator { display: none; }
{% endhighlight %}

There are is no documentation for it, but you can go to your Firefox directory
and unzip `classic.jar` that's located in the `chrome` directory. A .jar is just
a zip archive with an other extension. After you unzipped it go  to the unzipped
contents, go to `./skin/classic/browser` and open `browser.css`. In this file you
can find all the CSS for the default Firefox UI.


 [1]: http://lifehacker.com/197715/customize-firefox-with-userchromecss
 [2]: http://bbs.archlinux.org/viewtopic.php?id=50673
