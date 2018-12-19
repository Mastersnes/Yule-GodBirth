'use strict';
define(["jquery"], function($){
	var data = {
			/**
			 * Tyrannie
			 * Start
			 */
			"demi-dieu-start-event-titre" : {
				fr :"Un demi-dieu ?",
				en :"A demi-god ?"
			},
			"demi-dieu-start-event" : {
				fr :"Un soir, dans une vieille grange, un bébé pleurait... De ses larmes étincelait un destin grandiose.",
				en :"-"
			},
			"demi-dieu-start-event-2" : {
				fr :"Nul ne pouvait se douter de ce qui l'attendait. Car ce bébé était bel et bien votre enfant !",
				en :"-"
			},

			/**
			 * Eau
			 */
			"demi-dieu-eau-event-titre" : {
				fr :"Marcher sur l'eau",
				en :"Walk on the water"
			},
			"demi-dieu-eau-event" : {
				fr :"Pssst ! Hey papa, s'te plaît ! Je leur ai promis que je marcherai sur l'eau !<br/>Tu pourrais m'aider ?",
				en :"-"
			},
			"demi-dieu-eau-event-accept" : {
				fr :"Ouah, super ! Je vais leur en mettre plein la vue !",
				en :"-"
			},
			"demi-dieu-eau-event-refus" : {
				fr :"Pff ! T'es pas marrant hein...",
				en :"-"	
			},


			/**
			 * Vin
			 */
			"demi-dieu-vin-event-titre" : {
				fr :"Encore un petit verre ?",
				en :"-"
			},
			"demi-dieu-vin-event" : {
				fr :"Bon papa, je sais que tu aimes bien les fêtes et, nous, on n’a plus rien à boire.<br/>Tu pourrais changer la fontaine d'eau en vin ?",
				en :"-"
			},
			"demi-dieu-vin-event-accept" : {
				fr :"Super ! T'es vraiment cool comme type !",
				en :"-"
			},
			"demi-dieu-vin-event-refus" : {
				fr :"Super... On va finir au soft les gars...",
				en :"-"
			},


			/**
			 * Scene
			 */
			"demi-dieu-scene-event-titre" : {
				fr :"Un goûter entre amis",
				en :"-"
			},
			"demi-dieu-scene-event" : {
				fr :"C'est super ! Avec ton aide, je me suis fait plein d'amis ! On va prendre le thé ensemble sur la colline. Tu veux venir ?",
				en :"-"
			},
			"demi-dieu-scene-event-accept" : {
				fr :"Wahh, super ! Quand je vais leur dire ça, ils vont être super contents ! À tout à l'heure !",
				en :"-"
			},
			"demi-dieu-scene-event-refus" : {
				fr :"Ohh, c'est dommage... Ça aurait été chouette que tu sois là, papa...",
				en :"-"
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
