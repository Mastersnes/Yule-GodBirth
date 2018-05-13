'use strict';
define(["jquery", 
        "app/data/events/peuple/epreuve-events",
        "app/data/events/peuple/rebellion-events"], function($, EpreuveEvents, RebellionEvents){
	/**
	 * Evenements lies au peuple
	 */
    var data = {};
	
	return {
		get : function(key) {
		    var event = EpreuveEvents.get(key);
		    if (!event) event = RebellionEvents.get(key);
            if (!event) event = data[key];
            
            return event;
		}
	};
});
