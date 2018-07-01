'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/options/optionsInGame.html"], 
        function($, Utils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".options");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			this.makeEvents();
        };
        
        this.show = function() {
        	this.render();
        	this.el.show();
        };
        
        this.makeEvents = function() {
        	var that = this;
        	this.el.find(".goto").click(function() {
        		that.parent.showConstellation();
        	});
			this.el.find(".flag.fr").click(function() {
				that.Textes.local = "fr";
				that.parent.parent.render();
			});
			this.el.find(".flag.en").click(function() {
				that.Textes.local = "en";
				console.log("parent : ", that.parent);
				console.log("parent parent : ", that.parent.parent);
				that.parent.parent.render();
			});
			this.el.find("#fullscreen").click(function() {
				var elem = $("body")[0];
				if (elem.requestFullscreen) {
				  elem.requestFullscreen();
				} else if (elem.mozRequestFullScreen) {
				  elem.mozRequestFullScreen();
				} else if (elem.webkitRequestFullscreen) {
				  elem.webkitRequestFullscreen();
				}
			});
        };
        
        this.init(parent);
    };
});