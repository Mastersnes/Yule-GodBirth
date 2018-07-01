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
	        			croyance : Math.round(Utils.pow(10, lvl, 3.5)),
	        			illumination : Math.round(lvl<10 ? 0 : Utils.pow(1, lvl, 3))
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
			    	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		var croyance = Math.round(Utils.pow(5, me, 0.5) + Utils.pow(5, me, 1.28));
	        		var illumination = 0;
	        		var bien = 0;
	        		var mal = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * croyance),
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
						croyance : Math.round(Utils.pow(50, lvl, 3)),
	        			illumination : Math.round(lvl<5 ? 0 : Utils.pow(50, lvl, 1.8))
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(7, me, 0.55) + Utils.pow(8, me, 1.15));
	        		var mal = Math.round(me * 1.2);
	        		var illumination = 0;
	        		var bien = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : 0,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * croyance),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(0.5 * mal)
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
						croyance : Math.round(Utils.pow(80, lvl, 2.9)),
	        			illumination : Math.round(lvl<5 ? 0 : Utils.pow(30, lvl, 1.95))
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(8, me, 0.6) + Utils.pow(5, me, 1.155));
	        		var bien = Math.round(me);
	        		var illumination = Math.round(Utils.pow(0.1, me, 0.5) + Utils.pow(0.1, me, 1.85));
	        		var mal = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : illumination,
                            bien : bien,
                            mal : 0
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * croyance),
	        				illumination : Math.round(0.5 * illumination),
                            bien : Math.round(0.5 * bien),
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
						croyance : Math.round(Utils.pow(7000, lvl, 2.001)),
	        			illumination : Math.round(lvl<3 ? 0 : Utils.pow(120, lvl, 1.8))
	        		};
                };
                this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(9, me, 0.7) + Utils.pow(8, me, 1.2));
	        		var bien = -Math.round(me * 0.2);
	        		var mal = Math.round(me * 1.5);
	        		var illumination = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * croyance),
	        				illumination : 0,
                            bien : Math.round(0.5 * bien),
                            mal : Math.round(0.5 * bien)
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
						croyance : Math.round(Utils.pow(6700, lvl, 1.9857)),
	        			illumination : Math.round(lvl<3 ? 0 : Utils.pow(110, lvl, 1.82))
	        		};
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(8.5, me, 1.2) + Utils.pow(7.5, me, 0.9));
	        		var illumination = Math.round(Utils.pow(0.25, me, 0.5) + Utils.pow(0.25, me, 1.85));
	        		var bien = Math.round(me * 2.5);
	        		var mal = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : illumination,
                            bien : bien,
                            mal : 0
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : Math.round(illumination * 0.5),
                            bien : Math.round(bien * 0.5),
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
                    	croyance : Math.round(Utils.pow(7500, lvl, 2.003)),
	        			illumination : Math.round(lvl<4?0 : Utils.pow(150, lvl, 1.78))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(9, me, 0.68) + Utils.pow(9, me, 1.215));
	        		var illumination = Math.round(Utils.pow(0.4, me, 0.6) + Utils.pow(0.3, me, 1.8));
	        		var mal = Math.round(me * 2.7);
	        		var bien = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : illumination,
                            bien : 0,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : Math.round(illumination * 0.5),
                            bien : 0,
                            mal : Math.round(mal * 0.5)
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
                    	croyance : Math.round(Utils.pow(120000, lvl, 1.43)),
	        			illumination : Math.round(Utils.pow(800, lvl, 1.4))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(10, me, 0.65) + Utils.pow(10, me, 1.214));
	        		var bien = Math.round(me * 2);
	        		var mal = -Math.round(me * 0.3);
	        		var illumination = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : 0,
                            bien : Math.round(bien * 0.5),
                            mal : Math.round(mal * 0.5)
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
                    	croyance : Math.round(Utils.pow(130000, lvl, 1.415)),
	        			illumination : Math.round(Utils.pow(900, lvl, 1.4))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(12, me, 0.67) + Utils.pow(10, me, 1.215));
	        		var bien = Math.round(me * 1.4);
	        		var mal = -Math.round(me * 0.4);
	        		var illumination = Math.round(Utils.pow(0.5, me, 0.6) + Utils.pow(0.5, me, 1.79));
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : illumination,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : Math.round(illumination * 0.5),
                            bien : Math.round(bien * 0.5),
                            mal : Math.round(mal * 0.5)
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
                    	croyance : Math.round(Utils.pow(150000, lvl, 1.38)),
	        			illumination : Math.round(Utils.pow(1200, lvl, 1.35))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(16, me, 0.67) + Utils.pow(9, me, 1.214));
	        		var bien = -Math.round(me * 0.5);
	        		var mal = Math.round(me * 2.2);
	        		var illumination = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : 0,
                            bien : Math.round(bien * 0.5),
                            mal : Math.round(mal * 0.5)
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
                    	croyance : Math.round(Utils.pow(120000, lvl, 1.39)),
	        			illumination : Math.round(Utils.pow(800, lvl, 1.45))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(10, me, 0.65) + Utils.pow(11, me, 1.19));
	        		var bien = Math.round(me * 2.3);
	        		var mal = Math.round(me * 0.8);
	        		var illumination = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : 0,
                            bien : Math.round(bien * 0.5),
                            mal : Math.round(mal * 0.5)
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
                    	croyance : Math.round(Utils.pow(130000, lvl, 1.39)),
	        			illumination : Math.round(Utils.pow(1500, lvl, 1.25))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(10, me, 0.4) + Utils.pow(11, me, 1.21));
	        		var bien = -Math.round(me * 1.2);
	        		var mal = Math.round(me * 2.4);
	        		var illumination = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : 0,
                            bien : Math.round(bien * 0.5),
                            mal : Math.round(mal * 0.5)
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
                    	croyance : Math.round(Utils.pow(110000, lvl, 1.43)),
	        			illumination : Math.round(Utils.pow(500, lvl, 1.58))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(5, me, 0.4) + Utils.pow(10, me, 1.225));
	        		var bien = -Math.round(me * 0.9);
	        		var mal = Math.round(me * 1.8);
	        		var illumination = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : 0,
                            bien : Math.round(bien * 0.5),
                            mal : Math.round(mal * 0.5)
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
                    	croyance : Math.round(Utils.pow(200000, lvl, 1.26)),
	        			illumination : Math.round(Utils.pow(600, lvl, 1.45))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(15, me, 0.5) + Utils.pow(13, me, 1.1));
	        		var bien = -Math.round(me * 1.5);
	        		var mal = Math.round(2.9);
	        		var illumination = Math.round(Utils.pow(0.5, me, 0.5) + Utils.pow(0.5, me, 1.81));
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : illumination,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : Math.round(illumination * 0.5),
                            bien : Math.round(bien * 0.5),
                            mal : Math.round(mal * 0.5)
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
                    	croyance : Math.round(Utils.pow(100000, lvl, 1.48)),
	        			illumination : Math.round(Utils.pow(300, lvl, 1.73))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(3, me, 0.5) + Utils.pow(7, me, 1.315));
	        		var bien = -Math.round(me * 1.3);
	        		var mal = Math.round(me * 2.5);
	        		var illumination = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : 0,
                            bien : Math.round(bien * 0.5),
                            mal : Math.round(mal * 0.5)
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
                    	croyance : Math.round(Utils.pow(3333333, lvl, 0.8)),
	        			illumination : Math.round(Utils.pow(3333, lvl, 1.2))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(13, me, 0.7) + Utils.pow(10, me, 1.3));
	        		var illumination = Math.round(Utils.pow(1, me, 0.7) + Utils.pow(1, me, 1.73));
	        		var bien = Math.round(me * 4);
	        		var mal = Math.round(me * 1.3);
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : illumination,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : Math.round(illumination * 0.5),
                            bien : Math.round(bien * 0.5),
                            mal : Math.round(mal * 0.5)
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
                    	croyance : Math.round(Utils.pow(6666666, lvl, 0.7)),
	        			illumination : Math.round(Utils.pow(6666, lvl, 1.06))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(13, me, 0.6) + Utils.pow(13, me, 1.2));
	        		var illumination = Math.round(Utils.pow(1, me, 1.15) + Utils.pow(1, me, 1.65));
	        		var bien = -Math.round(me * 2.4);
	        		var mal = -Math.round(me * 1.2);
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : illumination,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : Math.round(illumination * 0.5),
                            bien : Math.round(bien * 0.5),
                            mal : Math.round(mal * 0.5)
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
                    	croyance : Math.round(Utils.pow(9999999, lvl, 0.66)),
	        			illumination : Math.round(Utils.pow(9999, lvl, 0.99))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(14, me, 0.8) + Utils.pow(15, me, 1.15));
	        		var illumination = Math.round(Utils.pow(1.5, me, 1.2) + Utils.pow(1.3, me, 1.66));
	        		var bien = Math.round(me * 2.6);
	        		var mal = Math.round(me * 1.6);
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : illumination,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : Math.round(croyance * 0.5),
	        				illumination : Math.round(illumination * 0.5),
                            bien : Math.round(bien * 0.5),
                            mal : Math.round(mal * 0.5)
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
