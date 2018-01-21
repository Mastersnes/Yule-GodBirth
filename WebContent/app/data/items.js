'use strict';
define(["jquery", "app/utils/utils"], function($, Utils){
	var data = {
			/**
			 * Deites
			 */
	        "grandTout" : new function() {
				this.level = 0;
				this.name = "grandTout";
				
				this.restrictions = function (lvl) {
					if(!lvl) lvl = this.level;
					return [];
			    };
				this.prix = function (lvl) {
				    if(!lvl) lvl = this.level;
					return {
	        			croyance : Math.round(Utils.pow(10, 1.4, lvl) + Utils.pow(40, lvl, 3) + Utils.pow(2, lvl, 2) + Utils.pow(1, lvl, 1)) - 30,
	        			illumination : 0
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
	        		
	        		var croyance = Math.round((dieu + deesse 
    						+ 0.125 * (terre + lune + soleil)
    						+ 0.25 * (ciel + foret + volcan + ocean + gouffre + vide + chaos + abysse)
    						+ 0.5 * (amour + connaissance + evolution)) * me);
	        		
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : parseInt(0.1 * me),
                            bien : 0,
                            mal : 0
	        			},
	        			click : {
	        				croyance : Math.round(0.1 * croyance) + 1,
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
	        	    ameliorations.descriptionView.close();
	        	};
			},
			"dieu" : new function() {
				this.level = 0;
				this.name = "dieu";
				
				this.restrictions = function (lvl) {
					if(!lvl) lvl = this.level;
					return [];
			    };
				this.prix = function (lvl) {
				    if(!lvl) lvl = this.level;
					return {
	        			croyance : Math.round(Utils.pow(50, 1.2, lvl) + Utils.pow(20, lvl, 3) + Utils.pow(30, lvl, 2) + Utils.pow(10, lvl, 1)),
	        			illumination : 0
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : me,
	        				illumination : 0,
                            bien : 0,
                            mal : 2 * me
	        			},
	        			click : {
	        				croyance : Math.round(0.25 * me),
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
				
				this.restrictions = function (lvl) {
					if(!lvl) lvl = this.level;
					return [];
			    };
				this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
					return {
	        			croyance : Math.round(Utils.pow(30, 1.2, lvl) + Utils.pow(50, lvl, 3) + Utils.pow(40, lvl, 2) + Utils.pow(20, lvl, 1)),
	        			illumination : 0
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
	        				croyance : Math.round(0.1 * me),
	        				illumination : 0,
                            bien : Math.round(0.1 * me),
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
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(1000, 1.2, lvl) + Utils.pow(1200, lvl, 3) + Utils.pow(1500, lvl, 2) + Utils.pow(1000, lvl, 1)),
                        illumination : 0
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
	        				croyance : Math.round(0.1 * (dieu + deesse) * me),
	        				illumination : 0,
                            bien : Math.round(0.15 * me),
                            mal : Math.round(0.25 * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "lune" : new function() {
                this.level = 0;
                this.name = "lune";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(1500, 1.2, lvl) + Utils.pow(1000, lvl, 3) + Utils.pow(1200, lvl, 2) + Utils.pow(1000, lvl, 1)),
                        illumination : 0
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
	        				croyance : Math.round(0.15 * deesse * me),
	        				illumination : 0,
                            bien : Math.round(0.2 * me),
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
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(2000, 1.2, lvl) + Utils.pow(1000, lvl, 3) + Utils.pow(1500, lvl, 2) + Utils.pow(1200, lvl, 1)),
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : Math.round(1.5 * dieu * me),
	        				illumination : parseInt(0.1 * me),
                            bien : 0,
                            mal : 2 * me
	        			},
	        			click : {
	        				croyance : Math.round(0.15 * dieu * me),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(0.2 * me)
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
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(50000, 1.2, lvl) + Utils.pow(30000, lvl, 3) + Utils.pow(45000, lvl, 2) + Utils.pow(30000, lvl, 1)),
                        illumination : 0
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
	        				croyance : Math.round(0.2 * me * (dieu + lune)),
	        				illumination : 0,
                            bien : Math.round(0.1 * dieu * me),
                            mal : Math.round(-0.1 * lune * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "foret" : new function() {
                this.level = 0;
                this.name = "foret";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(50000, 1.2, lvl) + Utils.pow(40000, lvl, 3) + Utils.pow(30000, lvl, 2) + Utils.pow(40000, lvl, 1)),
                        illumination : 0
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
	        				croyance : Math.round(me * 0.2 * (dieu + terre)),
	        				illumination : 0,
                            bien : Math.round(0.1 * dieu * me),
                            mal : Math.round(-0.1 * terre * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "volcan" : new function() {
                this.level = 0;
                this.name = "volcan";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(80000, 1.2, lvl) + Utils.pow(40000, lvl, 3) + Utils.pow(20000, lvl, 2) + Utils.pow(20000, lvl, 1)),
                        illumination : 0
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
	        				croyance : Math.round(0.2 * me * (deesse + terre)),
	        				illumination : 0,
                            bien : Math.round(-0.1 * me * terre),
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
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(70000, 1.2, lvl) + Utils.pow(50000, lvl, 3) + Utils.pow(45000, lvl, 2) + Utils.pow(20000, lvl, 1)),
                        illumination : 0
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
	        				croyance : Math.round(0.2 * me * (deesse + lune)),
	        				illumination : 0,
                            bien : Math.round(-0.1 * me * lune),
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
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(100000, 1.2, lvl) + Utils.pow(20000, lvl, 3) + Utils.pow(20000, lvl, 2) + Utils.pow(30000, lvl, 1)),
                        illumination : 0
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
	        				croyance : Math.round(((dieu + terre) / soleil) * me * 0.1),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(-0.15 * (terre + soleil) * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "vide" : new function() {
                this.level = 0;
                this.name = "vide";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(20000, 1.2, lvl) + Utils.pow(20000, lvl, 3) + Utils.pow(50000, lvl, 2) + Utils.pow(50000, lvl, 1)),
                        illumination : 0
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
	        				croyance : Math.round(((dieu + lune) / soleil) * me * 0.1),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(-0.15 * (lune + soleil) * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "chaos" : new function() {
                this.level = 0;
                this.name = "chaos";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(10000, 1.2, lvl) + Utils.pow(100000, lvl, 3) + Utils.pow(20000, lvl, 2) + Utils.pow(50000, lvl, 1)),
                        illumination : 0
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
	        				croyance : Math.round(((deesse + terre) / soleil) * me * 0.1),
	        				illumination : 0,
                            bien : Math.round(-0.1 * terre * me),
                            mal : Math.round(0.1 * soleil * me)
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "abysse" : new function() {
                this.level = 0;
                this.name = "abysse";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(120000, 1.2, lvl) + Utils.pow(50000, lvl, 3) + Utils.pow(40000, lvl, 2) + Utils.pow(10000, lvl, 1)),
                        illumination : 0
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
	        				croyance : Math.round(((deesse + lune) / soleil) * me * 0.1),
	        				illumination : 0,
                            bien : Math.round(-0.1 * lune * me),
                            mal : Math.round(0.1 * soleil * me)
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
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(500000, 1.2, lvl) + Utils.pow(200000, lvl, 3) + Utils.pow(100000, lvl, 2) + Utils.pow(250000, lvl, 1)),
                        illumination : 0
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
	        				illumination : Math.round(0.1 * me),
                            bien : 2 * me * (terre + lune),
                            mal : -2 * me * (dieu + deesse)
	        			},
	        			click : {
	        				croyance : Math.round(0.125 * me * (dieu + deesse + terre + lune)),
	        				illumination : 0,
                            bien : Math.round(0.2 * me * (terre + lune)),
                            mal : Math.round(-0.2 * me * (dieu + deesse))
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "connaissance" : new function() {
                this.level = 0;
                this.name = "connaissance";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(840000, 1.2, lvl) + Utils.pow(560000, lvl, 3) + Utils.pow(320000, lvl, 2) + Utils.pow(180000, lvl, 1)),
                        illumination : 0
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
	        				illumination : Math.round(0.1 * me),
                            bien : 0,
                            mal : -1 * me * (ciel + vide)
	        			},
	        			click : {
	        				croyance : Math.round(0.125 * me * (terre + lune + ciel + vide)),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(-0.1 * me * (ciel + vide))
	        			}
	        		};
	        	};
                this.select = function(game, ameliorations) {
                };
            },
            "evolution" : new function() {
                this.level = 0;
                this.name = "evolution";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : Math.round(Utils.pow(1000000, 1.2, lvl) + Utils.pow(980000, lvl, 3) + Utils.pow(540000, lvl, 2) + Utils.pow(400000, lvl, 1)),
                        illumination : 0
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
	        				illumination : Math.round(0.1 * me),
                            bien : -2 * me * (foret + chaos),
                            mal : 2 * me * (soleil + terre)
	        			},
	        			click : {
	        				croyance : Math.round(0.125 * me * (soleil + terre + foret + chaos)),
	        				illumination : 0,
                            bien : Math.round(-0.2 * me * (foret + chaos)),
                            mal : Math.round(0.2 * me * (soleil + terre))
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
