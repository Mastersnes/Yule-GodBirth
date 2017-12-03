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
			
//			this.refreshItem(itemId);
		};
		
		this.refreshItem = function(itemId) {
			var item = Items.get(itemId);
			
			console.log("Item : ", item);
			
			var title = this.Textes.get(item.name) + "\n";
			title += this.Textes.get("level") + item.level + "\n";

			var prix = item.prix();
			title += this.Textes.get("prix") + "\n";
			if (prix.croyance) title += this.Textes.get("croyance") + prix.croyance + "\n";
			if (prix.illumination) title += this.Textes.get("illumination") + prix.illumination + "\n";
			
			var gain = item.gain();
			console.log(gain);
			title += this.Textes.get("gain") + "\n";
			if (gain.click.croyance || gain.loop.croyance) {
				title += this.Textes.get("croyance");
				if (gain.click.croyance) title += "+" + gain.click.croyance + this.Textes.get("parClick") + "\n";
				if (gain.loop.croyance) title += "+" + gain.click.croyance + this.Textes.get("parSec") + "\n";
			}
			if (gain.click.illumination || gain.loop.illumination) {
				title += this.Textes.get("illumination");
				if (gain.click.illumination) title += "+" + gain.click.illumination + this.Textes.get("parClick") + "\n";
				if (gain.loop.illumination) title += "+" + gain.click.illumination + this.Textes.get("parSec") + "\n";
			}
			itemDom.attr("title", title);
		};
        
        this.makeEvents = function() {
            var that = this;
            
            $("item").off("click");
            $("item").on("click", function() {
            	alert("click");
            });
        };
		
		this.init(parent);
	};
});