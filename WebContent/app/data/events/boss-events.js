'use strict';
define(["jquery", 
        "app/data/events/boss/cthulhu-events"], function($, CthulhuEvents){
	/**
	 * Evenements lies aux boss
	 */
    var data = {};
	
	return {
		get : function(key) {
		    var event = CthulhuEvents.get(key);
            if (!event) event = data[key];
            
            return event;
		}
	};
});
