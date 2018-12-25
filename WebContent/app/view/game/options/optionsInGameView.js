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
            this.saveManager = parent.saveManager;
            this.data = this.saveManager.load("options");
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			this.refresh();
			
			this.makeEvents();
        };
        
        this.refresh = function() {
        	if (this.data["notation-courte"]) {
        		$("#notation").text(this.Textes.get("passer-notation-longue"));
        	} else {
        		$("#notation").text(this.Textes.get("passer-notation-courte"));
        	}
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
				that.Textes.setLanguage("fr");
			});
			this.el.find(".flag.en").click(function() {
				that.Textes.setLanguage("en");
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
			this.el.find("#notation").click(function() {
				that.data["notation-courte"] = !that.data["notation-courte"];
				that.saveManager.save("options", that.data);
				that.refresh();
			});
        };
        
        this.init(parent);
    };
});