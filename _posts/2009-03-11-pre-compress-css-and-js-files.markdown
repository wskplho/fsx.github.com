---
layout: post
title: Pre-compress CSS and JS files
author: Frank
date: 2009-03-11 16:12:50 +0200
categories: [Optimization, Gzip, How-to]
---

I once wrote a small article about serving gzipped CSS and Javascript files
with Apache. Now Lighttpd is added to the list as well. :)

The intro of the old article:

> There are a number of methods for this, with PHP or with the Apache Gzip module.
> To enable Gzip compression for PHP pages you have to set zlib.output_compression
> to On, but that doesn't work on CSS and javascript files. For those files you
> could use the Apache Gzip module, but what if you don't have that module,
> because you have shared hosting (like me)?

Well, this doesn't really make sense anymore. You can use
[mod_deflate](http://httpd.apache.org/docs/2.0/mod/mod_deflate.html) for Apache
and [mod_compress](http://redmine.lighttpd.net/wiki/lighttpd/Docs:ModCompress)
for Lighttpd. So pre-compressing your files isn't really needed anymore, but
this method could still be useful in some cases. So here we go!


## Step 1

Get the files you would like to compress and compress them. I have a copy of the
Mootools Javascript library and one of the 960gs CSS grid,
8KB and 95.8KB.

	 8169 2009-03-11 07:26 960c.css
	98067 2009-03-11 07:21 mootools-1.2.1-core-nc.js

After compressing the files with gzip the files now have a filesize of 1.8KB
and 25.6KB. That's a huge improvement.

You can find a list of archivers that support Gzip
[here at Wikipedia](http://en.wikipedia.org/wiki/Comparison_of_file_archivers#Writing).

	 1841 2009-03-11 08:06 960c.cgz
	26174 2009-03-11 08:06 mootools-1.2.1-core-nc.jgz

I've also renamed the file extensions: .cgz = CSS Gzip and .jgz = Javascript Gzip.


## Step 2

Now we have to make sure that the server sends the right headers to the browser.
If you use Apache you can put the following code in a .htaccess file or your
server config file:

{% highlight apacheconf %}
# Compressed javascript files
AddEncoding x-gzip .jgz
AddType application/x-javascript .jgz

# Compressed css files
AddEncoding x-gzip .cgz
AddType text/css .cgz
{% endhighlight %}

And for Lighttpd you can use this code (paste this in your Lighttpd config file):

{% highlight lighttpd %}
$HTTP["url"] =~ "\.(cgz|jgz)" {
        setenv.add-response-header = ("Content-Encoding" => "gzip")
        mimetype.assign = (
               ".cgz"    => "text/css",
               ".jgz"    => "application/x-javascript"
        )
}
{% endhighlight %}

**Note:** be sure to activate mod_setenv othterwise you'll get a bunch of crap
on your screen.


## Step 3

There is no step 3! This was all. It's pretty simple. :)
