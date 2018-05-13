'use strict';
define(["jquery"], function($, EmissaireEntreEvents, EmissaireRefusEvents){
	/**
	 * Evenements lies au crime envers le dieu
	 * Si on refuse de rendre riche le mafieux, il organise en secret votre meurtre
	 * TODO
	 */
    var data = {
    		/**
             * Legende d'un moyen de tuer un dieu
             */
			"crime-dieu1!-event" : {
                name : "crime-dieu1!-event",
                text : "crime-dieu1!-event",
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
