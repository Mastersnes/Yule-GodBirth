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
		"carte-membre-mafia" : {
			name : "carte-membre-mafia",
			description : "carte-membre-mafia-desc",
			gains : {
				croyance : 10,
				illumination : 5,
				bien : 0,
				mal : 15
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
		"idole-glace" : {
			name : "idole-glace",
			description : "idole-glace-desc",
			gains : {
				croyance : 10,
				illumination : 10,
				bien : 10,
				mal : 0
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
