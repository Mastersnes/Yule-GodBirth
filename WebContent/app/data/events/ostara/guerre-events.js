'use strict';
define(["jquery","app/utils/utils"
        ], function($, Utils){
	/**
	 * Ostara
	 */
	var data = {
			"guerre-1-event" : {
				name : "guerre-1-event",
			    text : "guerre-1-event",
			    rarity : 50,
			    unique : true,
			    starter: true,
			    actions : [
			         {
			             name : "les-arreter-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 10,
			            		 illumination : 5,
			            		 bien : 10,
			            		 mal : 0
			            	 }, "quete");
			            	 game.alertPopup("guerre-1-event-arreter");
			             }
			         },
			         {
			             name : "les-tuer-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 15,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 20
			            	 }, "quete");
			            	 game.eventManager.addEvents(["guerre-2-event"]);
			            	 game.alertPopup("guerre-1-event-tuer");
			             }
			         },
			         {
			             name : "ignore-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 10
			            	 }, "quete");
			            	 game.eventManager.rebellion++;
			            	 game.eventManager.addEvents(["guerre-2-event"]);
			            	 game.alertPopup("guerre-1-event-ignore");
			             }
			         }
			    ]
			},
			
			"guerre-2-event" : {
				name : "guerre-2-event",
			    text : "guerre-2-event",
			    rarity : 100,
			    unique : true,
			    actions : [
			         {
			             name : "guerre-2-event-arreter-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 10,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 20
			            	 }, "quete");
			            	 game.alertPopup("guerre-2-event-arreter", function() {
			            		 game.artefactsView.remove("torque");
			            	 });
			             },
			             conditions : [{name : "torque"}]
			         },
			         {
			             name : "ignore-button",
			             action : function(game) {
			            	 game.gainLoop({
			            		 croyance : 0,
			            		 illumination : 0,
			            		 bien : 0,
			            		 mal : 50
			            	 }, "quete");
			            	 game.pointManager.addPointsPercent({
			            		 croyance : -50,
			            		 illumination : -50,
			            		 bien : 0,
			            		 mal : 0
			            	 }, "quete");
			            	 game.eventManager.rebellion++;
			            	 game.alertPopup("guerre-2-event-ignore");
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
			return ["guerre-1-event"];
		}
	};
});
