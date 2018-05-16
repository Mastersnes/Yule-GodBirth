'use strict';
define(["jquery"], function($){
	/**
	 * Si on refuse d'entendre les emissaires
	 * TODO
	 */
	var data = {
			/**
			 * Peut aussi arriver si on refuse de faire tomber la pluie
			 */
			"secheresse!-event" : {
				name : "secheresse!-event",
			    text : "secheresse!-event",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
			             name : "faire-pleuvoir",
			             prix : {
			            	croyance : 20,
			            	illumination : 0
			             },
			             action : function(game) {
			                 game.alertPopup("secheresse!-event-ok");
			                 game.eventManager.addEvents(["culte-eau-event"]);
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("secheresse!-event-ko");
                        	 game.eventManager.addEvents(["culte-feu-event"]);
                        	 
                        	 // Si on a deja laissé s'etendre la glace, on finira avec deux mondes
                        	 if (game.eventManager.contains("un-monde-glace-event") > -1) {
                        	     game.eventManager.removeEvents(["un-monde-glace-event"]);
                        	     game.eventManager.addEvents(["deux-monde-feu-glace-event"]);
                        	 }else {
                        	     game.eventManager.addEvents(["un-monde-feu-event"]);
                        	 }
                         }
                     }
			    ]
			},
			"glaciation!-event" : {
				name : "glaciation!-event",
			    text : "glaciation!-event",
			    rarity : 20,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("glaciation!-event-ok");
			                 game.eventManager.addEvents(["culte-eau-event"]);
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("glaciation!-event-ko");
                        	 game.eventManager.addEvents(["culte-glace-event"]);
                        	 // Si on a deja laissé s'etendre le feu, on finira avec deux mondes
                        	 if (game.eventManager.contains("un-monde-feu-event") > -1) {
                                 game.eventManager.removeEvents(["un-monde-feu-event"]);
                                 game.eventManager.addEvents(["deux-monde-feu-glace-event"]);
                             }else {
                                 game.eventManager.addEvents(["un-monde-glace-event"]);
                             }
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
			return data[key];
		}
	};
});
