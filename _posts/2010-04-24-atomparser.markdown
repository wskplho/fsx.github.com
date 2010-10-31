---
layout: post
title: AtomParser
author: Frank
date: 2010-04-24 15:33:00 +0200
categories: [PHP, XML, Atom]
---

Someone needed a way to parse Atom feeds, since SimplePie was spitting out
errors in PHP 5.3. So I offered to write a small library to parse Atom feeds
(it should work with other XML stuff too).

It's a really simple PHP class that takes in a filepath (or URL) and gives you
an array back. And it also caches the result if you want that. The code can be
downloaded from [Gist 377548][1].

Here's an usage example:

{% highlight php startinline %}
try
{
    $p = new AtomParser('fluxbb.atom');

    print_r($p->parse());
}
catch (AtomParserException $e)
{
    echo $e->getMessage(), "\n\n";

    print_r($e->get_libxml_errors());
}
{% endhighlight %}

Now, let's make it a bit more exciting by combining multiple feeds. First choose
some Atom feeds, put then in an array and parse them.

{% highlight php startinline %}
error_reporting(E_ALL);
header('Content-Type: text/plain; charset=utf-8');

require 'atomparser.php';

$feedsurls = array(
    'fluxbb-news' => 'http://fluxbb.org/forums/feed/atom/forum/1/posted/',
    'fluxbb-dev' => 'http://gitorious.org/fluxbb.atom',
    'fluxbb-discussion' => 'http://fluxbb.org/forums/feed/atom/forum/14/last_post/'
    );

// Fetch and parse all the feeds
$feeds = array();
foreach($feedsurls as $n => $u)
{
    $tmp = new AtomParser($u);
    $feeds[$n] = $tmp->parse();
}
unset($tmp);
{% endhighlight %}

After that we've got to merge the entries from all the feeds and change the
date in the *updated* tag into a timestamp to make the sorting of all the
entries easier.

{% highlight php startinline %}
$entries = array();
foreach ($feeds as $n => $f)
{
    foreach ($f['entry'] as $index => $entry)
    {
        $f['entry'][$index]['website'] = $n;
        $f['entry'][$index]['updated'] = strtotime($entry['updated']);
    }

    $entries = array_merge($entries, $f['entry']);
}
{% endhighlight %}

The sorting of the entries with PHP's [multisort][3].

{% highlight php startinline %}
foreach($entries as $res) $sort_entries[] = $res['updated'];
array_multisort($sort_entries, SORT_NUMERIC | SORT_DESC, $entries);
{% endhighlight %}

And display some data.

{% highlight php startinline %}
foreach ($entries as $e)
{
    echo 'Website: ', $e['website'], "\n";
    echo 'Title: ', $e['title'], "\n";
    echo 'Date: ', date('jS, F Y - H:i:s', $e['updated']), "\n\n";
}
{% endhighlight %}

The code of this example can be found at [Gist 378363][2]. Feel free to use it
in any way you want. For example: combine all your social media Atom feeds and
display them on your website.


 [1]: http://gist.github.com/377548
 [2]: http://gist.github.com/378363
 [3]: http://php.net/manual/en/function.array-multisort.php
