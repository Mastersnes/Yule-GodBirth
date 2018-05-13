'use strict';
define(["jquery", 
        "app/data/events/pegre/crime-events",
        "app/data/events/pegre/mafia-events"], function($, CrimeEvents, MafiaEvents){
	/**
	 * Evenements lies a la pegre
	 */
    var data = {};
	
	return {
		get : function(key) {
		    var event = CrimeEvents.get(key);
		    if (!event) event = MafiaEvents.get(key);
            if (!event) event = data[key];
            
            return event;
		}
	};
});
