'use strict';
define(["jquery"], function($){
	var data = {
			"deite" : {
				name : "deite",
			    items : ["grandTout", "dieu", "deesse"]
			},
			"univers" : {
				name : "univers",
			    items : ["terre", "lune", "soleil"]
			},
			"vie" : {
				name : "vie",
			    items : ["ciel", "foret", "volcan", "ocean"]
			},
			"mort" : {
				name : "mort",
			    items : ["gouffre", "vide", "chaos", "abysses"]
			}
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		}
	};
});
