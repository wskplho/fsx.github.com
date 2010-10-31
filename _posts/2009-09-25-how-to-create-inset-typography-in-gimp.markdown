---
layout: post
title: How to Create Inset Typography in Gimp
author: Frank
date: 2009-09-25 00:50:50 +0200
categories: [Gimp, Typography, How-to]
---

<ul class="green-list">
    <li><strong>Update September 27th, 2009:</strong> This tutorial is now also available at the
    <a href="http://www.gimptalk.com/forum/how-to-create-inset-typography-in-gimp-t44501.html">Gimptalk forum</a>.</li>
</ul>

I found a tutorial for this effect on Sixrevisions for Photoshop. And because
it was a beginners level tutorial -- it wouldn't be too hard to "port" it to
Gimp.

So the credits go to the guy who wrote the tutorial on Sixrevisions.

**Notes:**

 * I'm using the development version of Gimp (2.7) so some things can look a bit different.
 * *Select > Invert* means that you have to go the the *Select* menu and click *Invert*.
 * Original tutorial: [How to Create Inset Typography in Photoshop](http://sixrevisions.com/tutorials/photoshop-tutorials/how-to-create-inset-typography-in-photoshop/)


## Step 1

Make a new image and draw a linear gradient (color codes: *#016edf*, *#024f80*).

<a href="{{ site.cdn }}/img/gimp/gimp_inset_type-step1.png" class="jsimgbox">
  <img src="{{ site.cdn }}/img/gimp/t_gimp_inset_type-step1.png" alt="" />
</a>
*(Click for larger version)*


## Step 2

Make a new text layer and put this in the center of the canvas. It's best to
use a big or bold font.

Then make three new layers called: 'Text highlight', 'Text inner-shadow' and
'Text background'.

<a href="{{ site.cdn }}/img/gimp/gimp_inset_type-step2.png" class="jsimgbox">
  <img src="{{ site.cdn }}/img/gimp/t_gimp_inset_type-step2.png" alt="" />
</a>
*(Click for larger version)*


## Step 3

Now select the text layer and do **Text to selection**. Then select the
**Text background** layer and fill the background with a gradient, a darker
one than the background.

Don't delete/undo the selection. We need it for the next step. :)

<a href="{{ site.cdn }}/img/gimp/gimp_inset_type-step3.png" class="jsimgbox">
  <img src="{{ site.cdn }}/img/gimp/t_gimp_inset_type-step3.png" alt="" />
</a>
*(Click for larger version)*


## Step 4

Select **Text highlight**, make the selection one pixel smaller (with *Select > Shrink*)
and invert the selection with *Ctrl+i* or *Select > Invert*. Now fill the
**Text highlight** layer with a white color.

After you've done that you invert the selection again, make it one pixel bigger
(with *Select > Grow*), invert the selection again and press delete or *Edit > Clear*.

You can clear the selection with *Select > None* or *Ctrl+Shift+A*.

You'll get something like you see in the following image. We don't use
*Select > Border*, because it won't look that good.

<a href="{{ site.cdn }}/img/gimp/gimp_inset_type-step4.png" class="jsimgbox">
  <img src="{{ site.cdn }}/img/gimp/t_gimp_inset_type-step4.png" alt="" />
</a>
*(Click for larger version)*


## Step 5

Select the text layer again and do **Text to selection**. Now select the
**Text inner-shadow** layer, make the selection two pixels smaller, invert it
and fill it with a black color.

Now invert the selection again, make it 2 pixels bigger, invert it again and
press delete or *Edit > Clear*. You should have a black border now that's
behind the white border.

<a href="{{ site.cdn }}/img/gimp/gimp_inset_type-step5-1.png" class="jsimgbox">
  <img src="{{ site.cdn }}/img/gimp/t_gimp_inset_type-step5-1.png" alt="" />
</a>
*(Click for larger version)*

Invert the selection again (yes... again...), open the Gaussian Blur dialog
(*Filters > Blur > Gaussian Blur*) and apply the settings you see in the
following image.

<a href="{{ site.cdn }}/img/gimp/gimp_inset_type-step5-2.png" class="jsimgbox">
  <img src="{{ site.cdn }}/img/gimp/t_gimp_inset_type-step5-2.png" alt="" />
</a>
*(Click for larger version)*

You can clear the selection now.


## Step 6

Select the **Text highlight** layer and apply Gaussian Blur on it with the blur
radius set to one. Then move the layer below the **Text background** layer and
move it one pixel the the right and one pixel to the bottom.

<a href="{{ site.cdn }}/img/gimp/gimp_inset_type-step6-1.png" class="jsimgbox">
  <img src="{{ site.cdn }}/img/gimp/t_gimp_inset_type-step6-1.png" alt="" />
</a>
*(Click for larger version)*

Select the **Text inner-shadow** layer and move it one pixel the the right and
one pixel to the bottom.

Now select the text layer again and do **Text to selection**, select the the
**Text inner-shadow** layer again, invert the selection and press delete or
*Edit > Clear*.

<a href="{{ site.cdn }}/img/gimp/gimp_inset_type-step6-2.png" class="jsimgbox">
  <img src="{{ site.cdn }}/img/gimp/t_gimp_inset_type-step6-2.png" alt="" />
</a>
*(Click for larger version)*


### Step 7

Now we have to fine-tune it to make it look good. You can copy some layer,
adjust the opacity settings, add some highlights or patterns (hint: layer masks
are useful for this).

<a href="{{ site.cdn }}/img/gimp/gimp_inset_type-step7-1.png" class="jsimgbox">
  <img src="{{ site.cdn }}/img/gimp/t_gimp_inset_type-step7-1.png" alt="" />
</a>
*(Click for larger version)*

<a href="{{ site.cdn }}/img/gimp/gimp_inset_type-step7-2.png" class="jsimgbox">
 <img src="{{ site.cdn }}/img/gimp/t_gimp_inset_type-step7-2.png" alt="" />
</a>
*(Click for larger version)*
