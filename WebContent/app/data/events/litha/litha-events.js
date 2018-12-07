'use strict';
define(["jquery","app/utils/utils"
        ], function($, Utils){
	/**
	 * Litha
	 */
	var data = {
			"litha-start-event" : {
				name : "litha-start-event",
			    text : "litha-start-event",
			    rarity : 50,
			    unique : true,
			    actions : [
			         {
			             name : "enquete-button",
			             action : function(game) {
			            	 game.alertPopup("litha-start-event-enquete", function() {
			            		 game.eventManager.addEvents(["litha-enquete-event"]);
			            	 });
			             }
			         },
			         {
			             name : "ignore-button",
			             action : function(game) {
			            	 game.eventManager.sagesse++;
			            	 game.alertPopup("litha-start-event-ignore");
			             }
			         }
			    ]
			},
			
			"litha-enquete-event" : {
				name : "litha-enquete-event",
			    text : "litha-enquete-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "pasMonProbleme-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 50,
			            		 illumination : 50,
			            		 bien : 20,
			            		 mal : 0
			            	}, "quete");
			            	 game.eventManager.sagesse++;
			            	 game.alertPopup("litha-enquete-event-laisser");
			             }
			         },
			         {
			             name : "litha-enquete-event-empeche-button",
			             action : function(game) {
			            	 game.alertPopup("litha-enquete-event-empeche", function() {
			            		 game.eventManager.showNow("litha-empeche-event");
			            	 });
			             }
			         }
			    ]
			},
			
			"litha-empeche-event" : {
				name : "litha-empeche-event",
			    text : "litha-empeche-event",
			    rarity : 20,
			    unique : true,
			    actions : [
			         {
			             name : "laisser-tomber-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 50,
			            		 illumination : 50,
			            		 bien : 20,
			            		 mal : 0
			            	}, "quete");
			            	 game.eventManager.sagesse++;
			            	 game.alertPopup("litha-enquete-event-laisser");
			             }
			         },
			         {
			             name : "litha-enquete-event-detruire-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -20,
			            		 illumination : -20,
			            		 bien : 0,
			            		 mal : 0
			            	}, "quete");
			            	 game.alertPopup("litha-empeche-event-detruire");
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
			return ["litha-start-event"];
		}
	};
});
