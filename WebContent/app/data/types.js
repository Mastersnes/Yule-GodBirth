'use strict';
define(["jquery"], function($){
	var data = {
			"dust" : {
				nbr : 5,
				next : "egg"
			},
			"egg" : {
				nbr : 3,
				next : "baby"
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
