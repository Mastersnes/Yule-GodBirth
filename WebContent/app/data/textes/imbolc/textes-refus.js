'use strict';
define(["jquery",
        "app/data/textes/imbolc/textes-demons",
        "app/data/textes/imbolc/textes-zombie"], function($, TextesDemons, TextesZombie){
	var data = {
			/**
			 * Imbolc - Refus
			 * Demon de feu
			 */
			"refus-desert-event-titre" : {
				fr :"Un village en cendre!",
				en :"A village reduce to ashes!"
			},
			"refus-desert-event" : {
				fr :"Maître! Il semblerait que tout un village se soit transformé en désert! Que doit-on faire?",
				en :"Master! It seems that whole a village has been transformed into a desert! What should we do?"
			},
			"refus-desert-event-refus" : {
				fr :"Ainsi, le désert continua à s'étendre...",
				en :"Thus, The desert continued to spread..."
			},
			"refus-desert-event-enquete" : {
				fr :"Plus rien ne subsistait dans ce néant de cendre.<br/> Malgré tout, en cherchant dans les décombres, on découvrit les débris d'une étrange statuette...",
				en :"Nothing survive in this void of ashes.<br/> Nevertheless, while searching through the rubble, the debris of a strange statuette was discovered..."
			},

			/**
			 * Sacrifice
			 */
			"refus-sacrifice-event-titre" : {
				fr :"Une coulée de sang",
				en :"A blood flow"
			},
			"refus-sacrifice-event" : {
				fr :"Maître! Un village sacrifie ses habitants en votre nom! Que devons-nous faire?",
				en :"Master! A village sacrifices its inhabitants in your name! What should we do?"
			},
			"refus-sacrifice-event-recompense-button" : {
				fr :"Récompensez-les",
				en :"Reward them"
			},
			"refus-sacrifice-event-recompense" : {
				fr :"Votre règne, long et prospère, s'étendra jusqu'aux confins du monde!",
				en :"Your long and prosperous reign will extend to the limits of the world!"
			},
			"refus-sacrifice-event-arreter-button" : {
				fr :"Arrêtez-les!",
				en :"Stop them!"
			},
			"refus-sacrifice-event-2-titre" : {
				fr :"Complètement folle",
				en :"Completely crazy"
			},
			"refus-sacrifice-event-2" : {
				fr :"Ils ne veulent rien entendre! Ils sont devenus complètement fous!",
				en :"They don't want to hear anything! They've gone completely crazy!"
			},
			"refus-sacrifice-event-tuer-button" : {
				fr :"Tuez-les tous!",
				en :"Kill them all!"
			},
			"refus-sacrifice-event-tuer" : {
				fr :"Plus personne n'entendit parler de ce village... Certaines légendes racontent qu'ils auraient désobéi à leur Dieu...",
				en :"No one heard about this village anymore... Some legends tell that they disobeyed their God..."
			},
			"refus-sacrifice-event-seisme-button" : {
				fr :"Déclencher un séisme",
				en :"Starting an earthquake"
			},
			"refus-sacrifice-event-seisme" : {
				fr :"Il semblerait que les habitants aient pris cela comme un signe de votre colère. Plus aucun sacrifice n'aura lieu sur ce sol.",
				en :"It would seems that the inhabitants took this like a sign of your wrath. No more sacrifice will take place here."
			},

			/**
			 * Maladie
			 */
			"refus-maladie-event-titre" : {
				fr :"Un mal sombre",
				en :"This is a disease!"
			},
			"refus-maladie-event" : {
				fr :"Maître! C'est terrible! Une maladie inconnue décime un village entier! Que pouvons-nous faire?",
				en :"Master! It's terrible! An unknown disease decimates an entire village! What could we do?"
			},
			"refus-maladie-event-enquete" : {
				fr :"Sur place, tout était mort et certains cadavres semblaient avoir disparu.<br/>Les villages proches parlèrent de créatures humanoïdes...",
				en :"On place, everything had died and some cadavers seemed to have disappeared.<br/>The nearby villages spoke about humanoid creatures..."
			},
			"refus-maladie-event-laisser" : {
				fr :"Dans les jours qui suivirent, le mal s'étendit aux villages environnants.<br/>Certains parlèrent de créatures humanoïdes...",
				en :"In the following days, the disease spread to nearby villages.<br/>Some peoples spoke about humanoid creatures..."
			},
			"refus-maladie-event-bruler-button" : {
				fr :"Brûlez tout",
				en :"Burn everything"
			},
			"refus-maladie-event-2-titre" : {
				fr :"Le prix d'une vie",
				en :"The price of a life"
			},
			"refus-maladie-event-2" : {
				fr :"Maître! Mais, il reste encore des gens sains!",
				en :"Master! But, there is still healthy people!"
			},
			"refus-maladie-event-bruler-2-button" : {
				fr :"J'ai dit : brûlez tout!",
				en :"I said : Burn everything!"
			},
			"refus-maladie-event-bruler" : {
				fr :"Rien ne survécut ce jour-là... Les légendes parlent d'un mal qui fut vaincu par le grand Dieu.",
				en :"Nothing survived that day... Legends speak of an evil that was defeated by the great God."
			},
			"refus-maladie-event-bruler-malade-button" : {
				fr :"Ne brûlez que les malades",
				en :"Burn only sick people"
			},
			"refus-maladie-event-bruler-malade" : {
				fr :"Plus de la moitié des gens du village brûlèrent ce jour-là... Tout le monde perdit quelqu'un de cher.<br/>On jura de ne plus jamais prier...",
				en :"More than half the people in the village burned that day... Everyone lost someone they loved.<br/>They vowed never to pray again..."
			},
			"refus-maladie-event-changer-button" : {
				fr :"Changer d'avis",
				en :"Change your mind"
			},

			/**
			 * Question
			 */
			"refus-question-event-titre" : {
				fr :"Imposteur?",
				en :"Impostor?"
			},
			"refus-question-event" : {
				fr :"Maître! Certaines personnes pensent que vous n'êtes pas un vrai dieu...",
				en :"Master! Some peoples think that you're not a really god..."
			},
			"refus-question-event-ignore" : {
				fr :"Les rumeurs continuèrent à se propager, puis retombèrent dans l'oubli...",
				en :"The rumours continued to propagate, then fell into oblivion..."
			},
			"refus-question-event-punir-button" : {
				fr :"Punir les responsables",
				en :"Punish those responsible"
			},
			"refus-question-event-punir" : {
				fr :"Il fut désormais irréfutable que le Dieu existât... Malheureusement, il n'était pas forcément bon...",
				en :"It was now irrefutable that the God existed... Unfortunately, it wasn't necessarily good..."
			},
			"refus-question-event-dementir-button" : {
				fr :"Démentir",
				en :"Deny"
			},
			"refus-question-event-dementir" : {
				fr :"Les gens furent impressionnés de vous entendre! Mais certains semblèrent sceptiques...",
				en :"People were impressed to hear you! But some seemed sceptical..."
			}
	};
	
	return {
		get : function(key) {
			var text = TextesDemons.get(key);
			if (!text) text = TextesZombie.get(key);
			if (!text) text = data[key];
			return text;
		}
	};
});
