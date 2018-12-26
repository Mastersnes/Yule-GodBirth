/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/menu/popup/credit.html"], 
function($, _, Utils, page) {
	'use strict';

	return function(Textes) {
		this.init = function(Textes) {
			this.el = "#credit-popup";
			this.Textes = Textes;
			this.render();
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			$(this.el).html(template(templateData));
			
			this.makeEvents();
		};
		
		this.makeEvents = function() {
			var that = this;
			$(this.el).find(".close-button").click(function() {
				$(that.el).hide("slow");
			});
			$("#avn").click(function() {
				window.open("https://avn2dgameartist.wordpress.com", "_blank");
			});
			$("#soundcloud").click(function() {
				window.open("https://soundcloud.com/user-856311901-937055955", "_blank");
			});
			$("#aeferrets").click(function() {
				window.open("https://www.facebook.com/AEFerrets/", "_blank");
			});
			$(".facebook").click(function() {
				window.open("https://www.facebook.com/lesjeuxdebebel/", "_blank");
			});
			$(".twitter").click(function() {
				window.open("https://twitter.com/lesjeuxdebebel", "_blank");
			});
			$(".wordpress").click(function() {
				window.open("https://lesjeuxdebebel.wordpress.com", "_blank");
			});
			$(".instagram").click(function() {
				window.open("https://www.instagram.com/lesjeuxdebebel/", "_blank");
			});
			$(".kongregate").click(function() {
				window.open("https://www.kongregate.com/games/JeuxBebel", "_blank");
			});
		};
		
		this.show = function() {
			$(this.el).show("slow");
		};
		
		this.init(Textes);
	};
});