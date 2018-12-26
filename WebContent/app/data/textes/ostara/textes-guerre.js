'use strict';
define(["jquery"], 
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"guerre-1-event-titre" : {
				fr :"Petit conflit",
				en :"Little conflict"
			},
			"guerre-1-event" : {
				fr :"Bonjour, seigneur! Rien de bien palpitant aujourd'hui.<br/>Il semblerait qu'un peuple se lance dans plusieurs guérillas...<br/>Devons-nous intervenir?",
				en :"Hi, my lord! Nothing very exciting today.<br/>It seems that a nation is engaging in several guerrillas...<br/>Should we intervene?"
			},
			"guerre-1-event-arreter" : {
				fr :"Le peuple guerrier fut contraint de retourner d'où ils venaient, désarmé.<br/>Plus jamais ils ne devraient s'attaquer aux peuples limitrophes, sous peine de divines représailles.",
				en :"The warrior nation were forced to return from where they came, disarmed.<br/>Never again should they attack the neighbouring peoples, under the risk of divine punishment."
			},
			"guerre-1-event-tuer" : {
				fr :"Un peuple entier s'éteignit en ce jour. Encouragés par tant de violences, de plus en plus de conflits naquirent ici et là.<br/>Un nouvel âge de terreur venait de naître...",
				en :"An entire nation died that day. Encouraged by so much violence, more and more conflicts were born here and there.<br/>A new age of terror had just been born..."
			},
			"guerre-1-event-ignore" : {
				fr :"Par votre inactivité, des milliers de personnes moururent. Les peuples, seuls et démunis, s’allièrent contre l'envahisseur.<br/>De ce chaos résultait un nouvel âge de terreur...",
				en :"Through your inactivity, thousands of people died. The nations, alone and destitute, allied themselves against the invader.<br/>This chaos resulted in a new age of terror..."
			},

			"guerre-2-event-titre" : {
				fr :"La grande terreur",
				en :"The great terror"
			},
			"guerre-2-event" : {
				fr :"De toute part, les peuples s'entre-déchiraient. Nul ne se souvient encore de l'origine de cette guerre.<br/>Tout ce qu'il restait n'était que violence et rancune...",
				en :"On all sides, nations were tearing each other apart. No one still remembers the origin of this war.<br/>All that was left was violence and rancor..."
			},
			"guerre-2-event-arreter-button" : {
				fr :"Arrêter le massacre",
				en :"Stop the massacre"
			},
			"guerre-2-event-arreter" : {
				fr :"Calmer les tensions ne fut pas chose aisée.<br/>Une grande partie des humains perdirent toute émotion ce jour-là.  Le vide en résultant, suffit à maintenir une paix relative...",
				en :"Calming the tensions wasn't an easy task. <br/>A large part of humans lost all emotion that day. The resulting emptiness was enough to maintain a relative peace..."
			},
			"guerre-2-event-ignore" : {
				fr :"La guerre dura des centaines d'années et fit des millions de morts. On jura que plus jamais cela n'arriverait... Des promesses...",
				en :"The war lasted hundreds of years and caused millions of deaths. They vowed that this would never happen again... Promises..."
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
