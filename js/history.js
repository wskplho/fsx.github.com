(function($){
  var methods = {
    init : function(options) {
      var self = this;
      self.settings = {
        'content-id' : '#content',
        'animation': {opacity: 1},
        'duration': 200,
        'callback' : null
      };
      if (options) {
        $.extend(self.settings, options);
      }

      self.body = $('body');
      self.title = $('title')
      self.content = $(self.settings['content-id']);

      // Check if a url is an internal url
      $.expr[':'].internal = function(obj, index, meta, stack) {
        return ($(obj).attr('href') || '').substring(0,1) == '/';
      };

      self.update(self.body);

      // This event is fired when a user clicks on an internal link
      $(window).bind('statechanged', function(event, url) {
        self.hide(function() {
          self.get(url, function() {
            self.show();
          });
        });
      });

      // This event is fired when a user enters the page and when the back button is clicked
      $(window).bind('popstate', function(event) {
        if (event.originalEvent.state) {
          var url = event.originalEvent.state.url;
          self.hide(function() {
            self.get(url, function() {
              self.show();
            });
          });
        }
      });
    },

    // Get the request page and update the content area
    get: function(url, callback) {
      var self = this;
      $.ajax({
        url: url,
        success: function(data) {
          methods.title.text(data.match(/<title>(.*?)<\/title>/)[1]);
          methods.content.html($(self.settings['content-id'], data).html());
          methods.update(methods.content);
          if (typeof self.settings['callback'] == 'function') {
            self.settings['callback']();
          }
          if (callback) {
            callback();
          }
      }});
    },

    // Show the content area
    show: function(callback) {
      $(this.settings['content-id']).animate(
        this.settings['animation'][1],
        this.settings['duration'],
        callback
      );
    },

    // Hide the content area
    hide: function(callback) {
      $(this.settings['content-id']).animate(
        this.settings['animation'][0],
        this.settings['duration'],
        callback
      );
    },

    // Add an event to all internal links
    update: function(element) {
      element.find('a:internal').click(function(event) {
        var $this = $(this)
          , url = $this.attr('href')
          , title = $this.attr('title') || null;

        if (event.which == 2 || event.metaKey) {
          return true;
        }

        window.history.pushState({url: url}, title, url);
        $this.trigger('statechanged', url);

        event.preventDefault();
        return false;
      });
    }
  };

  $.ajaxify = function(options) {
    if (window.history && window.history.pushState) {
      methods.init(options);
    }
  };
})(jQuery);
