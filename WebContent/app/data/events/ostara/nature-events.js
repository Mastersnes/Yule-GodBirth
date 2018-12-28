
'use strict';
define(["jquery","app/utils/utils"
        ], function($, Utils){
	/**
	 * Ostara
	 */
	var data = {
			"nature-abeille-event" : {
				name : "nature-abeille-event",
			    text : "nature-abeille-event",
			    rarity : 30,
			    unique : true,
			    starter: true,
			    actions : [
			         {
			             name : "enquete-button",
			             action : function(game) {
			            	 game.eventManager.addEvents(["nature-abeille-event-enquete"]);
			            	 game.alertPopup("nature-abeille-enquete");
			             }
			         },
			         {
			             name : "pasMonProbleme-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -5,
			            		 illumination : -5,
			            		 bien : 0,
			            		 mal : 0
			            	 }, "quete");
			            	 game.eventManager.addEvents(["nature-fleurs-event"]);
			            	 game.alertPopup("nature-abeille-event-ignore");
			             }
			         }
			    ]
			},
			
			"nature-fleurs-event" : {
				name : "nature-fleurs-event",
			    text : "nature-fleurs-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 10
			            	 }, "quete");
			             }
			         }
			    ]
			},
			
			"nature-abeille-event-enquete" : {
				name : "nature-abeille-event-enquete",
			    text : "nature-abeille-event-enquete",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "detruire-usine-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 30,
			            		 illumination : 20,
			            		 bien : 0,
			            		 mal : 10
			            	 }, "quete");
			            	 game.alertPopup("nature-abeille-event-enquete-detruire");
			            	 game.eventManager.addEvents(["nature-nucleaire-event"]);
			             }
			         },
			         {
			             name : "punir-humain-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 30,
			            		 illumination : 20,
			            		 bien : 10,
			            		 mal : 0
			            	 }, "quete");
			            	 game.eventManager.sagesse++;
			            	 game.alertPopup("nature-abeille-event-enquete-punir");
			             }
			         },
			         {
			             name : "ignore-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 20
			            	 }, "quete");
			            	 game.eventManager.addEvents(["nature-fleurs-event"]);
			            	 game.alertPopup("nature-abeille-event-enquete-ignore");
			             }
			         }
			    ]
			},
			
			"nature-nucleaire-event" : {
				name : "nature-nucleaire-event",
			    text : "nature-nucleaire-event",
			    rarity : 100,
			    unique : true,
			    actions : [
			         {
			             name : "ignore-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 60
			            	 }, "quete");
			            	 game.eventManager.addEvents(["nature-destruction-event"]);
			            	 game.alertPopup("nature-nucleaire-event-ignore");
			             }
			         },
			         {
			             name : "intervenir-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -100,
			            		 illumination : -100,
			            		 bien : 0,
			            		 mal : 0
			            	}, "quete");
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 30,
			            		 mal : 0
			            	 }, "quete");
			            	 game.alertPopup("nature-nucleaire-event-intervenir");
			             }
			         }
			    ]
			},
			
			"nature-destruction-event" : {
				name : "nature-destruction-event",
			    text : "nature-destruction-event",
			    rarity : 150,
			    unique : true,
			    actions : [
			         {
			             name : "ignore-button",
			             action : function(game) {
			            	 game.alertPopup("nature-destruction-event-ignore", function() {
			            		 game.gameOver();
			            	 });
			             }
			         },
			         {
			             name : "nature-destruction-event-sauver-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 10,
			            		 illumination : 10,
			            		 bien : 20,
			            		 mal : 0
			            	 }, "quete");
			            	 game.alertPopup("nature-destruction-event-sauver", function() {
			            		 game.artefactsView.remove("corne-abondance");
			            	 });
			             },
			        	 conditions : [{name : "corne-abondance"}]
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
			return ["nature-abeille-event"];
		}
	};
});
