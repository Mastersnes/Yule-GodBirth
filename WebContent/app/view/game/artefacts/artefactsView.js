'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/utils/map",
        "text!app/template/game/artefacts/artefacts.html",
        "app/data/artefacts",
        "app/view/game/artefacts/detailView"], 
        function($, Utils, HashMap, page, Artefacts, DetailView){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".artefacts");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Artefacts = Artefacts;
            this.saveManager = parent.saveManager;
            this.pointManager = this.parent.pointManager;
            
            this.inventaire = new HashMap(this.saveManager.load("inventaire"));
            this.artefactsUses = this.saveManager.load("artefactsUses");
            this.newList = [];
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
        		this.drawArtefact(artefact, this.checkHad(artefact.name), avantages, this.checkNew(artefact.name));
        	}
        	
        	this.pointManager.setAvantages(avantages, "artefacts");
        	this.newList.length = 0;
        };
        
        this.loop = function() {
        	
        };
        
        /**
         * Verifie si l'artefact est possédé
         */
        this.checkHad = function(artefactName) {
        	return this.inventaire.contains(artefactName);
        };

        /**
         * Verifie si l'artefact est nouveau
         */
        this.checkNew = function(artefactName) {
        	return this.newList.indexOf(artefactName) > -1;
        };
        
        /**
         * Affiche un artefact
         */
        this.drawArtefact = function(artefact, possess, avantages, isNew) {
        	if (!possess) return;
        	var artefactDom = $("<artefact></artefact>");
    		artefactDom.attr("id", artefact.name);
    		artefactDom.addClass(artefact.name);
        	
        	var artefactTitre = $("<div></div>");
        	artefactTitre.addClass("text");
        	artefactTitre.html(this.Textes.get(artefact.name));
        	artefactDom.append(artefactTitre);
        	
        	var artefactIcon = $("<div></div>");
        	artefactIcon.addClass("icon");
        	artefactDom.append(artefactIcon);
        	
        	if (isNew) {
	        	var artefactNew = $("<div></div>");
	        	artefactNew.addClass("new");
	        	artefactDom.append(artefactNew);
	        	artefactDom.addClass("new-artefact");
        	}
        	
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
        	if (this.inventaire.contains(artefact)) return;
        	this.inventaire.push(artefact);
        	this.newList.push(artefact);
        	this.saveManager.save("inventaire", this.inventaire.data);
        	if (!this.parent.alertOpen) {
        		var gainText = this.Textes.get("gainArtefact");
        		gainText = gainText.replace("{?}", this.Textes.get(artefact));
        		this.parent.alertPopup(gainText);
        	}
        };

        /**
         * Retire l'artefact de la liste
         */
        this.remove = function(artefact) {
        	if (!artefact) artefact = this.inventaire.getFirst();
        	if (!this.inventaire.contains(artefact)) return;
        	this.inventaire.remove(artefact);
        	this.saveManager.save("inventaire", this.inventaire.data);
        	this.artefactsUses++;
        	this.saveManager.save("artefactsUses", this.artefactsUses);
        	
        	this.parent.kongregateUtils.score("artefactsUses", this.artefactsUses);
        	if (this.artefactsUses >= 1) {
        		this.parent.kongregateUtils.score("artefactsUses1", 1);
        	}
        	if (this.artefactsUses >= 3) {
        		this.parent.kongregateUtils.score("artefactsUses3", 1);
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