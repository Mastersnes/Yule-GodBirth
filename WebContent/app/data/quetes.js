'use strict';
define(["jquery"], function($){
	var data = {
			"quete-start" : {
			    name : "quete-start",
			    description : "quete-start-desc",
			    apparition : {
					 isComplete : [],
				     ameliorations : []
				},
			    conditions : [
				     {
				    	 name : "grandTout",
				    	 level : 1
				     }
				],
			    gains : {
			    	croyance : 100,
			    	illumination : 10
			    },
			    success : function(queteView) {
			    	var game = queteView.parent;
			    	var didactitielStep = game.didactitielManager.data.step;
			    	if (didactitielStep.name == "quete" && didactitielStep.index == 0) {
				    	game.showConstellation(function() {
				    		game.showStar($("etoile.space-star"));
				    	});
			    	}
			    }
			},
			"quete-amour" : {
			    name : "quete-amour",
			    description : "quete-amour-desc",
				apparition : {
					 isComplete : [],
				     ameliorations : []
				},
			    conditions : [
				     {
				    	 name : "dieu",
				    	 level : 2
			         },
			         {
				    	 name : "deesse",
				    	 level : 2
			         }
				],
			    gains : {
			    	croyance : 1000,
			    	illumination : 100
			    }
			},
			"quete-univers" : {
			    name : "quete-univers",
			    description : "quete-univers-desc",
				apparition : {
					 isComplete : [],
				     ameliorations : []
				},
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
			    gains : {
			    	croyance : 5000,
			    	illumination : 1000
			    }
			},
			"quete-vie" : {
			    name : "quete-vie",
			    description : "quete-vie-desc",
				apparition : {
					 isComplete : ["quete-univers"],
				     ameliorations : []
				},
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
			    gains : {
			    	croyance : 100000,
			    	illumination : 5000
			    }
			},
			"quete-mort" : {
			    name : "quete-mort",
			    description : "quete-mort-desc",
				apparition : {
					 isComplete : ["quete-univers"],
				     ameliorations : []
				},
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
			    gains : {
			    	croyance : 100000,
			    	illumination : 5000
			    }
			},
			"quete-concept" : {
			    name : "quete-concept",
			    description : "quete-concept-desc",
				apparition : {
					 isComplete : ["quete-vie", "quete-mort"],
				     ameliorations : []
				},
			    conditions : [
				     {
				    	 name : "chaos",
				    	 level : 5
			         },
			         {
				    	 name : "foret",
				    	 level : 5
			         }
				],
			    gains : {
			    	croyance : 1000000,
			    	illumination : 10000
			    }
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
