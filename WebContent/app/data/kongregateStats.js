'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
			/**
			 * Index des statistiques
			 */
	        "points" : 1
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return data[key];
		},
		list : function() {
		    return data;
		}
	};
});
