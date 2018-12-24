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
				    	 level : 3
				     }
				],
			    gains : {
			    	croyance : 200,
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
			    	croyance : 500,
			    	illumination : 100
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
			    	croyance : 1000,
			    	illumination : 500
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
			    	croyance : 1000,
			    	illumination : 500
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
			    gains : {
			    	croyance : 5000,
			    	illumination : 3000
			    }
			},
			"quete-imbolc" : {
			    name : "quete-imbolc",
			    description : "quete-imbolc-desc",
				apparition : {
					 isComplete : ["quete-start"],
				     ameliorations : []
				},
			    conditions : [
				     {
					     name : "grandTout",
					     level : 8
					 }
				],
			    gains : {
			    	croyance : 1500,
			    	illumination : 500
			    },
			    success : function(queteView) {
			    	var game = queteView.parent;
			    	game.recompenseManager.addSuccess("success-imbolc");
			    }
			},
			"quete-5-events" : {
			    name : "quete-5-events",
			    description : "quete-5-events-desc",
				apparition : {
					 isComplete : ["quete-imbolc"],
				     ameliorations : []
				},
			    conditionsFunction : function(queteView) {
			    	return queteView.eventManager.uniquesEvents.length >= 5;
			    },
			    gains : {
			    	croyance : 1000,
			    	illumination : 200
			    },
			    success : function(queteView) {
			    }
			},
			"quete-ostara" : {
			    name : "quete-ostara",
			    description : "quete-ostara-desc",
				apparition : {
					 isComplete : ["quete-imbolc"],
				     ameliorations : []
				},
			    conditions : [
				     {
					     name : "grandTout",
					     level : 15
					 }
				],
			    gains : {
			    	croyance : 5000,
			    	illumination : 2000
			    },
			    success : function(queteView) {
			    	var game = queteView.parent;
			    	game.recompenseManager.addSuccess("success-ostara");
			    }
			},
			"quete-10-events" : {
			    name : "quete-10-events",
			    description : "quete-10-events-desc",
				apparition : {
					 isComplete : ["quete-5-events"],
				     ameliorations : []
				},
			    conditionsFunction : function(queteView) {
			    	return queteView.eventManager.uniquesEvents.length >= 10;
			    },
			    gains : {
			    	croyance : 2500,
			    	illumination : 500
			    },
			    success : function(queteView) {
			    }
			},
			"quete-beltane" : {
			    name : "quete-beltane",
			    description : "quete-beltane-desc",
				apparition : {
					 isComplete : ["quete-ostara"],
				     ameliorations : []
				},
			    conditions : [
				     {
					     name : "grandTout",
					     level : 25
					 }
				],
			    gains : {
			    	croyance : 10000,
			    	illumination : 3000
			    },
			    success : function(queteView) {
			    	var game = queteView.parent;
			    	game.recompenseManager.addSuccess("success-beltane");
			    }
			},
			"quete-20-events" : {
			    name : "quete-20-events",
			    description : "quete-20-events-desc",
				apparition : {
					 isComplete : ["quete-10-events"],
				     ameliorations : []
				},
			    conditionsFunction : function(queteView) {
			    	return queteView.eventManager.uniquesEvents.length >= 20;
			    },
			    gains : {
			    	croyance : 8000,
			    	illumination : 1200
			    },
			    success : function(queteView) {
			    }
			},
			"quete-litha" : {
			    name : "quete-litha",
			    description : "quete-litha-desc",
				apparition : {
					 isComplete : ["quete-beltane"],
				     ameliorations : []
				},
			    conditions : [
				     {
					     name : "grandTout",
					     level : 40
					 }
				],
			    gains : {
			    	croyance : 20000,
			    	illumination : 5000
			    },
			    success : function(queteView) {
			    	var game = queteView.parent;
			    	game.recompenseManager.addSuccess("success-litha");
			    }
			},
			"quete-40-events" : {
			    name : "quete-40-events",
			    description : "quete-40-events-desc",
				apparition : {
					 isComplete : ["quete-20-events"],
				     ameliorations : []
				},
			    conditionsFunction : function(queteView) {
			    	return queteView.eventManager.uniquesEvents.length >= 40;
			    },
			    gains : {
			    	croyance : 15000,
			    	illumination : 3000
			    },
			    success : function(queteView) {
			    }
			},
			"quete-lammas" : {
			    name : "quete-lammas",
			    description : "quete-lammas-desc",
				apparition : {
					 isComplete : ["quete-litha"],
				     ameliorations : []
				},
			    conditions : [
				     {
					     name : "grandTout",
					     level : 55
					 }
				],
			    gains : {
			    	croyance : 30000,
			    	illumination : 8000
			    },
			    success : function(queteView) {
			    	var game = queteView.parent;
			    	game.recompenseManager.addSuccess("success-lammas");
			    }
			},
			"quete-60-events" : {
			    name : "quete-60-events",
			    description : "quete-60-events-desc",
				apparition : {
					 isComplete : ["quete-40-events"],
				     ameliorations : []
				},
			    conditionsFunction : function(queteView) {
			    	return queteView.eventManager.uniquesEvents.length >= 60;
			    },
			    gains : {
			    	croyance : 20000,
			    	illumination : 5000
			    },
			    success : function(queteView) {
			    }
			},
			"quete-mabon" : {
			    name : "quete-mabon",
			    description : "quete-mabon-desc",
				apparition : {
					 isComplete : ["quete-lammas"],
				     ameliorations : []
				},
			    conditions : [
				     {
					     name : "grandTout",
					     level : 70
					 }
				],
			    gains : {
			    	croyance : 40000,
			    	illumination : 10000
			    },
			    success : function(queteView) {
			    	var game = queteView.parent;
			    	game.recompenseManager.addSuccess("success-mabon");
			    }
			},
			"quete-samhain" : {
			    name : "quete-samhain",
			    description : "quete-samhain-desc",
				apparition : {
					 isComplete : ["quete-mabon"],
				     ameliorations : []
				},
			    conditions : [
				     {
					     name : "grandTout",
					     level : 85
					 }
				],
			    gains : {
			    	croyance : 50000,
			    	illumination : 30000
			    },
			    success : function(queteView) {
			    	var game = queteView.parent;
			    	game.recompenseManager.addSuccess("success-samhain");
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
