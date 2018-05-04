'use strict';
define(["jquery"], function($){
	var data = {
			"first-event" : {
				name : "first-event",
			    text : "first-event",
			    rarity : 1,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.pointManager.addPoints({
		 						croyance : 1000,
		 						illumination : 0,
		 						bien : 10,
		 						mal : 0
			            	 });
			                 
			                 game.eventManager.addEvents(["pluie?-event", "eclipse?-event", "sacrifice?-event", "blessure?-event", "argent?-event", "vrai-dieu?-event"]);
			                 game.alertPopup("first-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPoints({
                                croyance : 500,
                                illumination : 0,
                                bien : 0,
                                mal : 15
                             });
                             
                        	 game.eventManager.addEvents(["secheresse!-event", "glaciation!-event", "sacrifice!-event", "epidemie!-event", "famine!-event", "faux-dieu!-event"]);
                        	 game.alertPopup("first-event-ko");
                         }
                     }
			    ]
			},
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
			             action : function(game) {
                             game.pointManager.addPoints({
                                croyance : 500,
                                illumination : 0,
                                bien : 20,
                                mal : 0
                             });
                             
			                 game.alertPopup("pluie?-event-ok");
			                 game.eventManager.addEvents(["cadeau-pluie?-event"]);
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPoints({
                                croyance : 50,
                                illumination : 0,
                                bien : 0,
                                mal : 25
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
                             game.pointManager.addPoints({
                                croyance : 5000,
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
			             action : function(game) {
                             game.pointManager.addPoints({
                                croyance : 1000,
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
                             game.pointManager.addPoints({
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
            },
            "eclipse-punition?-event" : {
                name : "eclipse-punition?-event",
                text : "eclipse-punition?-event",
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
            },
			"sacrifice?-event" : {
				name : "sacrifice?-event",
			    text : "sacrifice?-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("sacrifice?-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("sacrifice?-event-ko");
                         }
                     }
			    ]
			},
			"blessure?-event" : {
				name : "blessure?-event",
			    text : "blessure?-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("blessure?-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("blessure?-event-ko");
                         }
                     }
			    ]
			},
			"argent?-event" : {
				name : "argent?-event",
			    text : "argent?-event",
			    rarity : 10,
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
            },
			/**
			 * Sans Emissaires
			 */
			"secheresse!-event" : {
				name : "secheresse!-event",
			    text : "secheresse!-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("secheresse!-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("secheresse!-event-ko");
                         }
                     }
			    ]
			},
			"glaciation!-event" : {
				name : "glaciation!-event",
			    text : "glaciation!-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("glaciation!-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("glaciation!-event-ko");
                         }
                     }
			    ]
			},
			"sacrifice!-event" : {
				name : "sacrifice!-event",
			    text : "sacrifice!-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("sacrifice!-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("sacrifice!-event-ko");
                         }
                     }
			    ]
			},
			"epidemie!-event" : {
				name : "epidemie!-event",
			    text : "epidemie!-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("epidemie!-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("epidemie!-event-ko");
                         }
                     }
			    ]
			},
			"famine!-event" : {
				name : "famine!-event",
			    text : "famine!-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("famine!-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("famine!-event-ko");
                         }
                     }
			    ]
			},
			"faux-dieu!-event" : {
                name : "faux-dieu!-event",
                text : "faux-dieu!-event",
                rarity : 10,
                unique : false,
                actions : [
                     {
                         name : "yesButton",
                         action : function(game) {
                             game.alertPopup("faux-dieu!-event-ok");
                         }
                     },
                     {
                         name : "noButton",
                         action : function(game) {
                             game.alertPopup("faux-dieu!-event-ko");
                         }
                     }
                ]
            },
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		}
	};
});
