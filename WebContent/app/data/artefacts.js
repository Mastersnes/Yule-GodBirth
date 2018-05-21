'use strict';
define([ "jquery" ], function($) {
	var data = {
		"example" : {
			name : "example",
			description : "example-desc",
			avantages : {
				croyance : 0,
				illumination : 0,
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
