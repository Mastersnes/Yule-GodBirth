'use strict';
define(["jquery","app/utils/utils"
        ], function($, Utils){
	/**
	 * Mabon
	 */
	var data = {
			"mabon-start-event" : {
				name : "mabon-start-event",
			    text : "mabon-start-event",
			    rarity : 100,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.alertPopup("mabon-start-event2", function() {
			            		 if (game.eventManager.sagesse > 4) {
			            			 game.eventManager.showNow("mabon-fin-good-event");
			            		 }else {
			            			 game.eventManager.showNow("mabon-fin-bad-event");
			            		 }
			            	 });
			             }
			         }
			    ]
			},
			
			"mabon-fin-good-event" : {
				name : "mabon-fin-good-event",
			    text : "mabon-fin-good-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.alertPopup("mabon-fin-good-event2", function() {
			            		 game.alertPopup("mabon-fin-good-event3", function() {
			            			 game.alertPopup("mabon-fin-good-event4", function() {
			            				 game.alertPopup("mabon-fin-event-conclusion", function() {
			            					 game.gainLoop({
			            						 croyance : 60,
			            						 illumination : 120,
			            						 bien : 10,
			            						 mal : 0
			            					}, "quete");
						            	 });
					            	 });
				            	 });
			            	 });
			             }
			         }
			    ]
			},
			
			"mabon-fin-bad-event" : {
				name : "mabon-fin-bad-event",
			    text : "mabon-fin-bad-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.alertPopup("mabon-fin-bad-event2", function() {
			            		 game.alertPopup("mabon-fin-bad-event3", function() {
			            			 game.alertPopup("mabon-fin-bad-event4", function() {
			            				 game.alertPopup("mabon-fin-bad-event5", function() {
			            					 game.alertPopup("mabon-fin-event-conclusion", function() {
			            						 game.gainLoop({
				            						 croyance : 120,
				            						 illumination : 60,
				            						 bien : 0,
				            						 mal : 5
				            					}, "quete");
							            	 }); 
						            	 });
					            	 });
				            	 });
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
			return ["mabon-start-event"];
		}
	};
});
