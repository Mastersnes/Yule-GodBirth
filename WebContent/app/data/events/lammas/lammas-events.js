'use strict';
define(["jquery","app/utils/utils"
        ], function($, Utils){
	/**
	 * Lammas
	 */
	var data = {
			"lammas-frere-event" : {
				name : "lammas-frere-event",
			    text : "lammas-frere-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "intervenir-button",
			             action : function(game) {
			            	 game.alertPopup("lammas-frere-event-intervenir", function() {
			            		 game.eventManager.showNow("lammas-frere2-event");
			            	 });
			             }
			         },
			         {
			             name : "ignore-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -20,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 0
			            	}, "quete");
			            	 game.alertPopup("lammas-frere-event-ignore");
			            	 game.eventManager.addEvents(["lammas-disparition-event"]);
			             }
			         }
			    ]
			},
			
			"lammas-frere2-event" : {
				name : "lammas-frere2-event",
			    text : "lammas-frere2-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "enquete-button",
			             action : function(game) {
			            	 game.alertPopup("lammas-frere2-event-enquete");
			            	 game.eventManager.addEvents(["lammas-disparition-event"]);
			             }
			         },
			         {
			             name : "laisser-tomber-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -10,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 0
			            	}, "quete");
			            	 game.alertPopup("lammas-frere2-event-laisser");
			            	 game.eventManager.addEvents(["lammas-disparition-event"]);
			             }
			         }
			    ]
			},
			
			"lammas-disparition-event" : {
				name : "lammas-disparition-event",
			    text : "lammas-disparition-event",
			    rarity : 100,
			    unique : true,
			    actions : [
			         {
			             name : "lammas-disparition-event-question-button",
			             action : function(game) {
			            	 game.alertPopup("lammas-disparition-event-question", function() {
			            		 game.eventManager.showNow("lammas-disparition2-event");
			            	 });
			             }
			         }
			    ]
			},
			
			"lammas-disparition2-event" : {
				name : "lammas-disparition2-event",
			    text : "lammas-disparition2-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "lammas-disparition2-event-comment-button",
			             action : function(game) {
			            	 game.alertPopup("lammas-disparition2-event-comment", function() {
			            		 game.eventManager.showNow("lammas-disparition3-event");
			            	 });
			             }
			         }
			    ]
			},
			
			"lammas-disparition3-event" : {
				name : "lammas-disparition3-event",
			    text : "lammas-disparition3-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "ignore-button",
			             action : function(game) {
			            	 game.eventManager.sagesse--;
			            	 game.alertPopup("lammas-disparition3-event-ignore");
			             }
			         },
			         {
			             name : "lammas-disparition3-event-lumiere-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 50,
			            		 illumination : 50,
			            		 bien : 1,
			            		 mal : 1
			            	}, "quete");
			            	 game.eventManager.sagesse++;
			            	 game.alertPopup("lammas-disparition3-event-lumiere", function() {
				            	 game.alertPopup("lammas-disparition3-event-lumiere2", function() {
				            		 game.alertPopup("lammas-disparition3-event-lumiere3", function() {
				            			 game.alertPopup("lammas-disparition3-event-lumiere4", function() {
				            				 game.alertPopup("lammas-disparition3-event-lumiere5", function() {
				            					 game.alertPopup("lammas-disparition3-event-lumiere6", function() {
				            						 game.alertPopup("lammas-disparition3-event-lumiere7", function() {
				            							 game.alertPopup("lammas-disparition3-event-lumiere8", function() {
				            								 game.alertPopup("lammas-disparition3-event-lumiere9");
				        				            	 });
				    				            	 });
								            	 });
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
			return ["lammas-frere-event"];
		}
	};
});
