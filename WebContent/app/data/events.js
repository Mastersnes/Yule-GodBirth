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
		 						bien : 50,
		 						mal : 0
			            	 });
			                 game.eventManager.addEvents(["pluie?-event", "eclipse?-event", "sacrifice?-event", "blessure?-event", "argent?-event"]);
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
 		 						mal : 50
 			            	 });
                        	 game.eventManager.addEvents(["secheresse!-event", "glaciation!-event", "sacrifice!-event", "epidemie!-event", "famine!-event"]);
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
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("pluie?-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("pluie?-event-ko");
                         }
                     }
			    ]
			},
			"eclipse?-event" : {
				name : "eclipse?-event",
			    text : "eclipse?-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("eclipse?-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("eclipse?-event-ko");
                         }
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
