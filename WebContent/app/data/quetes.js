'use strict';
define(["jquery"], function($){
	var data = {
			"quete-1" : {
			    name : "quete-1",
			    description : "quete-1-desc",
			    apparition : {
					 isComplete : [],
				     ameliorations : []
				},
			    conditions : [
				     {
				    	 name : "grandTout",
				    	 level : 1
				     }
				],
			    gains : {
			    	croyance : 100,
			    	illumination : 0
			    }
			},
			"quete-2" : {
			    name : "quete-2",
			    description : "quete-2-desc",
				apparition : {
					 isComplete : [],
				     ameliorations : []
				},
			    conditions : [
				     {
				    	 name : "dieu",
				    	 level : 3
			         },
			         {
				    	 name : "deesse",
				    	 level : 3
			         }
				],
			    gains : {
			    	croyance : 1000,
			    	illumination : 1
			    }
			},
			"quete-3" : {
			    name : "quete-3",
			    description : "quete-3-desc",
				apparition : {
					 isComplete : [],
				     ameliorations : []
				},
			    conditions : [
				     {
				    	 name : "grandTout",
				    	 level : 5
			         },
			         {
				    	 name : "dieu",
				    	 level : 5
			         },
			         {
				    	 name : "deesse",
				    	 level : 5
			         }
				],
			    gains : {
			    	croyance : 5000,
			    	illumination : 0
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
