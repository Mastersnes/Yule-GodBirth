'use strict';
define(["jquery"], function($, EmissaireEntreEvents, EmissaireRefusEvents){
	/**
	 * Evenements lies a la faucheuse
	 * Dans le cas où on laisse faire les sacrifice
	 * TODO
	 */
    var data = {
    		/**
			 * Dans le cas où on laisse faire les sacrifice, la faucheuse se plaint
			 */
			"colere-faucheuse-1!-event" : {
                name : "colere-faucheuse-1!-event",
                text : "colere-faucheuse-1!-event",
                rarity : 10,
                unique : true,
                actions : [
                     {
                         name : "yesButton",
                         action : function(game) {}
                     },
                     {
                         name : "noButton",
                         action : function(game) {}
                     }
                ]
            },
    };
	
	return {
		get : function(key) {
            return data[key];
		}
	};
});
