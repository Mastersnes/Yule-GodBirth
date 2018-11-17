'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Zombie
		 * Start
		 */
		"zombie-start-event-titre" : {
			fr : "Un bruit dans la nuit",
			en : "-"
		},
		"zombie-start-event" : {
			fr : "Au milieu de la nuit, au cœur de la forêt, un homme marche.",
			en : "In the middle of the night, in the heart of the forest, a man walks."
		},
		"zombie-start-event-2" : {
			fr : "Son pas est lourd, son souffle est rauque... Son seul désire, manger !",
			en : "His step is heavy, his breath is hoarse... Her only desire is to eat!"
		},

		/**
		 * Fou
		 */
		"zombie-fou-event-titre" : {
			fr : "Fou furieux",
			en : "Crazy man"
		},
		"zombie-fou-event" : {
			fr : "Maître ! Un homme complètement fou se met à attaquer tout le monde sauvagement ! Nous devons l’arrêter !",
			en : "Master! A crazy man starts attacking everyone savagely! We have to stop him!"
		},
		"zombie-fou-event-no" : {
			fr : "L'homme fit plusieurs mort puis disparut dans la foret...",
			en : "The man made several deaths then disappeared in the forest..."
		},
		"zombie-fou-event-tuer-button" : {
			fr : "Le tuer",
			en : "Kill him"
		},
		"zombie-fou-event-tuer" : {
			fr : "L'homme s'écroule au sol. Son apparence laisse à penser qu'il est mort depuis quelques temps déjà...",
			en : "The man collapses to the ground. His appearance suggests that he has been dead for some time already..."
		},
		
		/**
		 * Taverne
		 */
		"zombie-taverne-event-titre" : {
			fr : "Une biere siouplait !",
			en : "-"
		},
		"zombie-taverne-event" : {
			fr : "La bataille fait rage dans la taverne ! Les gros bras tape sur les fortes têtes !<br/>Et déjà certains commencent à mordre comme des animaux !",
			en : "The battle rages in the tavern! The big arms bang on the strong heads !<br/>And already some start biting like animals !"
		},
		"zombie-taverne-event-no" : {
			fr : "La bagarre se termina en bain de sang. Ne resta plus sur les lieux que des lambeaux de chair et des vêtements déchirés...",
			en : "The fight ended in a bloodbath. Only torn flesh and clothes remained on the scene..."
		},
		"zombie-taverne-event-boire-button" : {
			fr : "À boire pour tout le monde !",
			en : "Drinks for everyone!"
		},
		"zombie-taverne-event-boire" : {
			fr : "Avec vos encouragement tout le village participa à la plus grande bagarre de taverne du siècle. On ne retrouva plus personne le lendemain...",
			en : "With your encouragement the whole village participated in the biggest tavern fight of the century. No one was found the next day..."
		},
		"zombie-taverne-event-enferme" : {
			fr : "On enferma les responsables de la bagarre : des hommes complètement fous et agressif. Ici ils ne feraient plus de mal...",
			en : "Those responsible for the fight were locked up: completely mad and aggressive men. Here they wouldn't do any more harm..."
		},
		"zombie-taverne-event-tuer" : {
			fr : "La taverne fut ensevelie emportant avec elle les hommes qu'elle comptait. On construisit un tombeau à cet endroit...<br>Certaines légendes disent que l'on peut y entendre le râle des mort la nuit...",
			en : "The tavern was buried, taking with it the men it counted. A tomb was built there...<br>Some legends say you can hear the death rattle at night..."
		},

		/**
		 * Enfant
		 */
		"zombie-enfant-event-titre" : {
			fr : "Un monstre !",
			en : "Monster !"
		},
		"zombie-enfant-event" : {
			fr : "Mon dieu ! Mon enfant s'est fait mordre par une créature sauvage dans la foret ! Aidez-le, je vous en pris !",
			en : "Oh, my God! My child got bit by a wild creature in the forest! Help him, please!"
		},
		"zombie-enfant-event-no" : {
			fr : "Oh non ! mon bébé ! Que vais-je faire à présent...",
			en : "Oh no! My baby! What am I going to do now..."
		},
		"zombie-enfant-event-yes" : {
			fr : "C'est merveilleux ! Merci mon dieu ! Merci pour tout !",
			en : "That's wonderful ! Thank god ! Thanks for everything !"
		},

		/**
		 * Blessure
		 */
		"zombie-blessure-event-titre" : {
			fr : "Outch",
			en : "Outch"
		},
		"zombie-blessure-event" : {
			fr : "Arrrghh ! Mon dieu ! Je me suis encore blessé, aidez-moi ! S'il vous plait !!!",
			en : "Arrrghh! Oh, my God! I hurt myself again, help me! Please!!!!"
		},
		
		/**
		 * Etape 2
		 */
		"zombie-step-event-2-titre" : {
			fr : "Epidemie",
			en : "-"
		},
		"zombie-step-event-2" : {
			fr : "De plus en plus de malades s'amoncellent dans les rues, errant dans les allées sombre, s'attaquant à quiconque croise leur chemin...",
			en : "More and more sick people are piling up in the streets, wandering in the dark alleys, attacking anyone who crosses their path..."
		},

		/**
		 * Groupe
		 */
		"zombie-groupe-event-titre" : {
			fr : "Sauvage",
			en : "Savage"
		},
		"zombie-groupe-event" : {
			fr : "Maître ! Un groupe d'homme sauvage sème la terreur dans la région !<br/>Ils mordent tout le monde sans raison !",
			en : "Master ! A group of wild men sows terror in the region !<br/>They bite everyone for no reason !"
		},
		"zombie-groupe-event-enfermer" : {
			fr : "Les sauvages restèrent calme quelques temps dans leur geôle. Ainsi on les libéra dans une lointaine contrée...",
			en : "The savages remained calm for some time in their gaol. So they were set free in a faraway land..."
		},
		"zombie-groupe-event-tuer" : {
			fr : "Les sauvages disparurent sur l'instant. On entendit plus jamais parler d'eux...",
			en : "The savages disappeared immediately. We never heard from them again..."
		},

		/**
		 * Village cata
		 */
		"zombie-cata-event-titre" : {
			fr : "Dans les nuages",
			en : "-"
		},
		"zombie-cata-event" : {
			fr : "Maître ! Un village à l'est semble complètement paralysé ! Les habitants restent à regarder dans le vide, sans but...",
			en : "Master! A village in the east seems completely paralyzed! The inhabitants remain to look into the emptiness, without goal..."
		},
		"zombie-cata-event-no" : {
			fr : "De nombreux étranger disparurent dans ce mystérieux village.<br/>Des rumeurs prétendent qu'une armée de mort se dresse en secret...",
			en : "Many strangers disappeared in this mysterious village.<br/>Rumours claim that an army of death stands in secret..."
		},
		"zombie-cata-event-tuer" : {
			fr : "Le mystérieux village disparut de la surface de la terre. Plus personne n'osait plus évoquer son nom...",
			en : "The mysterious village disappeared from the face of the earth. No one dared to mention his name anymore"
		},

		/**
		 * Village guerre
		 */
		"zombie-guerre-event-titre" : {
			fr : "Guerre des morts",
			en : "Death War"
		},
		"zombie-guerre-event" : {
			fr : "Maître ! De nombreux villages s'attaquent entre eux sauvagement et sans raison !",
			en : "Master! Many villages attack each other savagely and for no reason!"
		},
		"zombie-guerre-event-no" : {
			fr : "Le massacre continua encore et encore. De nombreuses personnes disparurent mais leur cadavre ne furent jamais retrouvé...",
			en : "The slaughter went on and on. Many people disappeared but their bodies were never found..."
		},
		"zombie-guerre-event-arreter" : {
			fr : "Les villages en guerre se trouvèrent bloqué. Les habitant en quarantaine continuèrent à se massacrer un temps puis stoppèrent les combat.<br/>La situation était maîtrisée...",
			en : "The villages at war were blocked. The quarantined inhabitants continued to massacre each other for a time and then stopped the fighting.<br/>The situation was under control..."
		},
		"zombie-guerre-event-tuer" : {
			fr : "Tout à des kilomètres fut réduit en cendre. Des milliers de personne périrent dans les flammes.",
			en : "Everything miles away was reduced to ashes. Thousands perished in the flames."
		},

		/**
		 * Niveau 3
		 * Apocalypse
		 */
		"zombie-step-event-3-titre" : {
			fr : "Apocalypse",
			en : "Apocalypse"
		},
		"zombie-step-event-3" : {
			fr : "C'est la fin... Les morts marchent sur le monde qui vie ses derniers instants...",
			en : "This is the end... The dead walk on the world that lives its last moments..."
		},
		"zombie-step-event-3-laisser" : {
			fr : "Le monde sombra dans le néant ne laissant que des cadavres puant... Plus rien ne resta que vous et votre pouvoir...",
			en : "The world sank into nothing leaving only stinking corpses... Nothing was left but you and your power..."
		},
		"zombie-step-event-3-bruler-button" : {
			fr : "Tout brûler",
			en : "Burn it all"
		},
		"zombie-step-event-3-bruler" : {
			fr : "Le monde sombra dans les flammes et toutes âmes disparurent.<br/>Fort heureusement la vie ne tarda pas à repointer le bout de son nez...",
			en : "The world went down in flames and all souls disappeared.<br/>Fortunately, life didn't take long to reappear..."
		},
		"zombie-step-event-3-invoquer-button" : {
			fr : "<bonus>Idole de mort-Révoquer la mort</bonus>",
			en : "<bonus>Death Idol-Revoke Death</bonus>"
		},
		"zombie-step-event-3-invoquer" : {
			fr : "Faucheuse, maîtresse des morts ! Reprend tes ouailles en ton sein et retourne-en à la terre ! Ainsi soit-il !",
			en : "Grim reaper, mistress of the dead! Take your flock back into your bosom and return to the earth! So be it!"
		},
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
