'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/success/success.html",
        "app/data/success"], 
        function($, Utils, page, Success){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".success");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Success = Success;
            
            this.recompenseManager = this.parent.recompenseManager;
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			this.refresh();
			this.makeEvents();
        };
        
        this.show = function() {
        	this.render();
        	this.el.show();
        };
        
        this.refresh = function() {
        	this.el.find("successList").empty();
        	
        	var successList = Success.list();
        	for (var index in successList) {
        		var success = successList[index];
        		this.drawSuccess(success, this.checkComplete(success));
        	}
        };
        
        /**
         * Verifie si le succes est completé
         */
        this.checkComplete = function(success) {
        	return this.recompenseManager.complete.indexOf(success) > -1;
        };
        
        /**
         * Affiche le success
         */
        this.drawSuccess = function(success, complete) {
        	var successDom = $("<success></success>");
        	if (complete){
        		successDom.attr("title", this.Textes.get(success));
        		successDom.addClass(success);
        		successDom.addClass("completed");
        	}
        	
        	var successTitre = $("<div></div>");
        	successTitre.addClass("text");
        	if (complete) {
        		successTitre.html(this.Textes.get(success));
        	}else {
        		successTitre.html("?");
        	}
        	successDom.append(successTitre);
        	
        	var successIcon = $("<div></div>");
        	successIcon.addClass("icon");
        	successDom.append(successIcon);
        	
        	this.el.find("successList").append(successDom);
        };
        
        this.loop = function(game) {
        	var successList = Success.list();
        	for (var index in successList) {
        		var success = successList[index];
        		this.refreshSuccess(success);
        	}
         };
        
        this.refreshSuccess = function(success) {
        	var successDom = $("success#"+success);
        	if (this.checkComplete(success)) successDom.addClass("complete");
        	else successDom.removeClass("complete");
        };
        
        this.makeEvents = function() {
        	var that = this;
        	this.el.find(".goto").click(function() {
        		that.parent.showConstellation();
        	});
        };
        
        this.init(parent);
    };
});