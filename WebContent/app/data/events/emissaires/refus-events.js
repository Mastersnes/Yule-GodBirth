'use strict';
define(["jquery"], function($){
	/**
	 * Si on refuse d'entendre les emissaires
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
			                 game.pointManager.addPointsPercent({
                                croyance : 0,
                                illumination : 0,
                                bien : 20,
                                mal : 0
                             });
			                 game.alertPopup("secheresse!-event-ok");
			                 game.eventManager.addEvents(["culte-eau-event"]);
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("secheresse!-event-ko");
                        	 game.eventManager.addEvents(["culte-feu-event"]);
                        	 
                        	 // Si on a deja laiss� s'etendre la glace, on finira avec deux mondes
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
			             prix : {
                            croyance : 30,
                            illumination : 0
                         },
			             action : function(game) {
			                 game.pointManager.addPointsPercent({
                                croyance : 0,
                                illumination : 0,
                                bien : 20,
                                mal : 0
                             });
			                 game.alertPopup("glaciation!-event-ok");
			                 game.eventManager.addEvents(["culte-eau-event"]);
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("glaciation!-event-ko");
                        	 game.eventManager.addEvents(["culte-glace-event"]);
                        	 // Si on a deja laiss� s'etendre le feu, on finira avec deux mondes
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
			    rarity : 50,
			    unique : true,
			    actions : [
			         {
			             name : "arreter-massacre",
			             action : function(game) {
			                 game.eventManager.showNow("sacrifice!-event-2");
			             }
			         },
			         {
                         name : "laisserfaire",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 20
                              });
                        	 game.alertPopup("sacrifice!-event-ko");
                        	 game.eventManager.addEvents(["colere-faucheuse-1!-event"]);
                         }
                     }
			    ]
			},
			"sacrifice!-event-2" : {
                name : "sacrifice!-event-2",
                text : "sacrifice!-event-2",
                rarity : -1,
                unique : true,
                actions : [
                     {
                         name : "envoyerdieudeesse",
                         prix : {
                             croyance : 10,
                             illumination : 0
                         },
                         conditions : [
          			         {
                                 name : "dieu",
                                 level : 5
                             },
                             {
                                 name : "deesse",
                                 level : 5
                             }
          			     ], 
                         action : function(game) {
                        	 game.alertPopup("sacrifice!-event-2-ok");
                        	 game.eventManager.addEvents(["folie-1?-event"]);
                         }
                     },
                     {
                         name : "tuezles",
                         prix : {
                             croyance : 15,
                             illumination : 1
                         },
                         action : function(game) {
                        	 game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 10
                              });
                        	 game.alertPopup("sacrifice!-event-2-tuer");
                         }
                     },
                     {
                         name : "tantpis",
                         action : function(game) {
                        	 game.alertPopup("sacrifice!-event-2-ko");
                        	 game.eventManager.addEvents(["colere-faucheuse-1!-event"]);
                         }
                     }
                ]
            },
			"epidemie!-event" : {
				name : "epidemie!-event",
			    text : "epidemie!-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "etudier",
			             prix : {
                             croyance : 5,
                             illumination : 0
                         },
			             action : function(game) {
			                 game.alertPopup("epidemie!-event-etude");
			                 game.eventManager.addEvents(["zombie-etude-1!-event"]);
			             }
			         },
			         {
                         name : "brulertous",
                         action : function(game) {
                        	 game.eventManager.showNow("epidemie!-event-bruler");
                         }
                     },
			         {
                         name : "soigner",
                         prix : {
                             croyance : 20,
                             illumination : 0
                         },
                         conditions : [
	                       {
	                           name : "lune",
	                           level : 1
	                       }
	    			     ], 
                         action : function(game) {
                        	 game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 20,
                                 mal : 0
                              });
                        	 game.alertPopup("epidemie!-event-soin");
                         }
                     },
			         {
                         name : "laisserfaire",
                         action : function(game) {
                        	 game.alertPopup("epidemie!-event-laisser");
                        	 game.eventManager.addEvents(["zombie-invasion-1!-event"]);
                         }
                     }
			    ]
			},
			"epidemie!-event-bruler" : {
				name : "epidemie!-event-bruler",
				text : "epidemie!-event-bruler",
				rarity : -1,
				unique : true,
				actions : [
				           {
				        	   name : "brulertousinsiste",
				        	   prix : {
		                            croyance : 10,
		                            illumination : 0
		                       },
				        	   action : function(game) {
				        		   game.pointManager.addPointsPercent({
		                                 croyance : 0,
		                                 illumination : 0,
		                                 bien : 0,
		                                 mal : 10
		                              });
				        		   game.alertPopup("epidemie!-event-bruler-ok");
				        	   }
				           },
				           {
				        	   name : "brulermalades",
				        	   action : function(game) {
				        		   game.pointManager.addPointsPercent({
		                                 croyance : 0,
		                                 illumination : 0,
		                                 bien : 5,
		                                 mal : 5
		                              });
				        		   game.alertPopup("epidemie!-event-bruler-brulermalades");
				        	   }
				           }
				           ]
			},
			"famine!-event" : {
				name : "famine!-event",
			    text : "famine!-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             prix : {
	                            croyance : 5,
	                            illumination : 0
	                       },
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 5,
                                 mal : 0
                              });
			                 game.alertPopup("famine!-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 5
                              });
                        	 game.alertPopup("famine!-event-ko");
                         }
                     }
			    ]
			},
			"faux-dieu!-event" : {
                name : "faux-dieu!-event",
                text : "faux-dieu!-event",
                rarity : 50,
                unique : true,
                actions : [
                     {
                         name : "spectacle",
                         prix : {
	                            croyance : 5,
	                            illumination : 0
	                       },
                       conditions : [
  	                       {
  	                           name : "terre",
  	                           level : 1
  	                       }
  	    			     ],
                         action : function(game) {
                             game.alertPopup("faux-dieu!-event-ok");
                         }
                     },
                     {
                         name : "tuerresponsable",
                         action : function(game) {
                             game.alertPopup("faux-dieu!-event-tuer");
                             game.eventManager.addEvents(["rebellion1!-event"]);
                         }
                     },
                     {
                         name : "dementir",
                         action : function(game) {
                             game.alertPopup("faux-dieu!-event-dementir");
                             game.eventManager.addEvents(["soupcon1!-event"]);
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
