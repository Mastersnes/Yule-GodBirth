'use strict';
define(["jquery",
        "app/data/textes/imbolc/textes-imbolc"], function($, TextesImbolc){
	var data = {
			/**
			 * Boutons standard
			 */
			"enquete-button" : {
				fr : "Enqueter",
				en : "Investigate"
			},
			"ignore-button" : {
				fr : "Ignorer",
				en : "Ignore"
			}
	};
	
	return {
		local : null,
		
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			var text = TextesImbolc.get(key);
			if (!text) text = data[key];
			return text;
		}
	};
});
