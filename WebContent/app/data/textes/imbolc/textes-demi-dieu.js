'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Tyrannie
		 * Start
		 */
		"demi-dieu-start-event-titre" : {
			fr : "Un demi dieu ?",
			en : "-"
		},
		"demi-dieu-start-event" : {
			fr : "",
			en : ""
		}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
