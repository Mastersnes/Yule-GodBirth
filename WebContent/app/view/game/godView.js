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
            
            this.ameliorationView = parent.ameliorationView;
            
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
                that.ameliorationView.click(that.parent.parent);
                that.checkLevel();
                that.render();
        	});
        };
        
        this.checkLevel = function() {
            this.level = parseInt($("god").attr("level"));
            if (this.type.nbr) {
                this.level++;
                
                if (this.level > this.type.nbr) {
                	/**
                	 * Lorsqu'on affiche pour la premiere fois le dieu enfant
                	 * on affiche le menu
                	 */
                	if (this.type.next == "baby") {
                    	this.ameliorationView.unlockOnglet("god", true);
                    	$(".ameliorations").show();
                    }
                	
                	if (this.type.next) this.setType(this.type.next);
                    else this.level = this.type.nbr;
                }
            }
        };
        
        this.init(parent);
    };
});