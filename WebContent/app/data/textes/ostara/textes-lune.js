'use strict';
define(["jquery"], 
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"lune-1-event-titre" : {
				fr : "Cet astre sacré",
				en : "This holy star"
			},
			"lune-1-event" : {
				fr : "Depuis des lustres, l'Homme est attiré par sa beauté et sa grandeur.<br/>S'approchant sans cesse mais ne pouvant jamais l'atteindre. La lune ne restera t-elle qu'un rêve ?",
				en : "For ages, Man has been attracted by his beauty and greatness.<br/>Getting closer and closer but never being able to reach him. Will the moon remain only a dream ?"
			},
			
			/**
			 * Conquete
			 */
			"lune-conquete1-event-titre" : {
				fr : "Alpha",
				en : "Alpha"
			},
			"lune-conquete1-event" : {
				fr : "Maître ! Nous l'avons fait ! Nous avons enfin réussis à construire une fusée capable d'atteindre la lune !<br/>S'il vous plait, apporterez nous votre soutiens !",
				en : "Master ! We did it ! We have finally succeeded in building a rocket capable of reaching the moon !<br/>Please, give us your support !"
			},
			"lune-conquete1-event-ok" : {
				fr : "Attention ! 5... 4... 3... 2... 1... Décollage !<br/>La fusée décolla sans problème. Malheureusement, la trajectoire n’était pas correcte...<br/>L'appareil se perdit dans l'espace infini, on ne le revit plus jamais...",
				en : "Attention ! 5... 4... 3... 2... 1... Takeoff !<br/>The rocket took off without any problem. Unfortunately, the trajectory was not correct...<br/>The device was lost in infinite space, we never saw it again..."
			},
			"lune-conquete1-event-ko" : {
				fr : "La fusée décolla et parcouru quelques kilomètres avec succès. Malheureusement, en passant l’atmosphère, elle explosa en mille morceau...<br/>L'humanité n’était pas prête a atteindre les étoiles...",
				en : "The rocket took off and flew a few kilometers successfully. Unfortunately, as it passed through the atmosphere, it exploded into a thousand pieces...<br/>Humanity was not ready to reach the stars..."
			},
			
			"lune-conquete2-event-help-titre" : {
				fr : "Un grand succès",
				en : "A great success"
			},
			"lune-conquete2-event-help" : {
				fr : "Maître, le nouveau modèle de vaisseau est prêt à décoller ! Grâce à votre aide, il est maintenant plus précis et plus puissant.<br/>Cette fois ci c'est sur, nous allons réussir !",
				en : "Master, the new model ship is ready to take off ! Thanks to your help, it is now more accurate and powerful.<br/>This time it is for sure, we will succeed !"
			},
			"lune-conquete2-event-ok" : {
				fr : "C'est une réussite ! Nos hommes ont atteints la lune ! C'est un petit pas pour l'Homme, mais c'est un grand pas pour un dieu tel que vous !",
				en : "It's a success ! Our men have reached the moon ! It's a small step for Man, but it's a big step for a god like you !"
			},
			
			"lune-conquete2-event-nohelp-titre" : {
				fr : "Débuts difficile",
				en : "Difficult start"
			},
			"lune-conquete2-event-nohelp" : {
				fr : "Après de nombreux échecs et de vies perdu, le tout nouveau modèle de vaisseau décolle enfin du monde des humains transportant à son bord l'espoir de toute l'humanité.",
				en : "After many failures and lost lives, the brand new model ship is finally taking off from the human world, carrying on board the hope of all humanity."
			},
			"lune-conquete2-event-ko-1" : {
				fr : "Enfin ! La fusée avait enfin passé l'étape si difficile de l’atmosphère et s'approchait doucement de l’astre lointain.<br/>Malheureusement, erreur de calcul ou malchance, elle s'écrasa sur la surface lunaire...",
				en : "At last ! The rocket had finally passed the so difficult stage of the atmosphere and was slowly approaching the distant star.<br/>Unfortunately, miscalculation or bad luck, it crashed on the lunar surface..."
			},
			"lune-conquete2-event-ko-2" : {
				fr : "Malgré les nombreuses pertes, la mission était un succès, la lune avait été atteinte !<br/>En ce jour, l'Homme brilla par sa détermination et sa persévérance. Rien ne pourrait plus l’arrêter.",
				en : "Despite the many losses, the mission was a success, the moon had been reached !<br/>Today, Man shone with his determination and perseverance. Nothing could stop him now."
			},
			
			/**
			 * Etude de la lune
			 */
			"lune-etude1-event-titre" : {
				fr : "Les secrets de l'Univers",
				en : "Secrets of Universe"
			},
			"lune-etude1-event" : {
				fr : "De nombreux hommes à travers le monde cherche à percer les secrets de l'univers.<br/>Torique ? Infinie ? Ils se trompent tellement... Devrions-nous les aider ?",
				en : "Many people around the world are trying to unlock the secrets of the universe. <br/>Toric? Infinite? They are so wrong... Should we help them?"
			},
			"lune-etude1-event-aider-button" : {
				fr : "Les aider",
				en : "Help them"
			},
			"lune-etude1-event-help" : {
				fr : "De nombreux mystères furent révéler à une femme choisie au hasard parmi la population terrestre.<br/>Elle fut chargée de révéler la vérité a ses semblable... Une nouvelle ère de savoir commença !",
				en : "Many mysteries were revealed to a woman chosen at random from the earthly population.<br/>She was charged with revealing the truth to her fellow men... A new era of knowledge began !"
			},
			"lune-etude1-event-nohelp" : {
				fr : "Les hommes ne perdirent pas espoirs. De nombreux peuples s’allièrent afin de chercher la vérité dans les manifestations spatiales.",
				en : "The men did not lose hope. Many peoples joined forces to seek the truth in space manifestations."
			},
			"lune-etude1-event-nohelp-2" : {
				fr : "A chaque événement, l'Humanité avançait, et la sagesse commune grandissait. Une ère de curiosité avait commencé.",
				en : "At each event, Humanity advanced, and common wisdom grew. An era of curiosity had begun."
			},
			
			/**
			 * Magie de la lune
			 */
			"lune-magie1-event-titre" : {
				fr : "-",
				en : "-"
			},
			"lune-magie1-event" : {
				fr : "-",
				en : "-"
			},
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
