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
