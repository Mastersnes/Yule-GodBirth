'use strict';
define(["jquery"], function($, EmissaireEntreEvents, EmissaireRefusEvents){
	/**
	 * Evenements lies à l'invasion zombie
	 * Dans le cas où on choisis de les etudier ou de laisser faire la maladie
	 * TODO
	 */
    var data = {
    		/**
			 * Dans le cas où on etudie les zombies
			 */
			"zombie-etude-1!-event" : {
                name : "zombie-etude-1!-event",
                text : "zombie-etude-1!-event",
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
            
            /**
             * -----------------------------
             * Dans le cas où on a laisser faire, on est envahit
             */
            "zombie-invasion-1!-event" : {
            	name : "zombie-invasion-1!-event",
            	text : "zombie-invasion-1!-event",
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
