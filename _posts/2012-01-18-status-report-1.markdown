---
layout: post
title: "Status Report #1"
author: Frank
date: 2012-01-20 01:13:00 +0100
categories: [Momoko, Misaka, FluxBB, php-utf8, Thrift, Tornado]
---

In a week or two most of the work at school will be done and I'll be able to
work more on my projects again. And after this semester I'll start with my
(academic) minor, *Digital Arts*. I'm sure it won't take up all my time.

It's not hard to work on something and forget about the other thing you're
working on. And some scribbles in my notebook aren't going to prevent that. So
I'll put a status report on my blog so I won't forget about it. It also kinda
forces me to be less lazy, because I post this in a public place. And forces
me to do stuff.


## Thrift

I'm working on a [Thrift][] client for [Tornado][]. It took a bit longer to get
started than expected, but I've figured out how it works (mostly) now and
started to document the binary protocol.

After the documentation is done I'll start with making a client that communicates
with the Thrift server in the [tutorial code][]. Once that's done and once I
figured out how everything should be structured I'll start with a IDL compiler.

I haven't thought out that last one yet, but after looking through the Python
code that Thrift generates I saw that it wasn't easy to make it work for Tornado.
So I guess I'll have to make something that generates TOrnado friendly code.
Luckily the IDL doesn't look to complex.


## Misaka

All functionality of 1.0.0 is done, but it hasn't been tested completely and the
documentation needs to be updated. There's probably also need for a separate
Python 2 and 3 package, because the C code that [Cython][] generates is
different for 2.X and 3.X.


## Momoko

I think it's time for 0.4.1 soon. There are not a lot of changes, but
[recovery from closed connections][recovery] is a nice one. I'm going to look
into a minor issue regarding error handling and then 0.4.1 will be released.


## FluxBB/php-utf8

There are some [tickets assignment to me][tickets] and I'll have to update a
number of things in php-utf8.

Franz converted all unit tests to PHPUnit and I added namespaces to everything.
I'll now have to reformat all code according to the code formatting guidelines
(I like neatly formatted code). And while I'm at it I'll have to check the code
too.

I'm also thinking of making all of php-utf8's documentation in [Sphinx][]. It
works perfectly for Python-based projects. So why not for PHP-based projects?


 [Thrift]: http://thrift.apache.org/
 [Tornado]: http://www.tornadoweb.org/
 [tutorial code]: http://svn.apache.org/viewvc/thrift/trunk/tutorial/py/
 [Cython]: http://cython.org/
 [recovery]: https://github.com/FSX/momoko/issues/11
 [tickets]: http://fluxbb.org/development/core/tickets/?q=&m=all&o=32&t=all&s=1&c=all&i=all
 [Sphinx]: http://sphinx.pocoo.org/
