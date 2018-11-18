'use strict';
define(["jquery",
        "app/data/textes/ostara/textes-guerre",
        "app/data/textes/ostara/textes-nature",
        "app/data/textes/ostara/textes-lune"], 
        function($, TextesGuerre, TextesNature, TextesLune){
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
			var text = TextesGuerre.get(key);
			if (!text) text = TextesNature.get(key);
			if (!text) text = TextesLune.get(key);
			if (!text) text = data[key];
			return text;
		}
	};
});
