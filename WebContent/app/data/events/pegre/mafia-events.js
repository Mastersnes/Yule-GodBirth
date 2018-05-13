'use strict';
define(["jquery"], function($, EmissaireEntreEvents, EmissaireRefusEvents){
	/**
	 * Evenements lies a la mafia
	 * Si on rend riche le mafieux, cela creer une mafia intergalactique
	 * TODO
	 */
    var data = {
    		/**
             * La mafia proposera de l'integrer
             */
			"mafia-intergalactique!-event" : {
                name : "mafia-intergalactique!-event",
                text : "mafia-intergalactique!-event",
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
