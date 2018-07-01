'use strict';
define(["jquery"], function($){
	/**
	 * Question des emissaires
	 */
	var data = {
			"entrer-pluie-event" : {
				name : "entrer-pluie-event",
			    text : "entrer-pluie-event",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
                             game.pointManager.addPointsPercent({
                                croyance : 10,
                                illumination : 0,
                                bien : 10,
                                mal : 0
                             });
                             
			                 game.alertPopup("entrer-pluie-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                croyance : 0,
                                illumination : 0,
                                bien : 0,
                                mal : 15
                             });
                             game.eventManager.rebellion++;
                             game.alertPopup("entrer-pluie-event-ko");
                         }
                     }
			    ]
			},
            
			"entrer-eclipse-event" : {
				name : "entrer-eclipse-event",
			    text : "entrer-eclipse-event",
			    rarity : 20,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
                             game.pointManager.addPointsPercent({
                                croyance : 10,
                                illumination : 0,
                                bien : 0,
                                mal : 0
                             });
                             
                             game.alertPopup("entrer-eclipse-event-ok");
                             game.eventManager.addEvents(["cthulhu-1-event"]);
                         }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                              game.alertPopup("entrer-eclipse-event-ko");
                              game.eventManager.showNow("entrer-eclipse-punition-event");
                          }
                     }
			    ]
			},
            "entrer-eclipse-punition-event" : {
                name : "entrer-eclipse-punition-event",
                text : "entrer-eclipse-punition-event",
                rarity : 0,
                unique : true,
                actions : [
                     {
                         name : "letuer",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 30
                              });
                             
                             game.alertPopup("entrer-eclipse-punition-event-tuer");
                             game.eventManager.addEvents(["cthulhu-1-event"]);
                         }
                     },
                     {
                         name : "lelaisserpartir",
                         action : function(game) {
                             game.pointManager.addPoints({
                                  croyance : 0,
                                  illumination : 1,
                                  bien : 0,
                                  mal : 0
                               });
                             game.pointManager.addPointsPercent({
                                 croyance : -10,
                                 illumination : 10,
                                 bien : 10,
                                 mal : 0
                              });
                             
                             game.eventManager.rebellion++;
                             game.alertPopup("entrer-eclipse-punition-event-partir");
                         }
                     }
                ]
            },
            
			"entrer-sacrifice-event" : {
				name : "entrer-sacrifice-event",
			    text : "entrer-sacrifice-event",
			    rarity : 20,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.pointManager.addPointsPercent({
                                 croyance : 20,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 30
                              });
                             
			                 game.eventManager.addEvents("croisade-galactique-1-event");
                             game.alertPopup("entrer-sacrifice-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                 croyance : 10,
                                 illumination : 0,
                                 bien : 15,
                                 mal : 0
                              });
                             
                             game.alertPopup("entrer-sacrifice-event-ko");
                         }
                     },
			         {
                         name : "tuerpretre",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 20
                              });
                             
                             game.eventManager.rebellion++;
                             game.alertPopup("entrer-sacrifice-event-tuer");
                         }
                     }
			    ]
			},
			
			"entrer-blessure-event" : {
				name : "entrer-blessure-event",
			    text : "entrer-blessure-event",
			    rarity : 100,
			    unique : false,
			    actions : [
			         {
			             name : "bisoumagique",
			             action : function(game) {
			                 game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 10,
                                 mal : 0
                              });
			                 game.alertPopup("entrer-blessure-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 10
                              });
                             game.eventManager.rebellion++;
                        	 game.alertPopup("entrer-blessure-event-ko");
                         }
                     }
			    ]
			},
			
			"entrer-argent-event" : {
				name : "entrer-argent-event",
			    text : "entrer-argent-event",
			    rarity : 50,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			            	 game.eventManager.addEvents(["mafia-intergalactique-1-event"]);
			                 game.alertPopup("entrer-argent-event-ok", function() {
			                	 game.artefactsView.add("carte-membre-mafia");
			                 });
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.eventManager.addEvents(["mafia-intergalactique-1-event"]);
                        	 game.alertPopup("entrer-argent-event-ko");
                         }
                     }
			    ]
			},
			
			"entrer-vraidieu-event" : {
                name : "entrer-vraidieu-event",
                text : "entrer-vraidieu-event",
                rarity : 30,
                unique : true,
                actions : [
                     {
                         name : "yesButton",
                         action : function(game) {
                             game.alertPopup("entrer-vraidieu-event-ok");
                             game.eventManager.addEvents(["epreuve-1-event"]);
                         }
                     },
                     {
                         name : "noButton",
                         action : function(game) {
                             game.alertPopup("entrer-vraidieu-event-ko");
                             game.eventManager.rebellion++;
                         }
                     }
                ]
            }
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return data[key];
		}
	};
});
