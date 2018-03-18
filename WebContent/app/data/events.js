'use strict';
define(["jquery"], function($){
	var data = {
			"dust-event1" : {
				name : "dust-event1",
			    text : "test-dust-event1",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
			             name : "oui",
			             action : function(game) {
			                 alert("test-dust-event1 oui");
			             }
			         },
			         {
                         name : "non",
                         action : function(game) {
                             alert("test-dust-event1 non");
                         }
                     }
			    ]
			},
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
