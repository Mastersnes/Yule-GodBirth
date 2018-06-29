'use strict';
define([ "jquery" ], function($) {
	var data = {
		"torque" : {
			name : "torque",
			description : "torque-desc",
			gains : {
				croyance : 10,
				illumination : 0,
				bien : 0,
				mal : 10
			},
		},
		"corne-abondance" : {
			name : "corne-abondance",
			description : "corne-abondance-desc",
			gains : {
				croyance : 10,
				illumination : 0,
				bien : 10,
				mal : 0
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
