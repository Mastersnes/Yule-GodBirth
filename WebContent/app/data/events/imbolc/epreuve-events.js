'use strict';
define(["jquery"], function($){
	/**
	 * Epreuve
	 */
	var data = {
			"epreuve-start-event" : {
				name : "epreuve-start-event",
			    text : "epreuve-start-event",
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
			     			game.alertPopup("epreuve-start-event-2");
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
			return ["epreuve-start-event"];
		}
	};
});
