# A simple slider with some cool 
# functions for your website
# @author Flavio Kleiber
# @copyright Flavio Kleiber, Gentleman Informatik

do ($ = jQuery, window, document) ->

	pluginName = "leaslider"
	defaults =
		debug: true

	# The actual plugin constructor
	class Plugin
		constructor: (@element, options) ->

			@settings = $.extend {}, defaults, options
			@_defaults = defaults
			@_name = pluginName
			@init()

		init: ->
			@debug("starting....")
			$("#element").append('<div id="ls_wrapper"><div class="img_holder"><div style="width:20px; height:20px; background-color:red;"></div></div>')

		yourOtherFunction: ->
			# some logic

		debug: (message) ->
			console.info("[LS] DEBUG # "+message)


	$.fn[pluginName] = (options) ->
		@each ->
			unless $.data @, "plugin_#{pluginName}"
				$.data @, "plugin_#{pluginName}", new Plugin @, options