/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/ameliorations.html",
        "app/data/onglets",
        "app/data/items"],
function($, _, Utils, page, Onglets, Items) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = $("#ameliorations");
		    this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.items = Items;
            
            this.pointManager = parent.pointManager;
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			/**
			 * En tout premier on affiche les grandes deités
			 */
			this.unlockOnglet("deite", true);
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
		
		this.showDescription = function(itemId) {
		    var item = Items.get(itemId);
			
		    this.setDescription("#current", item, 0);
		    this.setDescription("#next", item, 1);
            
            this.el.find("#description").show();
		};
		
		/**
		 * Permet de remplir les champs de la description
		 */
		this.setDescription = function(domId, item, incr) {
			var dom = this.el.find("#description " + domId);
			
			/**
		     * LEVEL
		     */
		    dom.find("#nom").html(this.Textes.get(item.name));
            dom.find("#level").html(item.level + incr);
            
            /**
             * Restrictions
             */
            var restrictions = item.restriction();
            if (restrictions.length == 0) dom.find("#restrictions").hide();
            else {
            	dom.find("#restrictions > #list").empty();
            	dom.find("#restrictions").show();
	            for (var index in restrictions) {
	            	var restriction = restrictions[index];
	            	
	            	var restrictionDom = $("<div></div>");
	            	restrictionDom.attr("class", "categorie");
	            	if (this.checkRestriction(restriction)) restrictionDom.addClass("ok");
	            	
	            	var restrictionIcon = $("<span></span>");
	            	restrictionIcon.attr("class", "icon");
	            	restrictionDom.append(restrictionIcon);
	            	
	            	var restrictionText = $("<span></span>");
	            	restrictionText.attr("class", "text");
	            	restrictionText.append(this.Textes.get(restriction.name)).append(" (" + restriction.level + ")");
	            	restrictionDom.append(restrictionText);
	            	
	            	dom.find("#restrictions > #list").append(restrictionDom);
	            }
            }
            
            /**
             * PRIX
             */
            var prix = item.prix();
            if (prix) {
                dom.find("#croyance-prix span").html(prix.croyance);
                if (prix.croyance) dom.find("#croyance-prix").show();
                else dom.find("#croyance-prix").hide();
    
                dom.find("#illumination-prix span").html(prix.illumination);
                if (prix.illumination) dom.find("#illumination-prix").show();
                else dom.find("#illumination-prix").hide();
            }
            
            /**
             * GAIN
             */
            //Croyance
            var gain = item.gain(item.level + incr);
            if (gain.click.croyance || gain.loop.croyance) dom.find("#croyance").show();
            else dom.find("#croyance").hide();
            
            dom.find("#croyance-click span").html(gain.click.croyance);
            if (gain.click.croyance) dom.find("#croyance-click").css("visibility", "visible");
            else dom.find("#croyance-click").css("visibility", "hidden");
            
            dom.find("#croyance-loop span").html(gain.loop.croyance);
            if (gain.loop.croyance) dom.find("#croyance-loop").css("visibility", "visible");
            else dom.find("#croyance-loop").css("visibility", "hidden");
            
            //Illumination
            if (gain.click.illumination || gain.loop.illumination) dom.find("#illumination").show();
            else dom.find("#illumination").hide();
            
            dom.find("#illumination-click span").html(gain.click.illumination);
            if (gain.click.illumination) dom.find("#illumination-click").css("visibility", "visible");
            else dom.find("#illumination-click").css("visibility", "hidden");
            
            dom.find("#illumination-loop span").html(gain.loop.illumination);
            if (gain.loop.illumination) dom.find("#illumination-loop").css("visibility", "visible");
            else dom.find("#illumination-loop").css("visibility", "hidden");

            //Bien
            if (gain.click.bien || gain.loop.bien) dom.find("#bien").show();
            else dom.find("#bien").hide();
            
            dom.find("#bien-click span").html(gain.click.bien);
            if (gain.click.bien) dom.find("#bien-click").css("visibility", "visible");
            else dom.find("#bien-click").css("visibility", "hidden");
            
            dom.find("#bien-loop span").html(gain.loop.bien);
            if (gain.loop.bien) dom.find("#bien-loop").css("visibility", "visible");
            else dom.find("#bien-loop").css("visibility", "hidden");

            //Mal
            if (gain.click.mal || gain.loop.mal) dom.find("#mal").show();
            else dom.find("#mal").hide();
            
            dom.find("#mal-click span").html(gain.click.mal);
            if (gain.click.mal) dom.find("#mal-click").css("visibility", "visible");
            else dom.find("#mal-click").css("visibility", "hidden");
            
            dom.find("#mal-loop span").html(gain.loop.mal);
            if (gain.loop.mal) dom.find("#mal-loop").css("visibility", "visible");
            else dom.find("#mal-loop").css("visibility", "hidden");
		};
		
		this.loop = function(game) {
		    var listItem = Items.list();
		    for (var index in listItem) {
		        var item = listItem[index];
		        game.pointManager.addPoints(item.gain().loop);
		    }
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
            	that.currentItem = $(this).attr("id");
                that.showDescription(that.currentItem);
            });
            
            $("item").hover(function() {
            	$(this).removeClass('out').addClass('in');
            }, function() {
            	$(this).removeClass('in').addClass('out');
            });
            

            this.el.find("#description button#nextLevel").click(function() {
                var itemId = that.currentItem;
                var item = Items.get(itemId);
                
                var restrictions = that.checkRestrictions(item.restrictions);
                if (!restrictions || restrictions.length == 0) {
                	var prixOk = that.pointManager.depenser(item.prix());
                	if (prixOk) {
	                    if (item.select) item.select(that.parent, that);
	                	item.level++;
	                    $(this).attr("level", item.level);
	                    that.showDescription(itemId);
	                    return;
                	}
                }
                
                console.log("petit hackeur !");
            });
            
            this.el.find("#description .close").click(function() {
            	that.currentItem = null;
            	that.el.find("#description").hide();
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
         * Verifie si il reste des restrictions verifié
         */
        this.checkRestrictions = function(restrictions) {
        	var restrictionsRest = [];
        	for (var index in restrictions) {
        		var restriction = restrictions[index];
        		if (this.checkRestriction(restriction)) {
        			restrictionsRest.push(restriction);
        		}
        	}
        	return restrictionsRest;
        };
        
        /**
         * Verifie si une restriction est verifié
         */
        this.checkRestriction = function(restriction) {
        	var itemRestrict = Items.get(restriction.name);
    		if (itemRestrict.level < restriction.level) {
    			return false;
    		}
        	return true;
        };
		
		this.init(parent);
	};
});