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
		
		this.unlockOnglet = function(ongletId) {
			if ($("#"+ongletId).length > 0) return;
			
			var ongletDom = $("<onglet></onglet>");
			ongletDom.attr("class", "text " + ongletId);
			ongletDom.attr("id",ongletId);
			ongletDom.attr("title", this.Textes.get(ongletId));
			ongletDom.html(this.Textes.get(ongletId));
			this.el.find("onglets").append(ongletDom);
			
			this.showItems(ongletId);
		};
		
		this.showItems = function(ongletId) {
			this.el.find("content").empty();
			
			var onglet = Onglets.get(ongletId);
			for (var id in onglet.items) {
				var itemId = onglet.items[id];
				this.addItem(itemId);
			}
			
			this.makeEvents();
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
            dom.find("#croyance-click span").html(gain.click.croyance);
            if (gain.click.croyance) dom.find("#croyance-click").show();
            else dom.find("#croyance-click").hide();
            
            dom.find("#illumination-click span").html(gain.click.illumination);
            if (gain.click.illumination) dom.find("#illumination-click").show();
            else dom.find("#illumination-click").hide();
            
            dom.find("#croyance-loop span").html(gain.loop.croyance);
            if (gain.loop.croyance) dom.find("#croyance-loop").show();
            else dom.find("#croyance-loop").hide();
            
            dom.find("#illumination-loop span").html(gain.loop.illumination);
            if (gain.loop.illumination) dom.find("#illumination-loop").show();
            else dom.find("#illumination-loop").hide();
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
        
        this.makeEvents = function() {
            var that = this;
            
            $("item").on("click", function() {
                var itemId = $(this).attr("id");
                var item = Items.get(itemId);
                
                if (that.pointManager.depenser(item.prix())) {
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
		
		this.init(parent);
	};
});