'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/data/types"], function($, Utils, GodType){
    return function(parent){
        this.init = function(parent) {
            this.parent = parent;
            this.Textes = parent.Textes;
            this.textView = parent.textView;
            this.mediatheque = parent.mediatheque;
            
            this.setType("dust");
            
            this.render();
        };
        
        this.render = function() {
        	$("god").attr("class", this.type.name);
        	$("god").attr("level", this.level);
        };
        
        this.loop = function() {
        };
        
        this.setType = function(type) {
            this.type = GodType.get(type);
            this.level = 1;
            this.textView.show(this.type.text);
        };

        this.makeEvents = function() {
        	var that = this;
            $("god").click(function() {
        		that.level = parseInt($("god").attr("level"));
        		if (that.type.nbr) {
            		that.level++;
            		
            		if (that.level > that.type.nbr) {
            		    if (that.type.next) that.setType(that.type.next);
            		    else that.level = that.type.nbr;
            		}else {
            		    that.textView.next();
            		}
            		
            		that.render();
        		}
        	});
        };
        
        this.init(parent);
    };
});