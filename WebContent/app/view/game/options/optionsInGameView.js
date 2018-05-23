'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/options/optionsInGame.html"], 
        function($, Utils, page, Options){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".options");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Options = Options;
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
        
        this.show = function() {
        	this.render();
        	this.el.show();
        };
        
        this.refresh = function() {
        	
        };
        
        this.makeEvents = function() {
        	var that = this;
        	this.el.find(".goto").click(function() {
        		that.parent.showConstellation();
        	});
        };
        
        this.init(parent);
    };
});