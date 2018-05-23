'use strict';
define(["jquery", 
        "app/utils/utils",
        "app/utils/map",
        "text!app/template/game/autel/autel.html",
        "app/view/game/autel/pierresView"], 
        function($, Utils, HashMap, page, PierresView){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".autel");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            
            this.saveManager = this.parent.saveManager;
            this.pointManager = this.parent.pointManager;
            this.ameliorationView = this.parent.spaceView.ameliorationView;
            
            this.pierresView = new PierresView(this);
            
            this.selectedPierres = new HashMap(this.saveManager.load("selectedPierres"));
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			this.pierresView.render();
			
			this.makeEvents();
			
			/**
			 * En tout premier on affiche les pierres primaires
			 */
			this.el.find(".ameliorations").show();
			
			this.refresh();
        };
        
        this.refresh = function() {
        	this.saveManager.save("selectedPierres", this.selectedPierres.data);
        	
        	var avantages = {
				"croyance" : 0,
				"illumination" : 0,
				"bien" : 0,
				"mal" : 0
			};
        	
        	this.drawChasse("haut", avantages);
        	this.drawChasse("gauche", avantages);
        	this.drawChasse("droite", avantages);
        	this.drawChasse("bas-gauche", avantages);
        	this.drawChasse("bas-droite", avantages);
        	this.drawChasse("centre", avantages);
        	
        	this.refreshAvantages(avantages);
        };
        
        /**
         * Raffraichit le total des avantages donné par les pierres selectionnées
         */
        this.refreshAvantages = function(avantages) {
        	this.pointManager.setAvantages(avantages, "pierres");
        	
        	this.drawAvantage("bien", avantages);
        	this.drawAvantage("mal", avantages);
        	this.drawAvantage("croyance", avantages);
        	this.drawAvantage("illumination", avantages);
        };
        
        /**
         * Affiche la nouvelle valeur de l'avantage
         */
        this.drawAvantage = function(id, avantages) {
        	var signe = "";
        	if (avantages[id] != 0) signe = avantages[id]>0?"+":"-";
        	this.el.find("#avantages " + id + " .text").html(signe + avantages[id] + "%");
        };
        
        /**
         * Permet de dessiner la pierre presente dans une chasse
         */
        this.drawChasse = function(id, avantages) {
        	var pierreId = this.selectedPierres.get(id);
        	var pierre = this.pierresView.Pierres.get(pierreId);
        	if (pierre) {
        		this.el.find("chasse#"+id).addClass("used");
        		this.el.find("chasse#"+id).attr("pierre", pierreId);
        		this.el.find("chasse#"+id).attr("title", this.Textes.get("retirerPierre"));
        		
        		avantages.croyance += pierre.gains.croyance;
        		avantages.illumination += pierre.gains.illumination;
        		avantages.bien += pierre.gains.bien;
        		avantages.mal += pierre.gains.mal;
        	}else {
        		this.el.find("chasse#"+id).removeClass("used");
        		this.el.find("chasse#"+id).removeAttr("pierre");
        		this.el.find("chasse#"+id).removeAttr("title");
        	}
        };
        
        this.loop = function(game) {
        	this.pierresView.loop();
        };
        
        this.show = function() {
        	this.el.show();
        };
        
        this.makeEvents = function() {
        	var that = this;
        	
        	this.el.find("chasse").click(function() {
        		if (!$(this).hasClass("used")) return;
        		
        		var emplacement = $(this).attr("id");
        		that.selectedPierres.put(emplacement, null);
        		that.refresh();
        	});
        	
        	this.el.find(".goto").click(function() {
        		that.parent.showConstellation();
        	});
        };
        
        /**
         * Permet de placer une pierre sur l'autel
         */
        this.selectPierre = function(pierreId) {
        	// Si la pierre est deja placée, on n'y touche pas
        	if (this.selectedPierres.contains(pierreId)) return;
        	
        	var firstEmptyKey = this.selectedPierres.getFirstEmptyKey();
        	this.selectedPierres.put(firstEmptyKey, pierreId);
        	this.refresh();
        };
        
        this.init(parent);
    };
});