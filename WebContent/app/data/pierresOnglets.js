'use strict';
define(["jquery"], function($){
	var data = {
			"primaire" : {
			    start : true,
			    conditions : [],
				name : "primaire",
			    pierres : ["amethyste", "rubis", "saphir"]
			},
			"autre" : {
			    conditions : [
				    {
				    	name : "dieu",
				    	level : 2
				    }
			    ],
				name : "autre",
			    pierres : ["onyx", "emeraude"]
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
