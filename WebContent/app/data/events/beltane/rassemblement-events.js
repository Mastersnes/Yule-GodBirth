
'use strict';
define(["jquery","app/utils/utils"
        ], function($, Utils){
	/**
	 * Rassemblement planetaire
	 */
	var data = {
			"rassemblement-1-event" : {
				name : "rassemblement-1-event",
			    text : "rassemblement-1-event",
			    rarity : 100,
			    unique : true,
			    starter: true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.eventManager.addEvents(["rassemblement-mars-event",
			            	                              "rassemblement-titan-event",
			            	                              "rassemblement-saturnus-event",
			            	                              "rassemblement-triton-event",
			            	                              "rassemblement-pluton-event"]);
			             }
			         }
			    ]
			},
			
			/**
			 * Mars
			 */
			"rassemblement-mars-event" : {
				name : "rassemblement-mars-event",
			    text : "rassemblement-mars-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "rassemblement-button",
			             action : function(game) {
			            	 game.alertPopup("rassemblement-mars-event-contact", function() {
			            		   game.alertPopup("rassemblement-mars-event-contact2");
			            		   game.eventManager.showNow("rassemblement-mars2-event");
			            		});
			             }
			         }
			    ]
			},
			"rassemblement-mars2-event" : {
				name : "rassemblement-mars2-event",
			    text : "rassemblement-mars2-event",
			    rarity : -1,
			    unique : true,
			    actions : [
			         {
			             name : "rassemblement-contact-button",
			             action : function(game) {
			            	 
			             }
			         }
			    ]
			},
			
			/**
			 * Titan
			 */
			"rassemblement-titan-event" : {
				name : "rassemblement-titan-event",
			    text : "rassemblement-titan-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {}
			         }
			    ]
			},
			
			/**
			 * Saturnus
			 */
			"rassemblement-saturnus-event" : {
				name : "rassemblement-saturnus-event",
			    text : "rassemblement-saturnus-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {}
			         }
			    ]
			},
			
			/**
			 * Triton
			 */
			"rassemblement-triton-event" : {
				name : "rassemblement-triton-event",
			    text : "rassemblement-triton-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {}
			         }
			    ]
			},
			
			/**
			 * Pluton
			 */
			"rassemblement-pluton-event" : {
				name : "rassemblement-pluton-event",
			    text : "rassemblement-pluton-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {}
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
			return ["rassemblement-1-event"];
		}
	};
});
