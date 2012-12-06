(function() {
  var $bg = $('#bg'),
      $win = $(window),
      available = [800, 1024, 1366, 1920, 3906];

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  function viewport() {
    return {
      width: $win.width(),
      height: $win.height()
    }
  }

  function getCurrent() {
    return $bg.attr('src').match(/([0-9]+)/) ? RegExp.$1 : null;
  }

  function setBg() {
    var vd = viewport();
    for (var i=0; i<available.length; i++) {
      if (available[i] >= vd.width) {
        chosen = available[i];
        break;
      }
    }
    $bg.attr('src', '/' + chosen + '.png');

    // Determine whether width or height should be 100%
    if ((vd.width / vd.height) < ($bg.width() / $bg.height())) {
      $bg.css({height: '100%', width: 'auto'});
    } else {
      $bg.css({width: '100%', height: 'auto'});
    }
  }

  $win.on('resize', function() {
    delay(function() {
      setBg();
    }, 100);
  });

  setBg();
})(Zepto);
