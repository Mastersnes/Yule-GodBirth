/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/space/ameliorations.html",
        "app/data/onglets",
        "app/data/items",
        "app/view/game/space/descriptionView"],
function($, _, Utils, page, Onglets, Items, DescriptionView) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = "#ameliorations";
		    this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Items = Items;
            
            this.saveManager = parent.saveManager;
            this.pointManager = parent.pointManager;
            this.recompenseManager = parent.recompenseManager;
            
            this.saveManager.loadAmeliorations(this.Items);
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			$(this.el).html(template(templateData));
			
			this.descriptionView = new DescriptionView(this);
			this.descriptionView.makeEvents();
			
			/**
			 * En tout premier on affiche les grandes deités
			 */
			$(this.el).find(".ameliorations").show();
		};
		
		this.unlockOnglet = function(ongletId, show) {
			if ($(this.el).find("onglet#"+ongletId).length > 0) return;
			
			var onglet = Onglets.get(ongletId);
			if (!onglet) return;
			
			var ongletDom = $("<onglet></onglet>");
			ongletDom.attr("class", "text " + ongletId);
			ongletDom.attr("id",ongletId);
			ongletDom.attr("title", this.Textes.get(ongletId));
			ongletDom.html(this.Textes.get(ongletId));
			$(this.el).find("onglets").append(ongletDom);
			
			this.makeOngletEvents(ongletId);
			
			if (show) this.showItems(ongletId);
		};
		
		this.showItems = function(ongletId) {
			$(this.el).find("onglet.active").removeClass("active");
			$(this.el).find("onglet#"+ongletId).addClass("active");
			
			$(this.el).find("content").empty();
			
			var onglet = Onglets.get(ongletId);
			for (var id in onglet.items) {
				var itemId = onglet.items[id];
				this.addItem(itemId);
			}
			
			this.makeItemEvents();
		};
		
		this.addItem = function(itemId) {
			var item = Items.get(itemId);
			
			var itemDom = $("<item></item>");
			itemDom.attr("class", item.name);
			itemDom.attr("title", this.Textes.get(item.name) + " (" + item.level + ")");
			itemDom.attr("id", item.name);
			itemDom.attr("level", item.level);
			itemDom.html("<span></span>");
			
			$(this.el).find("content").append(itemDom);
		};
		
		this.refreshItem = function(item) {
			var itemDom = $(this.el).find("item#"+item.name);
			if (itemDom.length == 0) return;
			itemDom.attr("title", this.Textes.get(item.name) + " (" + item.level + ")");
			itemDom.attr("level", item.level);
			
			
			if (this.checkAchetable(item, item.level+1)) {
				if (!itemDom.hasClass("dispo")) itemDom.addClass("dispo");
			}else itemDom.removeClass("dispo");
		};
		
		this.loop = function(game) {
		    var listOnglet = Onglets.list();
		    for (var index in listOnglet) {
                var onglet = listOnglet[index];
                if (this.checkOngletAffichable(onglet.conditions)) {
                    this.unlockOnglet(onglet.name, onglet.start);
                }
            }
		    
		    var listItem = Items.list();
		    for (var index in listItem) {
		        var item = listItem[index];
		        game.pointManager.addPoints(item.gain(0, Items).loop);
		        this.refreshItem(item);
		    }
		    
		    this.descriptionView.loop(game);
		};

		this.click = function(game) {
			var listItem = Items.list();
			for (var index in listItem) {
				var item = listItem[index];
				game.pointManager.addPoints(item.gain(0, Items).click);
				this.refreshItem(item);
			}
			
			this.recompenseManager.addClick();
		};
        
        this.makeItemEvents = function() {
            var that = this;
            
            $(this.el).find("item").on("click", function() {
            	that.descriptionView.currentItem = $(this).attr("id");
                that.descriptionView.show($(this).attr("id"), true);
            });
            
            $(this.el).find("item").hover(function() {
            	$(this).removeClass('out').addClass('in');
            }, function() {
            	if (!that.descriptionView.currentItem)
            	$(this).removeClass('in').addClass('out');
            });
        };
        
        this.makeOngletEvents = function(ongletId) {
        	var that = this;
        	
        	$(this.el).find("onglet#"+ongletId).on("click", function() {
                var ongletId = $(this).attr("id");
                that.showItems(ongletId);
            });
        };
        
        /**
         * Verifie si il reste des restrictions a verifier
         */
        this.checkRestrictions = function(restrictions) {
        	var restrictionsRest = [];
        	for (var index in restrictions) {
        		var restriction = restrictions[index];
        		if (!this.checkRestriction(restriction)) {
        			restrictionsRest.push(restriction);
        		}
        	}
        	return restrictionsRest;
        };
        
        /**
         * Verifie si une restriction est verifiée
         */
        this.checkRestriction = function(restriction) {
        	var itemRestrict = Items.get(restriction.name);
    		if (itemRestrict.level < restriction.level) {
    			return false;
    		}
        	return true;
        };

        /**
         * Verifie si une amelioration peut etre acheté
         */
        this.checkAchetable = function(item, level, prixTotal) {
        	var max = item.max?item.max:100;
        	if (level > max) return false;
        	if (level == item.level) return false;
        	
        	if (!prixTotal) prixTotal = this.calculPrix(item, level);
        	
        	var itemRestrictions = item.restrictions(level);
            var restrictions = this.checkRestrictions(itemRestrictions);
            
            if (!restrictions || restrictions.length == 0) {
                var prixOk = this.pointManager.checkOk(prixTotal);
                return prixOk;
            }
            return false;
        };
        
        /**
         * Calcul le prix total d'un achat
         */
        this.calculPrix = function(item, level) {
        	var currentLvl = item.level;
        	
        	var prixTotal = {
        		croyance : 0,
        		illumination : 0	
        	};
        	
        	var i = 1;
        	while (currentLvl + i <= level) {
        		var prix = item.prix(currentLvl + i);
        		prixTotal.croyance += prix.croyance;
        		prixTotal.illumination += prix.illumination;
        		i++;
        	}
        	return prixTotal;
        };
        
        /**
         * Verifie si un onglet doit etre afficher
         */
        this.checkOngletAffichable = function(conditions) {
            if (!conditions || conditions.length == 0) return true;
            
            for (var index in conditions) {
                var condition = conditions[index];
                var itemRestrict = Items.get(condition.name);
                if (itemRestrict.level < condition.level) {
                    return false;
                }
            }
            return true;
        };
        
        
		
		this.init(parent);
	};
});