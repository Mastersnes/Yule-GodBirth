'use strict';
define(["jquery","app/utils/utils",
        "app/data/events/imbolc/croisade-events",
        "app/data/events/imbolc/epreuve-events"
        ], function($, Utils, CroisadeEvents, EpreuveEvents){
	/**
	 * Question des emissaires
	 */
	var data = {
			"accueil-pluie-event" : {
				name : "accueil-pluie-event",
			    text : "accueil-pluie-event",
			    rarity : 15,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
                             game.gainLoop({
                            	 croyance : 20,
                            	 illumination : 10,
                            	 bien : 10,
                            	 mal : 0
                             }, "quete");
                             
			                 game.alertPopup("accueil-pluie-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.gainLoop({
                            	 croyance : 0,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 10
                             }, "quete");
                        	 game.eventManager.rebellion++;
                             game.alertPopup("accueil-pluie-event-ko");
                         }
                     }
			    ]
			},
			
			"accueil-sacrifice-event" : {
				name : "accueil-sacrifice-event",
			    text : "accueil-sacrifice-event",
			    rarity : 20,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "acceptButton",
			             action : function(game) {
                             game.gainLoop({
                            	 croyance : 20,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 20
                             }, "quete");
                             
                             game.eventManager.addEvents(CroisadeEvents.start());
			                 game.alertPopup("accueil-sacrifice-event-accept");
			             }
			         },
			         {
                         name : "refusButton",
                         action : function(game) {
                        	 game.gainLoop({
                            	 croyance : 0,
                            	 illumination : 20,
                            	 bien : 20,
                            	 mal : 0
                             }, "quete");
                        	 game.eventManager.rebellion++;
                             game.alertPopup("accueil-sacrifice-event-refus");
                         }
                     },
			         {
                         name : "accueil-sacrifice-event-tuer-pretre-button",
                         action : function(game) {
                        	 game.gainLoop({
                            	 croyance : 30,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 20
                             }, "quete");
                        	 game.eventManager.addEvents(CroisadeEvents.start());
                             game.alertPopup("accueil-sacrifice-event-tuer-pretre");
                         }
                     }
			    ]
			},
			
			"accueil-blessure-event" : {
				name : "accueil-blessure-event",
			    text : "accueil-blessure-event",
			    rarity : 150,
			    unique : false,
			    starter : true,
			    actions : [
			         {
			             name : "guerir-button",
			             action : function(game) {
                             if (Utils.rand(0, 10) < 5) {
				            	 game.gainLoop({
	                            	 croyance : 0,
	                            	 illumination : 0,
	                            	 bien : 10,
	                            	 mal : 0
	                             }, "quete");
				                 game.alertPopup("accueil-blessure-event-ok");
                             }else {
                            	 game.gainLoop({
                                	 croyance : 10,
                                	 illumination : 10,
                                	 bien : 20,
                                	 mal : 0
                                 }, "quete");
    			                 game.alertPopup("accueil-blessure2-event-ok");
                             }
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 if (Utils.rand(0, 10) < 5) {
	                        	 game.gainLoop({
	                            	 croyance : 0,
	                            	 illumination : 0,
	                            	 bien : 0,
	                            	 mal : 10
	                             }, "quete");
                        	 }else {
	                        	 game.gainLoop({
	                            	 croyance : 0,
	                            	 illumination : 0,
	                            	 bien : 0,
	                            	 mal : 20
	                             }, "quete");
                        	 }
                        	 game.eventManager.rebellion++;
                             game.alertPopup("accueil-blessure-event-ko");
                         }
                     }
			    ]
			},
			
			"accueil-question-event" : {
				name : "accueil-question-event",
			    text : "accueil-question-event",
			    rarity : 50,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			            	 game.eventManager.addEvents(EpreuveEvents.start());
			                 game.alertPopup("accueil-question-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.pointManager.addPointsPercent({
                        		 croyance : -50,
                        		 illumination : -20,
                        		 bien : 0,
                        		 mal : 0
                        	 }, "quete");
                        	 game.eventManager.rebellion++;
                        	 game.alertPopup("accueil-question-event-ko");
                         }
                     }
			    ]
			},
	};
	
	return {
		get : function(key) {
			var event = CroisadeEvents.get(key);
		    if (!event) event = EpreuveEvents.get(key);
            if (!event) event = data[key];
            return event;
		},
		start : function(key) {
			var names = [];
			for (var index in data) {
				var elmt = data[index];
				if (elmt && elmt.starter) names.push(elmt.name);
			}
			
			return names;
		}
	};
});
