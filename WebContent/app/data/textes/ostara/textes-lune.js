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
				fr :"Depuis des lustres, l'Homme est attiré par sa beauté et sa grandeur.<br/>S'approchant sans cesse, mais ne pouvant jamais l'atteindre. La lune ne restera-t-elle qu'un rêve ?",
				en :"For ages, Man has been attracted by his beauty and greatness.<br/>Getting closer and closer, but never being able to reach him. Will the moon remain only a dream ?"
			},

			/**
			 * Conquete
			 */
			"lune-conquete1-event-titre" : {
				fr :"Alpha",
				en :"Alpha"
			},
			"lune-conquete1-event" : {
				fr :"Maître ! Nous l'avons fait ! Nous avons enfin réussi à construire une fusée capable d'atteindre la lune !<br/>S'il vous plaît, apportez-nous votre soutien !",
				en :"Master ! We did it ! We have finally succeeded in building a rocket capable of reaching the moon !<br/>Please, give us your support !"
			},
			"lune-conquete1-event-ok" : {
				fr :"Attention ! 5... 4... 3... 2... 1... Décollage !<br/>La fusée décolla sans problème. Malheureusement, la trajectoire n’était pas correcte...<br/>L'appareil se perdit dans l'espace infini, on ne le revit plus jamais...",
				en :"Attention ! 5... 4... 3... 2... 1... Takeoff !<br/>The rocket took off without any problem. Unfortunately, the trajectory was not correct...<br/>The device was lost in infinite space, we never saw it again..."
			},
			"lune-conquete1-event-ko" : {
				fr :"La fusée décolla et parcourut quelques kilomètres avec succès. Malheureusement, en passant l’atmosphère, elle explosa en mille morceaux...<br/>L'humanité n’était pas prête à atteindre les étoiles...",
				en :"The rocket took off and flew a few kilometers successfully. Unfortunately, as it passed through the atmosphere, it exploded into a thousand pieces...<br/>Humanity was not ready to reach the stars..."
			},

			"lune-conquete2-event-help-titre" : {
				fr :"Un grand succès",
				en :"A great success"
			},
			"lune-conquete2-event-help" : {
				fr :"Maître, le nouveau modèle de vaisseau est prêt à décoller ! Grâce à votre aide, il est maintenant plus précis et plus puissant.<br/>Cette fois-ci c'est sûr, nous allons réussir !",
				en :"Master, the new model ship is ready to take off ! Thanks to your help, it is now more accurate and powerful.<br/>This time it is for sure, we will succeed !"
			},
			"lune-conquete2-event-ok" : {
				fr :"C'est une réussite ! Nos hommes ont atteint la lune ! C'est un petit pas pour l'Homme, mais c'est un grand pas pour un dieu tel que vous !",
				en :"It's a success ! Our men have reached the moon ! It's a small step for Man, but it's a big step for a god like you !"
			},

			"lune-conquete2-event-nohelp-titre" : {
				fr :"Débuts difficiles",
				en :"Difficult starts"
			},
			"lune-conquete2-event-nohelp" : {
				fr :"Après de nombreux échecs et de vies perdues, le tout nouveau modèle de vaisseau décolla enfin, transportant à son bord l'espoir de toute l'humanité.",
				en :"After many failures and lost lives, the brand new model ship is finally taking off, carrying on board the hope of all humanity."
			},
			"lune-conquete2-event-ko-1" : {
				fr :"Enfin ! La fusée avait enfin passé l'étape si difficile de l’atmosphère et s'approchait doucement de l’astre lointain.<br/>Malheureusement, erreur de calcul ou malchance, elle s'écrasa sur la surface lunaire...",
				en :"At last ! The rocket had finally passed the so difficult stage of the atmosphere and was slowly approaching the distant star.<br/>Unfortunately, miscalculation or bad luck, it crashed on the lunar surface..."
			},
			"lune-conquete2-event-ko-2" : {
				fr :"Malgré les nombreuses pertes, la mission était un succès. La lune avait été atteinte !<br/>En ce jour, l'Homme brilla par sa détermination et sa persévérance. Rien ne pourrait plus l’arrêter.",
				en :"Despite the many losses, the mission was a success. The moon had been reached !<br/>Today, Man shone with his determination and perseverance. Nothing could stop him now."
			},

			/**
			 * Etude de la lune
			 */
			"lune-etude1-event-titre" : {
				fr :"Les secrets de l'Univers",
				en :"Secrets of Universe"
			},
			"lune-etude1-event" : {
				fr :"De nombreux Hommes à travers le monde cherchent à percer les secrets de l'Univers.<br/>Torique ? Infinie ? Ils se trompent tellement... Devrions-nous les aider ?",
				en :"Many people around the world are trying to unlock the secrets of the Universe. <br/>Toric? Infinite? They are so wrong... Should we help them ?"
			},
			"lune-etude1-event-aider-button" : {
				fr :"Les aider",
				en :"Help them"
			},
			"lune-etude1-event-help" : {
				fr :"Moult mystères furent révélés à une femme choisie au hasard parmi la population terrestre.<br/>Elle fut chargée de révéler la vérité à ses semblables... Une nouvelle ère de savoir commença !",
				en :"Many mysteries were revealed to a woman chosen at random from the earthly population.<br/>She was charged with revealing the truth to her fellow men... A new era of knowledge began !"
			},
			"lune-etude1-event-nohelp" : {
				fr :"Les Hommes ne perdirent pas espoir. De nombreux peuples s’allièrent afin de chercher la vérité dans les manifestations spatiales.",
				en :"The men did not lose hope. Many peoples joined forces to seek the truth in space manifestations."
			},
			"lune-etude1-event-nohelp-2" : {
				fr :"À chaque événement, l'humanité avançait et la sagesse commune grandissait. Une ère de curiosité avait commencé.",
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
				fr :"Maître, la magie faiblit peu à peu.<br/>Il semblerait que le monde humain ne permette plus de faire la passerelle avec le monde immatériel.<br/>Que pouvons-nous faire ?",
				en :"Master, the magic is gradually weakening.<br/>It seems that the human world no longer allows us to build bridges with the immaterial world.<br/>What can we do ?"
			},
			"lune-magie1-event-ko" : {
				fr :"Très vite, la magie disparut du monde des humains.<br/>La lune, autrefois étincelante, n’était plus qu'une boule de poussière dans le ciel étoilé...",
				en :"Very quickly, the magic disappeared from the human world.<br/>The moon, once sparkling, was nothing more than a ball of dust in the starry sky..."
			},
			"lune-magie1-event-ok" : {
				fr :"Nous avons déjà commencé, maître ! Nous en découvrirons bientôt la raison !",
				en :"We have already started, master! We will soon discover the reason!"
			},

			"lune-magie2-event-titre" : {
				fr :"l'amour d'une déesse",
				en :"the love of a goddess"
			},
			"lune-magie2-event" : {
				fr :"C'est la lune, mon seigneur ! Elle perd de sa force ! Bientôt, la magie n'existera plus dans le monde humain !",
				en :"It is the moon, my lord ! It loses its strength ! Soon, magic will no longer exist in the human world!"
			},
			"lune-magie2-event-sauver1-button" : {
				fr :"Offrir votre pouvoir",
				en :"Offer your power"
			},
			"lune-magie2-event-sauver1" : {
				fr :"Aussitôt, la lune retrouva son éclat d'antan. Ne pouvant vous résoudre à la perdre, vous sacrifiâtes une partie de vos pouvoirs divins...<br/>Plus jamais vous ne la laisserez faillir, quitte à en perdre votre immortalité !",
				en :"Immediately, the moon regained its former glory. Unable to resolve to lose it, you sacrificed part of your divine powers...<br/>Never again will you let it fail, even if it means losing your immortality !"
			},
			"lune-magie2-event-sauver2-button" : {
				fr :"Sauver la lune",
				en :"Save the moon"
			},
			"lune-magie2-event-sauver2" : {
				fr :"La puissance contenue dans la coupe suffit à raviver l'éclat perdu de l'astre divin.<br/>Sa splendeur éternelle s’éleva dans la galaxie pour le reste des temps...",
				en :"The power contained in the cup is enough to revive the lost shine of the divine star.<br/>Its eternal splendor rose in the galaxy for the rest of time..."
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
