'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Tyrannie
		 * Start
		 */
		"demi-dieu-start-event-titre" : {
			fr : "Un demi dieu ?",
			en : "A demi god ?"
		},
		"demi-dieu-start-event" : {
			fr : "Un soir, dans une vieille grange, un bébé se met à pleurer...",
			en : "-"
		},
		"demi-dieu-start-event-2" : {
			fr : "Un grand destin l'attends car en réalité, il s'agit de votre enfant !",
			en : "-"
		},
		
		/**
		 * Eau
		 */
		"demi-dieu-eau-event-titre" : {
			fr : "Marcher sur l'eau",
			en : "Walk on the water"
		},
		"demi-dieu-eau-event" : {
			fr : "Pssst ! Hey papa, s'te plait ! Je leur ai promis que je marcherai sur l'eau !<br/>Tu pourrais m'aider ?",
			en : "-"
		},
		"demi-dieu-eau-event-accept" : {
			fr : "Ouah super ! Je vais leur en mettre plein la vue !",
			en : "-"
		},
		"demi-dieu-eau-event-refus" : {
			fr : "Pff t'es pas marrant hein...",
			en : "-"	
		},
		
		/**
		 * Vin
		 */
		"demi-dieu-vin-event-titre" : {
			fr : "Encore un petit verre ?",
			en : "-"
		},
		"demi-dieu-vin-event" : {
			fr : "Bon papa, je sais que tu aime bien les fêtes mais nous on a plus rien à boire.<br/>Tu pourrais changer la fontaine d'eau en vin ?",
			en : "-"
		},
		"demi-dieu-vin-event-accept" : {
			fr : "Super ! T'es vraiment cool comme type !",
			en : "-"
		},
		"demi-dieu-vin-event-refus" : {
			fr : "Super... On va finir au soft les gars...",
			en : "-"	
		},
		
		/**
		 * Scene
		 */
		"demi-dieu-scene-event-titre" : {
			fr : "Un gouté entre amis",
			en : "-"
		},
		"demi-dieu-scene-event" : {
			fr : "C'est super, avec ton aide je me suis fais plein d'amis ! On va prendre le thé ensemble sur la colline. Tu veux venir ?",
			en : "-"
		},
		"demi-dieu-scene-event-accept" : {
			fr : "Wahh super ! Quand je vais leur dire ca ils vont etre super content ! A tout à l'heure !",
			en : "-"
		},
		"demi-dieu-scene-event-refus" : {
			fr : "Ohh c'est dommage, ca aurait été chouette que tu sois là papa...",
			en : "-"	
		}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
