'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Croisade
		 * Start
		 */
		"croisade-start-event" : {
			fr : "Des quatre coins du monde, son nom doit retentir ! Les fous et les hérétiques qui ignore son existence doivent être punis !",
			en : "From all over the world, his name must ring out! Fools and heretics who don't know it exists must be punished!"
		},
		"croisade-start-event-2" : {
			fr : "Que l'armée divine se mette en marche et fasse résonner la puissance du dieu ! Que démarre la grande croisade divine !",
			en : "Let the divine army march and make the power of the god resound! Let the great divine crusade begin!"
		},

		/**
		 * Benediction 
		 */
		"croisade-benediction-event" : {
			fr : "Seigneur, ces hérétique nient votre existence ! Ils doivent périrent dans les flammes !",
			en : "Lord, these heretics deny your existence! They must have perished in the flames!"
		},
		"croisade-benediction-event-accept" : {
			fr : "Merci pour votre bénédiction mon dieu ! Nous feront régner votre puissance dans l'univers !",
			en : "Thank you for your blessing, God! We will make your power reign in the universe!"
		},
		"croisade-benediction-event-refus" : {
			fr : "La corruption prend possession de vous mon dieu ! Nous devons tuer ces infidèles qui vous perturbe !",
			en : "Corruption takes possession of you, my god! We must kill those infidels who disturb you!"
		},

		/**
		 * Attaques
		 */
		"croisade-attaques-event" : {
			fr : "De toutes part, des villages se font attaquer par l'armée divine. Des milliers d'innocents meurent en votre nom...",
			en : "On all sides, villages are being attacked by the divine army. Thousands of innocent people die in your name..."
		},
		"croisade-attaques-event-tuer-village-button" : {
			fr : "Détruire les villages",
			en : "Destroy villages"
		},
		"croisade-attaques-event-tuer-village" : {
			fr : "Des flammes surgirent des villages infidèles, réduisant les habitant en cendre. Personne ne peut aller à l'encontre des actes divins !",
			en : "Flames arose from the unfaithful villages, reducing the inhabitants to ashes. No one can go against divine acts!"
		},
		"croisade-attaques-event-tuer-soldat-button" : {
			fr : "Tuer les croisés",
			en : "Killing the crusaders"
		},
		"croisade-attaques-event-tuer-soldat" : {
			fr : "Monseigneur ! Pourquoi avoir tuer nos soldats qui se battent pourtant pour vous !<br/>Nous ne comprenons plus vos actes !",
			en : "My lord! Why did you kill our soldiers who are fighting for you?!<br/>We no longer understand your actions!"
		},
		"croisade-attaques-event-stop-button" : {
			fr : "<bonus>Torque-Arrêter le massacre</bonus>",
			en : "<bonus>Toque-Stop the massacre</bonus>"
		},
		"croisade-attaques-event-stop" : {
			fr : "Toute les armes disparurent en un instant. Les croisés, au milieu du massacre, virent les blessés guérir sous leurs yeux...",
			en : "All the weapons disappeared in an instant. The crusaders, in the midst of the massacre, saw the wounded heal before their eyes..."
		},

		/**
		 * Graal
		 */
		"croisade-graal-event" : {
			fr : "Maître ! Nos éclaireurs rapporte qu'un groupe d’hérétique se cache dans une grotte gardée secrète... enfin jusqu'à aujourd'hui !",
			en : "Master! Our scouts report a group of heretics hiding in a secret cave... at least until today!"
		},
		"croisade-graal-event-ensevelir-button" : {
			fr : "Les ensevelir",
			en : "Bury them"
		},
		"croisade-graal-event-ensevelir" : {
			fr : "Les sages hérétiques furent enterré vivant dans la grotte... leurs secrets avec...",
			en : "The wise heretics were buried alive in the cave... their secrets with..."
		},
		"croisade-graal-event-attaque-button" : {
			fr : "Lancer l'attaque !",
			en : "Launch attack!"
		},
		"croisade-graal-event-attaque" : {
			fr : "Les hérétiques furent défait. Dans les décombres, on découvrit un étrange calice...",
			en : "The heretics were defeated. In the rubble, a strange chalice was discovered..."
		}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
