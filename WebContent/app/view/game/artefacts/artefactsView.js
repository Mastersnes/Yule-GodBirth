'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/artefacts/artefacts.html",
        "app/data/artefacts",
        "app/view/game/artefacts/detailView"], 
        function($, Utils, page, Artefacts, DetailView){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".artefacts");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Artefacts = Artefacts;
            this.saveManager = parent.saveManager;
            this.pointManager = this.parent.pointManager;
            
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
			
			this.detailView = new DetailView(this);
			this.detailView.render();
			
			this.makeEvents();
        };
        
        this.show = function() {
        	this.render();
        	this.el.show();
        };
        
        this.refresh = function() {
        	var avantages = {
        			croyance : 0,
        			illumination : 0,
        			bien : 0,
        			mal : 0
        	};
        	
        	this.el.find("artefactsList").empty();
        	
        	var artefactsList = Artefacts.list();
        	for (var index in artefactsList) {
        		var artefact = artefactsList[index];
        		this.drawArtefact(artefact, this.checkHad(artefact), avantages);
        	}
        	
        	this.pointManager.setAvantages(avantages, "artefacts");
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
        this.drawArtefact = function(artefact, possess, avantages) {
        	if (!possess) return;
        	var artefactDom = $("<artefact></artefact>");
    		artefactDom.attr("title", this.Textes.get(artefact.name));
    		artefactDom.attr("id", artefact.name);
    		artefactDom.addClass(artefact.name);
        	
        	var artefactTitre = $("<div></div>");
        	artefactTitre.addClass("text");
        	artefactTitre.html(this.Textes.get(artefact.name));
        	artefactDom.append(artefactTitre);
        	
        	var artefactIcon = $("<div></div>");
        	artefactIcon.addClass("icon");
        	artefactDom.append(artefactIcon);
        	
        	this.el.find("artefactsList").append(artefactDom);
        	
        	avantages.croyance += artefact.gains.croyance;
    		avantages.illumination += artefact.gains.illumination;
    		avantages.bien += artefact.gains.bien;
    		avantages.mal += artefact.gains.mal;
        };
        
        /**
         * Ajoute l'artefact à la liste et affiche une popup d'alerte
         */
        this.add = function(artefact) {
        	if (this.inventaire.indexOf(artefact) > -1) return;
        	this.inventaire.push(artefact);
        	if (!that.parent.alertOpen) {
        		var gainText = this.Textes.get("gainArtefact");
        		gainText = gainText.replaceAll("{?}", this.Textes.get(artefact));
        		this.parent.alertPopup(gainText);
        	}
        };
        
        this.makeEvents = function() {
        	var that = this;
        	this.el.find(".goto").click(function() {
        		that.parent.showConstellation();
        	});
        	
        	this.el.find("artefact").hover(function() {
            	var artefactId = $(this).attr("id");
            	that.detailView.show(artefactId);
            }, function() {
            	that.detailView.close();
            });
        };
        
        this.init(parent);
    };
});