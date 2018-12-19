'use strict';
define(["jquery"], function($){
	var data = {
			/**
			 * Demons
			 * Start
			 */
			"demons-start-event-titre" : {
				fr :"Les démons de feu",
				en :"Fire daemons"
			},
			"demons-start-event" : {
				fr :"Loin à l'est, de nombreux villages étaient en cendre. De toute part, les Hommes prennaient les armes contre des créatures de l'enfer.",
				en :"-"
			},
			"demons-start-event-2" : {
				fr :"Une guerre avait débuté. Les démons de feu revendiquaient ce qui leur avait été volé.",
				en :"-"
			},

			/**
			 * Attaque
			 */
			"demons-attaque-event-titre" : {
				fr :"Contre-attaque",
				en :"Counter-attack"
			},
			"demons-attaque-event" : {
				fr :"Maître ! Nous allons organiser une attaque contre ces créatures de feu !<br/>Nous souhaiterions votre bénédiction !",
				en :"Master ! We're going to organize an attack against this fire creatures !<br/>We would like to have your benediction !"
			},
			"demons-attaque-event-accept" : {
				fr :"Merci, mon Dieu ! À l'attaque !!!",
				en :"Thanks, my God ! To the battle !!!"
			},
			"demons-attaque-event-refus" : {
				fr :"Hélas, le combat se termina en bain de sang. Les guerriers, sans espoir, périrent dans les flammes...",
				en :"The fight ends in a bloodbath. Our warriors, whithout hopes, perished in the flames..."
			},
			"demons-attaque-event-2-titre" : {
				fr :"La capture",
				en :"Capture"
			},
			"demons-attaque-event-2" : {
				fr :"Seigneur ! Nous avons capturé l'un des leurs ! Malheureusement, il ne veut pas parler...",
				en :"Lord ! We captured one of them ! Unfortunately, he don't want to speek..."
			},
			"demons-attaque-event-torture-button" : {
				fr :"Le torturer",
				en :"Torture him"
			},
			"demons-attaque-event-torture" : {
				fr :"Sous les coups, il commença à parler : « Arghh... Nous venons de loin sous le sol, près d'un lieu nommé Osra.<br/>Notre peuple commence à mourir de famine et de maladie... »",
				en :"-"
			},
			"demons-attaque-event-torture-2" : {
				fr :"« Nous sommes revenus pour conquérir ce monde et reprendre ce qui nous revient de droit ! » Puis, il finit par mourir sous la torture...",
				en :"« We came back to conquer this world and take back what is rightfully ours ! » Then he ends up, dying under torture..."
			},
			"demons-attaque-event-tuer" : {
				fr :"D'un simple geste, le démon vola en éclat ! Vos fidèles furent très impressionnés !",
				en :"-"
			},
			"demons-attaque-event-partir" : {
				fr :"Vous laissâtes le démon s'en retourner parmi les siens. Vos fidèles vous regardèrent, désabusés. Ils eurent l'impression d'avoir été trahis...",
				en :"-"
			},

			/**
			 * Village
			 */
			"demons-village-event-titre" : {
				fr :"Capitale en feu",
				en :"Fire on capital"
			},
			"demons-village-event" : {
				fr :"Maître ! Les démons de feu sont aux portes de la capitale ! Que pouvons-nous faire ?!",
				en :"Master ! Fire demons are at the gates of capital ! What can we do ?!"
			},
			"demons-village-event-detruire-button" : {
				fr :"Tout détruire",
				en :"Destroy all"
			},
			"demons-village-event-detruire" : {
				fr :"La capitale tomba en morceau, emportant aussi bien les démons que les habitants...",
				en :"-"
			},
			"demons-village-event-tuer-button" : {
				fr :"Tuer les démons",
				en :"Kill the demons"
			},
			"demons-village-event-tuer" : {
				fr :"Toutes les créatures tombèrent, inertes... Le peuple vous acclama ! Vous avez sauvé la capitale !",
				en :"-"
			},
			"demons-village-event-stop-button" : {
				fr :"<bonus>[Torque]-Stopper le combat</bonus>",
				en :"<bonus>[Torque]-Stop the battle</bonus>"
			},
			"demons-village-event-stop" : {
				fr :"Les gens, aussi bien humains que démons, perdirent toute envie de se battre.<br/>Les armes tombèrent au sol et les combattants commencèrent à quitter les lieux...",
				en :"-"
			},

			/**
			 * Desert
			 */
			"demons-desert-event-titre" : {
				fr :"Désert de feu",
				en :"Desert of fire"
			},
			"demons-desert-event" : {
				fr :"Le désert s'étendait de plus en plus. Les démons de feu gagnaient du terrain...",
				en :"-"
			},
			"demons-desert-event-vie-button" : {
				fr :"<bonus>[Idole de feu]-Ramener la vie</bonus>",
				en :"<bonus>[Idol of fire]-Bring life back</bonus>"
			},
			"demons-desert-event-vie" : {
				fr :"Les démons reconnurent leur idole. Ils se prosternèrent devant vous, vous jurant fidélité.<br/> Vous êtes désormais leur Dieu !",
				en :"-"
			},
			"demons-desert-event-innonder-button" : {
				fr :"Faire un déluge",
				en :"Make a flood"
			},
			"demons-desert-event-innonder" : {
				fr :"Il plut durant 1 an, au bout duquel les déserts retrouvèrent peu à peu leur état d'origine.<br/>Beaucoup de gens périrent sous les inondations...",
				en :"It rained during 1 year at the end of which the desert gradually returned to its original state.<br/>Much people died under the floods..."
			},
			"demons-desert-event-laisser" : {
				fr :"Le désert continua à s’étendre, tuant et asséchant les nombreux villages...",
				en :"The desert continued to spread, killing and draining the many villages..."
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
