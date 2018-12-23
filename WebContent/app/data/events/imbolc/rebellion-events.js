'use strict';
define(["jquery"
        ], function($){
	/**
	 * Rebellion !
	 */
	var data = {
			"rebellion-start-event" : {
				name : "rebellion-start-event",
			    text : "rebellion-start-event",
			    rarity : 100,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	 game.gameOver();
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
			return ["rebellion-start-event"];
		}
	};
});
