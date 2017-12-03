'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/view/game/godView"], function($, Utils, GodView){
    return function(parent){
        this.init = function(parent) {
            this.maxFront = 3;
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;

            // Manager
            this.textManager = parent.textManager;
            this.eventManager = parent.eventManager;
            this.pointManager = parent.pointManager;
            
            this.ameliorationView = parent.ameliorationView;
            
            this.godView = new GodView(this);
        };
        
        this.render = function() {
        	this.godView.render();
        };
        
        this.loop = function() {
            var mustChangeFront = Utils.rand(0, 1) == 0;
            if (mustChangeFront) {
                //On change le front
                var front = Utils.rand(1, this.maxFront+1);
                $("space.front").attr("type", front);
            }
            
            this.godView.loop();
        };
        
        this.makeEvents = function() {
        	this.godView.makeEvents();
        };
        
        this.init(parent);
    };
});