'use strict';
define(["jquery"], function($){
	var data = {
			/**
			 * Croisade
			 * Start
			 */
			"croisade-start-event-titre" : {
				fr :"Guerre sacrée",
				en :"Holy war"
			},
			"croisade-start-event" : {
				fr :"Des quatre coins du monde, son nom doit retentir ! Les fous et les hérétiques qui ignorent son existence doivent être punis !",
				en :"From all over the world, his name must ring out ! Fools and heretics who don't know it exists must be punished !"
			},
			"croisade-start-event-2" : {
				fr :"Que l'armée divine se mette en marche et fasse résonner la puissance du Dieu ! Que démarre la grande croisade divine !",
				en :"Let the divine army march and make the power of the god resound ! Let the great divine crusade begin !"
			},

			/**
			 * Benediction 
			 */
			"croisade-benediction-event-titre" : {
				fr :"Feu sacré",
				en :"Holy fire"
			},
			"croisade-benediction-event" : {
				fr :"Seigneur, ces hérétiques nient votre existence ! Ils doivent périr dans les flammes !",
				en :"Lord, these heretics deny your existence ! They must perish in the flames !"
			},
			"croisade-benediction-event-accept" : {
				fr :"Merci pour votre bénédiction, mon Dieu ! Nous ferons régner votre puissance dans l'Univers !",
				en :"Thank you for your blessing, my God ! We will make your power reign in the Universe !"
			},
			"croisade-benediction-event-refus" : {
				fr :"La corruption prend possession de vous, mon Dieu ! Nous devons tuer ces infidèles qui vous perturbent !",
				en :"Corruption takes possession of you, my god ! We must kill those infidels who disturb you !"
			},

			/**
			 * Attaques
			 */
			"croisade-attaques-event-titre" : {
				fr :"Croisade",
				en :"Crusade"
			},
			"croisade-attaques-event" : {
				fr :"Maître ! De toute part, des villages se font attaquer par l'armée divine. Des milliers d'innocents meurent en votre nom...",
				en :"Master ! From all sides, villages are attack by the divine army. Thousands of innocent people die in your name..."
			},
			"croisade-attaques-event-tuer-village-button" : {
				fr :"Détruire les villages",
				en :"Destroy villages"
			},
			"croisade-attaques-event-tuer-village" : {
				fr :"Des flammes surgirent des villages infidèles, réduisant les habitants en cendre. Personne ne peut aller à l'encontre des actes divins !",
				en :"Flames arose from the unfaithful villages, reducing the inhabitants to ashes. No one can go against divine acts !"
			},
			"croisade-attaques-event-tuer-soldat-button" : {
				fr :"Tuer les croisés",
				en :"Killing the crusaders"
			},
			"croisade-attaques-event-tuer-soldat" : {
				fr :"Mon seigneur ! Pourquoi avoir tuer nos soldats qui se battent pourtant pour vous !<br/>Nous ne comprenons plus vos actes !",
				en :"My lord ! Why did you kill our soldiers who are fighting for you ?!<br/>We no longer understand your actions !"
			},
			"croisade-attaques-event-stop-button" : {
				fr :"Arrêter le massacre",
				en :"Stop the massacre"
			},
			"croisade-attaques-event-stop" : {
				fr :"Toutes les armes disparurent en un instant. Les croisés, au milieu du massacre, virent les blessés guérir sous leurs yeux...",
				en :"All the weapons disappeared in an instant. The crusaders, in the midst of the massacre, saw the wounded heal before their eyes..."
			},

			/**
			 * Graal
			 */
			"croisade-graal-event-titre" : {
				fr :"Étrange grotte",
				en :"Strange cave"
			},
			"croisade-graal-event" : {
				fr :"Maître ! Nos éclaireurs rapportent qu'un groupe d’hérétiques se cache dans une grotte gardée secrète... Enfin, jusqu'à aujourd'hui !",
				en :"Master ! Our scouts report a group of heretics hiding in a secret cave... At least until today !"
			},
			"croisade-graal-event-ensevelir-button" : {
				fr :"Les ensevelir",
				en :"Bury them"
			},
			"croisade-graal-event-ensevelir" : {
				fr :"Les sages hérétiques furent enterrés vivants dans la grotte... Leurs secrets avec...",
				en :"The wise heretics were buried alive in the cave... Their secrets with..."
			},
			"croisade-graal-event-attaque-button" : {
				fr :"Lancer l'attaque !",
				en :"Launch attack!"
			},
			"croisade-graal-event-attaque" : {
				fr :"Les hérétiques furent défaits. Dans les décombres, on découvrit un étrange calice...",
				en :"The heretics were defeated. In the rubble, a strange chalice was discovered..."
			},
			"croisade-graal-event-laisser-button" : {
				fr :"Les laisser vivre",
				en :"Let them alive"
			},
			"croisade-graal-event-laisser" : {
				fr :"Les croisés s'en allèrent, laissant la grotte intacte.<br/>On perdit toute trace des hérétiques de la grotte...",
				en :"The crusaders left, leaving the cave intact.<br/>The heretics of the cave were lost..."
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
