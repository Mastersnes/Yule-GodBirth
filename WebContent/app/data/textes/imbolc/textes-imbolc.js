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
			"first-event" : {
				fr : "Maître ! Vos fideles demandent à vous parler. Souhaitez-vous les recevoir ?",
				en : "Master ! Your faithful ask to talk to you. Do you want to receive them ?"
			},
			"first-event-ok" : {
				fr : "Très bien maître ! Je vais les faire entrer.",
				en : "Fine Master ! I'll let them in."
			},
			"first-event-ko" : {
				fr : "Très bien. Je vais leur demander de quitter les lieux.",
				en : "Alright Master. I'll ask them to leave this place."
			}
	};
	
	return {
		local : null,
		
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			var text = TextesAccueil.get(key);
			if (!text) TextesRefus.get(key);
			if (!text) TextesCroisade.get(key);
			if (!text) TextesEpreuve.get(key);
			if (!text) text = data[key];
			return text;
		}
	};
});
