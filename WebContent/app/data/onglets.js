'use strict';
define(["jquery"], function($){
	var data = {
			"god" : {
				name : "god",
			    items : ["planete","test","test2"]
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
