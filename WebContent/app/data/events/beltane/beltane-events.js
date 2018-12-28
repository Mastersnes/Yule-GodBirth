'use strict';
define(["jquery","app/utils/utils",
        "app/data/events/beltane/xeno-events",
        "app/data/events/beltane/rassemblement-events"
        ], function($, Utils, XenoEvents, RassemblementEvents){
	/**
	 * Beltane
	 */
	var data = {
			"beltane-start-event" : {
				name : "beltane-start-event",
			    text : "beltane-start-event",
			    rarity : 0,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.alertPopup("beltane-start2-event", function() {
			            		 game.gainLoop({
	                            	 croyance : 20,
	                            	 illumination : 10,
	                            	 bien : 0,
	                            	 mal : 0
	                             }, "quete");
	                             game.eventManager.addEvents(XenoEvents.start());
	                             game.eventManager.addEvents(RassemblementEvents.start()); 
			            	 });
			             }
			         }
			    ]
			}
	};
	
	return {
		get : function(key) {
			var event = XenoEvents.get(key);
		    if (!event) event = RassemblementEvents.get(key);
            if (!event) event = data[key];
            return event;
		},
		start : function(key) {
			return ["beltane-start-event"];
		}
	};
});
