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
			    	croyance : 250,
			    	illumination : 20
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
			    gainsLoop : {
			    	croyance : 60,
			    	illumination : 30
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
			    gainsLoop : {
			    	croyance : 60,
			    	illumination : 90
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
			    gainsLoop : {
			    	croyance : 120,
			    	illumination : 60
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
			    gainsLoop : {
			    	croyance : 90,
			    	illumination : 90
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
			    gainsLoop : {
			    	croyance : 60,
			    	illumination : 60
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
			    	try{
			    	return queteView.eventManager.uniquesEvents.length >= 5;
			    	}catch(e){}
			    },
			    gainsLoop : {
			    	croyance : 30,
			    	illumination : 30
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
			    gainsLoop : {
			    	croyance : 60,
			    	illumination : 60
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
			    	try{
			    	return queteView.eventManager.uniquesEvents.length >= 10;
			    	}catch(e){}
			    },
			    gainsLoop : {
			    	croyance : 60,
			    	illumination : 60
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
			    gainsLoop : {
			    	croyance : 60,
			    	illumination : 60
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
			    	try{
			    	return queteView.eventManager.uniquesEvents.length >= 20;
			    	}catch(e){}
			    },
			    gainsLoop : {
			    	croyance : 90,
			    	illumination : 90
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
			    gainsLoop : {
			    	croyance : 90,
			    	illumination : 90
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
			    	try{
			    	return queteView.eventManager.uniquesEvents.length >= 40;
			    	}catch(e){}
			    },
			    gainsLoop : {
			    	croyance : 120,
			    	illumination : 120
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
			    gainsLoop : {
			    	croyance : 90,
			    	illumination : 90
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
			    	try{
			    	return queteView.eventManager.uniquesEvents.length >= 60;
			    	}catch(e){}
			    },
			    gainsLoop : {
			    	croyance : 150,
			    	illumination : 150
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
			    gainsLoop : {
			    	croyance : 150,
			    	illumination : 150
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
			    gainsLoop : {
			    	croyance : 150,
			    	illumination : 200
			    },
			    success : function(queteView) {
			    	var game = queteView.parent;
			    	game.recompenseManager.addSuccess("success-samhain");
			    }
			},
			"quete-primary-stones" : {
			    name : "quete-primary-stones",
			    description : "quete-primary-stones-desc",
				apparition : {
					 isComplete : ["quete-start"],
				     ameliorations : []
				},
			    conditionsFunction : function(queteView) {
			    	try{
			    	return queteView.saveManager.load("pierre-primaire-success") > 0;
			    	}catch(e){}
			    },
			    gainsLoop : {
			    	croyance : 120,
			    	illumination : 120
			    },
			    success : function(queteView) {
			    }
			},
			"quete-unlock-lunar-stones" : {
			    name : "quete-unlock-lunar-stones",
			    description : "quete-unlock-lunar-stones-desc",
				apparition : {
					 isComplete : ["quete-start"],
				     ameliorations : []
				},
				conditions : [
				     {
					     name : "deesse",
					     level : 5
					 }
				],
			    gainsLoop : {
			    	croyance : 30,
			    	illumination : 30
			    },
			    success : function(queteView) {
			    }
			},
			"quete-lunar-stones" : {
			    name : "quete-lunar-stones",
			    description : "quete-lunar-stones-desc",
				apparition : {
					 isComplete : ["quete-unlock-lunar-stones"],
				     ameliorations : []
				},
			    conditionsFunction : function(queteView) {
			    	try{
			    	return queteView.saveManager.load("pierre-lunaire-success") > 0;
			    	}catch(e){}
			    },
			    gainsLoop : {
			    	croyance : 120,
			    	illumination : 120
			    },
			    success : function(queteView) {
			    }
			},
			"quete-unlock-solar-stones" : {
			    name : "quete-unlock-solar-stones",
			    description : "quete-unlock-solar-stones-desc",
				apparition : {
					 isComplete : ["quete-start"],
				     ameliorations : []
				},
				conditions : [
				     {
					     name : "dieu",
					     level : 5
					 }
				],
			    gainsLoop : {
			    	croyance : 30,
			    	illumination : 30
			    },
			    success : function(queteView) {
			    }
			},
			"quete-solar-stones" : {
			    name : "quete-solar-stones",
			    description : "quete-solar-stones-desc",
				apparition : {
					 isComplete : ["quete-unlock-solar-stones"],
				     ameliorations : []
				},
			    conditionsFunction : function(queteView) {
			    	try{
			    	return queteView.saveManager.load("pierre-solaire-success") > 0;
			    	}catch(e){}
			    },
			    gainsLoop : {
			    	croyance : 120,
			    	illumination : 120
			    },
			    success : function(queteView) {
			    }
			},
			"quete-unlock-secret-stones" : {
			    name : "quete-unlock-secret-stones",
			    description : "quete-unlock-secret-stones-desc",
				apparition : {
					 isComplete : ["quete-start"],
				     ameliorations : []
				},
			    conditionsFunction : function(queteView) {
			    	try {
				    	var pierresView = queteView.parent.autelView.pierresView;
				    	var onglet = pierresView.PierresOnglets.get("secrete");
				    	return pierresView.checkOngletAffichable(onglet.conditions);
			    	}catch(e){}
			    },
			    gainsLoop : {
			    	croyance : 90,
			    	illumination : 90
			    },
			    success : function(queteView) {
			    }
			},
			"quete-secret-stones" : {
			    name : "quete-secret-stones",
			    description : "quete-secret-stones-desc",
				apparition : {
					 isComplete : ["quete-primary-stones", "quete-lunar-stones", "quete-solar-stones"],
				     ameliorations : []
				},
			    conditionsFunction : function(queteView) {
			    	try {
			    	return queteView.saveManager.load("pierre-secrete-success") > 0;
			    	}catch(e){}
			    },
			    gainsLoop : {
			    	croyance : 120,
			    	illumination : 120
			    },
			    success : function(queteView) {
			    }
			},
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
