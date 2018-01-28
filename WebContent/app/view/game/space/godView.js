'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/data/types"], function($, Utils, GodType){
    return function(parent){
        this.init = function(parent) {
        	this.el = ".space";
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            
            //Manager
            this.textManager = parent.textManager;
            this.eventManager = parent.eventManager;
            this.pointManager = parent.pointManager;
            
            this.ameliorationView = parent.ameliorationView;
            this.gameView = parent.parent;
            
            this.setType("dust", true);
        };
        
        this.render = function() {
        	var godDom = $(this.el).find("god");
        	if (!godDom.hasClass(this.type.name)) godDom.attr("class", this.type.name);
        	godDom.attr("level", this.level);
        };
        
        this.checkAnim = function() {
        	var animations = this.type.animations;
        	for (var index in animations) {
        		var animation = animations[index];
        		var mustAnim = Utils.rand(0, animation.chance) == 0;
                if (mustAnim) {
                	var godDom = $(this.el).find("god");
                    if (!godDom.hasClass("animate")) {
                    	godDom.addClass("animate");
                    	godDom.addClass(animation.name);
    	                setTimeout(function() {
    	                	godDom.removeClass("animate");
    	                	godDom.removeClass(animation.name);
    	                }, animation.time);
                    }
                    return;
                }
        	}
        };
        
        this.loop = function() {
            this.render();
            this.checkAnim();
        };
        
        this.setType = function(type, first) {
            this.type = GodType.get(type);
            this.level = 1;
            this.eventManager.setTypeEvents(this.type.events);
            this.textManager.show(this.type.text);
            
            this.textManager.next();
        };

        this.makeEvents = function() {
        	var that = this;
        	$(this.el).find("god").click(function() {
                that.textManager.next();
                that.parent.click(that.gameView);
                that.render();
        	});
        };
        
        this.checkLevel = function() {
        	if (!this.level) this.level=0;
        	if (this.type.nbr) {
                this.level++;
                if (this.level > this.type.nbr) {
                	if (this.type.next) this.setType(this.type.next);
                    else this.level = this.type.nbr;
                }
            }
        };
        
        this.init(parent);
    };
});