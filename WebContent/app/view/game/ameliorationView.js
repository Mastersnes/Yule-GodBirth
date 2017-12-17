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
			
			itemDom.html(this.Textes.get(item.name));
			
			this.el.find("content").append(itemDom);
		};
		
		this.showDescription = function(itemId) {
		    var item = Items.get(itemId);
			
		    this.setDescription("#current", item.name, item.level, null, item.gain());
		    this.setDescription("#next", null, item.level+1, item.prix(), item.gain(item.level+1));
            
            this.el.find("#description").show();
		};
		
		/**
		 * Permet de remplir les champs de la description
		 */
		this.setDescription = function(domId, name, level, prix, gain) {
		    var dom = this.el.find("#description " + domId);
		    /**
		     * LEVEL
		     */
		    dom.find("#nom").html(this.Textes.get(name));
            dom.find("#level").html(level);
            
            /**
             * PRIX
             */
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

            this.el.find("#description button#nextLevel").click(function() {
                var itemId = that.currentItem;
                var item = Items.get(itemId);
                
                var restrictions = that.checkRestrictions(item.restrictions);
                if (!restrictions) {
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
        
        this.checkRestrictions = function(restrictions) {
        	var restrictionsRest = [];
        	for (var index in restrictions) {
        		var restriction = restrictions[index];
        		var itemRestrict = Items.get(restriction.name);
        		if (itemRestrict.level < restriction.level) {
        			restrictionsRest.push(restriction);
        		}
        	}
        	return restrictionsRest;
        };
		
		this.init(parent);
	};
});