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
        	
        	var bonusCentre = {
    	        "croyance" : 0,
                "illumination" : 0,
                "bien" : 0,
                "mal" : 0
        	};
        	
        	this.drawChasse("centre", avantages);
        	this.drawChasse("haut", avantages);
        	this.drawChasse("gauche", avantages);
        	this.drawChasse("droite", avantages);
        	this.drawChasse("bas-gauche", avantages);
        	this.drawChasse("bas-droite", avantages);
        	
        	this.refreshAvantages(avantages);
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
        		
        		var gain = this.gereBonusMalus(id, pierre);
        		
        		avantages.croyance += gain.croyance;
        		avantages.illumination += gain.illumination;
        		avantages.bien += gain.bien;
        		avantages.mal += gain.mal;
        	}else {
        		this.el.find("chasse#"+id).removeClass("used");
        		this.el.find("chasse#"+id).removeAttr("pierre");
        		this.el.find("chasse#"+id).removeAttr("title");
        	}
        };
        
        /**
         * Ajoute les bonus et malus en fonction des pierres presentes sur l'autel
         */
        this.gereBonusMalus = function(position, pierre) {
            var gain = {
                    croyance : pierre.gains.croyance,
                    illumination : pierre.gains.illumination,
                    bien : pierre.gains.bien,
                    mal : pierre.gains.mal
            };
            
            for (var goodStone in pierre.good) {
                if (this.selectedPierres.contains(goodStone)) {
                    gain.croyance = Math.round(gain.croyance * 1.3);
                    gain.illumination = Math.round(gain.illumination * 1.3);
                    gain.bien = Math.round(gain.bien * 1.3);
                    gain.mal = Math.round(gain.mal * 1.3);
                }
            }
            
            for (var badStone in pierre.bad) {
                if (this.selectedPierres.contains(badStone)) {
                    gain.croyance = Math.round(gain.croyance * 0.5);
                    gain.illumination = Math.round(gain.illumination * 0.5);
                    gain.bien = Math.round(gain.bien * 0.5);
                    gain.mal = Math.round(gain.mal * 0.5);
                }
            }
            
            if (position != "centre") {
                var centerStoneId = this.selectedPierres.get("centre");
                var centerStone = this.pierresView.Pierres.get(centerStoneId);
                if (centerStone) {
                    var bonusCentre = centerStone.bonusCentre;
                    gain.croyance += Utils.percent(gain.croyance, bonusCentre.croyance);
                    gain.illumination += Utils.percent(gain.illumination, bonusCentre.illumination);
                    gain.bien += Utils.percent(gain.bien, bonusCentre.bien);
                    gain.mal += Utils.percent(gain.mal, bonusCentre.mal);
                }
            }
            
            return gain;
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