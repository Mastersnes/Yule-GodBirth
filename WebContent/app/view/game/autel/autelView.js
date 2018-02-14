'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/autel/autel.html",
        "app/view/game/autel/pierresView"], 
        function($, Utils, page, PierresView){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".autel");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            
            this.pointManager = this.parent.pointManager;
            this.ameliorationView = this.parent.spaceView.ameliorationView;
            
            this.pierresView = new PierresView(this);
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			this.pierresView.render();
			
			this.makeEvents();
			
			/**
			 * En tout premier on affiche les pierres primaires
			 */
			this.el.find(".ameliorations").show();
        };
        
        this.loop = function(game) {
        	this.pierresView.loop();
        };
        
        this.show = function() {
        	this.el.show();
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