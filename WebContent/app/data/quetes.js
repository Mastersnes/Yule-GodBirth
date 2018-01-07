'use strict';
define(["jquery"], function($){
	var data = {
			"quete-1" : {
			    name : "quete-1",
			    description : "quete-1-desc",
			    apparition : {},
			    conditions : [
				     {
				    	 name : "terre",
				    	 level : 5
				     }
				],
			    gains : {
			    	croyance : 10000,
			    	illumination : 0
			    }
			},
			"quete-2" : {
			    name : "quete-2",
			    description : "quete-2-desc",
				apparition : {
					 isComplete : [],
				     ameliorations : [
				         {
					    	 name : "grandTout",
					    	 level : 3
				         }
				     ]
				},
			    conditions : [
				     {
				    	 name : "soleil",
				    	 level : 30
				     }
				],
			    gains : {
			    	croyance : 50000,
			    	illumination : 1
			    }
			}
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		},
        list : function() {
            return data;
        }
	};
});
