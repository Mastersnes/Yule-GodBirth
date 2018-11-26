'use strict';
define(["jquery"], 
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"rassemblement-1-event-titre" : {
				fr : "Rassemblement Planétaire",
				en : "Planetary Gathering"
			},
			"rassemblement-1-event" : {
				fr : "Voilà maintenant des milliers d'années que l'espece humaine a conquis les étoiles.<br/>Dispersé sur de nombreux mondes, au quatre coins du système solaire, les Hommes se sont perdus... Il est grand temps de les rassembler !",
				en : "It has now been thousand of years since human being conquered the stars.<br/>Dispersed on many worlds, at the four corners of the solar system, men have lost themselves... It is high time to gather them together !"
			},
			
			"rassemblement-button" : {
				fr : "Demander le rassemblement",
				en : "-"
			},
			
			/**
			 * Mars
			 */
			"rassemblement-mars-event-titre" : {
				fr : "Rassemblement - Mars",
				en : "Gathering - Mars"
			},
			"rassemblement-mars-event" : {
				fr : "Voici la colonie minière de Mars : Première conquête de l'expansion planétaire. Mars forme la congrégation minière la plus importante de l'Humanité.<br/>Elle possède un impact majeur sur l'économie du système solaire entier.",
				en : "This is the mining colony of Mars : First conquest of global expansion. Mars is the largest mining congregation on Earth.<br/>It has a major impact on the economy of entire solar system."
			},
			"rassemblement-mars-event-contact" : {
				fr : "Bien le bonjour noble Dieu. Vous êtes le bienvenue sur la planéte mars, la plus grande des planéte ! Après la Terre bien sur...",
				en : "-"
			},
			"rassemblement-mars-event-contact2" : {
				fr : "Malheureusement, nous ne pouvons repondre à votre requête pour le moment...<br/>Comprenez-nous, mars detiens la majeur partie des ressources du systeme !<br/>Nous ne pouvons laisser les autres peuples nous les voler !",
				en : "-"
			},
			
			"rassemblement-mars2-event-titre" : {
				fr : "Revendication martienne",
				en : "-"
			},
			"rassemblement-mars2-event" : {
				fr : "Bien sur, nous seront plus à même de discuter si mars obtenait l'exclusivité sur l'économie humaine. Une banque universelle en somme...",
				en : "-"
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
