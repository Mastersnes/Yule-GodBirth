'use strict';
define(["jquery", 
        "app/data/events/imbolc/imbolc-events"], function($, ImbolcEvents){
	var data = {
	        /**
	         * Premier evenement
	         */
			"first-event" : {
				name : "first-event",
			    text : "first-event",
			    rarity : 0,
			    unique : true,
			    timer : -1,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.eventManager.addEvents(ImbolcEvents.start("accueil"));
			                 game.alertPopup("first-event-ok", function() {
			                	 game.artefactsView.add("corne-abondance");
			                 });
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.eventManager.rebellion++;
                        	 game.eventManager.addEvents(ImbolcEvents.start("refus"));
                        	 game.alertPopup("first-event-ko", function() {
                        		 game.artefactsView.add("torque");
                        	 });
                         }
                     }
			    ]
			}
	};
	
	return {
		get : function(key) {
			var event = ImbolcEvents.get(key);
		    if (!event) event = data[key];
		    
		    return event;
		}
	};
});
