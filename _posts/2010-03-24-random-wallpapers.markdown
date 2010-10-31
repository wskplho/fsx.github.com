---
layout: post
title: Random wallpapers
author: Frank
date: 2010-03-24 20:45:00 +0200
categories: [Dash, Bash, Wallpapers, Random]
---

A simple bash/dash script for setting a random wallpaper (at startup).

I initially made something with Python, but [someone pointed out][1] that it
could be done much easier. After modifying it a bit, the following was the
result:

`set_random_wp`

{% highlight bash %}
#!/bin/dash

if [ ! -f ~/.wpdb ]
then
    update_wpdb
fi

feh --bg-center "$(cat ~/.wpdb | shuf -n1)"
{% endhighlight %}

`update_wpdb`

{% highlight bash %}
#!/bin/dash
find /home/frank/Images/Wallpapers -type f > ~/.wpdb
{% endhighlight %}

**Note:** Replace `#!/bin/dash` with `#!/bin/bash` or `#!/bin/sh` if you don't
have or don't want to use [dash][2].

Put the above two scripts in `/usr/bin` or in an other directory from `$PATH`.
And put the following code in `.xinitrc` (above the `exec <window manager>`
line) or in an other startup script.

{% highlight bash %}
while :; do
    set_random_wp
    sleep 20m
done &
{% endhighlight %}

It'll set a random wallpaper each 20 minutes.


 [1]: http://bbs.archlinux.org/viewtopic.php?pid=713894#p713894
 [2]: http://en.wikipedia.org/wiki/Debian_Almquist_shell
