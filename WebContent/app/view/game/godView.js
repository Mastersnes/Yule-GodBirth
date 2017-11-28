'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/data/types"], function($, Utils, GodType){
    return function(parent){
        this.init = function(parent) {
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            
            this.type = GodType.get("dust");
            this.level = 1;
            
            this.render();
        };
        
        this.render = function() {
        	$("god").attr("class", this.type.name);
        	$("god").attr("level", this.level);
        };
        
        this.loop = function() {
        };

        this.makeEvents = function() {
        	var that = this;
            $("god").click(function() {
        		that.level = parseInt($("god").attr("level"));
        		if (that.type.nbr) {
            		that.level++;
            		
            		if (that.level > that.type.nbr) {
            		    if (that.type.next) {
            		        that.type = GodType.get(that.type.next);
            		        $("god").attr("class", that.type.name);
            		        that.level = 1;
            		    }else {
            		        that.level = that.type.nbr;
            		    }
            		}
            		
            		$("god").attr("level", that.level);
        		}
        	});
        };
        
        this.init(parent);
    };
});