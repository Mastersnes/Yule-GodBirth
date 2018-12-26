'use strict';
define(["jquery"], function($){
	var data = {
			/**
			 * Zombie
			 * Start
			 */
			"zombie-start-event-titre" : {
				fr :"Un bruit dans la nuit",
				en :"A noise in the night"
			},
			"zombie-start-event" : {
				fr :"Au milieu de la nuit, au cœur de la forêt, un homme marchait.",
				en :"In the middle of night, in the heart of the forest, a man was walking."
			},
			"zombie-start-event-2" : {
				fr :"Son pas était lourd, son souffle était rauque... Son seul désire : manger!",
				en :"His step was heavy, his breath was hoarse... His only desire : to eat!"
			},

			/**
			 * Fou
			 */
			"zombie-fou-event-titre" : {
				fr :"Fou furieux",
				en :"Crazy man"
			},
			"zombie-fou-event" : {
				fr :"Maître! Un homme complètement fou se met à attaquer tout le monde sauvagement! Nous devons l’arrêter!",
				en :"Master! A crazy man attacks everyone wildly! We have to stop him! "
			},
			"zombie-fou-event-no" : {
				fr :"L'homme fit plusieurs morts, puis disparut dans la forêt...",
				en :"The man made several deaths, then disappeared in the forest..."
			},
			"zombie-fou-event-tuer-button" : {
				fr :"Le tuer",
				en :"Kill him"
			},
			"zombie-fou-event-tuer" : {
				fr :"L'homme s'écroula au sol. Son apparence laissait penser qu'il était mort depuis quelque temps déjà...",
				en :"The man collapsed to the ground. His appearance suggested that he was dead for a while..."
			},

			/**
			 * Taverne
			 */
			"zombie-taverne-event-titre" : {
				fr :"Une bière, siouplaît!",
				en :"A beer, please!"
			},
			"zombie-taverne-event" : {
				fr :"La bataille faisait rage dans la taverne. Les gros bras tapaient sur les fortes têtes et certains commençaient à mordre comme des animaux!",
				en :"The battle was raging in the tavern. The big arms were hitting the strong heads and some of them were starting to bite like animals!"
			},
			"zombie-taverne-event-no" : {
				fr :"La bagarre se termina en bain de sang. Sur les lieux, il ne restait plus que des lambeaux de chair et des vêtements déchirés...",
				en :"The fight ended in a bloodbath. On this place, all that remained were shreds of flesh and torn clothes..."
			},
			"zombie-taverne-event-boire-button" : {
				fr :"À boire pour tout le monde!",
				en :"Drinks for everyone!"
			},
			"zombie-taverne-event-boire" : {
				fr :"Avec vos encouragements, tout le village participa à la plus grande bagarre de taverne du siècle! On ne retrouva plus personne le lendemain...",
				en :"With your encouragement, the whole village participated to the biggest tavern fight of the century! No one was found the next day..."
			},
			"zombie-taverne-event-enferme" : {
				fr :"On enferma les responsables de la bagarre : des hommes complètement fous et agressifs. Dans les profondeurs de leur cellule, ils ne feraient plus de mal à personne...",
				en :"The people responsible of the fight were locked up : completely crazy and aggressive men. In the depths of their cell, they would no longer harm anyone..."
			},
			"zombie-taverne-event-tuer" : {
				fr :"La taverne fut ensevelie, emportant avec elle les hommes qu'elle comptait. On construisit un tombeau à cet endroit...<br>Certaines légendes disent que l'on peut y entendre le râle des morts la nuit...",
				en :"The tavern was buried, taking with it the men it contained. A tomb was built there...<br>Some legends say that you can hear the death rattle at night..."
			},

			/**
			 * Enfant
			 */
			"zombie-enfant-event-titre" : {
				fr :"Un monstre!",
				en :"Monster!"
			},
			"zombie-enfant-event" : {
				fr :"Mon Dieu! Mon enfant s'est fait mordre par une créature sauvage dans la forêt! Aidez-le, je vous en prie!",
				en :"My God! My child got bit by a wild creature in the forest! Help him, please!"
			},
			"zombie-enfant-event-no" : {
				fr :"Oh non! Mon bébé! Que vais-je faire à présent...",
				en :"Oh no! My baby! What am I going to do now..."
			},
			"zombie-enfant-event-yes" : {
				fr :"C'est merveilleux! Merci, mon Dieu! Merci pour tout!",
				en :"That's wonderful! Thanks, my God! Thanks for everything!"
			},

			/**
			 * Blessure
			 */
			"zombie-blessure-event-titre" : {
				fr :"Outch",
				en :"Outch"
			},
			"zombie-blessure-event" : {
				fr :"Arrrghh! Mon Dieu! Je me suis encore blessé! Aidez-moi! S'il vous plaît!!!",
				en :"Arrrghh! My God! I hurt myself again! Help me! Please!!!"
			},

			/**
			 * Etape 2
			 */
			"zombie-step-event-2-titre" : {
				fr :"Épidémie",
				en :"Epidemic"
			},
			"zombie-step-event-2" : {
				fr :"De plus en plus de malades s'amoncelaient dans les rues, errant dans les allées sombres, s'attaquant à quiconque croisait leur chemin...",
				en :"More and more sick people were piling up in the streets, wandering in the dark alleys, attacking anyone who crossed their path..."
			},

			/**
			 * Groupe
			 */
			"zombie-groupe-event-titre" : {
				fr :"Sauvage",
				en :"Wild"
			},
			"zombie-groupe-event" : {
				fr :"Maître! Un groupe d'hommes sauvages sèment la terreur dans la région!<br/>Ils mordent tout le monde sans raison!",
				en :"Master! A group of wild men spread terror in the neighborhood!<br/>They bite everyone for no reason!"
			},
			"zombie-groupe-event-enfermer" : {
				fr :"Les sauvages restèrent calmes quelque temps dans leur geôle. Ainsi, on les libéra dans une lointaine contrée...",
				en :"The wild men remained calm for a while in their jail. So, they were liberated in a faraway land..."
			},
			"zombie-groupe-event-tuer" : {
				fr :"Les sauvages disparurent sur l'instant. On n’entendit plus jamais parler d'eux...",
				en :"The wild men disappeared immediately. We never heard from them again..."
			},

			/**
			 * Village cata
			 */
			"zombie-cata-event-titre" : {
				fr :"Dans les nuages",
				en :"In the clouds"
			},
			"zombie-cata-event" : {
				fr :"Maître! Un village à l'est semble complètement paralysé! Les habitants restent à regarder dans le vide, sans but...",
				en :"Master! A village at east seems completely paralyzed! The inhabitants remain to stare into space, without goal..."
			},
			"zombie-cata-event-no" : {
				fr :"De nombreux étrangers disparurent dans ce mystérieux village.<br/>Des rumeurs prétendent qu'une armée de morts se dressait en secret...",
				en :"Many foreigners disappeared in this mysterious village.<br/>Rumours claim that an army of dead people were standing in secret..."
			},
			"zombie-cata-event-tuer" : {
				fr :"Le mystérieux village disparut de la surface de la Terre. Plus personne n'osait évoquer son nom...",
				en :"The mysterious village disappeared from the face of Earth. No one dared to mention his name anymore..."
			},

			/**
			 * Village guerre
			 */
			"zombie-guerre-event-titre" : {
				fr :"Guerre des morts",
				en :"Death War"
			},
			"zombie-guerre-event" : {
				fr :"Maître! De nombreux villages s'attaquent entre eux sauvagement!",
				en :"Master! Many villages are attacking each other wildly!"
			},
			"zombie-guerre-event-no" : {
				fr :"Le massacre continua encore et encore. De nombreuses personnes disparurent, mais leurs cadavres ne furent jamais retrouvés...",
				en :"The massacre continued over and over. Many people disappeared, but their corpses were never found..."
			},
			"zombie-guerre-event-arreter" : {
				fr :"Les villages en guerre se trouvèrent bloqués. Les habitants en quarantaine continuèrent à se massacrer un temps, puis stoppèrent les combats.<br/>La situation était maîtrisée...",
				en :"The villages at war were blocked. The quarantined inhabitants continued to massacre each other for a while, and then stopped the fighting.<br/>The situation was under control..."
			},
			"zombie-guerre-event-tuer" : {
				fr :"Tout, à des kilomètres, fut réduit en cendre. Des milliers de personnes périrent dans les flammes.",
				en :"Everything, miles away, was reduced to ashes. Thousands of people perished in the flames."
			},

			/**
			 * Niveau 3
			 * Apocalypse
			 */
			"zombie-step-event-3-titre" : {
				fr :"Apocalypse",
				en :"Apocalypse"
			},
			"zombie-step-event-3" : {
				fr :"C'était la fin... Les morts marchaient sur le monde qui vivait ses derniers instants...",
				en :"That was the end... The dead walked on the world as it lived its last moments..."
			},
			"zombie-step-event-3-laisser" : {
				fr :"Le monde sombra dans le néant, ne laissant que des cadavres puants... Plus rien ne restait, hormis vous et votre pouvoir...",
				en :"The world fell into the void, leaving only stinking corpses... Nothing was left, except you and your power..."
			},
			"zombie-step-event-3-bruler-button" : {
				fr :"Tout brûler",
				en :"Burn it all"
			},
			"zombie-step-event-3-bruler" : {
				fr :"Le monde sombra dans les flammes et toutes âmes disparurent.<br/>Fort heureusement, la vie ne tarda pas à repointer le bout de son nez...",
				en :"The world fell in flames and all souls disappeared.<br/>Fortunately, life didn't take long to reappear..."
			},
			"zombie-step-event-3-invoquer-button" : {
				fr :"Révoquer la mort",
				en :"Revoke Death"
			},
			"zombie-step-event-3-invoquer" : {
				fr :"Faucheuse, maîtresse des morts! Reprends tes ouailles en ton sein et retournes-en à la terre! Ainsi soit-il!",
				en :"Grim reaper, mistress of the dead! Take your flock back into your heart and return to the earth! Amen!"
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
