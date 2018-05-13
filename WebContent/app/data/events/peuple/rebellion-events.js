'use strict';
define(["jquery"], function($, EmissaireEntreEvents, EmissaireRefusEvents){
	/**
	 * Evenements lies a la rebellion
	 * Si on dit qu'on est un faux dieu, une rebellion apparait
	 * TODO
	 */
    var data = {
    		/**
             * Bruit de rue
             */
			"rebellion1!-event" : {
                name : "rebellion1!-event",
                text : "rebellion1!-event",
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
            }
    };
	
	return {
		get : function(key) {
            return data[key];
		}
	};
});
