'use strict';
define(["jquery"], function($, EmissaireEntreEvents, EmissaireRefusEvents){
	/**
	 * Evenements lies au soupcon
	 * Si on dit qu'on est un vrai dieu, cela creera des soupcons. Il faudra le prouver
	 * TODO
	 */
    var data = {
    		/**
             * Premiere epreuve
             */
			"soupcon1!-event" : {
                name : "soupcon1!-event",
                text : "soupcon1!-event",
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
