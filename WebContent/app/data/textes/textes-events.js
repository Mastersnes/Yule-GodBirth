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
			},
			"pasMonProbleme-button" : {
				fr : "Pas mon probléme",
				en : "Not my problem"
			},
	};
	
	return {
		get : function(key) {
			var text = TextesImbolc.get(key);
			if (!text) text = data[key];
			return text;
		}
	};
});
