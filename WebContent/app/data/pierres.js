'use strict';
define([ "jquery" ], function($) {
	var data = {
	        /**
	         * Primaires
	         */
		"diamant" : {
			name : "diamant",
			description : "diamant-desc",
			conditions : [],
			prix : {
				croyance : 100,
				illumination : 0,
			},
			gains : {
				croyance : 10,
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
			if (data[key]) return $.extend(true, {}, data[key]);
			else return null;
		},
		list : function() {
			return data;
		}
	};
});
