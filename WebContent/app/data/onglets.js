'use strict';
define(["jquery"], function($){
	var data = {
			"deite" : {
			    start : true,
			    conditions : [],
				name : "deite",
			    items : ["grandTout", "dieu", "deesse"]
			},
			"univers" : {
			    conditions : [
			         {
			             name : "grandTout",
			             level : 3
			         },
			         {
                         name : "dieu",
                         level : 2
                     },
                     {
                         name : "deesse",
                         level : 2
                     }
			    ],
				name : "univers",
			    items : ["terre", "lune", "soleil"]
			},
			"vie" : {
			    conditions : [
                     {
                         name : "terre",
                         level : 10
                     },
                     {
                         name : "soleil",
                         level : 10
                     },
                     {
                         name : "deesse",
                         level : 10
                     }
                ],
				name : "vie",
			    items : ["ciel", "foret", "volcan", "ocean"]
			},
			"mort" : {
			    conditions : [
                     {
                         name : "lune",
                         level : 10
                     },
                     {
                         name : "soleil",
                         level : 10
                     },
                     {
                         name : "dieu",
                         level : 10
                     }
                ],
				name : "mort",
			    items : ["gouffre", "vide", "chaos", "abysses"]
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
