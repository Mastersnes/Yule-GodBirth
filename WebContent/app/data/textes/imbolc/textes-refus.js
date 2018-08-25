'use strict';
define(["jquery",
        "app/data/textes/imbolc/textes-demons",
        "app/data/textes/imbolc/textes-zombie"], function($, TextesDemons, TextesZombie){
	var data = {
		/**
		 * Imbolc - Refus
		 * Demon de feu
		 */
		"refus-desert-event" : {
			fr : "Maitre ! Il semblerait que tout un village se soit transformé en desert ! Que doit-on faire ?",
			en : "Master ! It seems that whole a village has been transformed into a desert ! What should we do ?"
		},
		"refus-desert-event-refus-button" : {
			fr : "Pas mon probléme",
			en : "Not my problem"
		},
		"refus-desert-event-refus" : {
			fr : "Ainsi, Le desert continua à s'étendre...",
			en : "Thus, The desert continued to expand..."
		},
		"refus-desert-event-enquete" : {
			fr : "Plus rien de subsistait dans ce néant de cendre.<br/> Malgré tout, en cherchant dans les decombres, on decouvrit les debris d'une étrange statuette...",
			en : "Nothing survive in this void of ashes.<br/> Despite all, searching through the rubble, the debris of a strange statuette was discovered..."
		},
		
		/**
		 * Sacrifice
		 */
		"refus-sacrifice-event" : {
			fr : "Maître ! Un village sacrifie ses habitants en votre nom ! Que devons nous faire ?",
			en : "Master ! A village sacrifices its inhabitants in your name ! What should we do ?"
		},
		"refus-sacrifice-event-recompense-button" : {
			fr : "Récompensez les",
			en : "Reward them"
		},
		"refus-sacrifice-event-recompense" : {
			fr : "Votre règne, long et prospère, s'étendra jusqu'au confins du monde !",
			en : "Your long and prosperous reign will extend to the limits of the world !"
		},
		"refus-sacrifice-event-arreter-button" : {
			fr : "Arretez les !",
			en : "Stop them !"
		},
		"refus-sacrifice-event-2" : {
			fr : "Ils ne veulent rien entendre ! Ils sont devenus complètement fous !",
			en : "They don't want to hear anything ! They've gone completely crazy !"
		},
		"refus-sacrifice-event-tuer-button" : {
			fr : "Tuez les tous !",
			en : "Kill them all !"
		},
		"refus-sacrifice-event-tuer" : {
			fr : "Plus personne n'entendit parler de ce village... Certaine légende racontent qu'ils auraient désobeits à leur dieu...",
			en : "No one heard from this village anymore... Some legends tell that they disobeyed their god..."
		},
		"refus-sacrifice-event-seisme-button" : {
			fr : "Déclencher un séisme",
			en : "Invoke an earthquake"
		},
		"refus-sacrifice-event-seisme" : {
			fr : "Il semblerait que les habitants ait pris cela comme un signe de votre colére. Plus aucun sacrifice n'aura lieu sur ce sol.",
			en : "It would seems that the inhabitants took this like a sign of your wraith. No more sacrifice will take place here."
		},

		/**
		 * Maladie
		 */
		"refus-maladie-event" : {
			fr : "Maitre ! C'est terrible ! Une maladie inconnue decime un village entier ! Que pouvons nous faire ?",
			en : "Master ! It's terrible ! An unknown illness decimates an entire village ! What could we do ?"
		},
		"refus-maladie-event-enquete" : {
			fr : "Tout est mort sur place et certains cadavres semblent avoir disparus.<br/>Les villages proches parlent de créatures humanoïdes...",
			en : "All is dead here and somes corpses seems to have disappeared.<br/>Nearby villages talk of humanoid creatures..."
		},
		"refus-maladie-event-laisser-button" : {
			fr : "Laisser",
			en : "Let it"
		},
		"refus-maladie-event-laisser" : {
			fr : "Dans les jours qui suivirent, le mal s'étendis aux villages environnant.<br/>Certains parlèrent de créatures humanoïdes...",
			en : "In the following days, the illness spread to nearby villages.<br/>Some peoples talked about humanoid creatures..."
		},
		"refus-maladie-event-bruler-button" : {
			fr : "Brûlez-tout",
			en : "Burn everything"
		},
		"refus-maladie-event-2" : {
			fr : "Maitre ! Mais il reste encore des gens sain !",
			en : "Master ! But there is still healthy people !"
		},
		"refus-maladie-event-bruler-2-button" : {
			fr : "J'ai dit : Brûlez-tout !",
			en : "I said : Burn everything !"
		},
		"refus-maladie-event-bruler" : {
			fr : "Rien ne survecue ce jour là... Les légendes parlent d'un mal qui fut vaincu par le grand dieu.",
			en : "Nothing survive that day... legends talks about an "
		},
		"refus-maladie-event-bruler-malade-button" : {
			fr : "Ne brûlez que les malades",
			en : "Burn only sick people"
		},
		"refus-maladie-event-bruler-malade" : {
			fr : "Plus de la moitié des gens du village brûlèrent ce jour là... Tout le monde perdis quelqu'un de chere.<br/>On jura de ne plus jamais prier...",
			en : "More than half the people in the village burned that day... Everyone lost someone loved.<br/>They swore that they never pray again..."
		},
		"refus-maladie-event-changer-button" : {
			fr : "Changer d'avis",
			en : "Change your mind"
		},

		/**
		 * Question
		 */
		"refus-question-event" : {
			fr : "Maitre ! Certaines personnes pensent que vous n'êtes pas un vrai dieu !",
			en : "Master ! Some peoples think that you're not really a god !"
		},
		"refus-question-event-ignore" : {
			fr : "Les rumeurs continuèrent à se propager puis retombèrent dans l'oubli...",
			en : "Rumours continued to spread and then fell into oblivion..."
		},
		"refus-question-event-punir-button" : {
			fr : "Punir les responsables",
			en : "Punish those responsible"
		},
		"refus-question-event-punir" : {
			fr : "Il fut désormais irréfutable que le dieu existât... Malheureusement, il n'était pas forcément bon...",
			en : "It was now irrefutable that the god existed... Unfortunately, it was not necessarily good..."
		},
		"refus-question-event-dementir-button" : {
			fr : "Démentir",
			en : "Deny"
		},
		"refus-question-event-dementir" : {
			fr : "Les gens sont impressionnés de vous entendre ! Mais certains semblent sceptiques...",
			en : "People are impressed to hear you ! But some seems sceptical..."
		}
	};
	
	return {
		local : null,
		
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			var text = TextesDemons.get(key);
			var text = TextesZombie.get(key);
			if (!text) text = data[key];
			return text;
		}
	};
});
