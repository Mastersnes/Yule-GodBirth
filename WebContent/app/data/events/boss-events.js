'use strict';
define(["jquery", 
        "app/data/events/boss/cthulhu-events", 
        "app/data/events/boss/faucheuse-events", 
        "app/data/events/boss/zombie-events"], function($, CthulhuEvents, FaucheuseEvents, ZombieEvents){
	/**
	 * Evenements lies aux boss
	 */
    var data = {};
	
	return {
		get : function(key) {
		    var event = CthulhuEvents.get(key);
		    if (!event) event = FaucheuseEvents.get(key);
		    if (!event) event = ZombieEvents.get(key);
            if (!event) event = data[key];
            
            return event;
		}
	};
});
