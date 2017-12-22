/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/ameliorations.html",
        "app/data/onglets",
        "app/data/items",
        "app/view/game/descriptionView"],
function($, _, Utils, page, Onglets, Items, DescriptionView) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = $("#ameliorations");
		    this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Items = Items;
            
            this.pointManager = parent.pointManager;
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			this.descriptionView = new DescriptionView(this);
			this.descriptionView.makeEvents();
			
			/**
			 * En tout premier on affiche les grandes deités
			 */
            $(".ameliorations").show();
		};
		
		this.unlockOnglet = function(ongletId, show) {
			if ($("onglet#"+ongletId).length > 0) return;
			var onglet = Onglets.get(ongletId);
			if (!onglet) return;
			
			var ongletDom = $("<onglet></onglet>");
			ongletDom.attr("class", "text " + ongletId);
			ongletDom.attr("id",ongletId);
			ongletDom.attr("title", this.Textes.get(ongletId));
			ongletDom.html(this.Textes.get(ongletId));
			this.el.find("onglets").append(ongletDom);
			
			this.makeOngletEvents(ongletId);
			
			if (show) this.showItems(ongletId);
		};
		
		this.showItems = function(ongletId) {
			$("onglet.active").removeClass("active");
			$("onglet#"+ongletId).addClass("active");
			
			this.el.find("content").empty();
			
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
			itemDom.attr("id", item.name);
			itemDom.attr("level", item.level);
			itemDom.html("<span></span>");
			
			this.el.find("content").append(itemDom);
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
		        game.pointManager.addPoints(item.gain().loop);
		    }
		    
		    this.descriptionView.loop(game);
		};
        
        this.click = function(game) {
            var listItem = Items.list();
            for (var index in listItem) {
                var item = listItem[index];
                game.pointManager.addPoints(item.gain().click);
            }
        };
        
        this.makeItemEvents = function() {
            var that = this;
            
            $("item").on("click", function() {
            	that.descriptionView.currentItem = $(this).attr("id");
                that.descriptionView.show($(this).attr("id"), true);
            });
            
            $("item").hover(function() {
            	$(this).removeClass('out').addClass('in');
            }, function() {
            	$(this).removeClass('in').addClass('out');
            });
        };
        
        this.makeOngletEvents = function(ongletId) {
        	var that = this;
        	
        	$("onglet#"+ongletId).on("click", function() {
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
        this.checkAchetable = function(item, level) {
            var itemRestrictions = item.restrictions(level);
            var restrictions = this.checkRestrictions(itemRestrictions);
            
            if (!restrictions || restrictions.length == 0) {
                var prixOk = this.pointManager.checkOk(item.prix(level));
                return prixOk;
            }
            return false;
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