'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
			/**
			 * Deites
			 */
	        "grandTout" : new function() {
				this.level = 0;
				this.name = "grandTout";
				this.descr = "grandTout-descr";
				
				this.restrictions = function (lvl) {
					if(!lvl) lvl = this.level;
					return [];
			    };
				this.prix = function (lvl) {
				    if(!lvl) lvl = this.level;
					return {
	        			croyance : Math.round(Utils.pow(1, lvl, 4)),
	        			illumination : parseInt(lvl / 11)
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level+incr;
	        		var dieu = ameliorations.get("dieu").level;
	        		var deesse = ameliorations.get("deesse").level;
	        		
	        		var terre = ameliorations.get("terre").level;
	        		var lune = ameliorations.get("lune").level;
	        		var soleil = ameliorations.get("soleil").level;

	        		var ciel = ameliorations.get("ciel").level;
	        		var foret = ameliorations.get("foret").level;
	        		var volcan = ameliorations.get("volcan").level;
	        		var ocean = ameliorations.get("ocean").level;
	        		
	        		var gouffre = ameliorations.get("gouffre").level;
	        		var vide = ameliorations.get("vide").level;
	        		var chaos = ameliorations.get("chaos").level;
	        		var abysse = ameliorations.get("abysse").level;

	        		var amour = ameliorations.get("amour").level;
	        		var connaissance = ameliorations.get("connaissance").level;
	        		var evolution = ameliorations.get("evolution").level;
	        		
	        		var croyance = Math.round((
	        				me
	        				+ 0.125 * (dieu + deesse)
    						+ 0.125 * (terre + lune + soleil)
    						+ 0.25 * (ciel + foret + volcan + ocean + gouffre + vide + chaos + abysse)
    						+ 0.5 * (amour + connaissance + evolution)) * me);
	        		
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * croyance) + 100000,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
	        			}
	        		};
	        	};
	        	this.select = function(game, ameliorations, incr) {
	        	    for (var i=0; i<incr; i++) {
	        	    	game.spaceView.godView.checkLevel();
	        	    }
	        	};
			},
			"dieu" : new function() {
				this.level = 0;
				this.name = "dieu";
				this.descr = "dieu-descr";
				
				this.restrictions = function (lvl) {
					if(!lvl) lvl = this.level;
					return [];
			    };
				this.prix = function (lvl) {
				    if(!lvl) lvl = this.level;
					return {
	        			croyance : Math.round(Utils.pow(1.25, 1.12 * lvl, 3.8)),
	        			illumination : parseInt(lvl / 8)
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		var deesse = ameliorations.get("deesse").level;
	        		
	        		var croyance = me + 0.5 * deesse;
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : 0,
                            mal : 2 * me
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * croyance),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(0.5 * me)
	        			}
	        		};
	        	};
	        	this.select = function(game, ameliorations) {
	        	};
			},
			"deesse" : new function() {
				this.level = 0;
				this.name = "deesse";
				this.descr = "deesse-descr";
				
				this.restrictions = function (lvl) {
					if(!lvl) lvl = this.level;
					return [];
			    };
				this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
					return {
						croyance : Math.round(Utils.pow(1.12, 1.05 * lvl, 3.75)),
						illumination : parseInt(lvl / 12)
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : me,
	        				illumination : 0,
                            bien : me,
                            mal : 0
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * me),
	        				illumination : 0,
                            bien : Math.round(0.25 * me),
                            mal : 0
	        			}
	        		};
	        	};
	        	this.select = function(game, ameliorations) {
	        	};
			},
			
			/**
			 * Univers
			 */
            "terre" : new function() {
                this.level = 0;
                this.name = "terre";
                this.descr = "terre-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(9876, 1.115 * lvl, 2)),
	        			illumination : parseInt(lvl / 2)
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
                	var dieu = ameliorations.get("dieu").level;
	        		var deesse = ameliorations.get("deesse").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : (dieu + deesse) * me,
	        				illumination : 0,
                            bien : me,
                            mal : me
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * (dieu + deesse) * me),
	        				illumination : 0,
                            bien : Math.round(0.25 * me),
                            mal : Math.round(0.40 * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "lune" : new function() {
                this.level = 0;
                this.name = "lune";
                this.descr = "lune-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(9440, 1.104 * lvl, 2)),
	        			illumination : parseInt(lvl / 1.5)
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : Math.round(1.5 * deesse * me),
	        				illumination : 0,
                            bien : 2 * me,
                            mal : 0
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * deesse * me),
	        				illumination : 0,
                            bien : Math.round(0.4 * me),
                            mal : 0
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "soleil" : new function() {
                this.level = 0;
                this.name = "soleil";
                this.descr = "soleil-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(9857, 1.16 * lvl, 2)),
	        			illumination : parseInt(lvl / 1.3)
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : Math.round(1.5 * dieu * me),
	        				illumination : parseInt(0.3 * me),
                            bien : 0,
                            mal : 2 * me
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * dieu * me),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(0.4 * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            
            /**
             * Vie
             */
            "ciel" : new function() {
                this.level = 0;
                this.name = "ciel";
                this.descr = "ciel-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(756849, 1 * lvl, 1.3)),
	        			illumination : parseInt(lvl / 1.2)
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level;
	        		var lune = ameliorations.get("lune").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : 2 * me * (dieu + lune),
	        				illumination : 0,
                            bien : dieu * me,
                            mal : -1 * lune * me
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * me * (dieu + lune)),
	        				illumination : 0,
                            bien : Math.round(0.25 * dieu * me),
                            mal : Math.round(-0.25 * lune * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "foret" : new function() {
                this.level = 0;
                this.name = "foret";
                this.descr = "foret-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(654253, 1.03 * lvl, 1.25)),
	        			illumination : parseInt(lvl / 1.6)
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level;
	        		var terre = ameliorations.get("terre").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : me * 2 * (dieu + terre),
	        				illumination : 0,
                            bien : dieu * me,
                            mal : -1 * terre * me
	        			},
	        			click : {
	        				croyance : Math.round(me * 0.5 * (dieu + terre)),
	        				illumination : 0,
                            bien : Math.round(0.25 * dieu * me),
                            mal : Math.round(-0.25 * terre * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "volcan" : new function() {
                this.level = 0;
                this.name = "volcan";
                this.descr = "volcan-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(847952, 1.05 * lvl, 1.4)),
	        			illumination : parseInt(lvl / 1.8)
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level;
	        		var terre = ameliorations.get("terre").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : 2 * me * (deesse + terre),
	        				illumination : 0,
                            bien : -1 * me * terre,
                            mal : 0
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * me * (deesse + terre)),
	        				illumination : 0,
                            bien : Math.round(-0.25 * me * terre),
                            mal : 0
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "ocean" : new function() {
                this.level = 0;
                this.name = "ocean";
                this.descr = "ocean-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(564852, 1.1 * lvl, 1.3)),
	        			illumination : parseInt(1.2 * lvl)
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level;
	        		var lune = ameliorations.get("lune").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : 2 * me * (deesse + lune),
	        				illumination : 0,
                            bien : -1 * me * lune,
                            mal : 0
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * me * (deesse + lune)),
	        				illumination : 0,
                            bien : Math.round(-0.25 * me * lune),
                            mal : 0
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            
            /**
             * Mort
             */
            "gouffre" : new function() {
                this.level = 0;
                this.name = "gouffre";
                this.descr = "gouffre-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(875623, 1.3 * lvl, 1.3)),
	        			illumination : parseInt(lvl / 1.85)
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level;
	        		var terre = ameliorations.get("terre").level;
	        		var soleil = ameliorations.get("soleil").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : Math.round(((dieu + terre) / soleil) * me),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(-0.5 * (terre + soleil) * me)
	        			},
	        			click : {
	        				croyance : Math.round(((dieu + terre) / soleil) * me * 0.5),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(-0.25 * (terre + soleil) * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "vide" : new function() {
                this.level = 0;
                this.name = "vide";
                this.descr = "vide-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(777555, 1.2 * lvl, 1.35)),
	        			illumination : parseInt(lvl / 2.2)
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level;
	        		var lune = ameliorations.get("lune").level;
	        		var soleil = ameliorations.get("soleil").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : Math.round(((dieu + lune) / soleil) * me),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(-0.5 * (lune + soleil) * me)
	        			},
	        			click : {
	        				croyance : Math.round(((dieu + lune) / soleil) * me * 0.5),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(-0.25 * (lune + soleil) * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "chaos" : new function() {
                this.level = 0;
                this.name = "chaos";
                this.descr = "chaos-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(895652, 1.5 * lvl, 1)),
	        			illumination : parseInt(lvl / 2.5)
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level;
	        		var terre = ameliorations.get("terre").level;
	        		var soleil = ameliorations.get("soleil").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : Math.round(((deesse + terre) / soleil) * me),
	        				illumination : 0,
                            bien : -1 * terre * me,
                            mal : soleil * me
	        			},
	        			click : {
	        				croyance : Math.round(((deesse + terre) / soleil) * me * 0.5),
	        				illumination : 0,
                            bien : Math.round(-0.25 * terre * me),
                            mal : Math.round(0.25 * soleil * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "abysse" : new function() {
                this.level = 0;
                this.name = "abysse";
                this.descr = "abysse-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(999999, 1.4 * lvl, 1.4)),
	        			illumination : parseInt(1.8 * lvl)
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level;
	        		var lune = ameliorations.get("lune").level;
	        		var soleil = ameliorations.get("soleil").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : Math.round(((deesse + lune) / soleil) * me),
	        				illumination : 0,
                            bien : -1 * lune * me,
                            mal : soleil * me
	        			},
	        			click : {
	        				croyance : Math.round(((deesse + lune) / soleil) * me * 0.8),
	        				illumination : 0,
                            bien : Math.round(-0.30 * lune * me),
                            mal : Math.round(0.25 * soleil * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            
            /**
             * Concept
             */
            "amour" : new function() {
                this.level = 0;
                this.name = "amour";
                this.descr = "amour-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(15000000, 1.1 * lvl, 1.1)),
	        			illumination : Math.round(Utils.pow(1, 1.5 * lvl, 1.3))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
                	var me = this.level + incr;
	        		var deesse = ameliorations.get("deesse").level;
	        		var dieu = ameliorations.get("dieu").level;
	        		var terre = ameliorations.get("terre").level;
	        		var lune = ameliorations.get("lune").level;
	        		return {
	        			loop : {
	        				croyance : Math.round(0.25 * me * (dieu + deesse + terre + lune)),
	        				illumination : parseInt(0.5 * me),
                            bien : 2 * me * (terre + lune),
                            mal : -2 * me * (dieu + deesse)
	        			},
	        			click : {
	        				croyance : Math.round(1 * me * (dieu + deesse + terre + lune)),
	        				illumination : 0,
                            bien : Math.round(1 * me * (terre + lune)),
                            mal : Math.round(-1 * me * (dieu + deesse))
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "connaissance" : new function() {
                this.level = 0;
                this.name = "connaissance";
                this.descr = "connaissance-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(16542458, 1.225 * lvl, 1.105)),
	        			illumination : Math.round(Utils.pow(1, 1.4 * lvl, 1.2))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
                	var me = this.level + incr;
	        		var terre = ameliorations.get("terre").level;
	        		var lune = ameliorations.get("lune").level;
	        		var ciel = ameliorations.get("ciel").level;
	        		var vide = ameliorations.get("vide").level;
	        		return {
	        			loop : {
	        				croyance : Math.round(0.25 * me * (terre + lune + ciel + vide)),
	        				illumination : parseInt(0.8 * me),
                            bien : 0,
                            mal : -1 * me * (ciel + vide)
	        			},
	        			click : {
	        				croyance : Math.round(1 * me * (terre + lune + ciel + vide)),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(-1 * me * (ciel + vide))
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "evolution" : new function() {
                this.level = 0;
                this.name = "evolution";
                this.descr = "evolution-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(12345678, 1.3 * lvl, 1.25)),
	        			illumination : Math.round(Utils.pow(1.5, 1.5 * lvl, 1.3))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
                	var me = this.level + incr;
	        		var soleil = ameliorations.get("soleil").level;
	        		var terre = ameliorations.get("terre").level;
	        		var foret = ameliorations.get("foret").level;
	        		var chaos = ameliorations.get("chaos").level;
	        		return {
	        			loop : {
	        				croyance : Math.round(0.25 * me * (soleil + terre + foret + chaos)),
	        				illumination : parseInt(0.8 * me),
                            bien : -2 * me * (foret + chaos),
                            mal : 2 * me * (soleil + terre)
	        			},
	        			click : {
	        				croyance : Math.round(1 * me * (soleil + terre + foret + chaos)),
	        				illumination : 0,
                            bien : Math.round(-1 * me * (foret + chaos)),
                            mal : Math.round(1 * me * (soleil + terre))
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            }
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return data[key];
		},
		list : function() {
		    return data;
		}
	};
});
