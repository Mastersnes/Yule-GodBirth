'use strict';
define([ "jquery" ], function($) {
	var data = {
		"torque" : {
			name : "torque",
			description : "torque-desc",
			gains : {
				croyance : 200,
				illumination : 50,
				bien : 0,
				mal : 50
			},
		},
		"corne-abondance" : {
			name : "corne-abondance",
			description : "corne-abondance-desc",
			gains : {
				croyance : 150,
				illumination : 100,
				bien : 70,
				mal : 0
			},
		},
		"troisieme-oeil" : {
			name : "troisieme-oeil",
			description : "troisieme-oeil-desc",
			gains : {
				croyance : 200,
				illumination : 200,
				bien : 0,
				mal : 0
			},
		},
		"idole-feu" : {
			name : "idole-feu",
			description : "idole-feu-desc",
			gains : {
				croyance : 200,
				illumination : 100,
				bien : 0,
				mal : 100
			},
		},
		"idole-mort" : {
			name : "idole-mort",
			description : "idole-mort-desc",
			gains : {
				croyance : 300,
				illumination : 200,
				bien : 70,
				mal : 150
			},
		},
		"saint-graal" : {
			name : "saint-graal",
			description : "saint-graal-desc",
			gains : {
				croyance : 100,
				illumination : 300,
				bien : 50,
				mal : 100
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
