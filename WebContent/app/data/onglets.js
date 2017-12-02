'use strict';
define(["jquery"], function($){
	var data = {
			"god" : {
				name : "god",
			    items : [
			        {
			        	name : "planete",
			        	prix : function (level) {
			        		return level;
			        	}
			        }
			    ]
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
