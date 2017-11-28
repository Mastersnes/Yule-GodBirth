'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/view/game/godView"], function($, Utils, GodView){
    return function(parent){
        this.init = function(parent) {
            this.maxFront = 3;
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.textView = parent.textView;
            this.mediatheque = parent.mediatheque;
        };
        
        this.render = function() {
        	this.godView = new GodView(this);
        };
        
        this.loop = function() {
            var mustChangeFront = Utils.rand(0, 100) == 50;
            if (mustChangeFront) {
                //On change le front
                var front = Utils.rand(1, this.maxFront+1);
                $("space.front").attr("type", front);
            }
        };
        
        this.makeEvents = function() {
        	this.godView.makeEvents();
        };
        
        this.init(parent);
    };
});