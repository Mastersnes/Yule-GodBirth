'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Tyrannie
		 * Start
		 */
		"tyrannie-start-event-titre" : {
			fr : "La cité du vice",
			en : "-"
		},
		"tyrannie-start-event" : {
			fr : "Au bout du monde, près des montagnes bordant le ciel, une grande et somptueuse cité fut créée par un homme d'une richesse infinie...",
			en : "At the end of the world, near the moutains that border the sky, a large and sumptuous city was created by a man of infinite wealth..."
		},
		"tyrannie-start-event-2" : {
			fr : "Dans ce lieu de débauche et de luxure, tout était permis. Le plaisir était le maître mot et aucune loi ne s'appliquait... Son nom était Baia !",
			en : "In this place of debauchery and lust, everything was allowed. Pleasure was the keyword and no law applied... It's name was Baia !"
		},

		/**
		 * Soeur
		 */
		"tyrannie-soeur-event-titre" : {
			fr : "Les horreurs du plaisir",
			en : "-"
		},
		"tyrannie-soeur-event" : {
			fr : "Mon dieu ! Ma sœur a été enfermé dans un harem à Baia !<br/>Nulle ne sait ce qu'il lui font ! Liberez-la, je vous en supplie !",
			en : "My god ! My sister was locked up in a harem in Baia !<br/>No one knows what they're doing to her ! Set her free, please !"
		},
		"tyrannie-soeur-event-accept" : {
			fr : "Oh seigneur merci beaucoup ! Ma soeur est en lieu sur à présent. Je ne sais comment vous remercier !",
			en : "Oh god thank you ! My sister is safe now. I don't know how to thank you !"
		},
		"tyrannie-soeur-event-refus" : {
			fr : "Nooon ! S'il vous plait !!! Elle a besoin d'aide !",
			en : "Nooo ! Please !!! She needs help !"
		},
		
		/**
		 * Fete
		 */
		"tyrannie-fete-event-titre" : {
			fr : "Fiesta",
			en : "Fiesta"
		},
		"tyrannie-fete-event" : {
			fr : "Seigneur ! Nous organisons une superbe fête en votre honneur à Baia !<br/>Tout sera permis !",
			en : "Lord ! We organize a great party for you at Baia !<br/>Everything will be permise !"
		},
		"tyrannie-fete-event-participe-button" : {
			fr : "Participer",
			en : "Participate"
		},
		"tyrannie-fete-event-participe" : {
			fr : "Super ! On va s'éclater !",
			en : "Yeah ! We're gonna have some fun !"
		},
		"tyrannie-fete-event-nonparticipe-button" : {
			fr : "Ne pas participer",
			en : "Do not participate"
		},
		"tyrannie-fete-event-nonparticipe" : {
			fr : "Comment ?! Cette fête était pour vous ! On va devoir tout annuler... Merci hein !",
			en : "What ?! This party was for you ! We're gonna have to cancel everyting... Thanks pff !"
		},
		"tyrannie-fete-event-annule-button" : {
			fr : "Annuler la fête",
			en : "Cancel the party"
		},
		"tyrannie-fete-event-annule" : {
			fr : "Quoi !!! Vous annulez-tout ! Mais on a mis énormement de temps à tout organiser ! Pfff...",
			en : "What !!! You cancel everything ! But we've spend some time to organize all ! Pfff..."
		},
		"tyrannie-fete-event-boire-button" : {
			fr : "<bonus>[Corne d'abondance]-Boire toute la nuit</bonus>",
			en : "<bonus>[Horn of plenty]-Drink all night long</bonus>"
		},
		"tyrannie-fete-event-boire" : {
			fr : "La fête dura 354 ans... la corne permit de remplir les verres indéfiniment.<br/>Mais un jour ou l'autre, il faut bien savoir s'arreter...",
			en : "The party lasted 354 years... the horn allow you to fill the glasses indefinitely.<br/>But soon or later, you have to know when to stop..."
		},
		
		/**
		 * Esclave
		 */
		"tyrannie-esclave-event-titre" : {
			fr : "Soulevement",
			en : "-"
		},
		"tyrannie-esclave-event" : {
			fr : "Un groupe d'esclave s'est rebellé dans la ville de Baia ! Ils veulent leur liberté !",
			en : "A group of slaves rebelled in city of Baia ! They want their freedom !"
		},
		"tyrannie-esclave-event-encourage-button" : {
			fr : "Encourager la rebellion !",
			en : "Encourage rebellion"
		},
		"tyrannie-esclave-event-encourage" : {
			fr : "Avec votre aide les esclaves parvinrent à un accord. Ils seraient désormais rémunéré pour leur travail...",
			en : "With your help the slaves reached an agreement. They would now be paid for their work..."
		},
		"tyrannie-esclave-event-taire-button" : {
			fr : "Taire la rebellion",
			en : "Shut the rebellion off"
		},
		"tyrannie-esclave-event-taire" : {
			fr : "On entendit plus parler de la rébellion. Le lendemain, tout le monde chercha les esclaves, sans succés... Ils avaient tous disparus...",
			en : "We never heard about rebellion again. The next day, everyone searched the slaves, unsuccessfuly... They'd all disappeared..."
		}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
