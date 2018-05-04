'use strict';
define(["jquery"], function($){
	var data = {
			/**
			 * Question des emissaires
			 */
			"pluie?-event" : {
				name : "pluie?-event",
			    text : "pluie?-event",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             prix : {
                             croyance : 30,
                             illumination : 0
                         },
			             action : function(game) {
                             game.pointManager.addPointsPercent({
                                croyance : 5,
                                illumination : 0,
                                bien : 10,
                                mal : 0
                             });
                             
			                 game.alertPopup("pluie?-event-ok");
			                 game.eventManager.addEvents(["cadeau-pluie?-event"]);
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                croyance : 2,
                                illumination : 0,
                                bien : 0,
                                mal : 15
                             });
                             game.alertPopup("pluie?-event-ko");
                             game.eventManager.addEvents(["secheresse!-event"]);
                         }
                     }
			    ]
			},
			"cadeau-pluie?-event" : {
                name : "cadeau-pluie?-event",
                text : "cadeau-pluie?-event",
                rarity : 20,
                unique : true,
                actions : [
                     {
                         name : "croyance",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                croyance : 50,
                                illumination : 0,
                                bien : 0,
                                mal : 0
                             });
                             
                             game.alertPopup("cadeau-pluie?-event-croyance");
                         }
                     },
                     {
                         name : "illumination",
                         action : function(game) {
                             game.pointManager.addPoints({
                                croyance : 0,
                                illumination : 5,
                                bien : 0,
                                mal : 0
                             });
                             
                             game.alertPopup("cadeau-pluie?-event-illumination");
                         }
                     }
                ]
            },
            
			"eclipse?-event" : {
				name : "eclipse?-event",
			    text : "eclipse?-event",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             prix : {
                             croyance : 20,
                             illumination : 0
                         },
			             action : function(game) {
                             game.pointManager.addPointsPercent({
                                croyance : 10,
                                illumination : 0,
                                bien : 0,
                                mal : 10
                             });
                             
                             game.alertPopup("eclipse?-event-ok");
                             game.eventManager.addEvents(["eveil-cthulhu-1!-event"]);
                         }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 5,
                                 mal : 0
                              });
                              
                              game.alertPopup("eclipse?-event-ko");
                              game.eventManager.addEvents(["eclipse-punition?-event"]);
                          }
                     }
			    ]
			},
            "eclipse-punition?-event" : {
                name : "eclipse-punition?-event",
                text : "eclipse-punition?-event",
                rarity : 0,
                unique : true,
                actions : [
                     {
                         name : "letuer",
                         prix : {
                             croyance : 1,
                             illumination : 0
                         },
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 30
                              });
                             
                             game.alertPopup("eclipse-punition?-event-ok");
                         }
                     },
                     {
                         name : "lelaisserpartir",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                 croyance : 1,
                                 illumination : 0,
                                 bien : 1,
                                 mal : 0
                              });
                             game.pointManager.addPoints({
                                  croyance : 0,
                                  illumination : 1,
                                  bien : 0,
                                  mal : 0
                               });
                             
                             game.alertPopup("eclipse-punition?-event-ko");
                         }
                     }
                ]
            },
            
			"sacrifice?-event" : {
				name : "sacrifice?-event",
			    text : "sacrifice?-event",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.pointManager.addPointsPercent({
                                 croyance : 10,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 30
                              });
                             
                             game.alertPopup("sacrifice?-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                 croyance : 3,
                                 illumination : 0,
                                 bien : 10,
                                 mal : 0
                              });
                             
                             game.alertPopup("sacrifice?-event-ko");
                         }
                     }
			    ]
			},
			
			"blessure?-event" : {
				name : "blessure?-event",
			    text : "blessure?-event",
			    rarity : 50,
			    unique : false,
			    actions : [
			         {
			             name : "bisoumagique",
			             prix : {
                             croyance : 5,
                             illumination : 0
                         },
			             action : function(game) {
			                 game.pointManager.addPointsPercent({
                                 croyance : 1,
                                 illumination : 0,
                                 bien : 5,
                                 mal : 0
                              });
			                 game.alertPopup("blessure?-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 8
                              });
                        	 game.alertPopup("blessure?-event-ko");
                         }
                     }
			    ]
			},
			
			"argent?-event" : {
				name : "argent?-event",
			    text : "argent?-event",
			    rarity : 50,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("argent?-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("argent?-event-ko");
                         }
                     }
			    ]
			},
			
			"vrai-dieu?-event" : {
                name : "vrai-dieu?-event",
                text : "vrai-dieu?-event",
                rarity : 10,
                unique : false,
                actions : [
                     {
                         name : "yesButton",
                         action : function(game) {
                             game.alertPopup("vrai-dieu?-event-ok");
                         }
                     },
                     {
                         name : "noButton",
                         action : function(game) {
                             game.alertPopup("vrai-dieu?-event-ko");
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
