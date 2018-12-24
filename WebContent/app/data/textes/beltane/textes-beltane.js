'use strict';
define(["jquery",
        "app/data/textes/beltane/textes-xeno",
        "app/data/textes/beltane/textes-rassemblement"], 
        function($, TextesXeno, TextesRassemblement){
	var data = {
			/**
			 * Premier evenement
			 */
			"beltane-start-event-titre" : {
				fr :"Vers l'infinie !",
				en :"To the infinite !"
			},
			"beltane-start-event" : {
				fr :"Bonjour, maître ! Grâce à vos choix, l'Humanité a bien grandi et est maintenant une fière nation éparpillée dans les nombreux mondes de la galaxie.",
				en :"Hello, master ! Thanks to your choices, Humanity has grown and is now a proud nation scattered in the many worlds of the galaxy."
			},
			"beltane-start2-event" : {
				fr :"De nouvelles prières 2.0 nous parviennent chaque jour ! Saurez-vous y faire face ?",
				en :"New 2.0 prayers are coming in every day! Will you be able to cope ?"
			}
	};
	
	return {
		get : function(key) {
			var text = TextesXeno.get(key);
			if (!text) text = TextesRassemblement.get(key);
			if (!text) text = data[key];
			return text;
		}
	};
});
