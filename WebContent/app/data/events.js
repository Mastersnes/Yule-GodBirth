'use strict';
define(["jquery", 
        "app/data/events/emissaires-events",
        "app/data/events/boss-events"], function($, EmissairesEvents, BossEvents){
	var data = {
	        /**
	         * Evenements generaux
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
			                 
			                 game.eventManager.addEvents(["entrer-pluie-event", "entrer-eclipse-event", "entrer-sacrifice-event", "entrer-blessure-event", "entrer-argent-event", "entrer-vraidieu-event"]);
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
                        	 game.eventManager.addEvents(["refus-secheresse-event", "refus-glaciation-event", "refus-sacrifice-event", "refus-epidemie-event", "refus-fauxdieu-event"]);
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
			var event = EmissairesEvents.get(key);
			if (!event) BossEvents.get(key);
		    if (!event) event = data[key];
		    
		    return event;
		}
	};
});
