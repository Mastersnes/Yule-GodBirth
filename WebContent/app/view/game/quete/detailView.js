'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/quete/quete-detail.html"], 
        function($, Utils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $("#quete-popup");
            
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
        	
        	this.el.show();
        };
        
        this.loop = function(game) {
        };
        
        this.makeEvents = function() {
        	var that = this;
        };
        
        this.init(parent);
    };
});