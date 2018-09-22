'use strict';
define(["jquery"], function($){
	/**
	 * Epreuve
	 */
	var data = {
			"epreuve-start-event" : {
				name : "epreuve-start-event",
			    text : "epreuve-start-event",
			    rarity : 40,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			     			game.eventManager.addEvents(["epreuve-1-event"]);
			     			game.alertPopup("epreuve-start-event-2");
			             }
			         }			    
			    ]
			},
			
			"epreuve-1-event" : {
				name : "epreuve-1-event",
			    text : "epreuve-1-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "epreuve-1-event-pleuvoir-button",
			             action : function(game) {
			            	 game.gainLoop({
			        			 croyance : 20,
			        			 illumination : 10,
			        			 bien : 0,
			        			 mal : 0
			        		});
			     			game.eventManager.addEvents(["epreuve-2-event"]);
			     			game.alertPopup("epreuve-1-event-pleuvoir");
			             }
			         },
			         {
			             name : "noButton",
			             action : function(game) {
			            	game.eventManager.rebellion++;
			            	game.pointManager.addPointsPercent({
	                       		croyance : -30,
	                       		illumination : 0,
	                       		bien : 0,
	                       		mal : 0
	                       	});
			            	game.eventManager.addEvents(["epreuve-2-event"]);
			            	game.alertPopup("epreuve-1-event-no");
			             }
			         }
			    ]
			},
			
			"epreuve-2-event" : {
				name : "epreuve-2-event",
			    text : "epreuve-2-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "epreuve-2-event-amour-button",
			             action : function(game) {
			            	game.eventManager.rebellion++;
			            	game.pointManager.addPointsPercent({
	                       		croyance : -30,
	                       		illumination : 0,
	                       		bien : 0,
	                       		mal : 0
	                       	});
			     			game.eventManager.addEvents(["epreuve-3-event"]);
			     			game.alertPopup("epreuve-2-event-amour");
			             }
			         },
			         {
			             name : "epreuve-2-event-mort-button",
			             action : function(game) {
			            	game.eventManager.rebellion++;
			            	game.gainLoop({
			        			 croyance : 0,
			        			 illumination : 0,
			        			 bien : 0,
			        			 mal : 10
			        		});
			            	game.pointManager.addPointsPercent({
	                       		croyance : -30,
	                       		illumination : -10,
	                       		bien : 0,
	                       		mal : 0
	                       	});
			     			game.eventManager.addEvents(["epreuve-3-event"]);
			     			game.alertPopup("epreuve-2-event-mort");
			             }
			         },
			         {
			             name : "epreuve-2-event-42-button",
			             action : function(game) {
			            	game.gainLoop({
			        			 croyance : 0,
			        			 illumination : 0,
			        			 bien : 0,
			        			 mal : 10
			        		});
			     			game.eventManager.addEvents(["epreuve-3-event"]);
			     			game.alertPopup("epreuve-2-event-42");
			             }
			         },
			         {
			             name : "epreuve-2-event-D-button",
			             action : function(game) {
			            	game.pointManager.addPointsPercent({
	                       		croyance : -10,
	                       		illumination : 0,
	                       		bien : 0,
	                       		mal : 0
	                       	});
			     			game.eventManager.addEvents(["epreuve-3-event"]);
			     			game.alertPopup("epreuve-2-event-D");
			             }
			         }
			    ]
			},
			
			"epreuve-3-event" : {
				name : "epreuve-3-event",
			    text : "epreuve-3-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "epreuve-3-event-tuer-button",
			             action : function(game) {
			            	game.gainLoop({
			        			 croyance : 20,
			        			 illumination : 0,
			        			 bien : 0,
			        			 mal : 10
			        		});
			     			game.eventManager.addEvents(["epreuve-4-event"]);
			     			game.alertPopup("epreuve-3-event-tuer");
			             }
			         },
			         {
			             name : "refusButton",
			             action : function(game) {
			            	game.gainLoop({
			        			 croyance : 0,
			        			 illumination : 10,
			        			 bien : 10,
			        			 mal : 0
			        		});
			     			game.eventManager.addEvents(["epreuve-4-event"]);
			     			game.alertPopup("epreuve-3-event-refus");
			             }
			         }
			    ]
			},
			
			"epreuve-4-event" : {
				name : "epreuve-4-event",
			    text : "epreuve-4-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "epreuve-4-event-2-button",
			             action : function(game) {
			            	game.eventManager.rebellion++;
			            	game.pointManager.addPointsPercent({
	                       		croyance : -30,
	                       		illumination : -10,
	                       		bien : 0,
	                       		mal : 0
	                       	});
			     			game.alertPopup("epreuve-4-event-2");
			             }
			         },
			         {
			             name : "epreuve-4-event-6-button",
			             action : function(game) {
			            	game.gainLoop({
			        			 croyance : 30,
			        			 illumination : 20,
			        			 bien : 0,
			        			 mal : 0
			        		});
			     			game.eventManager.addEvents(["epreuve-5-event"]);
			     			game.alertPopup("epreuve-4-event-6");
			             }
			         },
			         {
			             name : "epreuve-4-event-151-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
		                       	croyance : -30,
		                       	illumination : -10,
		                       	bien : 0,
		                       	mal : 0
		                     });
			            	 game.gainLoop({
			        			 croyance : 0,
			        			 illumination : 0,
			        			 bien : 0,
			        			 mal : 10
			        		});
			     			game.alertPopup("epreuve-4-event-151");
			             }
			         },
			         {
			             name : "epreuve-4-event-milliard-button",
			             action : function(game) {
			            	game.pointManager.addPointsPercent({
		                       	croyance : -40,
		                       	illumination : 0,
		                       	bien : 0,
		                       	mal : 0
		                    });
			     			game.alertPopup("epreuve-4-event-milliard");
			             }
			         }
			    ]
			},
			
			"epreuve-5-event" : {
				name : "epreuve-5-event",
			    text : "epreuve-5-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			            	game.gainLoop({
			        			 croyance : 40,
			        			 illumination : 40,
			        			 bien : 0,
			        			 mal : 0
			        		});

			     			game.alertPopup("epreuve-5-event-yes", function() {
			     				game.artefactsView.add("3eme-oeil");
			     			});
			             }
			         },
			         {
			             name : "noButton",
			             action : function(game) {
			            	 game.gainLoop({
			        			 croyance : 30,
			        			 illumination : 30,
			        			 bien : 0,
			        			 mal : 0
			        		});
			            	 
			     			game.alertPopup("epreuve-5-event-no");
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
			return ["epreuve-start-event"];
		}
	};
});
