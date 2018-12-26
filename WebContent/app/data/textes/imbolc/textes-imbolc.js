'use strict';
define(["jquery",
        "app/data/textes/imbolc/textes-accueil",
        "app/data/textes/imbolc/textes-refus",
        "app/data/textes/imbolc/textes-croisade",
        "app/data/textes/imbolc/textes-epreuve"], 
        function($, TextesAccueil, TextesRefus, TextesCroisade, TextesEpreuve){
	var data = {
			/**
			 * Premier evenement
			 */
			"first-event-titre" : {
				fr :"Les débuts d'un dieu",
				en :"Beginning of a god"
			},
			"first-event" : {
				fr :"Maître! Vos fidèles demandent à vous parler. Souhaitez-vous les recevoir?",
				en :"Master! Your faithful ask to talk to you. Do you want to receive them?"
			},
			"first-event-ok" : {
				fr :"Très bien, maître! Je vais les faire entrer.",
				en :"Fine, master! I'll let them in."
			},
			"first-event-ko" : {
				fr :"Très bien. Je vais leur demander de quitter les lieux.",
				en :"Alright. I'll ask them to leave this place."
			},

			/**
			 * Rebellion
			 */
			"rebellion-start-event-titre" : {
				fr :"Rébellion!",
				en :"Rebellion!"
			},
			"rebellion-start-event" : {
				fr :"Maître! Les mortels vous méprisent! Tout est perdu... Plus personne ne croit en vous désormais...",
				en :"Master! Mortals despise you! All is lost... No one believes in you anymore..."
			}
	};
	
	return {
		get : function(key) {
			var text = TextesAccueil.get(key);
			if (!text) text = TextesRefus.get(key);
			if (!text) text = TextesCroisade.get(key);
			if (!text) text = TextesEpreuve.get(key);
			if (!text) text = data[key];
			return text;
		}
	};
});
