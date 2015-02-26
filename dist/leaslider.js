(function($, window, document) {
  var Plugin, defaults, pluginName;
  pluginName = "leaslider";
  defaults = {
    debug: true
  };
  Plugin = (function() {
    function Plugin(element, options) {
      this.element = element;
      this.settings = $.extend({}, defaults, options);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
    }

    Plugin.prototype.init = function() {
      this.debug("starting....");
      return $("#element").append('<div id="ls_wrapper"><div class="img_holder"><div style="width:20px; height:20px; background-color:red;"></div></div>');
    };

    Plugin.prototype.yourOtherFunction = function() {};

    Plugin.prototype.debug = function(message) {
      return console.info("[LS] DEBUG # " + message);
    };

    return Plugin;

  })();
  return $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);
