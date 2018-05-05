'use strict';
define(["jquery", 
        "app/data/events/emissaires-events"], function($, EmissairesEvents){
	var data = {
	        /**
	         * Evenements generaux
	         */
			"first-event" : {
				name : "first-event",
			    text : "first-event",
			    rarity : 1,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             prix : {
                             croyance : 1,
                             illumination : 2
                         },
			             action : function(game) {
			                 game.pointManager.addPointsPercent({
		 						croyance : 10,
		 						illumination : 0,
		 						bien : 5,
		 						mal : 0
			            	 });
			                 
			                 game.eventManager.addEvents(["pluie?-event", "eclipse?-event", "sacrifice?-event", "blessure?-event", /**"argent?-event", "vrai-dieu?-event"**/]);
			                 game.alertPopup("first-event-ok");
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
                             
                        	 game.eventManager.addEvents(["secheresse!-event", "glaciation!-event", "sacrifice!-event", "epidemie!-event", "famine!-event", "faux-dieu!-event"]);
                        	 game.alertPopup("first-event-ko");
                         }
                     }
			    ]
			},
			"eveil-cthulhu-1!-event" : {
                name : "eveil-cthulhu-1!-event",
                text : "eveil-cthulhu-1!-event",
                rarity : 10,
                unique : true,
                actions : [
                     {
                         name : "yesButton",
                         action : function(game) {}
                     },
                     {
                         name : "noButton",
                         action : function(game) {}
                     }
                ]
            }
	};
	
	return {
		get : function(key) {
			var event = EmissairesEvents.get(key);
		    if (!event) event = data[key];
		    
		    return event;
		}
	};
});
