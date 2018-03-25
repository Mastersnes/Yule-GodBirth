/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "#app";
			this.parent = parent;
			this.Textes = parent.Textes;
		};
		
		this.loop = function() {
//			var ameliorations = this.parent.spaceView.ameliorationView.Items;
//			if (ameliorations.get("grandTout").level == 0) {
//				$("item:not(.grandTout)").hide();
//			}
		};
		
		this.init(parent);
	};
});