'use strict';
define(["jquery"], 
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"guerre-1-event-titre" : {
				fr : "Petit conflit",
				en : "Little conflict"
			},
			"guerre-1-event" : {
				fr : "Bonjour seigneur ! Rien de bien palpitant aujourd'hui.<br/>Il semblerait qu'un peuple de l'est se lance dans plusieurs guerilla...<br/>Devons-nous intervenir ?",
				en : "Hi my lord ! Nothing very exciting today.<br/>It seems that a people from the east is launching into several guerrillas...<br/>Should we do anything about it ?"
			},
			"guerre-1-event-arreter" : {
				fr : "Le peuple guerrier fut contraint d'en retourner d'où ils venaient, désarmés.<br/>Plus jamais ils ne devraient s'attaquer aux peuples limitrophes, sous peine de divines represaille.",
				en : "The warrior people were forced to return from where they came, disarmed.<br/>Never again should they attack the neighbouring peoples, under penalty of divine repression."
			},
			"guerre-1-event-tuer" : {
				fr : "Un peuple entier s'éteignit en ce jour. Encouragés par tant de violences, de plus en plus de conflits naquirent ici et là...<br/>Un nouvel âge de terreur venait de naitre !",
				en : "An entire people died that day. Encouraged by so much violence, more and more conflicts were born here and there...<br/>A new age of terror had just been born !"
			},
			"guerre-1-event-ignore" : {
				fr : "Par votre inactivité, des milliers de personnes moururent. Les peuples, seules et démunies, s’allièrent contre l'envahisseur.<br/>De ce chaos résultat un nouvel âge de terreur !",
				en : "Through your inactivity, thousands of people died. The peoples, alone and destitute, allied themselves against the invader.<br/>This chaos resulted in a new age of terror !"
			},
			
			"guerre-2-event-titre" : {
				fr : "La Grande Terreur",
				en : "The Great Terror"
			},
			"guerre-2-event" : {
				fr : "De toutes part, les peuples s'entre-déchirent. Nul ne se souvient encore de l'origine de cette guerre.<br/>Tout ce qui reste n'est que violence et rancune...",
				en : "On all sides, people are tearing each other apart. No one remembers yet the origin of this war.<br/>All that remains is violence and resentment..."
			},
			"guerre-2-event-arreter-button" : {
				fr : "<bonus>[Torque]-Arrêter le massacre</bonus>",
				en : "<bonus>[Torque]-Stop the massacre</bonus>"
			},
			"guerre-2-event-arreter" : {
				fr : "Calmer les tensions ne fut pas chose aisée.<br/>une grande partie des Hommes perdirent toute émotion ce jour là. Le vide en résultant suffit à maintenir une paix relative...",
				en : "Calming the tensions was not an easy task. <br/>A large part of the people lost all emotion that day. The resulting vacuum is sufficient to maintain a relative peace..."
			},
			"guerre-2-event-ignore" : {
				fr : "La guerre dura des centaines d'année et fit des millions de mort. On jura que plus jamais cela n'arriverai... Des promesses...",
				en : "The war lasted hundreds of years and caused millions of deaths. It was sworn that this would never happen again... Promises..."
			},
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
