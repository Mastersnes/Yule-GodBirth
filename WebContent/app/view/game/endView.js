/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/end.html"],
function($, _, Utils, page) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = $("#app");
		    this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes,
					points : this.parent.pointManager.points
			};
			this.el.html(template(templateData));
		};
		
		this.init(parent);
	};
});