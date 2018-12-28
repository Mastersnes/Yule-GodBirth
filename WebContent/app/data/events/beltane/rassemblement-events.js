
'use strict';
define(["jquery","app/utils/utils"
        ], function($, Utils){
	/**
	 * Rassemblement planetaire
	 */
	var data = {
			"rassemblement-1-event" : {
				name : "rassemblement-1-event",
			    text : "rassemblement-1-event",
			    rarity : 100,
			    unique : true,
			    starter: true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.eventManager.addEvents(["rassemblement-mars-event",
			            	                              "rassemblement-io-event",
			            	                              "rassemblement-saturnus-event",
			            	                              "rassemblement-triton-event",
			            	                              "rassemblement-pluton-event"]);
			             }
			         }
			    ]
			},
			
			/**
			 * Mars - Colonie miniere
			 */
			"rassemblement-mars-event" : {
				name : "rassemblement-mars-event",
			    text : "rassemblement-mars-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "rassemblement-button",
			             action : function(game) {
			            	 game.alertPopup("rassemblement-mars-event-contact", function() {
			            		   game.alertPopup("rassemblement-mars-event-contact2", function() {
			            			   game.eventManager.showNow("rassemblement-mars2-event");
			            		   });
			            		});
			             }
			         }
			    ]
			},
			"rassemblement-mars2-event" : {
				name : "rassemblement-mars2-event",
			    text : "rassemblement-mars2-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "rassemblement-mars2-event-ko-button",
			             action : function(game) {
			            	 game.alertPopup("rassemblement-mars2-event-ko");
			             }
			         },
			         {
			             name : "ok-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -80,
			            		 illumination : -80,
			            		 bien : 0,
			            		 mal : 0
			            	}, "quete");
			            	 game.eventManager.sagesse+=0.5;
			            	 game.alertPopup("rassemblement-mars2-event-ok");
			             }
			         },
			         {
			             name : "menacer-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -30,
			            		 illumination : -30,
			            		 bien : 0,
			            		 mal : 0
			            	}, "quete");
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 20
			            	}, "quete");
			            	 game.eventManager.rebellion++;
			            	 game.alertPopup("rassemblement-mars2-event-menace", function() {
			            		 game.eventManager.showNow("rassemblement-mars3-event");
			            	 });
			             }
			         }
			    ]
			},
			"rassemblement-mars3-event" : {
				name : "rassemblement-mars3-event",
			    text : "rassemblement-mars3-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "les-tuer-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 20
			            	}, "quete");
			            	 game.eventManager.sagesse--;
			            	 game.alertPopup("rassemblement-mars3-event-tuer");
			             }
			         },
			         {
			        	 name : "laisser-tomber-button",
			        	 action : function(game) {
			        		 game.eventManager.rebellion-=0.5;
			        		 game.alertPopup("rassemblement-mars3-event-ignore");
			        	 }
			         }
			    ]
			},
			
			/**
			 * Io - Capitale energetique
			 */
			"rassemblement-io-event" : {
				name : "rassemblement-io-event",
			    text : "rassemblement-io-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "rassemblement-button",
			             action : function(game) {
			            	 game.eventManager.addEvents(["rassemblement-io2-event"]);
			            	 game.alertPopup("rassemblement-io-event-contact");
			             }
			         }
			    ]
			},
			"rassemblement-io2-event" : {
				name : "rassemblement-io2-event",
			    text : "rassemblement-io2-event",
			    rarity : 40,
			    unique : true,
			    actions : [
			         {
			             name : "acceptButton",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 20,
			            		 illumination : 0,
			            		 bien : 10,
			            		 mal : 0
			            	}, "quete");
			            	 game.eventManager.sagesse+=0.5;
			            	 game.alertPopup("rassemblement-io2-event-ok");
			             }
			         },
			         {
			             name : "refusButton",
			             action : function(game) {
			            	 game.eventManager.sagesse-=0.5;
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -30,
			            		 illumination : -30,
			            		 bien : 0,
			            		 mal : 0
			            	}, "quete");
			            	 game.alertPopup("rassemblement-io2-event-ko", function() {
			            		 game.eventManager.showNow("rassemblement-io3-event");
			            	 });
			             }
			         }
			    ]
			},
			"rassemblement-io3-event" : {
				name : "rassemblement-io3-event",
			    text : "rassemblement-io3-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "menacer-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 20
			            	 }, "quete");
			            	 game.eventManager.rebellion++;
			            	 game.alertPopup("rassemblement-io3-event-menace");
			             }
			         },
			         {
			             name : "laisser-tomber-button",
			             action : function(game) {
			            	 game.alertPopup("rassemblement-io3-event-ko");
			             }
			         }
			    ]
			},
			
			/**
			 * Saturnus - Centre de l'intelligence spatiale
			 */
			"rassemblement-saturnus-event" : {
				name : "rassemblement-saturnus-event",
			    text : "rassemblement-saturnus-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "rassemblement-button",
			             action : function(game) {
			            	 game.alertPopup("rassemblement-saturnus-event-contact", function() {
			            		 game.eventManager.showNow("rassemblement-saturnus2-event");
			            	 });
			             }
			         }
			    ]
			},
			"rassemblement-saturnus2-event" : {
				name : "rassemblement-saturnus2-event",
			    text : "rassemblement-saturnus2-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "menacer-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -30,
			            		 illumination : -30,
			            		 bien : 0,
			            		 mal : 0
			            	}, "quete");
			            	 game.eventManager.rebellion++;
			            	 game.alertPopup("rassemblement-saturnus2-event-menace");
			             }
			         },
			         {
			             name : "rassemblement-saturnus2-event-connaissance-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 60,
			            		 bien : 0,
			            		 mal : 0
			            	 }, "quete");
			            	 game.eventManager.sagesse++;
			            	 game.alertPopup("rassemblement-saturnus2-event-connaissance", function() {
			            		 game.artefactsView.remove("troisieme-oeil");
			            	 });
			             },
			        	 conditions : [{name : "troisieme-oeil"}]
			         },
			         {
			             name : "rassemblement-saturnus2-event-mystere-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 60,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 0
			            	 }, "quete");
			            	 game.eventManager.sagesse++;
			            	 game.alertPopup("rassemblement-saturnus2-event-mystere", function() {
			            		 game.artefactsView.remove("fragment-lunaire");
			            	 });
			             },
			        	 conditions : [{name : "fragment-lunaire"}]
			         }
			    ]
			},
			
			/**
			 * Triton - Bastion armé
			 */
			"rassemblement-triton-event" : {
				name : "rassemblement-triton-event",
			    text : "rassemblement-triton-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "rassemblement-button",
			             action : function(game) {
			            	 game.alertPopup("rassemblement-triton-event-contact", function() {
			            		 game.eventManager.showNow("rassemblement-triton2-event");
			            	 });
			             }
			         }
			    ]
			},
			"rassemblement-triton2-event" : {
				name : "rassemblement-triton2-event",
			    text : "rassemblement-triton2-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "menacer-button",
			             action : function(game) {
			            	 game.eventManager.rebellion++;
			            	 game.alertPopup("rassemblement-triton2-event-menace", function() {
			            		 game.eventManager.showNow("rassemblement-triton3-event");
			            	 });
			             }
			         },
			         {
			             name : "rassemblement-triton2-event-torque-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 30,
			            		 illumination : 20,
			            		 bien : 0,
			            		 mal : 0
			            	 }, "quete");
			            	 game.eventManager.sagesse++;
			            	 game.alertPopup("rassemblement-triton-event-contact", function() {
			            		 game.artefactsView.remove("torque");
			            	 });
			             },
			        	 conditions : [{name : "torque"}]
			         }
			    ]
			},
			"rassemblement-triton3-event" : {
				name : "rassemblement-triton3-event",
			    text : "rassemblement-triton3-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "les-tuer-button",
			             action : function(game) {
			            	game.pointManager.addPointsPercent({
			            		 croyance : -80,
			            		 illumination : -50,
			            		 bien : 0,
			            		 mal : 0
			            	}, "quete");
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 30
			            	}, "quete");
			            	game.eventManager.sagesse--;
			            	game.alertPopup("rassemblement-mars3-event-tuer");
			             }
			         },
			         {
			             name : "rassemblement-triton3-event-tuer-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 20
			            	}, "quete");
			            	game.eventManager.rebellion++;
			            	game.alertPopup("rassemblement-triton3-event-tuer");
			             }
			         }
			    ]
			},
			
			/**
			 * Pluton - Prison planétaire
			 */
			"rassemblement-pluton-event" : {
				name : "rassemblement-pluton-event",
			    text : "rassemblement-pluton-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "rassemblement-button",
			             action : function(game) {
			            	 game.alertPopup("rassemblement-pluton-event-contact", function() {
			            		 game.eventManager.showNow("rassemblement-pluton2-event");
			            	 });
			             }
			         },
			         {
			             name : "laisser-tomber-button",
			             action : function(game) {
			            	 game.alertPopup("rassemblement-pluton-event-laisser");
			             }
			         }
			    ]
			},
			
			"rassemblement-pluton2-event" : {
				name : "rassemblement-pluton2-event",
			    text : "rassemblement-pluton2-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "acceptButton",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 20,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 30
			            	}, "quete");
			            	game.eventManager.rebellion+=0.5;
			            	game.eventManager.sagesse+=0.5;
			            	game.alertPopup("rassemblement-pluton2-event-accept");
			             }
			         },
			         {
			             name : "refusButton",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 10,
			            		 mal : 0
			            	}, "quete");
			            	game.eventManager.rebellion++;
			            	game.alertPopup("rassemblement-pluton2-event-refus");
			             }
			         },
			         {
			             name : "rassemblement-pluton2-event-raser-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 30
			            	}, "quete");
			            	game.alertPopup("rassemblement-pluton2-event-raser");
			             }
			         }
			    ]
			}
	};
	
	return {
		get : function(key) {
			var event = data[key];
            return event;
		},
		start : function(key) {
			return ["rassemblement-1-event"];
		}
	};
});
