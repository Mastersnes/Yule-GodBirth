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
	        			illumination : Math.round(lvl<10 ? 0 : Utils.pow(1, lvl, 1.3))
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
			    	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		var croyance = Math.round(Utils.pow(1, 1.099, me-1) + Math.pow(me-1, 1));
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
	        				croyance : Math.round(0.5 * croyance) + 10000,
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
						croyance : Math.round(Utils.pow(20, lvl, 3.54)),
	        			illumination : Math.round(lvl<8 ? 0 : Utils.pow(1.1, lvl, 1.41))
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(8, 1.0924, me-1) + Math.pow(me-1, 0.8));
	        		var mal = Math.round(Utils.pow(1, 1.027, me-1) + Math.pow(me-1, 1.55));
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
						croyance : Math.round(Utils.pow(25, lvl, 3.4)),
	        			illumination : Math.round(lvl<8 ? 0 : Utils.pow(1, lvl, 1.4))
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(5, 1.092, me-1) + Math.pow(me-1, 0.9));
	        		var bien = Math.round(Utils.pow(1, 1.028, me-1) + Math.pow(me-1, 1.5));
	        		var illumination = 0;
	        		var mal = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : 0,
                            bien : bien,
                            mal : 0
	        			},
	        			click : {
	        				croyance : Math.round(0.5 * croyance),
	        				illumination : 0,
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
						croyance : Math.round(Utils.pow(3000, lvl, 2.9)),
	        			illumination : Math.round(lvl<5 ? 0 : Utils.pow(2.5, lvl, 1.35))
	        		};
                };
                this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(13, 1.0928, me-1) + Math.pow(me-1, 1.6));
	        		var bien = Math.round(Utils.pow(10, 1.06, me-1) + Math.pow(me-1, 1));
	        		var mal = Math.round(Utils.pow(12, 1.061, me-1) + Math.pow(me-1, 1.05));
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
						croyance : Math.round(Utils.pow(3250, lvl, 2.6)),
	        			illumination : Math.round(lvl<4 ? 0 : Utils.pow(2.2, lvl, 1.3))
	        		};
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(10, 1.0924, me-1) + Math.pow(me-1, 1.8));
	        		var illumination = Math.round(me * 0.1);
	        		var bien = Math.round(Utils.pow(20, 1.07, me-1) + Math.pow(me-1, 1.4));
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
                    	croyance : Math.round(Utils.pow(4000, lvl, 2.85)),
	        			illumination : Math.round(lvl<4?0 : Utils.pow(2.5, lvl, 1.45))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(15, 1.093, me-1) + Math.pow(me-1, 1.5));
	        		var illumination = Math.round((me-1) * 0.25);
	        		var mal = Math.round(Utils.pow(30, 1.065, me-1) + Math.pow(me-1, 1.4));
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
                    	croyance : Math.round(Utils.pow(2000000, lvl, 1.7)),
	        			illumination : Math.round(Utils.pow(4, lvl, 1.5))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(50, 1.093, me-1) + Math.pow(me-1, 1.5));
	        		var bien = Math.round(Utils.pow(50, 1.045, me-1) + Math.pow(me-1, 1.2));
	        		var mal = Math.round(Utils.pow(-11, 1.051, me-1) + Math.pow(me-1, 1.21));
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
                    	croyance : Math.round(Utils.pow(2405200, lvl, 1.65)),
	        			illumination : Math.round(Utils.pow(4.5, lvl, 1.45))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(30, 1.105, me-1) + Math.pow(me-1, 1.4));
	        		var bien = Math.round(Utils.pow(40, 1.05, me-1) + Math.pow(me-1, 1.1));
	        		var mal = Math.round(Utils.pow(-13, 1.051, me-1) + Math.pow(me-1, 1.14));
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
            "volcan" : new function() {
                this.level = 0;
                this.name = "volcan";
                this.descr = "volcan-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(2500000, lvl, 1.7)),
	        			illumination : Math.round(Utils.pow(3, lvl, 1.6))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(70, 1.093, me-1) + Math.pow(me-1, 1.8));
	        		var bien = Math.round(Utils.pow(20, 1.05, me-1) + Math.pow(me-1, 1.1));
	        		var mal = Math.round(Utils.pow(-33, 1.045, me-1) + Math.pow(me-1, 1.21));
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
                    	croyance : Math.round(Utils.pow(1800000, lvl, 1.75)),
	        			illumination : Math.round(Utils.pow(4.4, lvl, 1.42))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(40, 1.095, me-1) + Math.pow(me-1, 1.7));
	        		var bien = Math.round(Utils.pow(30, 1.051, me-1) + Math.pow(me-1, 1.2));
	        		var mal = Math.round(Utils.pow(-10, 1.05, me-1) + Math.pow(me-1, 1.7));
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
                    	croyance : Math.round(Utils.pow(1900000, lvl, 1.74)),
	        			illumination : Math.round(Utils.pow(4.5, lvl, 1.41))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(10, 1.117, me-1) + Math.pow(me-1, 1.2));
	        		var bien = Math.round(Utils.pow(-10, 1.05, me-1) + Math.pow(me-1, 1.2));
	        		var mal = Math.round(Utils.pow(60, 1.045, me-1) + Math.pow(me-1, 1.2));
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
                    	croyance : Math.round(Utils.pow(2300000, lvl, 1.68)),
	        			illumination : Math.round(Utils.pow(3, lvl, 1.7))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(80, 1.085, me-1) + Math.pow(me-1, 1.6));
	        		var bien = Math.round(Utils.pow(-15, 1.052, me-1) + Math.pow(me-1, 1.15));
	        		var mal = Math.round(Utils.pow(40, 1.04, me-1) + Math.pow(me-1, 1.3));
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
                    	croyance : Math.round(Utils.pow(2800000, lvl, 1.6)),
	        			illumination : Math.round(Utils.pow(6, lvl, 1.3))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(80, 1.096, me-1) + Math.pow(me-1, 1.4));
	        		var bien = Math.round(Utils.pow(-30, 1.04, me-1) + Math.pow(me-1, 1.2));
	        		var mal = Math.round(Utils.pow(100, 1.023, me-1) + Math.pow(me-1, 1.23));
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
            "abysse" : new function() {
                this.level = 0;
                this.name = "abysse";
                this.descr = "abysse-descr";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                    	croyance : Math.round(Utils.pow(1450000, lvl, 1.8)),
	        			illumination : Math.round(Utils.pow(5, lvl, 1.4))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(45, 1.094, me-1) + Math.pow(me-1, 1.6));
	        		var bien = Math.round(Utils.pow(-5, 1.06, me-1) + Math.pow(me-1, 1.5));
	        		var mal = Math.round(Utils.pow(30, 1.055, me-1) + Math.pow(me-1, 1.25));
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
                    	croyance : Math.round(Utils.pow(100000000, lvl, 1.4)),
	        			illumination : Math.round(Utils.pow(120, lvl, 1.15))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(400, 1.092, me-1) + Math.pow(me-1, 1.5));
	        		var illumination = Math.round(me * 2);
	        		var bien = Math.round(Utils.pow(100, 1.073, me-1) + Math.pow(me-1, 1.35));
	        		var mal = Math.round(Utils.pow(101, 1.074, me-1) + Math.pow(me-1, 1.35));
	        		
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
                    	croyance : Math.round(Utils.pow(150000000, lvl, 1.36)),
	        			illumination : Math.round(Utils.pow(150, lvl, 1.15))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(500, 1.08, me-1) + Math.pow(me-1, 2.5));
	        		var illumination = Math.round(me * 2.2);
	        		var bien = Math.round(Utils.pow(110, 1.07, me-1) + Math.pow(me-1, 1.4));
	        		var mal = Math.round(Utils.pow(109, 1.069, me-1) + Math.pow(me-1, 1.4));
	        		
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
                    	croyance : Math.round(Utils.pow(200000000, lvl, 1.335)),
	        			illumination : Math.round(Utils.pow(200, lvl, 1.15))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(Utils.pow(500, 1.082, me-1) + Math.pow(me-1, 0.5));
	        		var illumination = Math.round(me * 2.5);
	        		var bien = Math.round(Utils.pow(120, 1.06, me-1) + Math.pow(me-1, 1.8));
	        		var mal = Math.round(Utils.pow(120, 1.061, me-1) + Math.pow(me-1, 1.79));
	        		
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
