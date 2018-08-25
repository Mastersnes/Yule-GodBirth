'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Demons
		 * Start
		 */
		"demons-start-event" : {
			fr : "Loin à l'est, de nombreux villages sont en cendre... Les hommes prennent les arme contre des créatures de l'enfer !",
			en : "Far away a the east, lot of villages burn to ash... Mens takes up arms  against hell creatures !"
		},
		"demons-start-event-2" : {
			fr : "Une guerre a debuté. Les démons de feu revendiquent ce qui leur a été volé !",
			en : "A war has begun ! The fire demons claim what was stolen from them !"
		},

		/**
		 * Attaque
		 */
		"demons-attaque-event" : {
			fr : "Maître ! Nous allons organiser une attaque contre ces créatures de feu !<br/>Nous souhaiterions votre benediction !",
			en : "Master ! We're going to organize an attack against this fire creatures !<br/>We would like to have your benediction !"
		},
		"demons-attaque-event-accept" : {
			fr : "Merci mon dieu ! À l'attaque !",
			en : "Thanks my god ! To the battle !"
		},
		"demons-attaque-event-refus" : {
			fr : "Le combat se termina en bain de sang... Nos hommes, sans espoirs, périrent dans les flammes...",
			en : "The fight ends in a bloodbath... Our mens, whithout hopes, perished in the flames..."
		},
		"demons-attaque-event-2" : {
			fr : "Seigneur ! Nous avons capturer l'un des leurs ! Malheureusement, il ne veut pas parler...",
			en : "Lord ! We captured one of them ! Unfortunately, he don't want to speek..."
		},
		"demons-attaque-event-torture-button" : {
			fr : "Le torturer",
			en : "Torture him"
		},
		"demons-attaque-event-torture" : {
			fr : "Sous les coups, il commence à parler : « Arghh, Nous venons de loin sous le sol. Près d'un lieu nommé Osra<br/>Notre peuple commence à mourir de famine et de maladie ! »",
			en : "Under the blows, he start to speek : « Arghh, We've come a long way under the ground. Near a place named Osra<br/>Our poeple beginning to die of starvation and disease ! »"
		},
		"demons-attaque-event-torture-2" : {
			fr : "« Nous sommes revenus pour conquerir ce monde et reprendre ce qui nous revient de droit ! ». Puis il finit par mourir sous la torture...",
			en : "« We came back to conquer this world and take back what is rightfully ours ! ». Then he ends up, dying under torture..."
		},
		"demons-attaque-event-tuer-button" : {
			fr : "Le tuer",
			en : "Kill him"
		},
		"demons-attaque-event-tuer" : {
			fr : "D'un simple geste, le démon vole en éclat ! Vos fidèles sont très impressionné !",
			en : "With a simple gesture, the demons flies in pieces ! Your faithful are very impressed !"
		},
		"demons-attaque-event-partir-button" : {
			fr : "Le laisser partir",
			en : "Let him go"
		},
		"demons-attaque-event-partir" : {
			fr : "Vous laisser le démon s'en retourner parmi les siens. Vos fidèles vous regarde, désabusés. Ils ont l'impression d'avoir été trahis...",
			en : "You let the demon go back to his people. Your faithful watching you, disenchanted. They feel like they've been betrayed..."
		},
		
		/**
		 * Village
		 */
		"demons-village-event" : {
			fr : "Maître ! Les démons de feu sont aux portes de la capitale ! Que pouvons-nous faire ?!",
			en : "Master ! Fire demons are at the gates of capital ! What can we do ?"
		},
		"demons-village-event-detruire-button" : {
			fr : "Tout detruire",
			en : "Destroy all"
		},
		"demons-village-event-detruire" : {
			fr : "La capital tombe en morceau, emportant aussi bien les démons que les habitants...",
			en : "Capital falls in piece, Killing both demons and inhabitants..."
		},
		"demons-village-event-tuer-button" : {
			fr : "",
			en : ""
		},
		"demons-village-event-tuer" : {
			fr : "",
			en : ""
		},
		"demons-village-event-stop-button" : {
			fr : "",
			en : ""
		},
		"demons-village-event-stop" : {
			fr : "",
			en : ""
		},
	};
	
	return {
		local : null,
		
		get : function(key) {
			return data[key];
		}
	};
});
