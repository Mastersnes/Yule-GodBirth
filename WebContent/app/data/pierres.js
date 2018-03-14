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
		},
		"rubis" : {
			name : "rubis",
			description : "rubis-desc",
			conditions : [],
			prix : {
				croyance : 500,
				illumination : 1,
			},
			gains : {
				croyance : 15,
				illumination : 0,
				bien : 5,
				mal : 10
			}
		},
		"emeraude" : {
			name : "emeraude",
			description : "emeraude-desc",
			conditions : [],
			prix : {
				croyance : 1000,
				illumination : 2,
			},
			gains : {
				croyance : 15,
				illumination : 0,
				bien : 10,
				mal : 10
			}
		},
		"saphir" : {
			name : "saphir",
			description : "saphir-desc",
			conditions : [],
			prix : {
				croyance : 5000,
				illumination : 5,
			},
			gains : {
				croyance : 20,
				illumination : 0,
				bien : 10,
				mal : -10
			}
		},
		"larme-apache" : {
			name : "larme-apache",
			description : "larme-apache-desc",
			conditions : [],
			prix : {
				croyance : 10000,
				illumination : 10,
			},
			gains : {
				croyance : 20,
				illumination : 5,
				bien : 20,
				mal : -15
			}
		},
		"cristal-de-roche" : {
			name : "cristal-de-roche",
			description : "cristal-de-roche-desc",
			conditions : [],
			prix : {
				croyance : 100000,
				illumination : 100,
			},
			gains : {
				croyance : 30,
				illumination : 10,
				bien : 0,
				mal : 0
			}
		},
		/**
		 * Solaire
		 */
		"grenat" : {
			name : "grenat",
			description : "grenat-desc",
			conditions : [],
			prix : {
				croyance : 1,
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
			if (data[key]) return $.extend(true, {}, data[key]);
			else return null;
		},
		list : function() {
			return data;
		}
	};
});
