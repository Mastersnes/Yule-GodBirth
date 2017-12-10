'use strict';
define(["jquery"], function($){
	var data = {
			"god" : {
				name : "god",
			    items : ["cernunos", "gaia", "hecate", "selene"]
			},
			"gaia" : {
				name : "gaia",
			    items : ["gaia-1", "gaia-2"]
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
