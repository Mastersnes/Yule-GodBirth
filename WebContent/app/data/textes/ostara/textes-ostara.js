'use strict';
define(["jquery",
        "app/data/textes/ostara/textes-tyrannie",
        "app/data/textes/ostara/textes-guerre",
        "app/data/textes/ostara/textes-nature",
        "app/data/textes/ostara/textes-lune"], 
        function($, TextesTyrannie, TextesGuerre, TextesNature, TextesLune){
	var data = {
			/**
			 * Premier evenement
			 */
			"ostara-start-event-titre" : {
				fr :"Une grande responsabilité",
				en :"High responsibility"
			},
			"ostara-start-event" : {
				fr :"Maître, de plus en plus de prières nous parviennent!<br/>Le monde a bien évolué et reconnaît votre grandeur!",
				en :"Master, more and more prayers are coming to us!<br/>The world has evolved well and recognizes your greatness!"
			},
			
			/**
			 * Riche
			 */
			"accueil-riche-event-titre" : {
				fr :"Une richesse infinie",
				en :"Infinite wealth"
			},
			"accueil-riche-event" : {
				fr :"Cher Dieu, les affaires ne vont pas fort en ce moment.<br/>J'aimerais être le plus riche des Hommes!<br/>Je saurai vous récompenser...",
				en :"Dear God, business isn't going well these days. I would like to be the richest man!<br/>I would know how to reward you..."
			},
			"accueil-riche-event-ok" : {
				fr :"Oh yeah! Les affaires reprennent! Vous ne serez pas déçu!",
				en :"Oh yeah! Business is back! You won't be disapointed!"
			},
			"accueil-riche-event-ko" : {
				fr :"Dieu pathétique... Vous n'avez aucune ambition!",
				en :"Pathetic god... You don't have any ambition"
			},
			"accueil-riche-event-2-titre" : {
				fr :"Impardonnable",
				en :"Unforgivable"
			},
			"accueil-riche-event-2" : {
				fr :"Ce mortel vous a insulté! Souhaitez-vous le punir?",
				en :"This mortal insulted you! Do you want to punish him?"
			},
			"accueil-riche-event-tuer" : {
				fr :"L'homme s'écroula, sans même s'en rendre compte...",
				en :"The man fell, without even realizing it..."
			},
			"accueil-riche-event-partir" : {
				fr :"À jamais, dieu de pacotille!",
				en :"Goodbye, junk god!"
			},
	};
	
	return {
		get : function(key) {
			var text = TextesGuerre.get(key);
			if (!text) text = TextesTyrannie.get(key);
			if (!text) text = TextesNature.get(key);
			if (!text) text = TextesLune.get(key);
			if (!text) text = data[key];
			return text;
		}
	};
});
