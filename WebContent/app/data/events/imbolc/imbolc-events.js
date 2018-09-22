'use strict';
define(["jquery", 
        "app/data/events/imbolc/accueil-events",
        "app/data/events/imbolc/refus-events"], 
        function($, AccueilEvents, RefusEvents){
	/**
	 * Evenements lies à imbolc
	 */
    var data = {};
	
	return {
		get : function(key) {
		    var event = AccueilEvents.get(key);
		    if (!event) event = RefusEvents.get(key);
            if (!event) event = data[key];
            
            return event;
		},
		start : function(key) {
		    if (key == "accueil") return AccueilEvents.start();
		    else return RefusEvents.start();
		}
	};
});