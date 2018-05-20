'use strict';
define(["jquery"], function($, EmissaireEntreEvents, EmissaireRefusEvents){
	/**
	 * Evenements lies a la folie
	 * Si on empeche les sacrifices, on enquete sur la folie
	 * TODO
	 */
    var data = {
		    /**
		     * Enquete sur la folie
		     */
		    "folie-1?-event" : {
		    	name : "folie-1?-event",
		    	text : "folie-1?-event",
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
