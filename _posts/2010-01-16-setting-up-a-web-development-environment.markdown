---
layout: post
title: Setting up a web development environment
author: Frank
date: 2010-01-16 01:15:30 +0200
categories: [Arch-Linux, Nginx, PHP, phpMyAdmin, How-to]
---

This Monday I was planning to cleanup and reorganize my web development server.
Everything was dumped in my home directory and I used some simple scripts to
start the services I needed (manually, each time I booted my server). So it was
time for some spring cleaning.

I'm using [Arch Linux](http://archlinux.org/) and you'll need it to follow this
article. Unless you know how to do everything on other GNU/Linux distros. If
you don't use Arch Linux just hook up an old computer and start reading the
[Beginners' Guide](http://wiki.archlinux.org/index.php/Beginners'_Guide) and
install Arch Linux. After you've done that install
[SSH](http://wiki.archlinux.org/index.php/SSH).


## Software

There's some software we need that is only available on the [AUR](http://aur.archlinux.org/).
So install [packer](http://aur.archlinux.org/packages.php?ID=33378),
[yaourt](http://aur.archlinux.org/packages.php?ID=5863) or any other tools you like.

Here are the packages you need:

 - [nginx-unstable](http://aur.archlinux.org/packages.php?ID=18036)
 - mysql
 - php
 - php-cgi
 - phpmyadmin

Install these packages. I'll explain how you can configure these later in the
article. **php-cgi** only has to be installed and doesn't need any further
configuration.

I'm not going to explain how to configure MySQL, because I'm just using the
default configuration from the [ArchWiki](http://wiki.archlinux.org/index.php/MySQL).
Just follow the instructions on that wiki article.


## Users & Groups

It's not really safe to run the webserver and PHP as root. We'll make a new user
and usergroup, both are called **www**, which is going to be used for PHP and
Nginx.

Run the following commands as root:

{% highlight console %}
$ groupadd www
$ useradd -g www www
$ chmod +w /srv/http/nginx
$ chown -R www:www /srv/http/nginx
{% endhighlight %}

Make sure **www** is the owner of all the files and directories inside
`/srv/http/nginx`.


## Subdomains

[Medorion](http://www.medorion.net/) helped me with this one. He knows a lot
about this kind of stuff.

To use subdomains you'll have to edit the hosts file of the the client.
The client is the computer you use to connect to the server, that means you
shouldn't touch the hosts file of the server.

Make sure you know the IP address and the hostname of your server.
Then open `/etc/hosts` and add the subdomains you would like to use.
In Windows the hosts file is located at `%SystemRoot%\system32\drivers\etc\`
and at `/private/etc/hosts` for Mac OS X.

Here's an example of my hosts file:

    #
    # /etc/hosts: static lookup table for host names
    #

    #<ip-address>   <hostname.domain.org>   <hostname>
    127.0.0.1               localhost.localdomain   localhost

    # Subdomains for isamu
    192.168.1.72    isamu
    192.168.1.72    php.isamu
    192.168.1.72    static.isamu

    # These are optional
    192.168.1.72    61924.isamu
    192.168.1.72    medorion.isamu
    192.168.1.72    shinobu.isamu
    192.168.1.72    imgbrowz0r.isamu
    192.168.1.72    fluxbb.isamu
    192.168.1.72    anime.isamu
    192.168.1.72    hg.isamu

    # This one is required
    192.168.1.72    phpmyadmin.isamu

    # End of file

You can decide by yourself which subdomains you want, but the **phpmyadmin**
subdomain is required, because we'll be configuring phpMyAdmin later in this
article. Just replace the IP address and `isamu` with the IP address and
hostname of your machine.

Restart your computer or reconnect to your network (`/etc/rc.d/network restart`)
after you have added the subdomains.


### Virtual hosts in Nginx

Go to your server (or use SSH) and go to `/srv/http/nginx`. Create a bunch of
directories for your subdomains and move the `index.html` and `50x.html` into
a directory called `default` (create it if it doesn't exist).

{% highlight console %}
$ mkdir php static 61924 medorion shinobu imgbrowz0r fluxbb anime hg
$ ls default/
50x.html  index.html
$ ls -F
61924/  anime/  default/  fluxbb/ hg/  imgbrowz0r/  medorion/  php/  shinobu/  static/
{% endhighlight %}

And now we will make the needed changes to the Nginx configuration file,
which is located at `/etc/nginx/nginx.conf`.

Here's a part of the configuration file:

{% highlight nginx %}
user  www www; # The user and group that Nginx uses (important)
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    sendfile           on;
    keepalive_timeout  65;
    gzip               on;

    # Default: isamu
    server {
        listen       80;
        server_name  isamu;

        root /srv/http/nginx/default;
        access_log  /var/log/nginx/isamu.access.log  main;
        autoindex on;

        location / {
            index  index.html;
        }

        # Redirect server error pages to the static page /50x.html
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root /srv/http/nginx/default;
        }
    }

    # static.isamu
    server {
        listen       80;
        server_name  static.isamu;

        root /srv/http/nginx/static;
        access_log  /var/log/nginx/static.isamu.access.log  main;
        autoindex on;

        location / {
            index  index.html;
        }

        # Redirect server error pages to the static page /50x.html
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root /srv/http/nginx/default;
        }
    }
}
{% endhighlight %}

I've only added one subdomain as you can see. You can just copy the server section
of `static.isamu` and change the `server_name`, `access_log` and `root` to
create all the other sections for the subdomains you want.

Here's an example:

{% highlight nginx %}
# php.isamu
server {
    listen       80;
    server_name  php.isamu;

    root /srv/http/nginx/php;
    access_log  /var/log/nginx/php.isamu.access.log  main;
    autoindex on;

    location / {
        index  index.html;
    }

    # Redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root /srv/http/nginx/default;
    }
}
{% endhighlight %}

Do this for all the subdomains you want and start (or restart) Nginx to test
your subdomains.

{% highlight console %}
$ /etc/rc.d/nginx start
:: Starting Nginx                                               [DONE]
{% endhighlight %}


## PHP

At the moment Nginx can only serve static content. So we'll use PHP to make
life a bit more exciting.

First we will add an init script which I got from the
[ArchWiki](http://wiki.archlinux.org/index.php/Nginx#Use_PHP.2FPython_with_nginx).
I've edited the script a bit, because there's a chance that we will need to run
more Fastcgi daemons.

Add the following init script to `/etc/rc.d` and call it `php-fastcgi`.

{% highlight bash %}
#!/bin/bash

. /etc/rc.conf
. /etc/rc.d/functions

case "$1" in
    start)
        stat_busy 'Starting PHP Fastcgi Server'
        if su www -c '/usr/bin/php-cgi -b 127.0.0.1:9000' &
        then
            add_daemon php-fastcgi
            stat_done
        else
            stat_fail       fi
        fi
        ;;
    stop)
        stat_busy 'Stopping PHP Fastcgi Server'
        [ -e /var/run/daemons/php-fastcgi ] && kill $(pidof php-cgi) &> /dev/null;
        if [ $? -gt 0 ]; then
            stat_fail
        else
            rm_daemon php-fastcgi
            stat_done
        fi
        ;;
   restart)
        $0 stop
        $0 start
        ;;
   *)
        echo "Usage: $0 {start|stop|restart}"
esac
{% endhighlight %}

Now open `/etc/nginx/nginx.conf` again and add the following in each server
block where you want to use PHP.

{% highlight nginx %}
# PHP
location ~ \.php$ {
    fastcgi_pass   127.0.0.1:9000;
    fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
    include        fastcgi_params;
}
{% endhighlight %}

Now you're able to start and use PHP, but I recommend that you read through
`/etc/php/php.ini` to configure certain settings (look for `display_errors`
and the extensions). The file contains alot of comments that will explain
everthing.

Now you can start PHP with the following command:

{% highlight console %}
$ /etc/rc.d/php-fastcgi start
:: Starting PHP Fastcgi Server                                  [DONE]
{% endhighlight %}

And you're done if you don't have any other PHP extensions to configure
(Xdebug, APC, Memcache).

I didn't bother to use PHP-FPM, because I would have to patch and build PHP
myself and that would take more time. Maybe another time. You can take a look
at [php-fpm.org](http://php-fpm.org/) if you want PHP-FPM instead of the
method I used.


## phpMyAdmin

phpMyAdmin will be used to manage all the MySQL databases.

Make sure the section for the phpMyAdmin subdomain looks like the following and
put it in `/etc/nginx/nginx.conf`.

{% highlight nginx %}
# phpmyadmin.isamu
server {
   listen       80;
    server_name  phpmyadmin.isamu;

    root /usr/share/webapps/phpMyAdmin;
    access_log  /var/log/nginx/phpmyadmin.isamu.access.log  main;
    autoindex on;

    location / {
        index  index.php index.html index.htm;
    }

    # PHP
    location ~ \.php$ {
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }

    # Redirect server error pages to the static page /50x.html
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root /srv/http/nginx/default;
    }

    location ~ /\.ht {
        deny  all;
    }
}
{% endhighlight %}

Then open `/etc/php/php.ini` and add `:/usr/share/webapps/:/etc/webapps` to
`open_basedir` so it will look like:

{% highlight ini %}
open_basedir = /srv/http/:/home/:/tmp/:/usr/share/pear/:/usr/share/webapps/:/etc/webapps
{% endhighlight %}

After you've done that open `/etc/webapps/phpmyadmin/config.inc.php` and
configure everything. There are helpful comments everywhere so you shouldn't
have any problems.

{% highlight console %}
$ /etc/rc.d/nginx restart && /etc/rc.d/php-fastcgi restart
:: Checking configuration                                       [BUSY]
the configuration file /etc/nginx/nginx.conf syntax is ok
configuration file /etc/nginx/nginx.conf test is successful
                                                                [DONE]
:: Stopping Nginx                                               [DONE]
:: Starting Nginx                                               [DONE]
:: Stopping PHP Fastcgi Server                                  [DONE]
:: Starting PHP Fastcgi Server                                  [DONE]
{% endhighlight %}

More information about phpMyAdmin can be found at:

 - [phpMyAdmin](http://www.phpmyadmin.net/)
 - [phpMyAdmin at ArchWiki](http://wiki.archlinux.org/index.php/Phpmyadmin)
 - [phpMyAdmin Arch Linux package](http://www.archlinux.org/packages/community/any/phpmyadmin/)
 - [PKGBUILD](http://repos.archlinux.org/wsvn/community/phpmyadmin/repos/community-any/)


## Daemons

To let MySQL, Nginx and PHP startup when your server starts up you can add
`mysqld`, `nginx` and `php-fastcgi` to the daemons list in `/etc/rc.conf`.

{% highlight bash %}
DAEMONS=(syslog-ng network netfs crond sshd postgresql mysqld nginx php-fastcgi)
{% endhighlight %}

This is optional, but makes things a bit easier.


## That's it

Yup. I also wanted to include PostgreSQL and phpPgAdmin in this article, but
for some reason PostgreSQL doesn't work. Maybe I'll add that later after I get
it working.

If you have questions, suggestions or just want to say something, feel free to
send me a [mail](/about.html).
