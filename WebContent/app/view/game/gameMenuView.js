/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/menu.html",
        "app/data/onglets"],
function($, _, Utils, page, Onglets) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = $("#gameMenu");
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
			var ongletDom = $("<onglet></onglet>");
			ongletDom.attr("class", "text " + ongletId);
			ongletDom.attr("id",ongletId);
			ongletDom.html(ongletId);
			this.el.find("onglets").append(ongletDom);
		};
        
        this.makeEvents = function() {
            var that = this;
        };
		
		this.init(parent);
	};
});