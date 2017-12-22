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
			             level : 2
			         },
			         {
                         name : "dieu",
                         level : 1
                     },
                     {
                         name : "deesse",
                         level : 1
                     }
			    ],
				name : "univers",
			    items : ["terre", "lune", "soleil"]
			},
			"vie" : {
			    conditions : [
                     {
                         name : "terre",
                         level : 3
                     },
                     {
                         name : "lune",
                         level : 3
                     },
                     {
                         name : "soleil",
                         level : 3
                     }
                ],
				name : "vie",
			    items : ["ciel", "foret", "volcan", "ocean"]
			},
			"mort" : {
			    conditions : [
                     {
                         name : "terre",
                         level : 3
                     },
                     {
                         name : "lune",
                         level : 3
                     },
                     {
                         name : "soleil",
                         level : 3
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
