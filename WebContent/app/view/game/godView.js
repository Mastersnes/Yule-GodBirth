'use strict';
define(["jquery", 
        "app/utils/utils"], function($, Utils){
    return function(parent){
        this.init = function(parent) {
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            
            this.type = "dust";
            this.level = 1;
            
            this.render();
        };
        
        this.render = function() {
        	$("god").attr("class", this.type);
        	$("god").attr("level", this.level);
        };
        
        this.loop = function() {
        };

        this.makeEvents = function() {
        	$("god").click(function() {
        		this.level = parseInt($("god").attr("level"));
        		this.level++;
        		$("god").attr("level", this.level);
        	});
        };
        
        this.init(parent);
    };
});