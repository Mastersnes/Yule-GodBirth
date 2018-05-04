'use strict';
define(["jquery", 
        "app/data/events/emissaires/entrer-events",
        "app/data/events/emissaires/refus-events"], function($, EmissaireEntreEvents, EmissaireRefusEvents){
	/**
	 * Evenements liés aux emissaires
	 */
    var data = {};
	
	return {
		get : function(key) {
		    var event = EmissaireEntreEvents.get(key);
		    if (!event) event = EmissaireRefusEvents.get(key);
            if (!event) event = data[key];
            
            return event;
		}
	};
});
