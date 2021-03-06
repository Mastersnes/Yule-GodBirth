'use strict';
define(["jquery"], 
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"rassemblement-1-event-titre" : {
				fr :"Rassemblement planétaire",
				en :"Planetary gathering"
			},
			"rassemblement-1-event" : {
				fr :"Voilà maintenant des milliers d'années que l'espèce humaine a conquis les étoiles.<br/>Dispersés sur de nombreux mondes, aux quatre coins du système solaire, les humains se sont perdus... Il est grand temps de les rassembler!",
				en :"It has now been thousand of years since human being conquered the stars.<br/>Dispersed on many worlds, all over the solar system, humans have lost themselves... It's time to gather them together!"
			},

			"rassemblement-button" : {
				fr :"Demander le rassemblement",
				en :"Request the gathering"
			},
			"menacer-button" : {
				fr :"Menacer",
				en :"Threatening"
			},

			/**
			 * Mars
			 */
			"rassemblement-mars-event-titre" : {
				fr :"Rassemblement - Mars",
				en :"Gathering - Mars"
			},
			"rassemblement-mars-event" : {
				fr :"Voici la colonie minière de Mars : Première conquête de l'expansion planétaire. Mars forme la congrégation minière la plus importante de l'Humanité!<br/>Elle possède un impact majeur sur l'économie du système solaire entier.",
				en :"This is the mining colony of Mars : First conquest of global expansion. Mars is the largest mining congregation of Humanity!<br/>It has a major impact on the economy of entire solar system."
			},
			"rassemblement-mars-event-contact" : {
				fr :"Bien le bonjour, noble Dieu. Vous êtes le bienvenu sur la planète Mars, la plus grande des planètes! Après la Terre, bien sûr...",
				en :"Well, hello, noble God. You're welcome to the planet Mars, the greatest of all planets! After the Earth, of course..."
			},
			"rassemblement-mars-event-contact2" : {
				fr :"Malheureusement, nous ne pouvons répondre à votre requête pour le moment...<br/>Comprenez-nous, Mars détient la majeure partie des ressources du système!<br/>Nous ne pouvons laisser les autres peuples nous les voler!",
				en :"Unfortunately, we can't answer your request at the moment...<br/>Understand us, Mars has most of the resources of the system!<br/>We can't let other people steal it from us!"
			},

			"rassemblement-mars2-event-titre" : {
				fr :"Mars - Revendication martienne",
				en :"Mars - Martian claim"
			},
			"rassemblement-mars2-event" : {
				fr :"Bien sûr, nous serions plus à même de discuter si Mars obtenait l'exclusivité sur l'économie humaine. Une banque universelle en somme...<br/>Qu'en pensez-vous?",
				en :"Of course, we would be in a better position to discuss if Mars obtained exclusivity on the human economy. A universal bank, in short...<br/>What do you think?"
			},
			"rassemblement-mars2-event-ko-button" : {
				fr :"Hors de question!",
				en :"No way!"
			},
			"rassemblement-mars2-event-ko" : {
				fr :"Bien... Tout cela est très malheureux, mais je pense que nous ne pouvons nous résoudre à suivre vos indications...",
				en :"Well... All this is very unfortunate, but I think we can't bring ourselves to follow your instructions..."
			},
			"ok-button" : {
				fr :"Bien entendu!",
				en :"Of course!"
			},
			"rassemblement-mars2-event-ok" : {
				fr :"Bien! Nous savions bien que nous pourrions trouver un terrain d'entente...<br/>Vous pouvez d'ores et déjà compter sur notre soutien!",
				en :"Good! We knew we could find common ground..<br/>You can already count on our support!"
			},
			"rassemblement-mars2-event-menace" : {
				fr :"Ravalez vos menaces! Cela ne fonctionnera pas sur nous...",
				en :"Swallow your threats! It won't work on us..."
			},

			"rassemblement-mars3-event-titre" : {
				fr :"Mars - Dur en affaire",
				en :"Mars - Hard in business"
			},
			"rassemblement-mars3-event" : {
				fr :"Nous sommes des hommes d'affaires après tout, nous connaissons le bluff!",
				en :"We are businessmen after all, we know bluffing!"
			},
			"rassemblement-mars3-event-tuer" : {
				fr :"La planète explosa aussitôt dans un torrent de flamme. Ils auraient dû vous écouter...",
				en :"The planet immediately exploded in a torrent of flame. They should have listened to you..."
			},
			"rassemblement-mars3-event-ignore" : {
				fr :"Vous abandonnâtes les négociations. Inutile de perdre votre temps...",
				en :"You abandoned the negotiations. No need to waste your time..."
			},

			/**
			 * Io
			 */
			"rassemblement-io-event-titre" : {
				fr :"Rassemblement - Io",
				en :"Gathering - Io"
			},
			"rassemblement-io-event" : {
				fr :"Voici la capitale énergétique du système solaire : Io. L’énergie volcanique intense de la planète permet d'alimenter tous les mondes humains.",
				en :"This is the energy capital of the solar system : Io. The planet's intense volcanic energy provides power to all human worlds."
			},
			"rassemblement-io-event-contact" : {
				fr :"Nous serions ravis de vous rejoindre. Il nous faut simplement nous entretenir avec le conseil de Io pour quelques formalités...",
				en :"We would be glad to join you. We just need to talk to Io's council for some formalities..."
			},

			"rassemblement-io2-event-titre" : {
				fr :"Io - Juste un peu plus d’énergie",
				en :"Io - Just a little more energy"
			},
			"rassemblement-io2-event" : {
				fr :"Le conseil a délibéré, grand Dieu et nous n'aurons qu'une revendication : des boissons énergisantes!<br/>Voyez-vous, c'est fatigant de travailler ici et on aurait bien besoin d'un peu de jus, si vous voyez ce que je veux dire...",
				en :"The council deliberated, great God and we'll only have one claim: energy drinks!<br/>You see, it's tiring to work here and we would need a little juice, if you know what I mean..."
			},
			"rassemblement-io2-event-ok" : {
				fr :"Pfiou, vous nous sauvez, mon Dieu! En ce qui concerne le rassemblement, c'est d'accord!<br/>De toute façon, on alimente déjà tout le monde gratuitement, alors...",
				en :"Pfiou, you save us, my God! Concerning the gathering, it's okay!<br/>Anyway, we already feed everyone for free, so..."
			},
			"rassemblement-io2-event-ko" : {
				fr :"Comment?! On se crève à la tâche sur cette planète volcanique pour que tout le monde puisse avoir de quoi chauffer son bain, et vous ne pouvez même pas faire cela pour nous?!",
				en :"What?! We're blowing ourselves up on this volcanic planet for everyone can have enough to heat their baths, and you can't even do that for us?!"
			},
			"rassemblement-io3-event-titre" : {
				fr :"Io - Problème de jus",
				en :"Io - Juice problem"
			},
			"rassemblement-io3-event" : {
				fr :"Désormais, cette énergie sera payante et c'est grâce à vous! Dites merci à votre grand dieu hypocrite!",
				en :"From now on, this energy will be expensive and it's thanks to you! Say thank you to your great hypocritical god!"
			},
			"rassemblement-io3-event-menace" : {
				fr :"Nous sommes bien obligés d’obéir... Même si c'est à contrecœur...",
				en :"We are obliged to obey... Even if it's reluctantly..."
			},
			"rassemblement-io3-event-ko" : {
				fr :"Bien. Io sera désormais une planète indépendante! Il en sera ainsi!",
				en :"Well. Io will be an independent planet, now! It will be so!"
			},

			/**
			 * Saturnus
			 */
			"rassemblement-saturnus-event-titre" : {
				fr :"Rassemblement - Saturnus",
				en :"Gathering - Saturnus"
			},
			"rassemblement-saturnus-event" : {
				fr :"Voici Saturnus: une prouesse d'architecture et de science.<br/>Ce satellite artificiel orbite entre Saturne et Uranus et regroupe les plus grands savants de l’espèce humaine!",
				en :"This is Saturnus: a feat of architecture and science.<br/>This artificial satellite orbits between Saturn and Uranus and regroups the greatest scientists of the human species!"
			},
			"rassemblement-saturnus-event-contact" : {
				fr :"Rejoindre les autres peuples? Aha! Et pourquoi cela?",
				en :"Join the other planets? Aha! And why?"
			},

			"rassemblement-saturnus2-event-titre" : {
				fr :"Saturnus - Proposition",
				en :"Saturnus - Suggestion"
			},
			"rassemblement-saturnus2-event" : {
				fr :"Nous avons tout ce que nous désirons sur Saturnus. Que diable pourraient-ils nous apporter de plus?",
				en :"We have everything we want on Saturnus. What the hell could they do for us?"
			},
			"rassemblement-saturnus2-event-menace" : {
				fr :"C'est bien dommage que vous le preniez comme cela... Nous vous pensions un peu plus réfléchis, voyez-vous...",
				en :"It's a shame you feel that way... We thought you were a little more thoughtful, you see..."
			},
			"rassemblement-saturnus2-event-connaissance-button" : {
				fr :"La connaissance absolue",
				en :"The absolute knowledge"
			},
			"rassemblement-saturnus2-event-connaissance" : {
				fr :"Hum! J’avoue que cela attire notre attention... Bien, c'est d'accord. Nous serons des vôtres!",
				en :"Hmm! I must admit that this attracts our attention... Well, that's okay. We'll be among you!"
			},
			"rassemblement-saturnus2-event-mystere-button" : {
				fr :"Un grand mystère",
				en :"A great mystery"
			},
			"rassemblement-saturnus2-event-mystere" : {
				fr :"Hum! J’avoue que cela attire notre curiosité... Bien, c'est d'accord. Nous serons des vôtres!",
				en :"Hmm! I must admit that this attracts our curiosity... Well, that's okay. We'll be among you!"
			},

			/**
			 * Triton
			 */
			"rassemblement-triton-event-titre" : {
				fr :"Rassemblement - Triton",
				en :"Gathering - Triton"
			},
			"rassemblement-triton-event" : {
				fr :"Voici Triton, le bastion principal de toute l'Humanité! Leur armée est si gigantesque, qu'elle représente à elle seule le quart de l’espèce humaine!",
				en :"This is Triton, the main bastion of all Humanity! Their army is so huge that it alone represents a quarter of the human species!"
			},
			"rassemblement-triton-event-contact" : {
				fr :"Compagnie, halte! Il semblerait qu'un avorton qui essaie de se faire passer pour un dieu veuille nous apprendre notre métier!",
				en :"Company, halt! It seems that a runt who tries to pretend to be a god wants to teach us our job!"
			},

			"rassemblement-triton2-event-titre" : {
				fr :"Triton - Rage militaire",
				en :"Triton - Military rage"
			},
			"rassemblement-triton2-event" : {
				fr :"Qu'est-ce qu'il a à dire pour sa défense, le bleu?",
				en :"What does he have to say for his defense, blue?"
			},
			"rassemblement-triton2-event-menace" : {
				fr :"Ahaha! T'es sérieux, l'avorton? Tu as vu comme on est nombreux face à toi?",
				en :"Ahahaha! Are you serious, runt? Have you seen how many we are facing you?"
			},
			"rassemblement-triton2-event-torque-button" : {
				fr :"Resserrer les rangs",
				en :"Close ranks"
			},
			"rassemblement-triton2-event-torque" : {
				fr :"Excusez, chef, on vous avait pas reconnu! Bien entendu, nous serons à vos ordres, chef!",
				en :"Excuse, chief, we didn't recognize you! Of course, we'll be at your command, chief!"
			},

			"rassemblement-triton3-event-titre" : {
				fr :"Triton - Fierté militaire",
				en :"Triton - Military pride"
			},
			"rassemblement-triton3-event" : {
				fr :"Tu veux vraiment t'en prendre à nous tous?",
				en :"Do you really want to hurt us?"
			},
			"rassemblement-triton3-event-tuer-button" : {
				fr :"Tuer le chef",
				en :"Kill the leader"
			},
			"rassemblement-triton3-event-tuer" : {
				fr :"Après cet acte de pure violence, les soldats suivirent vos ordres à la lettre. La plupart étaient contre, mais jamais ouvertement...",
				en :"After this act of pure violence, soldiers followed your orders to the letter. Most were against it, but never openly..."
			},

			/**
			 * Pluton
			 */
			"rassemblement-pluton-event-titre" : {
				fr :"Rassemblement - Pluton",
				en :"Gathering - Pluto"
			},
			"rassemblement-pluton-event" : {
				fr :"Voici Pluton, la planète pénitentiaire. Tous les plus grands criminels que compte l'Humanité sont enfermés ici pour le restant de leurs jours...",
				en :"This is Pluto, the prison planet. All the greatest criminals in Humanity are locked up here for the rest of their lives..."
			},
			"rassemblement-pluton-event-contact" : {
				fr :"Salut, cap'tain! C'est moi le chef ici et c'est à moi que vous causerez!<br/>Devenir vos petits pantins? Bof, ça nous enchante pas vraiment.",
				en :"Hi, cap'tain! I'm the boss here and it's at me that you'll talk!<br/>Become your little puppets? Well, we're not very excited about it."
			},
			"rassemblement-pluton-event-laisser" : {
				fr :"Pluton continua à accueillir chaque jour des prisonniers venant de toute part du système.",
				en :"Pluto continued to receive prisoners from all over the system every day."
			},

			"rassemblement-pluton2-event-titre" : {
				fr :"Pluton - Mauvaise graine",
				en :"Pluto - Bad seed"
			},
			"rassemblement-pluton2-event" : {
				fr :"Mais, si vous nous faites tous sortir de là, nous serons vos plus fidèles soldats! À condition qu'on y retourne jamais, bien entendu...<br/>Alors, marché conclu?",
				en :"But, if you get us all out of here, we'll be your most loyal soldiers! Provided that we never go back, of course...<br/>So, deal made?"
			},
			"rassemblement-pluton2-event-accept" : {
				fr :"Vous ordonnâtes ainsi la libération des pires criminels du système.<br/>Les massacres ne tardèrent pas à arriver, sans se calmer avec le temps...",
				en :"You ordered the release of the worst criminals in the system.<br/>The massacres soon arrived, not calming down over time..."
			},
			"rassemblement-pluton2-event-refus" : {
				fr :"Rahh! J'en étais sûr... Nous n'aurons pas besoin de vous de toute façon pour nous échapper de ce trou à rat. Et ce jour-là...",
				en :"Rahh! I was sure of it... We won't need you anyway to escape from this rathole. And that day..."
			},
			"rassemblement-pluton2-event-raser-button" : {
				fr :"Raser la planète",
				en :"Destroy the planet"
			},
			"rassemblement-pluton2-event-raser" : {
				fr :"La planète explosa aussitôt dans un torrent de flammes.",
				en :"The planet immediately exploded in a torrent of flames."
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
