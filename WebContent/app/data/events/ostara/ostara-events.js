'use strict';
define(["jquery","app/utils/utils",
        "app/data/events/ostara/guerre-events",
        "app/data/events/ostara/nature-events",
        "app/data/events/ostara/lune-events"
        ], function($, Utils, GuerreEvents, NatureEvents, LuneEvents){
	/**
	 * Ostara
	 */
	var data = {
			"ostara-start-event" : {
				name : "ostara-start-event",
			    text : "ostara-start-event",
			    rarity : 5,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
                             game.gainLoop({
                            	 croyance : 5,
                            	 illumination : 5,
                            	 bien : 0,
                            	 mal : 0
                             }, "quete");
                             game.eventManager.addEvents(GuerreEvents.start());
                             game.eventManager.addEvents(NatureEvents.start());
                             game.eventManager.addEvents(LuneEvents.start());
			             }
			         }
			    ]
			}
	};
	
	return {
		get : function(key) {
			var event = GuerreEvents.get(key);
		    if (!event) event = NatureEvents.get(key);
		    if (!event) event = LuneEvents.get(key);
            if (!event) event = data[key];
            return event;
		},
		start : function(key) {
			return ["ostara-start-event"];
		}
	};
});
