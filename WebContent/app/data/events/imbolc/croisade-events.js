'use strict';
define(["jquery"], function($){
	/**
	 * Croisade
	 */
	var data = {
			"croisade-start-event" : {
				name : "croisade-start-event",
			    text : "croisade-start-event",
			    rarity : 40,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	var names = [];
			     			for (var index in data) {
			     				var elmt = data[index];
			     				if (elmt && elmt.name != this.name)names.push(elmt.name);
			     			}
			            	
			     			game.eventManager.addEvents(names);
			     			game.alertPopup("croisade-start-event-2");
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
			return ["croisade-start-event"];
		}
	};
});
