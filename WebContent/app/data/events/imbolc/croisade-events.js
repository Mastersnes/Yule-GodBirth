'use strict';
define(["jquery"], function($){
	/**
	 * Croisade
	 */
	var data = {
			"croisade-start-event" : {
				name : "croisade-start-event",
			    text : "croisade-start-event",
			    rarity : 50,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			     			game.eventManager.addEvents(["croisade-benediction-event"]);
			     			game.alertPopup("croisade-start-event-2");
			             }
			         }			    
			    ]
			},
			
			"croisade-benediction-event" : {
				name : "croisade-benediction-event",
			    text : "croisade-benediction-event",
			    rarity : 40,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "acceptButton",
			             action : function(game) {
			            	game.gainLoop({
	                        	 croyance : 30,
	                        	 illumination : 0,
	                        	 bien : 0,
	                        	 mal : 30
	                        }, "quete");
			            	game.eventManager.addEvents(["croisade-attaques-event"]);
			     			game.alertPopup("croisade-benediction-event-accept");
			             }
			         },
			         {
			             name : "refusButton",
			             action : function(game) {
			            	game.pointManager.addPointsPercent({
                        		 croyance : -50,
                        		 illumination : 0,
                        		 bien : 0,
                        		 mal : 0
                        	}, "quete");
			            	game.gainLoop({
	                        	 croyance : 0,
	                        	 illumination : 0,
	                        	 bien : 30,
	                        	 mal : 0
	                        }, "quete");
			            	game.eventManager.rebellion++;
			            	game.eventManager.addEvents(["croisade-attaques-event"]);
			     			game.alertPopup("croisade-benediction-event-refus");
			             }
			         }
			    ]
			},
			
			"croisade-attaques-event" : {
				name : "croisade-attaques-event",
			    text : "croisade-attaques-event",
			    rarity : 50,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "croisade-attaques-event-tuer-village-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
                        		 croyance : 0,
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
			            	game.eventManager.rebellion++;
			            	game.eventManager.addEvents(["croisade-graal-event"]);
			     			game.alertPopup("croisade-attaques-event-tuer-village");
			             }
			         },
			         {
			             name : "croisade-attaques-event-tuer-soldat-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
                        		 croyance : -80,
                        		 illumination : 0,
                        		 bien : 0,
                        		 mal : 0
                        	}, "quete");
			            	game.gainLoop({
	                        	 croyance : 0,
	                        	 illumination : 0,
	                        	 bien : 0,
	                        	 mal : 30
	                        }, "quete");
			            	game.eventManager.rebellion++;
			            	game.eventManager.addEvents(["croisade-graal-event"]);
			     			game.alertPopup("croisade-attaques-event-tuer-soldat");
			             }
			         },
			         {
			             name : "croisade-attaques-event-stop-button",
			             action : function(game) {
			            	game.gainLoop({
	                        	 croyance : 30,
	                        	 illumination : 30,
	                        	 bien : 20,
	                        	 mal : 0
	                        }, "quete");
			            	game.eventManager.addEvents(["croisade-graal-event"]);
			            	game.alertPopup("croisade-attaques-event-stop", function() {
			        			   game.artefactsView.remove("torque");
			        		   });
			        	   },
			        	   conditions : [{name : "torque"}]
			         }
			    ]
			},
			
			"croisade-graal-event" : {
				name : "croisade-graal-event",
			    text : "croisade-graal-event",
			    rarity : 50,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "croisade-graal-event-ensevelir-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
                        		 croyance : 0,
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
			     			game.alertPopup("croisade-graal-event-ensevelir");
			             }
			         },
			         {
			             name : "croisade-graal-event-attaque-button",
			             action : function(game) {
			            	game.gainLoop({
	                        	 croyance : 0,
	                        	 illumination : 0,
	                        	 bien : 0,
	                        	 mal : 20
	                        }, "quete");
			            	game.alertPopup("croisade-graal-event-attaque", function() {
			     				game.artefactsView.add("saint-graal");
			     			});
			             }
			         },
			         {
			             name : "croisade-graal-event-laisser-button",
			             action : function(game) {
			            	 game.gainLoop({
	                        	 croyance : 20,
	                        	 illumination : 10,
	                        	 bien : 20,
	                        	 mal : 0
	                        }, "quete");
			     			game.alertPopup("croisade-graal-event-laisser", function() {
			     				game.artefactsView.add("saint-graal");
			     			});
			             }
			         }
			    ]
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		},
		start : function(key) {
			return ["croisade-start-event"];
		}
	};
});
