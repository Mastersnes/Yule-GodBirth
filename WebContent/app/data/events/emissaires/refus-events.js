'use strict';
define(["jquery"], function($){
	/**
	 * Si on refuse d'entendre les emissaires
	 */
	var data = {
			"refus-secheresse-event" : {
				name : "refus-secheresse-event",
			    text : "refus-secheresse-event",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
                         name : "pas-probleme",
                         action : function(game) {
                        	 game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 20
                              });
                        	 game.eventManager.addEvents(["demonfeu-1-event"]);
                        	 game.alertPopup("refus-secheresse-event-ko");
                         }
                     },
                     {
                         name : "enqueter",
                         action : function(game) {
                        	 game.eventManager.addEvents(["demonfeu-1-event"]);
                        	 game.alertPopup("refus-secheresse-event-ok", function() {
                        		 game.artefactsView.add("idole-feu");
                        	 });
                         }
                     }
			    ]
			},
			"refus-glaciation-event" : {
				name : "refus-glaciation-event",
			    text : "refus-glaciation-event",
			    rarity : 20,
			    unique : true,
			    actions : [
			         {
                         name : "pas-probleme",
                         action : function(game) {
                        	 game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 20
                              });
                        	 game.eventManager.addEvents(["demonglace-1-event"]);
                        	 game.alertPopup("refus-glaciation-event-ko");
                         }
                     },
                     {
                         name : "enqueter",
                         action : function(game) {
                        	 game.eventManager.addEvents(["demonglace-1-event"]);
                        	 game.alertPopup("refus-glaciation-event-ok", function() {
                        		 game.artefactsView.add("idole-glace");
                        	 });
                         }
                     }
			    ]
			},
			"refus-sacrifice-event" : {
				name : "refus-sacrifice-event",
			    text : "refus-sacrifice-event",
			    rarity : 50,
			    unique : true,
			    actions : [
			         {
                         name : "laisserfaire",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 20
                              });
                             game.eventManager.addEvents(["croisade-galactique-1-event"]);
                        	 game.alertPopup("refus-sacrifice-event-ko");
                         }
                     },
                     {
			             name : "recompenser",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
                                 croyance : 10,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 20
                              });
                             game.eventManager.addEvents(["croisade-galactique-1-event"]);
                        	 game.alertPopup("refus-sacrifice-event-recompense");
			             }
			         },
                     {
			             name : "arreter-massacre",
			             action : function(game) {
			                 game.eventManager.showNow("refus-sacrifice-event-2");
			             }
			         }
			    ]
			},
			"refus-sacrifice-event-2" : {
                name : "refus-sacrifice-event-2",
                text : "refus-sacrifice-event-2",
                rarity : -1,
                unique : true,
                actions : [
                     {
                         name : "tuezles",
                         action : function(game) {
                        	 game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 30
                              });
                        	 game.alertPopup("refus-sacrifice-event-2-tuer");
                         }
                     },
                     {
                         name : "tantpis",
                         action : function(game) {
                        	 game.eventManager.addEvents(["croisade-galactique-1-event"]);
                        	 game.alertPopup("refus-sacrifice-event-2-tantpis");
                         }
                     }
                ]
            },
            /**
             * --------------------------
             */
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
