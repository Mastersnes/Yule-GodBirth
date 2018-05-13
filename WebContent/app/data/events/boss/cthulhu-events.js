'use strict';
define(["jquery"], function($, EmissaireEntreEvents, EmissaireRefusEvents){
	/**
	 * Evenements lies a cthulhu
	 * Dans le cas où on fait une eclise, cela provoque le reveil d'un monstre ancestrale
	 * TODO
	 */
    var data = {
    		/**
			 * Dans le cas où on fait une eclise, cela provoque le reveil d'un monstre ancestrale
			 */
			"eveil-cthulhu-1!-event" : {
                name : "eveil-cthulhu-1!-event",
                text : "eveil-cthulhu-1!-event",
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
