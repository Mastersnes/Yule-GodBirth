'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/artefacts/artefacts.html",
        "app/data/artefacts"], 
        function($, Utils, page, Artefacts){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".artefacts");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Artefacts = Artefacts;
            this.saveManager = parent.saveManager;
            
            this.inventaire = this.saveManager.load("inventaire");
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
        	this.el.find("artefactsList").empty();
        	
        	var artefactsList = Artefacts.list();
        	for (var index in artefactsList) {
        		var artefact = artefactsList[index];
        		this.drawArtefact(artefact, this.checkHad(artefact));
        	}
        };
        
        /**
         * Verifie si l'artefact est possédé
         */
        this.checkHad = function(artefact) {
        	return this.inventaire.indexOf(artefact) > -1;
        };
        
        /**
         * Affiche un artefact
         */
        this.drawArtefact = function(artefact, possess) {
        	if (!possess) return;
        	var artefactDom = $("<artefact></artefact>");
    		artefactDom.attr("title", this.Textes.get(artefact.name));
    		artefactDom.addClass(artefact.name);
        	
        	var artefactTitre = $("<div></div>");
        	artefactTitre.addClass("text");
        	artefactTitre.html(this.Textes.get(artefact.name));
        	artefactDom.append(artefactTitre);
        	
        	var artefactIcon = $("<div></div>");
        	artefactIcon.addClass("icon");
        	artefactDom.append(artefactIcon);
        	
        	this.el.find("artefactsList").append(artefactDom);
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