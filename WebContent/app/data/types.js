'use strict';
define(["jquery"], function($){
	var data = {
			"dust" : {
				name : "dust",
			    nbr : 5,
				next : "egg"
			},
			"egg" : {
			    name : "egg",
			    nbr : 3,
				next : "baby"
			},
            "baby" : {
                name : "baby"
            }
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		}
	};
});
