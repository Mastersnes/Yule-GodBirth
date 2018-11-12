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
			"accueil-riche-event-tuer-button" : {
				fr : "Le tuer",
				en : "Kill him"
			},
			"accueil-blessure-event-ok-button" : {
				fr : "Le guerir",
				en : "Heal him"
			},
			"accueil-riche-event-partir-button" : {
				fr : "Le laisser partir",
				en : "Let him go"
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
