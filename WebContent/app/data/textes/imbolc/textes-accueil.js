'use strict';
define(["jquery"], function($){
	var data = {
			/**
			 * Imbolc - Accueil
			 * Pluie
			 */
			"accueil-pluie-event-titre" : {
				fr :"Un jour de pluie",
				en :"Rain day"
			},
			"accueil-pluie-event" : {
				fr :"Bonjour, mon Dieu. Nous sommes une pauvre famille de paysans qui lutte pour survivre.<br/>Pourriez-vous faire tomber la pluie pour améliorer les récoltes ?<br/>Aidez-nous, je vous en prie !",
				en :"Hello my God. We are a poor peasant family wich are strugling to survive.<br/>Could you make the rain down to improve our crops ?<br/>I beg of you, please help us !"
			},
			"accueil-pluie-event-ok" : {
				fr :"Ohh, merci mon Dieu ! Grâce à vous, nous allons pouvoir survivre quelques années de plus. Merci beaucoup !",
				en :"Ohh, thanks my God ! Thanks to you, we will be able to survive a few years more. Thanks a lot !"
			},
			"accueil-pluie-event-ko" : {
				fr :"Comment ? Mais, mes enfants vont mourir cet hiver ! Comment pouvez-vous faire cela ?!",
				en :"What ? But, my children will dies this winter ! How can you do that ?!"
			},

			/**
			 * Sacrifice
			 */
			"accueil-sacrifice-event-titre" : {
				fr :"Une coulée de sang",
				en :"A blood spill"
			},
			"accueil-sacrifice-event" : {
				fr :"Cher maître, acceptez ce sacrifice humain comme preuve de notre foi !<br/>En retour, apportez-nous votre soutien !",
				en :"Dear master, accept this human sacrifice as proof of our faith !<br/>In return, give us your support !"
			},
			"accueil-sacrifice-event-accept" : {
				fr :"Nous continuerons à vous servir comme il se doit, maître. Votre bonté est grande.",
				en :"We'll continue to deserve you properly, master. Your generosity is great."
			},
			"accueil-sacrifice-event-refus" : {
				fr :"Nous comprenons les signes, maître. Nous vous vénérerons désormais comme il se doit.",
				en :"We understand the signs, master. Now, we will honour you properly."
			},
			"accueil-sacrifice-event-tuer-pretre-button" : {
				fr :"Tuer le prêtre en chef",
				en :"Kill the priest in charge"
			},
			"accueil-sacrifice-event-tuer-pretre" : {
				fr :"Oh, maître ! Veuillez accepter nos excuses. Nos pauvres sacrifices sont indignes de votre grandeur.",
				en :"Oh, master ! Please accept our apologies. Our poor sacrifices are unworthy of your greatness."
			},

			/**
			 * Blessure
			 */
			"accueil-blessure-event-titre" : {
				fr :"Ça doit faire mal !",
				en :"It's seems bad !"
			},
			"accueil-blessure-event" : {
				fr :"Arrrghh ! Mon Dieu ! Je vous en supplie, aidez-moi ! Je souffre !!!",
				en :"Arrrghh ! My God ! Please, help me ! I'm suffering !!!"
			},
			"accueil-blessure-event-ok" : {
				fr :"Merci beaucoup, seigneur ! Cette coupure au petit doigt était réellement horrible !",
				en :"Thanks, my lord ! This cut to my little finger was really horrible !"
			},
			"accueil-blessure-event-ko" : {
				fr :"Arrrghh ! Nonnn ! Je suis perdu !!!",
				en :"Arrrghh ! Nooo ! I'm lost !!!"
			},
			"accueil-blessure2-event-ok" : {
				fr :"Merci beaucoup, seigneur ! Vous m'avez sauvé la vie !",
				en :"Thanks, my lord ! You save my life !"
			},

			/**
			 * Question
			 */
			"accueil-question-event-titre" : {
				fr :"Imposteur ?",
				en :"Impostor ?"
			},
			"accueil-question-event" : {
				fr :"Bonjour ! Bon, je n'irai pas par quatre chemins... Êtes-vous un vrai dieu ?",
				en :"Hello ! Well, i won't beat around the bush... Are you a really god ?"
			},
			"accueil-question-event-ok" : {
				fr :"Wahh ! Vraiment ? Je n'arrive pas à y croire !",
				en :"Wahh ! Really ? I just can't believe it !"
			},
			"accueil-question-event-ko" : {
				fr :"Ouai... C'est bien ce que je pensais...",
				en :"Yes... That's just what is thought..."
			}
	};
	
	return {
		get : function(key) {
			var text = data[key];
			return text;
		}
	};
});
