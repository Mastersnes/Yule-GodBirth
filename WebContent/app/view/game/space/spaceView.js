'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/space/space.html",
        "app/view/game/space/godView",
        "app/view/game/space/ameliorationView"], function($, Utils, page, GodView, AmeliorationView){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".space");
            this.maxFront = 1;
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.saveManager = parent.saveManager;
            this.textManager = parent.textManager;
            this.eventManager = parent.eventManager;
            this.pointManager = parent.pointManager;
            this.recompenseManager = parent.recompenseManager;
            
            this.ameliorationView = new AmeliorationView(this);
            this.godView = new GodView(this);
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
        	
        	this.godView.render();
        	this.ameliorationView.render();
        };
        
        this.show = function() {
        	this.el.show();
        };
        
        this.loop = function(game) {
            var mustChangeFront = Utils.rand(0, 5) == 0;
            if (mustChangeFront) {
                //On change le front
                var front = Utils.rand(1, this.maxFront+1);
                $("space.front").attr("type", front);
            }
            
            this.godView.loop();
            this.ameliorationView.loop(game);
        };
        
        this.renderLoop = function(game) {
            this.ameliorationView.renderLoop(game);
        };

        this.click = function(game) {
        	this.ameliorationView.click(game);
        };
        
        this.makeEvents = function() {
        	this.godView.makeEvents();
        	
        	var that = this;
        	this.el.find(".goto").click(function() {
        		that.parent.showConstellation();
        	});
        };
        
        this.init(parent);
    };
});