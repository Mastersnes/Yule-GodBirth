'use strict';
define(["jquery", 
        "app/utils/utils"], function($, Utils){
    return function(parent){
        this.init = function(parent) {
            this.maxFront = 3;
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            
            this.godView = new GodView(this);
        };
        
        this.loop = function() {
            var mustChangeFront = Utils.rand(0, 10) == 5;
            if (mustChangeFront) {
                //On change le front
                var front = Utils.rand(1, this.maxFront+1);
                $();
            }
        };
        
        this.init(parent);
    };
});