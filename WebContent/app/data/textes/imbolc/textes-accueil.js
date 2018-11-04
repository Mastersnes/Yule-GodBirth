'use strict';
define(["jquery",
        "app/data/textes/imbolc/textes-tyrannie"], function($, TextesTyrannie){
	var data = {
		/**
		 * Imbolc - Accueil
		 * Pluie
		 */
		"accueil-pluie-event-titre" : {
			fr : "Un jour de pluie",
			en : "Rain day"
		},
		"accueil-pluie-event" : {
			fr : "Bonjour mon dieu. Nous sommes une pauvre famille de paysan qui luttont pour survivre.<br/>Pourriez-vous faire tomber la pluie pour ameliorer les recoltes ?<br/>Aidez-nous, je vous en prie !",
			en : "Hello my god. We are a poor peasant family wich are strugling to survive.<br/>Could you make the rain down to improve our crops ?<br/>I beg of you, please help us !"
		},
		"accueil-pluie-event-ok" : {
			fr : "Ohh merci mon dieu ! Grâce à vous nous allons pouvoir survivre quelques années de plus. Merci beaucoup !",
			en : "Ohh thanks my god ! thanks to you, we will be able to survive a few years more. Thanks a lot !"
		},
		"accueil-pluie-event-ko" : {
			fr : "Comment ? Mes enfants vont mourir cet hiver ! Comment pouvez vous faire cela ?!",
			en : "What ? My children will dies this winter ! How can you do that ?!"
		},
		
		/**
		 * Sacrifice
		 */
		"accueil-sacrifice-event-titre" : {
			fr : "Une coulée de sang",
			en : "A blood ???"
		},
		"accueil-sacrifice-event" : {
			fr : "Cher maitre ! Acceptez ce sacrifice humain comme preuve de notre foi.<br/>Apportez-nous en retour votre soutien ! Ainsi soit-il...",
			en : "Dear Master ! Accept this human sacrifice as proof of our faith.<br/>In return, give us your support ! May it be..."
		},
		"accueil-sacrifice-event-accept" : {
			fr : "Nous continuerons à vous servir comme il se doit maitre. Votre bonté est grande.",
			en : "We'll continue to deserve you properly, master. Your generosity is great."
		},
		"accueil-sacrifice-event-refus" : {
			fr : "Nous comprenons les signes maitre. Nous vous venererons desormais comme il se doit.",
			en : "We understand the signs master. Now, we will honour you properly."
		},
		"accueil-sacrifice-event-tuer-pretre-button" : {
			fr : "Tuer le pretre en chef",
			en : "Kill the priest in charge"
		},
		"accueil-sacrifice-event-tuer-pretre" : {
			fr : "Oh maitre, veuillez accepter nos excuse. Nos pauvres sacrifices sont indigne de votre grandeur.",
			en : "Oh master, please accept our apologies. Our poor sacrifices are unworthy of your greatness."
		},

		/**
		 * Blessure
		 */
		"accueil-blessure-event-titre" : {
			fr : "Ca doit faire mal !",
			en : "It's seems bad !"
		},
		"accueil-blessure-event" : {
			fr : "Arrrghh ! Mon dieu ! Je vous en supplie, aidez-moi ! Je souffre !!!",
			en : "Arrrghh ! My god ! Please, help me ! I'm suffering !!!"
		},
		"accueil-blessure-event-ok-button" : {
			fr : "Le guerir",
			en : "Heal him"
		},
		"accueil-blessure-event-ok" : {
			fr : "Merci beaucoup seigneur ! Cette coupure au petit doigt etait reellement horrible !",
			en : "Thanks my lord ! This cut to my little finger was really horrible !"
		},
		"accueil-blessure-event-ko" : {
			fr : "Arrrghh ! Nonnn ! Je suis perdu !!!",
			en : "Arrrghh ! Nooo ! I'm lost !!!"
		},
		"accueil-blessure2-event-ok" : {
			fr : "Merci beaucoup seigneur ! Vous m'avez sauver la vie !",
			en : "Thanks my lord ! You save my life !"
		},

		/**
		 * Riche
		 */
		"accueil-riche-event-titre" : {
			fr : "Une richesse infinie",
			en : "-"
		},
		"accueil-riche-event" : {
			fr : "Cher dieu, les affaires ne vont pas fort en ce moment.<br/>J'aimerai être le plus riche des hommes !<br/>Je saurai vous recompenser...",
			en : "Dear god, business is not going well rencently. I would like to be the richest man !<br/>I would know how to reward you..."
		},
		"accueil-riche-event-ok" : {
			fr : "Oh yeah ! Les affaires reprennent ! Vous ne serez pas déçu !",
			en : "Oh men ! Business is back ! You won't be disapointed !"
		},
		"accueil-riche-event-ko" : {
			fr : "Dieu pathetique... Vous n'avez aucune ambition !",
			en : "pathetic god... You don't have any ambition"
		},
		"accueil-riche-event-2-titre" : {
			fr : "Impardonnable",
			en : "-"
		},
		"accueil-riche-event-2" : {
			fr : "Ce mortel vous a insulté ! Souhaitez-vous le punir ?",
			en : "This mortal insulted you ! Do you want to punish him ?"
		},
		"accueil-riche-event-tuer-button" : {
			fr : "Le tuer",
			en : "Kill him"
		},
		"accueil-riche-event-tuer" : {
			fr : "L'homme s'ecroule, sans même s'en rendre compte...",
			en : "The man collapse, without realizing it..."
		},
		"accueil-riche-event-partir-button" : {
			fr : "Le laisser partir",
			en : "Let him go"
		},
		"accueil-riche-event-partir" : {
			fr : "À jamais, dieu de pacotille !",
			en : "Goodbye, junk god !"
		},
		
		/**
		 * Question
		 */
		"accueil-question-event-titre" : {
			fr : "Imposteur ?",
			en : "-"
		},
		"accueil-question-event" : {
			fr : "Bonjour ! Bon, je n'irais pas par quatres chemins... êtes-vous un vrai dieu ?",
			en : "Hello ! Well, i won't beat around the bush... Are you a really god ?"
		},
		"accueil-question-event-ok" : {
			fr : "Wahh ! Vraiment ? Je n'arrive pas à y croire !",
			en : "Wahh ! Really ? I just can't believe it !"
		},
		"accueil-question-event-ko" : {
			fr : "Ouai... C'est bien ce que je pensais...",
			en : "Yes... That's just what is thought..."
		}
	};
	
	return {
		get : function(key) {
			var text = TextesTyrannie.get(key);
			if (!text) text = data[key];
			return text;
		}
	};
});
