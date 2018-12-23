'use strict';
define(["jquery"], function($){
	/**
	 * Tyrannie
	 */
	var data = {
			"demi-dieu-start-event" : {
				name : "demi-dieu-start-event",
			    text : "demi-dieu-start-event",
			    rarity : 100,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	var names = [];
			     			for (var index in data) {
			     				var elmt = data[index];
			     				if (elmt && elmt.name != this.name && elmt.starter)names.push(elmt.name);
			     			}
			            	
			     			game.eventManager.addEvents(names);
			     			game.alertPopup("demi-dieu-start-event-2");
			             }
			         }			    
			    ]
			},
			
			"demi-dieu-eau-event" : {
				name : "demi-dieu-eau-event",
			    text : "demi-dieu-eau-event",
			    rarity : 50,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "acceptButton",
			             action : function(game) {
			            	 game.gainLoop({
                            	 croyance : 20,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 0
                             }, "quete");
			                 game.alertPopup("demi-dieu-eau-event-accept");
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
			            	 game.pointManager.addPointsPercent({
                        		 croyance : -5,
                        		 illumination : 0,
                        		 bien : 0,
                        		 mal : 0
                        	 }, "quete");
			                 game.alertPopup("demi-dieu-eau-event-refus");
			             }
			         }
			    ]
			},
			
			"demi-dieu-vin-event" : {
				name : "demi-dieu-vin-event",
			    text : "demi-dieu-vin-event",
			    rarity : 100,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "acceptButton",
			             action : function(game) {
			            	 game.gainLoop({
                            	 croyance : 20,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 10
                             }, "quete");
			            	 game.eventManager.addEvents(["demi-dieu-scene-event"]);
			                 game.alertPopup("demi-dieu-vin-event-accept");
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
			                 game.alertPopup("demi-dieu-vin-event-refus");
			             }
			         }
			    ]
			},
			
			"demi-dieu-scene-event" : {
				name : "demi-dieu-scene-event",
			    text : "demi-dieu-scene-event",
			    rarity : 150,
			    unique : true,
			    actions : [
			         {
			             name : "acceptButton",
			             action : function(game) {
			            	 game.gainLoop({
                            	 croyance : 30,
                            	 illumination : 0,
                            	 bien : 10,
                            	 mal : 0
                             }, "quete");
			                 game.alertPopup("demi-dieu-scene-event-accept");
			             }
			         },
			         {
			             name : "refusButton",
			             action : function(game) {
			            	 game.gainLoop({
                            	 croyance : 0,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 10
                             }, "quete");
			                 game.alertPopup("demi-dieu-scene-event-refus");
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
			return ["demi-dieu-start-event"];
		}
	};
});
