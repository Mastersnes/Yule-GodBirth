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
            
            this.pointManager = parent.pointManager;
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
		};
		
		this.unlockOnglet = function(ongletId, show) {
			if ($("onglet#"+ongletId).length > 0) return;
			
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
			console.log("show : ", ongletId);
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
            
            this.el.find(".description").show();
		};
		
		/**
		 * Permet de remplir les champs de la description
		 */
		this.setDescription = function(domId, name, level, prix, gain) {
		    var dom = this.el.find(".description " + domId);
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
            if (gain.click.croyance) dom.find("#croyance-click").show();
            else dom.find("#croyance-click").hide();
            
            dom.find("#croyance-loop span").html(gain.loop.croyance);
            if (gain.loop.croyance) dom.find("#croyance-loop").show();
            else dom.find("#croyance-loop").hide();
            
            //Illumination
            if (gain.click.illumination || gain.loop.illumination) dom.find("#illumination").show();
            else dom.find("#illumination").hide();
            
            dom.find("#illumination-click span").html(gain.click.illumination);
            if (gain.click.illumination) dom.find("#illumination-click").show();
            else dom.find("#illumination-click").hide();
            
            dom.find("#illumination-loop span").html(gain.loop.illumination);
            if (gain.loop.illumination) dom.find("#illumination-loop").show();
            else dom.find("#illumination-loop").hide();

            //Bien
            if (gain.click.bien || gain.loop.bien) dom.find("#bien").show();
            else dom.find("#bien").hide();
            
            dom.find("#bien-click span").html(gain.click.bien);
            if (gain.click.bien) dom.find("#bien-click").show();
            else dom.find("#bien-click").hide();
            
            dom.find("#bien-loop span").html(gain.loop.bien);
            if (gain.loop.bien) dom.find("#bien-loop").show();
            else dom.find("#bien-loop").hide();

            //Mal
            if (gain.click.mal || gain.loop.mal) dom.find("#mal").show();
            else dom.find("#mal").hide();
            
            dom.find("#mal-click span").html(gain.click.mal);
            if (gain.click.mal) dom.find("#mal-click").show();
            else dom.find("#mal-click").hide();
            
            dom.find("#mal-loop span").html(gain.loop.mal);
            if (gain.loop.mal) dom.find("#mal-loop").show();
            else dom.find("#mal-loop").hide();
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
                var itemId = $(this).attr("id");
                var item = Items.get(itemId);
                
                if (that.pointManager.depenser(item.prix())) {
                    if (item.level == 0 && item.unlock) item.unlock(that);
                	item.level++;
                    $(this).attr("level", item.level);
                    that.showDescription(itemId);
                }else {
                    var dom = $(this); 
                    dom.addClass("error");
                    setTimeout(function() { 
                        dom.removeClass("error");
                    }, 1000);
                }
            });

            $("item").hover(function() {
                var itemId = $(this).attr("id");
                that.showDescription(itemId);
                
                var x = $(this).position().left + parseInt($(this).css('marginLeft'), 10);
                var y = $(this).offset().top - that.el.find(".description").outerHeight();
                that.el.find(".description").css({
                    left : x,
                    top : y
                });
            }, function() {
                that.el.find(".description").hide();
            });
        };
        
        this.makeOngletEvents = function(ongletId) {
        	var that = this;
        	
        	$("onglet#"+ongletId).on("click", function() {
                var ongletId = $(this).attr("id");
                that.showItems(ongletId);
            });
        };
		
		this.init(parent);
	};
});