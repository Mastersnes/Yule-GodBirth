/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/menu.html",
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
		
		this.showTitle = function(itemId) {
			var item = Items.get(itemId);
			
			this.el.find(".description #nom").html(this.Textes.get(item.name));
			this.el.find(".description #level").html(item.level);

			this.el.find(".description #level-suivant").html(item.level+1);
			
			/**
			 * Gain CURRENT LEVEL
			 */
			var gainCurrent = item.gain();
            this.el.find(".description #croyance-click span").html(gainCurrent.click.croyance);
            if (gainCurrent.click.croyance) this.el.find(".description #croyance-click").show();
            else this.el.find(".description #croyance-click").hide();
            
            this.el.find(".description #illumination-click span").html(gainCurrent.click.illumination);
            if (gainCurrent.click.illumination) this.el.find(".description #illumination-click").show();
            else this.el.find(".description #illumination-click").hide();
            
            this.el.find(".description #croyance-loop span").html(gainCurrent.loop.croyance);
            if (gainCurrent.loop.croyance) this.el.find(".description #croyance-loop").show();
            else this.el.find(".description #croyance-loop").hide();
            
            this.el.find(".description #illumination-loop span").html(gainCurrent.loop.illumination);
            if (gainCurrent.loop.illumination) this.el.find(".description #illumination-loop").show();
            else this.el.find(".description #illumination-loop").hide();
            
			/**
			 * PRIX NEXT LEVEL
			 */
			var prix = item.prix();
			
			this.el.find(".description #croyance-prix span").html(prix.croyance);
			if (prix.croyance) this.el.find(".description #croyance-prix").show();
			else this.el.find(".description #croyance-prix").hide();

			this.el.find(".description #illumination-prix span").html(prix.illumination);
			if (prix.illumination) this.el.find(".description #illumination-prix").show();
			else this.el.find(".description #illumination-prix").hide();
			
			/**
			 * Gain NEXT LEVEL
			 */
			var gainNext = item.gain(item.level+1);
			this.el.find(".description #croyance-click span").html(gainNext.click.croyance);
            if (gainNext.click.croyance) this.el.find(".description #croyance-click").show();
            else this.el.find(".description #croyance-click").hide();
            
            this.el.find(".description #illumination-click span").html(gainNext.click.illumination);
            if (gainNext.click.illumination) this.el.find(".description #illumination-click").show();
            else this.el.find(".description #illumination-click").hide();
            
            this.el.find(".description #croyance-loop span").html(gainNext.loop.croyance);
            if (gainNext.loop.croyance) this.el.find(".description #croyance-loop").show();
            else this.el.find(".description #croyance-loop").hide();
            
            this.el.find(".description #illumination-loop span").html(gainNext.loop.illumination);
            if (gainNext.loop.illumination) this.el.find(".description #illumination-loop").show();
            else this.el.find(".description #illumination-loop").hide();
            
            this.el.find(".description").show();
		};
        
        this.makeEvents = function() {
            var that = this;
            
            $("item").on("click", function() {
            	alert("click");
            });

            $("item").hover(function() {
                var itemId = $(this).attr("id");
                that.showTitle(itemId);
                
                var x = $(this).position().left;
                var y = $(this).offset().top - that.el.find(".description").height();
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