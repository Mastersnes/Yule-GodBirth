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
			                 game.pointManager.addPointsPercent({
		 						croyance : 10,
		 						illumination : 0,
		 						bien : 5,
		 						mal : 0
			            	 });
			                 
			                 game.eventManager.addEvents(ImbolcEvents.list("accueil"));
			                 game.alertPopup("first-event-ok", function() {
			                	 game.artefactsView.add("corne-abondance");
			                 });
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                croyance : 5,
                                illumination : 0,
                                bien : 0,
                                mal : 6
                             });
                             
                             game.eventManager.rebellion++;
                        	 game.eventManager.addEvents(ImbolcEvents.list("refus"));
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
