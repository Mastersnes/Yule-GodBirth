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
			"ostara-start-event-titre" : {
				fr : "Une grande responsabilité",
				en : "-"
			},
			"ostara-start-event" : {
				fr : "Maître de plus en plus de prieres nous parviennent !<br/>Le monde a bien grandit et reconnait votre grandeur !",
				en : "-"
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
