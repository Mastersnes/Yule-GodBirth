'use strict';
define(["jquery",
        "app/data/textes/imbolc/textes-imbolc",
        "app/data/textes/ostara/textes-ostara",
        "app/data/textes/beltane/textes-beltane",
        "app/data/textes/litha/textes-litha",
        "app/data/textes/lammas/textes-lammas",
        "app/data/textes/mabon/textes-mabon"], 
        function($, TextesImbolc, TextesOstara, TextesBeltane, TextesLitha, TextesLammas, TextesMabon){
	var data = {
			/**
			 * Boutons standard
			 */
			"enquete-button" : {
				fr :"Enquêter",
				en :"Investigate"
			},
			"intervenir-button" : {
				fr :"Intervenir",
				en :"Intercede"
			},
			"ignore-button" : {
				fr :"Ignorer",
				en :"Ignore"
			},
			"pasMonProbleme-button" : {
				fr :"Pas mon problème",
				en :"Not my problem"
			},
			"le-tuer-button" : {
				fr :"Le tuer",
				en :"Kill him"
			},
			"les-tuer-button" : {
				fr :"Tous les tuer",
				en :"Kill them all"
			},
			"guerir-button" : {
				fr :"Le guérir",
				en :"Heal him"
			},
			"laisser-partir-button" : {
				fr :"Le laisser partir",
				en :"Let him go"
			},
			"enfermer-button" : {
				fr :"Les enfermer",
				en :"Lock them up"
			},
			"les-arreter-button" : {
				fr :"Les arrêter",
				en :"Stop them"
			},
			"laisser-tomber-button" : {
				fr :"Laisser tomber",
				en :"Give up"
			}
	};
	
	return {
		get : function(key) {
			var text = TextesImbolc.get(key);
			if (!text) text = TextesOstara.get(key);
			if (!text) text = TextesBeltane.get(key);
			if (!text) text = TextesLitha.get(key);
			if (!text) text = TextesLammas.get(key);
			if (!text) text = TextesMabon.get(key);
			if (!text) text = data[key];
			return text;
		}
	};
});
