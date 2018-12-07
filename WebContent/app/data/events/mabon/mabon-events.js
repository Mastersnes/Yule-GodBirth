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
			    rarity : 50,
			    unique : true,
			    actions : [
			         {
			             name : "enquete-button",
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
			return ["mabon-start-event"];
		}
	};
});
