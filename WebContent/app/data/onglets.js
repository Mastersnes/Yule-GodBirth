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
			             level : 5
			         },
			         {
                         name : "dieu",
                         level : 5
                     },
                     {
                         name : "deesse",
                         level : 5
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
			    items : ["gouffre", "vide", "chaos", "abysse"]
			},
			"concept" : {
			    conditions : [
                     {
                         name : "dieu",
                         level : 30
                     },
                     {
                         name : "deesse",
                         level : 30
                     },
                     {
                         name : "terre",
                         level : 20
                     },
                     {
                         name : "lune",
                         level : 20
                     },
                     {
                         name : "chaos",
                         level : 5
                     },
                     {
                         name : "foret",
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
