'use strict';
define([ "jquery" ], function($) {
	var data = {
		"torque" : {
			name : "torque",
			description : "torque-desc",
			gains : {
				croyance : 10,
				illumination : 10,
				bien : 0,
				mal : 10
			},
		},
		"corne-abondance" : {
			name : "corne-abondance",
			description : "corne-abondance-desc",
			gains : {
				croyance : 10,
				illumination : 10,
				bien : 10,
				mal : 0
			},
		},
		"3eme-oeil" : {
			name : "3eme-oeil",
			description : "3eme-oeil-desc",
			gains : {
				croyance : 0,
				illumination : 20,
				bien : 0,
				mal : 0
			},
		},
		"idole-feu" : {
			name : "idole-feu",
			description : "idole-feu-desc",
			gains : {
				croyance : 15,
				illumination : 10,
				bien : 0,
				mal : 10
			},
		},
		"idole-mort" : {
			name : "idole-mort",
			description : "idole-mort-desc",
			gains : {
				croyance : 20,
				illumination : 10,
				bien : 10,
				mal : 10
			},
		},
		"saint-graal" : {
			name : "saint-graal",
			description : "saint-graal-desc",
			gains : {
				croyance : 20,
				illumination : 30,
				bien : 10,
				mal : 30
			},
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
