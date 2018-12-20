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
            this.saveManager = parent.saveManager;
            this.textManager = parent.textManager;
            this.eventManager = parent.eventManager;
            this.pointManager = parent.pointManager;
            
            this.ameliorationView = parent.ameliorationView;
            this.gameView = parent.parent;
            
            this.initialisation = true;
            this.initType = this.saveManager.load("godInitType");
            this.initLevel = this.saveManager.load("godInitLevel");
        };
        
        this.render = function() {
        	if (this.initialisation) {
        		this.setType(this.initType, this.initLevel);
        		this.initialisation = false;
        	}
        	
        	var godDom = $(this.el).find("god");
        	if (!godDom.hasClass(this.type.name)) godDom.attr("class", this.type.name);
        	godDom.attr("level", this.level);

        	var goddessDom = $(this.el).find("goddess");
        	if (!goddessDom.hasClass(this.type.name)) goddessDom.attr("class", this.type.name);
        	goddessDom.attr("level", this.level);
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
        
        this.setType = function(type, level) {
        	if (!level) level = 1;
        	this.saveManager.save("godInitType", type);
        	
        	this.type = GodType.get(type);
            this.level = level;
            this.eventManager.setTypeEvents(this.type.events);
            this.textManager.show(this.type.text);
            
            if (this.type.music) {
            	console.log("stop : ", this.mediatheque);
            	this.mediatheque.stopAllMusic();
            	this.mediatheque.play("music/" + this.type.music);
            }
            
            this.textManager.next();
        };

        this.makeEvents = function() {
        	var that = this;
        	$(this.el).find("#godContainer").click(function() {
                that.parent.click(that.gameView);
                that.render();
        	});
        	$(this.el).find(".popupText").hover(function() {
        		if (!$(this).find(".next").hasClass("hover"))
        		$(this).find(".next").addClass("hover");
        	}, function() {
        		$(this).find(".next").removeClass("hover");
        	});
        	$(this.el).find(".popupText").click(function() {
        		if (that.type.name == "dust") that.checkLevel();
        		that.textManager.next();
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
        	this.saveManager.save("godInitLevel", this.level);
        };
        
        this.init(parent);
    };
});