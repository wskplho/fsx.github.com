/* ---

  Jsimgbox, really simple Lightbox clone.
  Version 2.0.1, April 25th, 2010
  http://61924.nl/projects/jsimgbox.html

  Copyright (c) 2010 Frank Smit
  License: http://www.gzip.org/zlib/zlib_license.html

  This software is provided 'as-is', without any express or implied
  warranty. In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.

  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.

  3. This notice may not be removed or altered from any source
     distribution.

--- */

// For some stupid reason IE still doesn't support this function
// Thanks: http://www.netlobo.com/javascript_getelementsbyclassname.html
if (!document.getElementsByClassName) {
  // alert('FU!');
  document.getElementsByClassName = function(m_classname) {
    var m = []; // Matched elements
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].className.indexOf(' ') >= 0) {
        var classes = elements[i].className.split(' ');
        for (var j = 0;j < classes.length; j++) {
          if (classes[j] == m_classname)
            m.push(elements[i]);
        }
      }
      else if (elements[i].className == m_classname)
        m.push(elements[i]);
    }
    return m;
  }
}

var Jsimgbox = {

  // Shotcuts
  html: document.documentElement, // The HTML element
  body: document.getElementsByTagName('body')[0], // The BODY element

  // Create elements
  overlay: document.createElement('div'),
  box: document.createElement('div'), // The box that holds the loading text and image
  text: document.createElement('span'),
  image: new Image(),

  // Insert elements and attach events
  init: function(classname) {
    // Insert the elements at the right place and set the IDs and text/
    this.overlay.id = 'js2-overlay'; this.box.id = 'js2-box';
    this.body.appendChild(this.overlay); this.overlay.appendChild(this.box);
    this.box.appendChild(this.image); this.box.appendChild(this.text);
    this.text.innerHTML = 'Loading...';
    this.image.title = 'Click on image to close';

    this.scan(classname);

    this.box.onclick = function () {
      Jsimgbox.hide();
    };
  },

  // Set the functions for the onclick event
  scan: function(classname) {
    var a = document.getElementsByClassName(classname);
    for (var i=0; i < a.length; i++) {
      a[i].onclick = function () {
        Jsimgbox.show(this); return false;
      };
    }
  },

  // Display and set the position of the overlay and image box and load the image
  show: function(obj)  {
    // Display and set height and position
    this.overlay.style.cssText = 'display: block;min-height: ' + Math.max(this.html.offsetHeight, this.html.scrollHeight) + 'px;';
    this.box.style.cssText = 'margin: ' + (this.html.scrollTop || this.body.scrollTop) + 'px auto 0;';

    // Load image
    this.image.src = obj.href;
    if (this.image.complete) {
      Jsimgbox.text.style.display = 'none'; Jsimgbox.image.style.display = 'block';
    }
    this.image.onload = function() {
      Jsimgbox.text.style.display = 'none'; Jsimgbox.image.style.display = 'block';
    };
  },

  // Hide the overlay and image and make the loading message visible
  hide: function() {
    this.overlay.style.display = 'none';
    this.image.style.display = 'none'; this.image.src = '';
    this.text.style.display = 'inline';
  }
};
