
'use strict';
define(["jquery","app/utils/utils"
        ], function($, Utils){
	/**
	 * Xenos
	 */
	var data = {
			"xeno-1-event" : {
				name : "xeno-1-event",
			    text : "xeno-1-event",
			    rarity : 100,
			    unique : true,
			    starter: true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.eventManager.addEvents(["xeno-2-event"]);
			             }
			         }
			    ]
			},
			
			"xeno-2-event" : {
				name : "xeno-2-event",
			    text : "xeno-2-event",
			    rarity : 40,
			    unique : true,
			    actions : [
			         {
			             name : "xeno-2-event-green-button",
			             action : function(game) {
			            	 game.eventManager.addEvents(["xeno-green-event"]);
			            	 game.alertPopup("xeno-2-event-green");
			             }
			         },
			         {
			             name : "xeno-2-event-red-button",
			             action : function(game) {
			            	 game.eventManager.addEvents(["xeno-red-event"]);
			            	 game.alertPopup("xeno-2-event-red");
			             }
			         },
			         {
			             name : "xeno-2-event-blue-button",
			             action : function(game) {
			            	 game.eventManager.addEvents(["xeno-blue-event"]);
			            	 game.alertPopup("xeno-2-event-blue");
			             }
			         }
			    ]
			},
			
			"xeno-green-event" : {
				name : "xeno-green-event",
			    text : "xeno-green-event",
			    rarity : 50,
			    unique : true,
			    actions : [
			         {
			             name : "xeno-explorer-button",
			             action : function(game) {
			            	 game.alertPopup("xeno-green-event-explorer", function() {
			            		 game.alertPopup("xeno-green-event-explorer2");
			            		 game.eventManager.sagesse++;
			            		 game.gainLoop({
			            			 croyance : 30,
			            			 illumination : 30,
			            			 bien : 10,
			            			 mal : 0
			            		}, "quete");
			            	 });
			             }
			         }
			    ]
			},
			
			"xeno-red-event" : {
				name : "xeno-red-event",
			    text : "xeno-red-event",
			    rarity : 40,
			    unique : true,
			    actions : [
			         {
			             name : "xeno-explorer-button",
			             action : function(game) {
			            	 game.alertPopup("xeno-red-event-explorer", function() {
			            		 game.alertPopup("xeno-red-event-explorer2");
			            		 game.eventManager.addEvents(["xeno-espace-red-event"]);
			            	 });
			             }
			         }
			    ]
			},
			
			"xeno-espace-red-event" : {
				name : "xeno-espace-red-event",
			    text : "xeno-espace-red-event",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
			             name : "xeno-2-event-green-button",
			             action : function(game) {
			            	 game.eventManager.addEvents(["xeno-green-event"]);
			            	 game.alertPopup("xeno-2-event-green");
			             }
			         },
			         {
			             name : "xeno-2-event-blue-button",
			             action : function(game) {
			            	 game.eventManager.addEvents(["xeno-blue-event"]);
			            	 game.alertPopup("xeno-2-event-blue");
			             }
			         }
			    ]
			},
			
			"xeno-blue-event" : {
				name : "xeno-blue-event",
			    text : "xeno-blue-event",
			    rarity : 50,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.alertPopup("xeno-blue-event-2", function() {
			            		 game.pointManager.addPointsPercent({
			            			 croyance : -30,
			            			 illumination : -10,
			            			 bien : 0,
			            			 mal : 0
			            		}, "quete");
			            	 });
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
			return ["xeno-1-event"];
		}
	};
});
