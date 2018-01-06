/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/menu/popup/load.html"], 
function($, _, Utils, page) {
	'use strict';

	return function(parent, Textes) {
		this.init = function(parent, Textes) {
			this.el = "#load-popup";
			this.parent = parent;
			this.Textes = Textes;
			this.render();
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			
			var saveExist = window.localStorage.getItem(Utils.name) != undefined;
			
			var templateData = {
					text : this.Textes,
					saveExist : saveExist
			};
			$(this.el).html(template(templateData));
			
			this.makeEvents();
		};
		
		this.makeEvents = function() {
			var that = this;
			$(this.el).find(".close-button").click(function() {
				$(that.el).hide("slow");
			});
			$(this.el).find("#loadSave").click(function() {
				that.parent.loadGame();
			});
			$(this.el).find("#loadCode").click(function() {
				var code = $("#code").val();
				if (!code) return that.error();
				try {
					var save = JSON.parse(Utils.decode(code));
				} catch(e) {
					return that.error();
				}
				if (!save) return that.error();
				
				that.parent.loadGame(code);
			});
		};
		
		this.error = function() {
			$($("#code").parent()).addClass("has-error");
			$("#code").attr("placeholder", this.Textes.get("codeError"));
			$("#code").val("");
		};
		
		this.show = function() {
			$(this.el).show("slow");
		};
		
		this.init(parent, Textes);
	};
});