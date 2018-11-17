'use strict';
define(["jquery"
        ], function($){
	/**
	 * Rebellion !
	 */
	var data = {
			"rebellion-start-event" : {
				name : "rebellion-start-event",
			    text : "rebellion-start-event",
			    rarity : 100,
			    unique : true,
			    actions : [
			         {
			             name : "pasMonProbleme-button",
			             action : function(game) {
			            	 game.gainLoop({
                            	 croyance : 0,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 10
                             }, "quete");
			            	 game.eventManager.addEvents(DemonsEvents.start());
			                 game.alertPopup("rebellion-start-event-ko");
			             }
			         },
			         {
                         name : "intervenir-button",
                         action : function(game) {
                        	 game.eventManager.addEvents(DemonsEvents.start());
                        	 game.alertPopup("rebellion-start-event-ok", function() {
                        		 game.artefactsView.add("idole-feu");
                        	 });
                         }
                     }
			    ]
			}
	};
	
	return {
		get : function(key) {
			var event = data[key];
            return event;
		},
		start : function(key) {
			return ["rebellion-start-event"];
		}
	};
});
