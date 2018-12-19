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
				fr :"Une grande responsabilité",
				en :"A high responsibility"
			},
			"ostara-start-event" : {
				fr :"Maître, de plus en plus de prières nous parviennent !<br/>Le monde a bien évolué et reconnaît votre grandeur !",
				en :"Master, more and more prayers are coming to us !<br/>The world has evolved well and recognizes your greatness !"
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
