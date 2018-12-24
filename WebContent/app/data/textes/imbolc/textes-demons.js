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
				fr :"Loin à l'est, de nombreux villages étaient en cendre. De toute part, les Hommes prenaient les armes contre des créatures de l'enfer.",
				en :"Far to the east, many villages were in ashes. On all sides, Men took up arms against creatures of hell."
			},
			"demons-start-event-2" : {
				fr :"Une guerre avait débuté. Les démons de feu revendiquaient ce qui leur avait été volé.",
				en :"A war had begun. The fire demons claimed what had been stolen from them."
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
				en :"Under the blows, he began to speak : « Arghh... We come from far below the ground, near a place called Osra.<br/>Our people are beginning to die of famine and disease... »"
			},
			"demons-attaque-event-torture-2" : {
				fr :"« Nous sommes revenus pour conquérir ce monde et reprendre ce qui nous revient de droit ! » Puis, il finit par mourir sous la torture...",
				en :"« We came back to conquer this world and take back what is rightfully ours ! » Then he ends up, dying under torture..."
			},
			"demons-attaque-event-tuer" : {
				fr :"D'un simple geste, le démon vola en éclat ! Vos fidèles furent très impressionnés !",
				en :"With a simple gesture, the demon shattered ! Your followers were very impressed !"
			},
			"demons-attaque-event-partir" : {
				fr :"Vous laissâtes le démon s'en retourner parmi les siens. Vos fidèles vous regardèrent, désabusés. Ils eurent l'impression d'avoir été trahis...",
				en :"You let the demon go back to his people. Your followers looked at you, disillusioned. They felt as if they had been betrayed..."
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
				en :"The capital fell apart, taking away both demons and inhabitants..."
			},
			"demons-village-event-tuer-button" : {
				fr :"Tuer les démons",
				en :"Kill the demons"
			},
			"demons-village-event-tuer" : {
				fr :"Toutes les créatures tombèrent, inertes... Le peuple vous acclama ! Vous avez sauvé la capitale !",
				en :"All the creatures fell, inert... The people cheered you on ! You saved the capital !"
			},
			"demons-village-event-stop-button" : {
				fr :"Stopper le combat",
				en :"Stop the battle"
			},
			"demons-village-event-stop" : {
				fr :"Les gens, aussi bien humains que démons, perdirent toute envie de se battre.<br/>Les armes tombèrent au sol et les combattants commencèrent à quitter les lieux...",
				en :"People, both humans and demons, lost all desire to fight.<br/>The weapons fell to the ground and the fighters began to leave the area..."
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
				en :"The desert was spreading more and more. The fire demons were gaining ground..."
			},
			"demons-desert-event-vie-button" : {
				fr :"Ramener la vie",
				en :"Bring life back"
			},
			"demons-desert-event-vie" : {
				fr :"Les démons reconnurent leur idole. Ils se prosternèrent devant vous, vous jurant fidélité.<br/>Vous êtes désormais leur Dieu !",
				en :"The demons recognized their idol. They bowed down before you, swearing allegiance to you.<br/>You are now their God !"
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
