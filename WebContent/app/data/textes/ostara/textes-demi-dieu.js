'use strict';
define(["jquery"], function($){
	var data = {
			/**
			 * Tyrannie
			 * Start
			 */
			"demi-dieu-start-event-titre" : {
				fr :"Un demi-dieu?",
				en :"A demi-god?"
			},
			"demi-dieu-start-event" : {
				fr :"Un soir, dans une vieille grange, un bébé pleurait... De ses larmes étincelait un destin grandiose.",
				en :"One evening, in an old barn, a baby was crying... From his tears sparked a great destiny."
			},
			"demi-dieu-start-event-2" : {
				fr :"Nul ne pouvait se douter de ce qui l'attendait. Car ce bébé était bel et bien votre enfant!",
				en :"No one could have known what was in store for him. Because that baby was indeed your child!"
			},

			/**
			 * Eau
			 */
			"demi-dieu-eau-event-titre" : {
				fr :"Marcher sur l'eau",
				en :"Walk on the water"
			},
			"demi-dieu-eau-event" : {
				fr :"Pssst! Hey papa, s'te plaît! Je leur ai promis que je marcherai sur l'eau!<br/>Tu pourrais m'aider?",
				en :"Pssst! Hey, Dad, please! I promised them I'd walk on water!<br/>Could you help me?"
			},
			"demi-dieu-eau-event-accept" : {
				fr :"Ouah, super! Je vais leur en mettre plein la vue!",
				en :"Wow, great! I'm going to blow their minds!"
			},
			"demi-dieu-eau-event-refus" : {
				fr :"Pff! T'es pas marrant hein...",
				en :"Pfft! You're no fun, are you..."	
			},

			/**
			 * Vin
			 */
			"demi-dieu-vin-event-titre" : {
				fr :"Encore un petit verre?",
				en :"Another little drink?"
			},
			"demi-dieu-vin-event" : {
				fr :"Bon papa, je sais que tu aimes bien les fêtes et, nous, on n’a plus rien à boire.<br/>Tu pourrais changer la fontaine d'eau en vin?",
				en :"Well, Dad, I know you like parties and we don't have anything to drink anymore.<br/>Could you turn the water cooler into wine?"
			},
			"demi-dieu-vin-event-accept" : {
				fr :"Super! T'es vraiment cool comme type!",
				en :"Great! You're a really cool guy!"
			},
			"demi-dieu-vin-event-refus" : {
				fr :"Super... On va finir au soft les gars...",
				en :"Great... We're going to end up with softs drinks, guys..."
			},

			/**
			 * Scene
			 */
			"demi-dieu-scene-event-titre" : {
				fr :"Un goûter entre amis",
				en :"A snack with friends"
			},
			"demi-dieu-scene-event" : {
				fr :"C'est super! Avec ton aide, je me suis fait plein d'amis! On va prendre le thé ensemble sur la colline. Tu veux venir?",
				en :"That's great! With your help, I made a lot of friends! We're going to have tea together on the hill. Do you want to come?"
			},
			"demi-dieu-scene-event-accept" : {
				fr :"Wahh, super! Quand je vais leur dire ça, ils vont être super contents! À tout à l'heure!",
				en :"Wow, great! When I tell them that, they'll be very happy! See you later!"
			},
			"demi-dieu-scene-event-refus" : {
				fr :"Ohh, c'est dommage... Ça aurait été chouette que tu sois là, papa...",
				en :"Ohh, that's too bad... It would have been nice if you were here, Dad..."
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
