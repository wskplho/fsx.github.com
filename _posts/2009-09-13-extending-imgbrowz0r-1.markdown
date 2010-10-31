---
layout: post
title: Extending ImgBrowz0r
author: Frank
date: 2009-09-13 15:50:50 +0200
categories: [ImgBrowz0r, PHP, How-to]
---

Adding titles and descriptions for images and directories. This might be useful
for people who use ImgBrowz0r for their portfolio and not for an image dump.

A user <del>on the forum (Pat)</del> already
made a similar mod, which uses an XML file. I'm going to use a normal PHP array
to store all the information, which is faster and you can easily attach a
database on it.

**Note:** This article/guide has been made with ImgBrowz0r 0.3.4. I can't
guarantee it works with older version of ImgBrowz0r.


## Installation

Below you can find a step-by-step guide on how to install this mod. And below
that you can find some usage examples and screenshots.

----

Change the following part of your CSS from:

{% highlight css %}
#imgbrowz0r .img-directory span.img-dir-name,
#imgbrowz0r .img-directory span.img-thumb-date { display: block }
#imgbrowz0r .img-directory span.img-dir-name { font-weight: bold;font-size: 1.2em }

#imgbrowz0r .img-column-1 { clear: left }

#imgbrowz0r .img-thumbnail,
#imgbrowz0r .img-directory { float: left;padding: 1.5em 0;width: 25%;text-align: center }
{% endhighlight %}

To:

{% highlight css %}
#imgbrowz0r span.img-dir-name, #imgbrowz0r span.img-name,
#imgbrowz0r span.img-thumb-desc { display: block }
#imgbrowz0r span.img-dir-name,
#imgbrowz0r span.img-name { font-weight: bold;font-size: 1.2em;word-wrap: break-word }

#imgbrowz0r .img-thumbnail,
#imgbrowz0r .img-directory { float: left;margin-left: 2.6%;padding: 1.5em 0;width: 23%;text-align: center }

#imgbrowz0r .img-column-1 { clear: left;margin-left: 0 }
{% endhighlight %}

This will create some space between the thumbnails.

----

Open imgbrowz0r.php and replace the following code at line 37:

{% highlight php startinline %}
protected $config, $cur_directory, $cur_page, $files, $page_count,
{% endhighlight %}

With:

{% highlight php startinline %}
protected $config, $cur_directory, $cur_page, $files, $page_count, $info=array(),
{% endhighlight %}

----

Replace the following code on line 180:

{% highlight php startinline %}
public function init()
{% endhighlight %}

With:

{% highlight php startinline %}
public function init($info=array())
{% endhighlight %}

The `init()` function now accepts an optional parameter. We will use this to
pass the titles/descriptions of all the directories/images to ImgBrowz0r.

----

Add the following code on line 173:

{% highlight php startinline %}
$this->info = $info;
{% endhighlight %}

After:

{% highlight php startinline %}
$this->count_files = count($this->files);
{% endhighlight %}

----

Replace the following code that starts at line ~197 and ends at line ~235:

{% highlight php startinline %}
if ($file[0] === 1)
{
    $image_cache_dir = md5($this->cur_directory);
    $image_thumbnail = $image_cache_dir.'/'.$file[3].'_'.$file[1]; // The name of the thumbnail

    if (!is_dir($this->config['cache_dir'].'/'.$image_cache_dir))
        mkdir($this->config['cache_dir'].'/'.$image_cache_dir, 0777);

    if (!file_exists($this->config['cache_dir'].'/'.$image_thumbnail))
        $this->make_thumb($this->cur_directory, $file[1], $image_thumbnail);

    echo "\t\t", '<div class="img-thumbnail img-column-', $row_count, '"><a href="', $this->config['images_url'],
         '/', $this->cur_directory, $file[1], '" style="background-image: url(\'', $this->config['cache_url'], '/', $image_thumbnail, '\')" title="', $file[1],
         '">&nbsp;</a><span>', $this->format_time($file[3]),
         '</span></div>', "\n";
}
else
{
    if ($this->config['dir_thumbs'] === true)
    {
        $dir_hash = md5($this->cur_directory.$file[1].'/');
        $dir_thumbs = $this->read_cache($dir_hash, $this->cur_directory.$file[1].'/');

        $dir_thumbnail = isset($dir_thumbs[0]) ? ' style="background-image: url(\''.$this->config['cache_url'].'/'.
                         $dir_hash.'/'.$dir_thumbs[($this->config['random_thumbs'] === false ? 0 : mt_rand(0, count($dir_thumbs)-1))].'\')"' : null;

        echo "\t\t", '<div class="img-directory img-column-', $row_count, '"><a href="',
             str_replace('%PATH%',  $this->cur_directory.$file[1].'/1', $this->config['main_url']), '"',
             $dir_thumbnail, ' title="', $file[1], '">&nbsp;</a><span class="img-dir-name">', $file[1],
             '</span><span class="img-thumb-date">', $this->format_time($file[3]), '</span></div>', "\n";
    }
    else
    {
        echo "\t\t", '<div class="img-directory img-column-', $row_count, '"><a href="',
             str_replace('%PATH%',  $this->cur_directory.$file[1].'/1', $this->config['main_url']),
             '" title="', $file[1], '"><span>', $file[1], '</span></a><span>', $this->format_time($file[3]),
             '</span></div>', "\n";
    }
}
{% endhighlight %}

With:

{% highlight php startinline %}
$key = $this->cur_directory.$file[1];
if (isset($this->info[$key]))
{
    $title = $this->info[$key]['title'];

    if (isset($this->info[$key]['desc']))
        $desc = $this->info[$key]['desc'];
    else
        $desc = $this->format_time($file[3]);
}
else
{
    $title = $file[1];
    $desc = $this->format_time($file[3]);
}

if ($file[0] === 1)
{
    $image_cache_dir = md5($this->cur_directory);
    $image_thumbnail = $image_cache_dir.'/'.$file[3].'_'.$file[1]; // The name of the thumbnail

    if (!is_dir($this->config['cache_dir'].'/'.$image_cache_dir))
        mkdir($this->config['cache_dir'].'/'.$image_cache_dir, 0777);

    if (!file_exists($this->config['cache_dir'].'/'.$image_thumbnail))
        $this->make_thumb($this->cur_directory, $file[1], $image_thumbnail);

    echo "\t\t", '<div class="img-thumbnail img-column-', $row_count, '"><a href="', $this->config['images_url'],
         '/', $this->cur_directory, $file[1], '" style="background-image: url(\'', $this->config['cache_url'], '/', $image_thumbnail, '\')" title="', $file[1],
         '">&nbsp;</a><span class="img-name">', $title, '</span><span class="img-thumb-desc">', $desc, '</span></div>', "\n";
}
else
{
    if ($this->config['dir_thumbs'] === true)
    {
        $dir_hash = md5($this->cur_directory.$file[1].'/');
        $dir_thumbs = $this->read_cache($dir_hash, $this->cur_directory.$file[1].'/');

        $dir_thumbnail = isset($dir_thumbs[0]) ? ' style="background-image: url(\''.$this->config['cache_url'].'/'.
                         $dir_hash.'/'.$dir_thumbs[($this->config['random_thumbs'] === false ? 0 : mt_rand(0, count($dir_thumbs)-1))].'\')"' : null;

        echo "\t\t", '<div class="img-directory img-column-', $row_count, '"><a href="',
             str_replace('%PATH%',  $this->cur_directory.$file[1].'/1', $this->config['main_url']), '"',
             $dir_thumbnail, ' title="', $title, '">&nbsp;</a><span class="img-dir-name">', $title,
             '</span><span class="img-thumb-desc">', $desc, '</span></div>', "\n";
    }
    else
    {
        echo "\t\t", '<div class="img-directory img-column-', $row_count, '"><a href="',
             str_replace('%PATH%',  $this->cur_directory.$file[1].'/1', $this->config['main_url']),
             '" title="', $title, '"><span>', $title, '</span></a><span class="img-thumb-desc">', $desc,
             '</span></div>', "\n";
    }
}
{% endhighlight %}

This adds the code that checks if the image or directory has a title or
description. It also changes some CSS classes and adds a title to the image
thumbnails.

----

Replace the following code at line 288:

{% highlight php startinline %}
if (isset($path_parts[0]))
    foreach ($path_parts as $k => $part)
        $output[] = '<a href="'.str_replace('%PATH%',  implode('/', array_slice($path_parts, 0, ($k+1))).'/1' , $this->config['main_url']).'">'.$part.'</a>';

return '<div class="img-breadcrumbs"><span>Breadcrumbs: </span><a href="'.str_replace('%PATH%',  '0/1', $this->config['main_url']).'">Root</a>'.
       (isset($output) ? ' / '.implode(' / ', $output) : null).'</div>';
{% endhighlight %}

With:

{% highlight php startinline %}
if (isset($path_parts[0]))
{
    foreach ($path_parts as $k => $part)
    {
        $key = implode('/', array_slice($path_parts, 0, ($k+1)));
        if (isset($this->info[$key]))
            $title = $this->info[$key]['title'];
        else
            $title = $part;

        $output[] = '<a href="'.str_replace('%PATH%',  $key.'/1' , $this->config['main_url']).'">'.$title.'</a>';
    }
}

return '<div class="img-breadcrumbs"><span>Breadcrumbs: </span><a href="'.str_replace('%PATH%',  '0/1', $this->config['main_url']).'">'.
       (isset($this->info['/']) ? $this->info['/']['title'] : 'Root').'</a>'.
       (isset($output) ? ' / '.implode(' / ', $output) : null).'</div>';
{% endhighlight %}

This code shows the correct title in the breadcrumbs.

----

Replace the following code on line 335:

{% highlight php startinline %}
// Display description of the current directory
// Html tags are stripped from the description except the following tags:
// <p>, <strong>, <em>, <a>, <br />, <h1>, <h2> and <h3>
public function description()
{
    if (file_exists($this->full_path.'.desc'))
        return '<div class="img-description">'.
        strip_tags(file_get_contents($this->full_path.'.desc'), '<p><strong><em><a><br><h1><h2><h3>').
        '</div>';
}
{% endhighlight %}

With:

{% highlight php startinline %}
// Returns a description of the current directory
public function description()
{
    $key = trim($this->cur_directory, '/');

    if (empty($key))
        $key = '/';

    if (isset($this->info[$key]))
        $desc = $this->info[$key]['desc'];
    else
        $desc = null;

    return $desc;
}
{% endhighlight %}

We replace the orginal description function with a new one that uses our $info
variable to show a description. So there's no need for those `.desc` files
anymore.

----

Add the following code after the description function you just replaced:

{% highlight php startinline %}
// Returns the current category name
public function current_category()
{
    $key = trim($this->cur_directory, '/');

    if (empty($key))
        $key = '/';

    if (isset($this->info[$key]))
        $title = $this->info[$key]['title'];
    else
        $title = $key != '/' ? basename($key) : 'Root';

    return $title;
}
{% endhighlight %}

And you're done.

## Usage examples and screenshots

To make use of the new feature you just installed you just have to make a variable
that contains an array with the right information and add it to `$gallery->init()`
as an argument. Like this:

{% highlight php startinline %}
[ ... code ... ]

$info = array(

    // A slash represents the root
    '/' => array(
        'title' => 'Index',
        'desc' => 'This is a gallery with various images.'),

    'BigTest' => array(
        'title' => 'Big image test',
        'desc' => 'Some big images that are used to test if ImgBrowz0r can resize big images properly.'),

    'Test2' => array(
        'title' => 'Test 2',
        'desc' => 'This directory has no images.')
    );

$gallery->init($info);

[ ... code ... ]

// This is used to display the title and/or description of the current directory
echo '<h1>', $gallery->current_category(), '</h1>';
echo '<p>', $gallery->description(), '</p>';

[ ... code ... ]
{% endhighlight %}

And the result will be something like this.

<a class="jsimgbox" href="{{ site.cdn }}/img/extending_imgbrowz0r_01.png">
  <img src="{{ site.cdn }}/img/tn_extending_imgbrowz0r_01.png" alt="" />
</a>
*(Click for larger image)*

You can use `$gallery->current_category()` and `$gallery->description()` to
display the title and/or description of the current directory.

Here's another example:

{% highlight php startinline %}
$info = array(

    'Characters' => array(
        'title' => 'Characters',
        'desc' => 'A list of characters from various animes.'),

    'Characters/72552.jpg' => array(
        'title' => 'Guts',
        'desc' => 'Guts (ガッツ, Gattsu) is a fictional character of the anime and manga franchise Berserk by mangaka Kentaro Miura. He is the main protagonist of the story.'),

    'Characters/194495.jpg' => array(
        'title' => 'Porco',
        'desc' => 'An Italian World War I fighter ace, now living as a freelance bounty hunter chasing "air pirates" in the Adriatic Sea. The man has been cursed, and has been transformed into a pig.'),

    'Characters/177250.jpg' => array(
        'title' => 'Ippo Makunouchi',
        'desc' => 'Ippo is a classic in-fighter and is well known for his Peek-a-Boo style of boxing and hard punches including three signature punches: a rib-cracking Liver blow, Gazelle punch (an uppercut variant), and the Dempsey roll technique.'),

    'Characters/174552.jpg' => array(
        'title' => 'Yoko Littner',
        'desc' => 'Yoko is a girl from Jeeha\'s neighboring village Ritona, who had been chasing the Gunmen which entered Jeeha village. She wields an extensive range of firearms which include a long range sniper rifle.'),

    [ ... code ... ]

    );
{% endhighlight %}

And the output is something like this:

<a class="jsimgbox" href="{{ site.cdn }}/img/extending_imgbrowz0r_02.png">
  <img src="{{ site.cdn }}/img/tn_extending_imgbrowz0r_02.png" alt="" />
</a>
*(Click for larger image)*

The same thing can be done for all directories and images at all levels of
nesting. It's really easy. :)
