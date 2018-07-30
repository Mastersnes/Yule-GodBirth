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
                         level : 3
                     },
                     {
                         name : "deesse",
                         level : 3
                     }
			    ],
				name : "univers",
			    items : ["terre", "lune", "soleil"]
			},
			"vie" : {
			    conditions : [
                     {
                         name : "terre",
                         level : 5
                     },
                     {
                         name : "soleil",
                         level : 5
                     },
                     {
                         name : "deesse",
                         level : 5
                     }
                ],
				name : "vie",
			    items : ["ciel", "foret", "volcan", "ocean"]
			},
			"mort" : {
			    conditions : [
                     {
                         name : "lune",
                         level : 5
                     },
                     {
                         name : "soleil",
                         level : 5
                     },
                     {
                         name : "dieu",
                         level : 5
                     }
                ],
				name : "mort",
			    items : ["gouffre", "vide", "chaos", "abysse"]
			},
			"concept" : {
			    conditions : [
					 {
					     name : "dieu",
					     level : 20
					 },
                     {
                         name : "deesse",
                         level : 20
                     },
                     {
                         name : "terre",
                         level : 10
                     },
                     {
                         name : "lune",
                         level : 10
                     },
                     {
                         name : "foret",
                         level : 5
                     },
                     {
                         name : "ciel",
                         level : 5
                     },
                     {
                         name : "vide",
                         level : 5
                     },
                     {
                         name : "chaos",
                         level : 5
                     }
                ],
				name : "concept",
			    items : ["amour", "connaissance", "evolution"]
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
