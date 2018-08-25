'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Zombie
		 * Start
		 */
		"zombie-start-event" : {
			fr : "Au bout du monde, près des montagnes bordant le ciel, une grande et somptueuse cité fut créée par un homme d'une richesse infinie...",
			en : "At the end of the world, near the moutains that border the sky, a large and sumptuous city was created by a man of infinite wealth..."
		},
		"zombie-start-event-2" : {
			fr : "Dans ce lieu de débauche et de luxure, tout était permis. Le plaisir était le maître mot et aucune loi ne s'appliquait... Son nom était Baia !",
			en : "In this place of debauchery and lust, everything was allowed. Pleasure was the keyword and no law applied... It's name was Baia !"
		}
	};
	
	return {
		local : null,
		
		get : function(key) {
			return data[key];
		}
	};
});
