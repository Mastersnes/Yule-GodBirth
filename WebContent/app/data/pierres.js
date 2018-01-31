'use strict';
define([ "jquery" ], function($) {
	var data = {
		"amethyste" : {
			name : "amethyste",
			description : "amethyste-desc",
			conditions : [],
			prix : {
				croyance : 10,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		}
	};

	return {
		/**
		 * Permet d'appeler un WS
		 */
		get : function(key) {
			return $.extend(true, {}, data[key]);
		},
		list : function() {
			return data;
		}
	};
});
