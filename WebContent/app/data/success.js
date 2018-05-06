'use strict';
define(["jquery"], function($){
	var data = ["success-500click", 
	            "success-1000click", 
	            "success-5000click", 
	            "success-10000click", 
	            "success-50000click",
	            "success-1000000click",
	            "success-50000000click",
	            "success-100000000click",
	            "success-500000000click",
	            "success-maxClick"];
	
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
