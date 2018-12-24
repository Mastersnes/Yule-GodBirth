'use strict';
define(["jquery"], 
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"xeno-1-event-titre" : {
				fr :"XL44H - Un nouveau monde",
				en :"XL44H - A new world"
			},
			"xeno-1-event" : {
				fr :"Dans le vide de l'espace, au milieu du système solaire XL44H, un gigantesque voilier solaire démarrait la procédure de décryogénisation.<br/>Sa mission : Analyser des signaux de vie dans le secteur...",
				en :"In the vacuum of space, in the middle of the XL44H solar system, a gigantic solar sailboat started the decryogenization procedure.<br/>His mission: Analyze life signals in the area..."
			},


			/**
			 * Espace origine
			 */
			"xeno-2-event-titre" : {
				fr :"XL44H - Des mondes reculés",
				en :"XL44H - Backward worlds"
			},
			"xeno-2-event" : {
				fr :"Maître ! Nous sommes enfin opérationnels pour nos recherches ! Seulement, différentes planètes sont visibles sur nos radars... Laquelle devrions-nous choisir ?",
				en :"Master ! We are finally operational for our research ! But, different planets are visible on our radars... Which one should we choose ?"
			},
			"xeno-2-event-green-button" : {
				fr :"La planète verte",
				en :"The green planet"
			},
			"xeno-2-event-green" : {
				fr :"L’équipage mit le cap sur la planète verte. Sa surface, recouverte de végétation dense, laissait présager une vie grouillante...",
				en :"The crew headed for the green planet. Its surface, covered with dense vegetation, foreshadowed a swarming life..."
			},
			"xeno-2-event-red-button" : {
				fr :"La planète rouge",
				en :"The red planet"
			},
			"xeno-2-event-red" : {
				fr :"L’équipage mit le cap sur la planète rouge. Sa surface, a priori aride, laissait présager un désert sans vie...",
				en :"The crew headed for the red planet. Its a priori arid surface foreshadowed a lifeless desert..."
			},
			"xeno-2-event-blue-button" : {
				fr :"La planète bleue",
				en :"The blue planet"
			},
			"xeno-2-event-blue" : {
				fr :"L’équipage mit le cap sur la planète bleue. Son environnement, apparemment exclusivement aquatique, laissait présager une vie sous-marine abondante...",
				en :"The crew headed for the blue planet. Its apparently exclusively aquatic environment foreshadowed abundant underwater life..."
			},

			/**
			 * Planete verte
			 */
			"xeno-green-event-titre" : {
				fr :"XL44H - Une étendue sauvage",
				en :"XL44H - A wilderness area"
			},
			"xeno-green-event" : {
				fr :"La planète était bel et bien verdoyante. Le vaisseau se posa difficilement dans une clairière, à l'abri des nombreux arbres environnants...",
				en :"The planet was indeed green. The ship landed with difficulty in a clearing, sheltered from the many surrounding trees..."
			},
			"xeno-explorer-button" : {
				fr :"Explorer",
				en :"To explore"
			},
			"xeno-green-event-explorer" : {
				fr :"L'exploration débuta, mais la planète était grande. Après de nombreux jours d’exploration, l'équipage avait l'impression d'être suivi...",
				en :"Exploration began, but the planet was large. After many days of exploration, the crew felt as if they were being followed..."
			},
			"xeno-green-event-explorer2" : {
				fr :"Des forêts alentour, sortirent des milliers de créatures humanoïdes. Elles semblaient primitives, mais désireuses de communiquer.<br/>Une nouvelle ère de paix et de partage commença.",
				en :"Thousands of humanoid creatures came out of the surrounding forests. They seemed primitive, but eager to communicate.<br/>A new air of peace and sharing began."
			},

			/**
			 * Planete rouge
			 */
			"xeno-red-event-titre" : {
				fr :"XL44H - Planète de feu",
				en :"XL44H - Planet of fire"
			},
			"xeno-red-event" : {
				fr :"Le vaisseau se posa avec facilité sur un sol vide et sableux. Le désert recouvrait l’immensité de la petite planète... Plus rien ne subsistait ici...",
				en :"The ship landed easily on empty and sandy ground. The desert covered the vastness of the small planet... Nothing remained here..."
			},
			"xeno-red-event-explorer" : {
				fr :"L’équipage trouva de nombreuses ruines d'un passé florissant...<br/>Les anciennes gravures parlaient d'une grande catastrophe ayant annihilé toute vie sur la planète...",
				en :"The crew found many ruins of a flourishing past...<br/>The ancient engravings spoke of a great disaster that destroyed all life on the planet..."
			},
			"xeno-red-event-explorer2" : {
				fr :"Motivés par cette découverte, ils repartirent dans l'espace. Les autres planètes cacheraient certainement de merveilleux secrets...",
				en :"Motivated by this discovery, they went back into space. The other planets would certainly hide wonderful secrets..."
			},

			/**
			 * Retour dans l'espace - 2eme chance
			 */
			"xeno-espace-red-event-titre" : {
				fr :"XL44H - De retour dans l'espace",
				en :"XL44H - Back in space"
			},
			"xeno-espace-red-event" : {
				fr :"Maître ! Nous revoici en stationnement orbital. Deux planètes sont encore visibles sur nos radars. Laquelle devrions-nous choisir ?",
				en :"Master ! We're back in orbit parking. Two planets are still visible on our radars. Which one should we choose ?"
			},

			/**
			 * Planete bleue
			 */
			"xeno-bleu-event-titre" : {
				fr :"XL44H - Planète tempête",
				en :"XL44H - Storm Planet"
			},
			"xeno-bleu-event" : {
				fr :"Le bleu détecté sur les radars n’était malheureusement pas de l'eau et l’équipage ne le comprit que trop tard...",
				en :"The blue detected in the radar was unfortunately not water and the crew only understood it too late..."
			},
			"xeno-bleu-event-2" : {
				fr :"Le vaisseau, perdant tout contrôle, fut pris dans le nuage électromagnétique géant que représentait la planète et explosa...",
				en :"The ship, losing all control, was caught in the giant electromagnetic cloud that the planet represented and exploded..."
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
