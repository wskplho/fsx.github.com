---
layout: post
title: Extending PHP Software
author: Frank
date: 2010-05-13 22:58:00 +0200
categories: [PHP, FluxBB]
---

A while ago an idea popped into my head while thinking about Fluxbb 2.0. The
current Fluxbb (1.2/1.4) don't have an extension system and requires the core
code to be edited when you install a modification.

Modified core code causes more work when the forum owner needs to upgrade to a
newer version of Fluxbb and it's not easy to keep track of the changes in the
code (maybe a VCS could help with this).

Fluxbb 1.3 did have an extension system which made it possible to install,
upgrade and remove extensions. But this version was dropped by the developers,
because they were not happy with the extension system.

It's (almost) certain that Fluxbb 2.0 is going to have an extension system. So
I thought about one that could be used, but I don't know if it's practical to
use. At the moment, it's just food for discussion.


## My idea is ...

... to use a script/application, lets call it the *Extension Manager*, that
merges the extension code right into the core code (basically a code generator).
This script should also take care of extension updates and core updates. With
such a system, there's no need for an extension system that loads all the
extensions at runtime.

I hear you thinking "doesn't take make it less easy to install/remove
extensions? And what about developing extensions?"  Well, yes, but only a bit.
Let me explain it.

In the source code of the project (in this case Fluxbb) there are markers/hooks.
These are PHP comments formatted in a certain way. The extension manager scans
the source code for these markers and will know all the points where code can
be inserted.

Here's an example of a marker (`seb` = start extension block, `eeb` = end
extension block):

{% highlight php startinline %}
# seb: extension_block_id_or_name
# eeb: extension_block_id_or_name
{% endhighlight %}

The extension code will be inserted between these two comments and the
extension code will also have its own markers so the extension manager can
identify all the extensions, which makes it possible to update extentions.

Here's an example of code inserted into an extension block:

{% highlight php startinline %}
# seb: extension_block_id_or_name
# start_extension: foreach_loop
$numbers = array(1, 2, 3, 4, 5);
foreach ($numbers as $n)
{
    echo $n;
}
# end_extension: foreach_loop
# eeb: extension_block_id_or_name
{% endhighlight %}

The extension manager will be able to scan the source code and extension blocks
and identify all the installed extensions. This makes it possible to update
extensions by replacing certain code blocks.

Developing extensions will be fairly simple. The idea is that extensions are
written in a vanilla installation (no extensions installed). Extension code can
be added between the markers. Once the extension is done, one can use the
extension manager to extract the extension code into a single file, which can
be used to distrobute the extension.

The disadvantage of this method is that it isn't possible to install/remove
extensions with one click on the button. You'll first have to (un)select the
extensions in the extension manager and regenerate the code. But how often do
you do that? Only when you prepare your forum for production use and maybe to
try a new extension once in a while.

That's it. Feel free to comment.
