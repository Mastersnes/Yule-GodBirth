'use strict';
define(["jquery","app/utils/utils",
        "app/data/events/ostara/tyrannie-events",
        "app/data/events/ostara/guerre-events",
        "app/data/events/ostara/nature-events",
        "app/data/events/ostara/lune-events"
        ], function($, Utils, TyrannieEvents, GuerreEvents, NatureEvents, LuneEvents){
	/**
	 * Ostara
	 */
	var data = {
			"ostara-start-event" : {
				name : "ostara-start-event",
			    text : "ostara-start-event",
			    rarity : 0,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
                             game.gainLoop({
                            	 croyance : 10,
                            	 illumination : 10,
                            	 bien : 0,
                            	 mal : 0
                             }, "quete");
                             game.eventManager.addEvents(GuerreEvents.start());
                             game.eventManager.addEvents(NatureEvents.start());
                             game.eventManager.addEvents(LuneEvents.start());
                             game.eventManager.addEvents(["accueil-riche-event"]);
			             }
			         }
			    ]
			},
			"accueil-riche-event" : {
				name : "accueil-riche-event",
			    text : "accueil-riche-event",
			    rarity : 40,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			            	 game.eventManager.addEvents(TyrannieEvents.start());
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -80,
			            		 illumination : -80,
			            		 bien : 0,
			            		 mal : 0
			            	}, "quete");
			                 game.alertPopup("accueil-riche-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.alertPopup("accueil-riche-event-ko");
                             game.eventManager.showNow("accueil-riche-event-2");
                         }
                     }
			    ]
			},
			"accueil-riche-event-2" : {
				name : "accueil-riche-event-2",
				text : "accueil-riche-event-2",
				rarity : -1,
				unique : true,
				actions : [
				           {
				        	   name : "le-tuer-button",
				        	   action : function(game) {
				        		   game.gainLoop({
		                            	 croyance : 0,
		                            	 illumination : 0,
		                            	 bien : 0,
		                            	 mal : 20
		                             }, "quete");
				        		   game.eventManager.rebellion++;
				        		   game.alertPopup("accueil-riche-event-tuer");
				        	   }
				           },
				           {
				        	   name : "laisser-partir-button",
				        	   action : function(game) {
				        		   game.gainLoop({
		                            	 croyance : 0,
		                            	 illumination : 30,
		                            	 bien : 20,
		                            	 mal : 0
		                             }, "quete");
				        		   game.alertPopup("accueil-riche-event-partir");
				        	   }
				           }
				           ]
			}
	};
	
	return {
		get : function(key) {
			var event = GuerreEvents.get(key);
			if (!event) event = TyrannieEvents.get(key);
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
