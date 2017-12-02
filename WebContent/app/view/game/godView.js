'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/data/types"], function($, Utils, GodType){
    return function(parent){
        this.init = function(parent) {
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            
            //Manager
            this.textManager = parent.textManager;
            this.eventManager = parent.eventManager;
            this.pointManager = parent.pointManager;
            
            this.gameMenuView = parent.gameMenuView;
            
            this.setType("dust", true);
        };
        
        this.render = function() {
        	$("god").attr("class", this.type.name);
        	$("god").attr("level", this.level);
        };
        
        this.loop = function() {
            this.render();
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
            $("god").click(function() {
                that.textManager.next();
                that.pointManager.click();
                that.checkLevel();
                that.render();
        	});
        };
        
        this.checkLevel = function() {
            this.level = parseInt($("god").attr("level"));
            if (this.type.nbr) {
                this.level++;
                
                if (this.level > this.type.nbr) {
                    if (this.type.next) this.setType(this.type.next);
                    else this.level = this.type.nbr;
                }
            }
            
            if (this.type.name == "baby") {
            	this.gameMenuView.unlockOnglet("god");
            	$(".gameMenu").show();
            }
        };
        
        this.init(parent);
    };
});