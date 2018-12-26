'use strict';
define(["jquery"], 
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"lune-1-event-titre" : {
				fr :"Cet astre sacré",
				en :"This holy star"
			},
			"lune-1-event" : {
				fr :"Depuis des lustres, l'Humanité est attiré par sa beauté et sa grandeur.<br/>S'approchant sans cesse, mais ne pouvant jamais l'atteindre. La Lune ne restera-t-elle qu'un rêve?",
				en :"For ages, Humanity has been attracted by its beauty and greatness.<br/>Approaching constantly, but never being able to reach it. Will the Moon remain only a dream?"
			},

			/**
			 * Conquete
			 */
			"lune-conquete1-event-titre" : {
				fr :"Alpha",
				en :"Alpha"
			},
			"lune-conquete1-event" : {
				fr :"Maître! Nous l'avons fait! Nous avons enfin réussi à construire une fusée capable d'atteindre la Lune!<br/>S'il vous plaît, apportez-nous votre soutien!",
				en :"Master! We did it! We've finally succeeded in building a rocket able to reach the Moon!<br/>Please, give us your support!"
			},
			"lune-conquete1-event-ok" : {
				fr :"Attention! 5... 4... 3... 2... 1... Décollage!<br/>La fusée décolla sans problème. Malheureusement, la trajectoire n’était pas correcte...<br/>L'appareil se perdit dans l'espace infini, on ne le revit plus jamais...",
				en :"Caution! 5... 4... 3... 2... 1... Liftoff!<br/>The rocket lifted off without any problem. Unfortunately, the trajectory was not correct...<br/>The device was lost in infinite space, we never saw it again..."
			},
			"lune-conquete1-event-ko" : {
				fr :"La fusée décolla et parcourut quelques kilomètres avec succès. Malheureusement, en passant l’atmosphère, elle explosa en mille morceaux...<br/>L'Humanité n’était pas prête à atteindre les étoiles...",
				en :"The rocket lifted off and flew a few kilometers successfully. Unfortunately, passing through atmosphere, it exploded into a thousand pieces...<br/>Humanity wasn't ready to reach the stars..."
			},

			"lune-conquete2-event-help-titre" : {
				fr :"Un grand succès",
				en :"A great success"
			},
			"lune-conquete2-event-help" : {
				fr :"Maître, le nouveau modèle de vaisseau est prêt à décoller! Grâce à votre aide, il est maintenant plus précis et plus puissant.<br/>Cette fois-ci c'est sûr, nous allons réussir!",
				en :"Master, the new model ship is ready to lift off! Thanks to your help, it's now more accurate and powerful.<br/>This time it's sure, we'll succeed!"
			},
			"lune-conquete2-event-ok" : {
				fr :"C'est une réussite! Nos hommes ont atteint la Lune! C'est un petit pas pour l'Homme, mais c'est un grand pas pour un dieu tel que vous!",
				en :"It's successful! Our men have reached the Moon! That's one small step for Man, but giant step for a god like you!"
			},

			"lune-conquete2-event-nohelp-titre" : {
				fr :"Débuts difficiles",
				en :"Difficult starts"
			},
			"lune-conquete2-event-nohelp" : {
				fr :"Après de nombreux échecs et de vies perdues, le tout nouveau modèle de vaisseau décolla enfin, transportant à son bord l'espoir de toute l'Humanité.",
				en :"After many failures and lost lives, the brand new model ship finally lifted off, carrying on board the hope of all Humanity."
			},
			"lune-conquete2-event-ko-1" : {
				fr :"Enfin! La fusée avait enfin passé l'étape si difficile de l’atmosphère et s'approchait doucement de l’astre lointain.<br/>Malheureusement, erreur de calcul ou malchance, elle s'écrasa sur la surface lunaire...",
				en :"At last! The rocket had finally passed the so difficult stage of atmosphere and slowly approaching the distant star.<br/>Unfortunately, miscalculation or bad luck, it crashed on the lunar surface..."
			},
			"lune-conquete2-event-ko-2" : {
				fr :"Malgré les nombreuses pertes, la mission était un succès. La Lune avait été atteinte!<br/>En ce jour, l'Humanité brilla par sa détermination et sa persévérance. Rien ne pourrait plus l’arrêter.",
				en :"Despite the many losses, the mission was a success. The Moon had been reached!<br/>On that day, Humanity shone with its determination and perseverance. Nothing could stop it now."
			},

			/**
			 * Etude de la lune
			 */
			"lune-etude1-event-titre" : {
				fr :"Les secrets de l'Univers",
				en :"Secrets of Universe"
			},
			"lune-etude1-event" : {
				fr :"De nombreux Hommes à travers le monde cherchent à percer les secrets de l'Univers.<br/>Torique? Infinie? Ils se trompent tellement... Devrions-nous les aider?",
				en :"Many people around the world are trying to discover the secrets of Universe. <br/>Toric? Infinite? They are so wrong... Should we help them?"
			},
			"lune-etude1-event-aider-button" : {
				fr :"Les aider",
				en :"Help them"
			},
			"lune-etude1-event-help" : {
				fr :"Moult mystères furent révélés à une femme choisie au hasard parmi la population terrestre.<br/>Elle fut chargée de transmettre la vérité à ses semblables... Une nouvelle ère de savoir commença!",
				en :"Many mysteries were revealed to a woman chosen at random from the earthly population.<br/>She was charged to transmit the truth to her own... A new era of knowledge began!"
			},
			"lune-etude1-event-nohelp" : {
				fr :"Les Hommes ne perdirent pas espoir. De nombreux peuples s’allièrent afin de chercher la vérité dans les manifestations spatiales.",
				en :"The men didn't lose hope. Many nations joined their forces to search the truth in space manifestations."
			},
			"lune-etude1-event-nohelp-2" : {
				fr :"À chaque événement, l'Humanité avançait et la sagesse commune grandissait. Une ère de curiosité avait commencé.",
				en :"At each event, Humanity advanced, and common wisdom grew. An era of curiosity had begun."
			},

			/**
			 * Magie de la lune
			 */
			"lune-magie1-event-titre" : {
				fr :"Un soupçon de magie",
				en :"A hint of magic"
			},
			"lune-magie1-event" : {
				fr :"Maître, la magie faiblit peu à peu.<br/>Il semblerait que le monde humain ne permette plus de faire la passerelle avec le monde immatériel.<br/>Que pouvons-nous faire?",
				en :"Master, the magic fades away little by little.<br/>It seems that the human world no longer allows us to link up with the immaterial world.<br/>What can we do?"
			},
			"lune-magie1-event-ko" : {
				fr :"Très vite, la magie disparut du monde des humains.<br/>La Lune, autrefois étincelante, n’était plus qu'une boule de poussière dans le ciel étoilé...",
				en :"Quickly, the magic disappeared from the human world.<br/>The Moon, once sparkling, was nothing more than a ball of dust in the starry sky..."
			},
			"lune-magie1-event-ok" : {
				fr :"Nous avons déjà commencé, maître! Nous en découvrirons bientôt la raison!",
				en :"We've already started, master! We'll soon discover the reason!"
			},

			"lune-magie2-event-titre" : {
				fr :"l'amour d'une déesse",
				en :"A goddess' love"
			},
			"lune-magie2-event" : {
				fr :"C'est la Lune, mon seigneur! Elle perd de sa force! Bientôt, la magie n'existera plus dans le monde humain!",
				en :"It's the Moon, my lord! It loses its strength! Soon, the magic will no longer exist in the human world!"
			},
			"lune-magie2-event-sauver1-button" : {
				fr :"Offrir votre pouvoir",
				en :"Offer your power"
			},
			"lune-magie2-event-sauver1" : {
				fr :"Aussitôt, la Lune retrouva son éclat d'antan. Ne pouvant vous résoudre à la perdre, vous sacrifiâtes une partie de vos pouvoirs divins...<br/>Plus jamais vous ne la laisserez faillir, quitte à en perdre votre immortalité!",
				en :"Immediately, the Moon regained its ancient sparkle. Unable to resolve to lose it, you sacrificed a part of your divine powers...<br/>Never again will you let it fail, even if it means losing your immortality!"
			},
			"lune-magie2-event-sauver2-button" : {
				fr :"Sauver la Lune",
				en :"Save the Moon"
			},
			"lune-magie2-event-sauver2" : {
				fr :"La puissance contenue dans la coupe suffit à raviver l'éclat perdu de l'astre divin.<br/>Sa splendeur éternelle s’éleva dans la galaxie pour le reste des temps...",
				en :"The power contained in the cup was enough to revive the lost sparkle of the divine star.<br/>Its eternal splendor rose in the galaxy for the rest of time..."
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
