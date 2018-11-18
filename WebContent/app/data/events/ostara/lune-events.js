'use strict';
define(["jquery","app/utils/utils"
        ], function($, Utils){
	/**
	 * Ostara
	 */
	var data = {
			"lune-1-event" : {
				name : "lune-1-event",
			    text : "lune-1-event",
			    rarity : 20,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.eventManager.addEvents(["lune-conquete1-event", 
			            	                              "lune-etude1-event",
			            	                              "lune-magie1-event"]);
			             }
			         }
			    ]
			},
			
			/**
			 * Conquete de la lune
			 */
			"lune-conquete1-event" : {
				name : "lune-conquete1-event",
			    text : "lune-conquete1-event",
			    rarity : 50,
			    unique : true,
			    starter: true,
			    actions : [
			         {
			             name : "acceptButton",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 10,
			            		 illumination : 5,
			            		 bien : 0,
			            		 mal : 0
			            	 }, "quete");
			            	 game.alertPopup("lune-conquete1-event-ok");
			            	 game.eventManager.addEvents(["lune-conquete2-event-help"]);
			             }
			         },
			         {
			             name : "refusButton",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -20,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 0
			            	}, "quete");
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 10
			            	 }, "quete");
			            	 game.alertPopup("lune-conquete1-event-ko");
			            	 game.eventManager.addEvents(["lune-conquete2-event-nohelp"]);
			             }
			         }
			    ]
			},
			"lune-conquete2-event-help" : {
				name : "lune-conquete2-event-help",
			    text : "lune-conquete2-event-help",
			    rarity : 100,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.alertPopup("lune-conquete2-event-ok", function() {
			            		 game.artefactsView.add("fragment-lunaire");
			            	 });
			             }
			         }
			    ]
			},
			"lune-conquete2-event-nohelp" : {
				name : "lune-conquete2-event-nohelp",
			    text : "lune-conquete2-event-nohelp",
			    rarity : 100,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.alertPopup("lune-conquete2-event-ko-1", function() {
			            		 game.alertPopup("lune-conquete2-event-ko-2");
			            	 });
			             }
			         }
			    ]
			},
			
			/**
			 * Etude de la lune
			 */
			"lune-etude1-event" : {
				name : "lune-etude1-event",
			    text : "lune-etude1-event",
			    rarity : 30,
			    unique : true,
			    starter: true,
			    actions : [
			         {
			             name : "lune-etude1-event-aider-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 10,
			            		 illumination : 5,
			            		 bien : 0,
			            		 mal : 0
			            	 }, "quete");
			            	 game.alertPopup("lune-etude1-event-help");
			             }
			         },
			         {
			             name : "ignore-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 5,
			            		 illumination : 10,
			            		 bien : 0,
			            		 mal : 10
			            	 }, "quete");
			            	 game.eventManager.sagesse++;
			            	 game.alertPopup("lune-etude1-event-nohelp", function() {
			            		 game.alertPopup("lune-etude1-event-nohelp-2");
			            	 });
			             }
			         }
			    ]
			},
			
			/**
			 * Magie de la lune
			 */
			"lune-magie1-event" : {
				name : "lune-magie1-event",
			    text : "lune-magie1-event",
			    rarity : 60,
			    unique : true,
			    starter: true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
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
			return ["lune-1-event"];
		}
	};
});
