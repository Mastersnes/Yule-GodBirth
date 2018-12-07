'use strict';
define(["jquery"
       ],
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"litha-start-event-titre" : {
				fr : "Un étrange phénomène",
				en : "A strange phenomenon"
			},
			"litha-start-event" : {
				fr : "Maître ! Nos astronomes ont repéré un étrange phénomène dans une galaxie très lointaine.",
				en : "Master! Our astronomers have spotted a strange phenomenon in a very distant galaxy."
			},
			"litha-start-event-enquete" : {
				fr : "Bien maître, nous mettons nos meilleurs astronomes sur le sujet !",
				en : "Well, master, we put our best astronomers on the subject!"
			},
			"litha-start-event-ignore" : {
				fr : "Bien maître, nous n'avons pas le temps de nous occuper de ce genre de chose.",
				en : "Well, master, we don't have time to deal with this kind of thing."
			},
			
			"litha-enquete-event-titre" : {
				fr : "Cette pression spirituelle !",
				en : "This spiritual pressure !"
			},
			"litha-enquete-event" : {
				fr : "Notre enquête à porté ses fruits maître ! Il semblerait que deux étoiles soient en train de fusionner.<br/>Nos experts estiment que l’énergie libéré serait capable d’anéantir la galaxie !",
				en : "Our investigation has paid off, master! It seems that two stars are merging. <br/>Our experts believe that the energy released would be able to destroy the galaxy !"
			},
			"litha-enquete-event-laisser" : {
				fr : "L’énergie générée se répercuta dans l'univers tout entier mais n'eut pas l'effet néfaste escompter.<br/>Chaque être ressentie une bonté infinie l'envahir...",
				en : "The energy generated was felt throughout the universe but did not have the harmful effect expected.<br/>Each being felt an infinite goodness invade it..."
			},
			"litha-enquete-event-empeche-button" : {
				fr : "Empêcher",
				en : "Prevent"
			},
			"litha-enquete-event-empeche" : {
				fr : "Impossible malgré votre puissance, les attractions semblent fortement élevées !",
				en : "Impossible despite your power, the attractions seem very high !"
			},
			
			"litha-empeche-event-titre" : {
				fr : "Big Bang",
				en : "Big Bang"
			},
			"litha-empeche-event" : {
				fr : "Un pouvoir sans limite les attirent entre elles !",
				en : "An unlimited power attracts them to each other !"
			},
			"litha-enquete-event-detruire-button" : {
				fr : "Détruire les étoiles",
				en : "Destroy the stars"
			},
			"litha-enquete-event-detruire" : {
				fr : "L'explosion engendra une réaction en chaîne qui se répercuta dans une grande partie de l'Univers...",
				en : "The explosion caused a chain reaction that affected a large part of the Universe..."
			}
	};
	
	return {
		get : function(key) {
			var text = data[key];
			return text;
		}
	};
});
