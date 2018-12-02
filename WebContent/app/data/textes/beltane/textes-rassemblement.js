'use strict';
define(["jquery"], 
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"rassemblement-1-event-titre" : {
				fr : "Rassemblement Planétaire",
				en : "Planetary Gathering"
			},
			"rassemblement-1-event" : {
				fr : "Voilà maintenant des milliers d'années que l'espece humaine a conquis les étoiles.<br/>Dispersé sur de nombreux mondes, au quatre coins du système solaire, les Hommes se sont perdus... Il est grand temps de les rassembler !",
				en : "It has now been thousand of years since human being conquered the stars.<br/>Dispersed on many worlds, at the four corners of the solar system, men have lost themselves... It is high time to gather them together !"
			},
			
			"rassemblement-button" : {
				fr : "Demander le rassemblement",
				en : "-"
			},
			"menacer-button" : {
				fr : "Menacer",
				en : "Threatening"
			},
			
			/**
			 * Mars
			 */
			"rassemblement-mars-event-titre" : {
				fr : "Rassemblement - Mars",
				en : "Gathering - Mars"
			},
			"rassemblement-mars-event" : {
				fr : "Voici la colonie minière de Mars : Première conquête de l'expansion planétaire. Mars forme la congrégation minière la plus importante de l'Humanité.<br/>Elle possède un impact majeur sur l'économie du système solaire entier.",
				en : "This is the mining colony of Mars : First conquest of global expansion. Mars is the largest mining congregation on Earth.<br/>It has a major impact on the economy of entire solar system."
			},
			"rassemblement-mars-event-contact" : {
				fr : "Bien le bonjour noble Dieu. Vous êtes le bienvenue sur la planète mars, la plus grande des planète ! Après la Terre bien sur...",
				en : "Well, hello, noble God. You are welcome to the planet Mars, the largest of all the planets ! After the Earth of course..."
			},
			"rassemblement-mars-event-contact2" : {
				fr : "Malheureusement, nous ne pouvons répondre à votre requête pour le moment...<br/>Comprenez-nous, Mars détiens la majeur partie des ressources du système !<br/>Nous ne pouvons laisser les autres peuples nous les voler !",
				en : "Unfortunately, we cannot answer your request at the moment...<br/>Understand us, Mars has most of the resources of the system !<br/>We can't let other people steal them from us !"
			},
			
			"rassemblement-mars2-event-titre" : {
				fr : "Mars - Revendication martienne",
				en : "Mars - Martian claim"
			},
			"rassemblement-mars2-event" : {
				fr : "Bien sur, nous seront plus à même de discuter si mars obtenait l'exclusivité sur l'économie humaine. Une banque universelle en somme...<br/>Qu'en pensez-vous ?",
				en : "Of course, we will be better able to discuss whether March would get exclusivity on the human economy. In short, a universal bank...<br/>What do you think ?"
			},
			"rassemblement-mars2-event-ko-button" : {
				fr : "Hors de question !",
				en : "No way !"
			},
			"rassemblement-mars2-event-ko" : {
				fr : "Bien... Tout cela est très malheureux mais je pense que nous ne pouvons nous résoudre à suivre vos indications...",
				en : "Well... All this is very unfortunate but I think we cannot bring ourselves to follow your instructions..."
			},
			"rassemblement-mars2-event-ok-button" : {
				fr : "Bien entendu !",
				en : "Of course !"
			},
			"rassemblement-mars2-event-ok" : {
				fr : "Bien ! Nous savions bien que nous pourrions trouver un terrain d'entente !<br/>Vous pouvez d'ores et déjà compter sur notre soutien !",
				en : "Good ! We knew we could find common ground !<br/>You can already count on our support !"
			},
			"rassemblement-mars2-event-menace" : {
				fr : "Ravalez vos menaces, cela ne fonctionnera pas sur nous...",
				en : "Swallow your threats, it won't work on us..."
			},
			
			"rassemblement-mars3-event-titre" : {
				fr : "Mars - Dur en affaire",
				en : "Mars - Hard in business"
			},
			"rassemblement-mars3-event" : {
				fr : "Nous sommes des hommes d'affaire après tout, nous connaissons le bluff !",
				en : "We are businessmen after all, we know bluffing !"
			},
			"rassemblement-mars3-event-tuer" : {
				fr : "La planète explosa aussitôt dans un torrent de flamme. Ils auraient du vous écouter...",
				en : "The planet immediately exploded in a torrent of flame. They should have listened to you..."
			},
			"rassemblement-mars3-event-ignore" : {
				fr : "Vous abandonnâtes les négociations. Inutile de perdre votre temps...",
				en : "You abandoned the negotiations. No need to waste your time...."
			},
			
			/**
			 * Io
			 */
			"rassemblement-io-event-titre" : {
				fr : "Rassemblement - Io",
				en : "Gathering - Io"
			},
			"rassemblement-io-event" : {
				fr : "Voici la capitale énergétique du système solaire : Io. L’énergie volcanique intense de la planète permet d'alimenter tout les mondes humain.",
				en : "This is the energy capital of the solar system: Io. The planet's intense volcanic energy provides power to all human worlds."
			},
			"rassemblement-io-event-contact" : {
				fr : "Nous serions ravi de vous rejoindre. Il nous faut simplement nous entretenir avec le conseil de Io pour quelques formalités...",
				en : "We would be delighted to join you. We just need to talk to Io's counsel for some formalities..."
			},
			
			"rassemblement-io2-event-titre" : {
				fr : "Io - Juste un peu plus d’énergie",
				en : "Io - Just a little more energy"
			},
			"rassemblement-io2-event" : {
				fr : "Le conseil à délibéré grand Dieu et nous n'auront qu'une revendication: Des boissons énergisantes !<br/>Voyez-vous, c'est fatiguant de travailler ici et on aurait bien besoin d'un peu de jus, si vous voyez ce que je veux dire...",
				en : "The council deliberated, great God, and we will only have one claim: Energy drinks !<br/>You see, it's tiring to work here and we could use a little juice, if you know what I mean..."
			},
			"rassemblement-io2-event-ok" : {
				fr : "Pfiou, vous nous sauvez mon Dieu ! En ce qui concerne le rassemblement, c'est d'accord !<br/>De toute façons on alimente déjà tout le monde gratuitement, alors...",
				en : "Phew, you save us, my God ! As far as the gathering is concerned, it's okay !<br/>In any case, we already feed everyone for free, so..."
			},
			"rassemblement-io2-event-ko" : {
				fr : "Comment ?! On se crève à la tache sur cette planète volcanique, pour que tout le monde puisse avoir de quoi chauffer son bain et vous ne pouvez même pas faire ce pour nous ?!",
				en : "What ?! We're blowing ourselves up on this volcanic planet, so that everyone can have enough to heat their baths and you can't even do that for us ?!"
			},
			"rassemblement-io3-event-titre" : {
				fr : "Io - Problème de jus",
				en : "Io - Problème de jus"
			},
			"rassemblement-io3-event" : {
				fr : "Désormais, cette énergie sera payante et c'est grâce à vous ! Dites merci à votre grand dieu hypocrite !",
				en : "From now on, this energy will pay for itself and it's all thanks to you ! Say thank you to your great hypocritical god !"
			},
			"rassemblement-io3-event-menace" : {
				fr : "Nous sommes bien obliger d’obéir... Même si c'est à contre-cœur...",
				en : "We are obliged to obey... Even if it's reluctantly..."
			},
			"rassemblement-io3-event-ko" : {
				fr : "Bien, Io sera désormais une planète indépendante ! Il en sera ainsi !",
				en : "Well, Io will now be an independent planet! It will be so!"
			},
			
			/**
			 * Saturnus
			 */
			"rassemblement-saturnus-event-titre" : {
				fr : "Rassemblement - Saturnus",
				en : "Gathering - Saturnus"
			},
			"rassemblement-saturnus-event" : {
				fr : "Voici Saturnus : une prouesse d'architecture et de science.<br/>Ce satellite artificiel orbite entre Saturne et Uranus et regroupe les plus grands savant de l’espèce humaine !",
				en : "This is Saturnus: a feat of architecture and science.<br/>This artificial satellite orbits between Saturn and Uranus and brings together the greatest scientists of the human species !"
			},
			"rassemblement-saturnus-event-contact" : {
				fr : "Rejoindre les autres peuples ? Aha ! Et pourquoi cela ?",
				en : "Join the other peoples ? Aha ! And why is that ?"
			},
			
			"rassemblement-saturnus2-event-titre" : {
				fr : "Saturnus - Proposition",
				en : "Saturnus - Suggestion"
			},
			"rassemblement-saturnus2-event" : {
				fr : "Nous avons tout ce que nous désirons sur Saturnus. Que diable pourraient-ils nous apporter de plus ?",
				en : "We have everything we want on Saturnus. What the hell could they do for us ?"
			},
			"rassemblement-saturnus2-event-menace" : {
				fr : "C'est bien dommage que vous le preniez comme cela... Nous vous pensions un peu plus réfléchis voyez-vous ?",
				en : "It's a shame you feel that way... We thought you were a little more thoughtful, you see ?"
			},
			"rassemblement-saturnus2-event-connaissance-button" : {
				fr : "<bonus>[3eme Oeil]-La connaissance absolue</bonus>",
				en : "<bonus>[3rd Eye]-The absolute knowledge</bonus>"
			},
			"rassemblement-saturnus2-event-connaissance" : {
				fr : "Hum ! J’avoue que cela attire notre attention... Bien c'est d'accord, nous serons des vôtres !",
				en : "Hmm ! I must admit that this attracts our attention... Well, that's okay, we'll be there !"
			},
			"rassemblement-saturnus2-event-mystere-button" : {
				fr : "<bonus>[Fragment lunaire]-Un grand mystère</bonus>",
				en : "<bonus>[Fragment lunaire]-A great mystery</bonus>"
			},
			"rassemblement-saturnus2-event-mystere" : {
				fr : "Hum ! J’avoue que cela attire notre curiosité... Bien c'est d'accord, nous serons des vôtres !",
				en : "Hmm ! I must admit that this attracts our curiosity... Well, that's okay, we'll be there !"
			},
			
			/**
			 * Triton
			 */
			"rassemblement-triton-event-titre" : {
				fr : "Rassemblement - Triton",
				en : "Gathering - Triton"
			},
			"rassemblement-triton-event" : {
				fr : "Voici Triton, le bastion principal de toute l'humanité ! Leur armée est si gigantesque qu'elle représente à elle seule le quart de l’espèce humaine !",
				en : "This is Triton, the main bastion of all mankind ! Their army is so huge that it alone represents a quarter of the human species !"
			},
			"rassemblement-triton-event-contact" : {
				fr : "Compagnie, halte ! Il semblerait qu'un avorton qui essai de se faire passer pour un dieu veuille nous apprendre notre métier !",
				en : "Company, halt ! It seems that a runt who tries to pretend to be a god wants to teach us our job !"
			},
			
			"rassemblement-triton2-event-titre" : {
				fr : "Triton - Rage militaire",
				en : "Triton - Military rage"
			},
			"rassemblement-triton2-event" : {
				fr : "Qu'est ce qu'il a à dire pour sa défense le bleu ?",
				en : "What does he have to say in his defense, blue ?"
			},
			"rassemblement-triton2-event-menace" : {
				fr : "Ahaha ! T'es sérieux l'avorton ? Tu as vu comme on est nombreux face à toi ?",
				en : "Ahahaha! Are you serious, runt ? Did you see how many of us there are in front of you ?"
			},
			"rassemblement-triton2-event-torque-button" : {
				fr : "<bonus>[Torque]-Resserrer les rang</bonus>",
				en : "<bonus>[Torque]-Tighten the ranks</bonus>"
			},
			"rassemblement-triton2-event-torque" : {
				fr : "Excusez chef, on vous avait pas reconnu ! Bien entendu, nous serons à vos ordre chef !",
				en : "Excuse me, chief, we didn't recognize you ! Of course, we will be at your command, chief !"
			},
			
			"rassemblement-triton3-event-titre" : {
				fr : "Triton - Fierté militaire",
				en : "Triton - Military pride"
			},
			"rassemblement-triton3-event" : {
				fr : "Tu veux vraiment t'en prendre à nous tous ?",
				en : "Do you really want to come after all of us ?"
			},
			"rassemblement-triton3-event-tuer-button" : {
				fr : "Tuer le chef",
				en : "Kill the leader"
			},
			"rassemblement-triton3-event-tuer" : {
				fr : "Après cet acte de pur violence, les soldats suivirent vos ordres à la lettre. La plupart étaient contre, mais jamais ouvertement...",
				en : "After this act of pure violence, the soldiers followed your orders to the letter. Most were against it, but never openly..."
			},
			
			/**
			 * Pluton
			 */
			"rassemblement-pluton-event-titre" : {
				fr : "Rassemblement - Pluton",
				en : "Gathering - Pluton"
			},
			"rassemblement-pluton-event" : {
				fr : "",
				en : ""
			},
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
