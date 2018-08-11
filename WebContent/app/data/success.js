'use strict';
define(["jquery"], function($){
	var data = ["success-100click", "success-500click", "success-1000click", "success-5000click", 
	            "success-10000click", "success-50000click", "success-100000click", "success-amour",
	            "success-imbolc", "success-ostara", "success-beltane", "success-litha",
	            "success-lammas", "success-mabon", "success-samhain", "success-autel"
	            ];
	
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
