'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/constellation/constellation.html"], 
        function($, Utils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".constellation");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.textManager = parent.textManager;
            this.pointManager = parent.pointManager;
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
        };
        
        this.loop = function(game) {
        };
        
        this.makeEvents = function() {
        	var that = this;
        	this.el.find("etoile").click(function() {
        		that.parent.showStar($(this));
        	});
        };
        
        this.init(parent);
    };
});