---
layout: page
title: AnimeList Manual
---

**Note:** See [this page](R[url]/projects#h-animelist) for more information
about the status of AnimeList.


## Introduction

AnimeList is an application that lets you manage your anime list from
[Myanimelist][1] and uses the [the unofficial MAL API][2]. It's written in
Python and uses PyGTK for its GUI. Take a look at the feature list to see what
it can do.

AnimeList has only been tested on Windows and Linux at this moment.


### Features

 - Manage your anime list from MyAnimeList.net.
 - The GUI does not freeze when adjustments are made to your list.
 - Search anime and add them via the search section.
 - Show details (more information) of anime.
 - Works on Linux, Windows and maybe Mac OS X (not tested).
 - Login details are encoded before they're saved (your username and password
   are not saved as plain text).


## Installation

Installing AnimeList is very simple. First install the dependencies, listed
below, then download and extract/unpack the downloaded archive. Executables for
[Mac OS X][py2app] and [Windows][py2exe] are planned.


### Dependencies

Install in this order.

 - [GTK+][]. Most linux distros already have this package installed. You can
   easily install it with your package manager if that's not the case.
   [GTK-WIN][] can be used on Windows systems.
 - [Python][]. AnimeList is tested on Python 2.6, but it should also work on 2.5.
 - [PyGObject][pygtk], [PyCairo][pygtk] and [PyGTK][pygtk]. These are the Python
   bindings for GLib/GObject/GIO, Cairo and GTK+. On Linux
   you can install these with your package manager.
 - [Simplejson][] is needed if Python 2.6 isn't available.


### Download > Extract > Run

Download the latest release from [Github][4] and
extract/unpack the archive in a directory of your choice. Then `cd` to that
directory (for Windows users: open that folder in Explorer).

After you've done that you can start AnimeList by double-clicking on
`animelist.py` or do `./animelist.py` on the commandline.nLinux users may have
to make `animelist.py` executable (`chmod +x animelist.py`) and Windows users
may have to associate `.py` files with Python first or put Python in the `PATH`.

## Usage

*Not done yet.*

## Support/Contact

Report bugs or ask something:

 * Post a reply at the [AnimeList topic at the unofficial MAL API club forum][umal-topic].
 * Send a private message via my [MAL profile page][mal-fsx].
 * Or check my [About](/about) page.

## Development

The source code can be at [Github][4] and planned features in the TODO file.
Any help with testing, especially on other OS than Linux, is really
appreciated.

**Notes:**

 * The \*.ui files are gtk.Builder files, which can be edited with Glade 3.
 * [Pygtkhelpers][] is a library from PIDA and is licensed under the LGPL 2.


 [1]: http://myanimelist.net/
 [2]: http://mal-api.com/
 [3]: http://github.com/FSX/animelist/downloads
 [4]: http://github.com/FSX/animelist
 [GTK+]: http://www.gtk.org/
 [GTK-WIN]: http://gtk-win.sourceforge.net/
 [Python]: http://www.python.org/
 [pygtk]: http://www.pygtk.org/downloads.html
 [Simplejson]: http://code.google.com/p/simplejson/
 [py2app]: http://svn.pythonmac.org/py2app/py2app/trunk/doc/index.html
 [py2exe]: http://unpythonic.blogspot.com/2007/07/pygtk-py2exe-and-inno-setup-for-single.html
 [Pygtkhelpers]: http://bitbucket.org/aafshar/pygtkhelpers-main/src/
 [umal-topic]: http://myanimelist.net/forum/?topicid=115762
 [mal-fsx]: http://myanimelist.net/profile/FSX
