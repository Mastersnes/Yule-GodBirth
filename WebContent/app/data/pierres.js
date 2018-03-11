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
				croyance : 10,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"rubis" : {
			name : "rubis",
			description : "rubis-desc",
			conditions : [],
			prix : {
				croyance : 20,
				illumination : 0,
			},
			gains : {
				croyance : 20,
				illumination : 0,
				bien : 0,
				mal : 10
			}
		},
		"saphir" : {
			name : "saphir",
			description : "saphir-desc",
			conditions : [],
			prix : {
				croyance : 30,
				illumination : 0,
			},
			gains : {
				croyance : 30,
				illumination : 0,
				bien : 10,
				mal : 0
			}
		},
		"onyx" : {
			name : "onyx",
			description : "onyx-desc",
			conditions : [],
			prix : {
				croyance : 40,
				illumination : 0,
			},
			gains : {
				croyance : -20,
				illumination : 0,
				bien : 0,
				mal : 10
			}
		},
		"emeraude" : {
			name : "emeraude",
			description : "emeraude-desc",
			conditions : [],
			prix : {
				croyance : 50,
				illumination : 0,
			},
			gains : {
				croyance : 50,
				illumination : 0,
				bien : 20,
				mal : -10
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
