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
	        			croyance : Math.round(Utils.pow(3, lvl, 3.19)),
	        			illumination : Math.round(lvl<10 ? 0 : Utils.pow(1, lvl, 3))
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
			    	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		var croyance = Math.round(0.5 * me);
	        		var illumination = me>=5 ? me/40 : 0;
	        		var bien = 0;
	        		var mal = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : croyance,
	        				illumination : Math.round(illumination*10)/10,
                            bien : 0,
                            mal : 0
	        			},
	        			click : {
	        				croyance : Math.round(0.25 * croyance),
	        				illumination : Math.round(illumination*10)/10,
                            bien : 0,
                            mal : 0
	        			}
	        		};
	        	};
	        	this.select = function(game, ameliorations, incr) {
	        	    for (var i=0; i<incr; i++) {
	        	    	game.spaceView.godView.checkLevel();
	        	    }
	        	    if (this.level >= 100) {
	        	    	game.gameOver(true);
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
						croyance : Math.round(Utils.pow(7, lvl, 2.8)),
	        			illumination : Math.round(lvl<5 ? 0 : Utils.pow(50, lvl, 1.8))
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 1.8);
	        		var mal = Math.round(Utils.pow(2, me, 0.7));
	        		var illumination = Math.round(me / 8);
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
	        				croyance : Math.round(0.25 * croyance),
	        				illumination : 0,
                            bien : 0,
                            mal : Math.round(0.25 * mal)
	        			}
	        		};
	        	};
	        	this.select = function(game, ameliorations) {
	        		var dieu = this.level;
	        		var deesse = ameliorations.Items.get("deesse").level;
	        		if (deesse == 5 && dieu == 5) {
	        			game.recompenseManager.addSuccess("success-amour");
	        		}
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
						croyance : Math.round(Utils.pow(5.6, lvl, 3)),
	        			illumination : Math.round(lvl<5 ? 0 : Utils.pow(30, lvl, 1.95))
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(1.4 * me);
	        		var bien = Math.round(me * 1.3);
	        		var illumination = Math.round(me / 5);
	        		var mal = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : 0,
	        				illumination : illumination,
                            bien : bien,
                            mal : 0
	        			},
	        			click : {
	        				croyance : 0,
	        				illumination : Math.round(0.3 * illumination),
                            bien : Math.round(0.25 * bien),
                            mal : 0
	        			}
	        		};
	        	};
	        	this.select = function(game, ameliorations) {
	        		var deesse = this.level;
	        		var dieu = ameliorations.Items.get("dieu").level;
	        		if (deesse == 5 && dieu == 5) {
	        			game.recompenseManager.addSuccess("success-amour");
	        		}
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
						croyance : Math.round(Utils.pow(500, lvl, 1.9)),
	        			illumination : Math.round(lvl<3 ? 0 : Utils.pow(120, lvl, 1.8))
	        		};
                };
                this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(2.8 * me);
	        		var bien = -Math.round(me * 0.2);
	        		var mal = Math.round(Utils.pow(3, me, 0.6));
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
	        				croyance : Math.round(0.25 * croyance),
	        				illumination : 0,
                            bien : Math.round(0.25 * bien),
                            mal : Math.round(0.25 * mal)
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
						croyance : Math.round(Utils.pow(315, lvl, 2.5)),
	        			illumination : Math.round(lvl<3 ? 0 : Utils.pow(110, lvl, 1.82))
	        		};
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 2.3);
	        		var illumination = Math.round(me / 3);
	        		var bien = Math.round(me * 2.5);
	        		var mal = 0;
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : 0,
	        				illumination : illumination,
                            bien : bien,
                            mal : 0
	        			},
	        			click : {
	        				croyance : 0,
	        				illumination : Math.round(illumination * 0.3),
                            bien : Math.round(bien * 0.25),
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
                    	croyance : Math.round(Utils.pow(720, lvl, 1.9)),
	        			illumination : Math.round(lvl<4?0 : Utils.pow(150, lvl, 1.78))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 3.8);
	        		var illumination = Math.round(me / 7);
	        		var mal = Math.round(Utils.pow(5, me, 0.7));
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
	        				croyance : Math.round(croyance * 0.2),
	        				illumination : Math.round(illumination * 0.3),
                            bien : 0,
                            mal : Math.round(mal * 0.25)
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
                    	croyance : Math.round(Utils.pow(7500, lvl, 1.5)),
	        			illumination : Math.round(Utils.pow(800, lvl, 1.4))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 1.8);
	        		var bien = Math.round(me * 2);
	        		var mal = -Math.round(me * 0.3);
	        		var illumination = Math.round(me / 2);
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : 0,
	        				illumination : illumination,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : 0,
	        				illumination : Math.round(illumination * 0.3),
                            bien : Math.round(bien * 0.25),
                            mal : Math.round(mal * 0.25)
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
                    	croyance : Math.round(Utils.pow(7700, lvl, 1.5)),
	        			illumination : Math.round(Utils.pow(900, lvl, 1.4))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 2.3);
	        		var illumination = Math.round(me / 4);
	        		var bien = Math.round(me * 1.4);
	        		var mal = -Math.round(me * 0.4);
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : 0,
	        				illumination : illumination,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : 0,
	        				illumination : Math.round(illumination * 0.3),
                            bien : Math.round(bien * 0.25),
                            mal : Math.round(mal * 0.25)
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
                    	croyance : Math.round(Utils.pow(9000, lvl, 1.35)),
	        			illumination : Math.round(Utils.pow(1200, lvl, 1.35))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 2.8);
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
	        				croyance : Math.round(croyance * 0.25),
	        				illumination : 0,
                            bien : Math.round(bien * 0.25),
                            mal : Math.round(mal * 0.25)
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
                    	croyance : Math.round(Utils.pow(10000, lvl, 1.25)),
	        			illumination : Math.round(Utils.pow(800, lvl, 1.45))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 3);
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
	        				croyance : Math.round(croyance * 0.25),
	        				illumination : 0,
                            bien : Math.round(bien * 0.25),
                            mal : Math.round(mal * 0.25)
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
                    	croyance : Math.round(Utils.pow(13000, lvl, 1.23)),
	        			illumination : Math.round(Utils.pow(1500, lvl, 1.25))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 3.8);
	        		var bien = -Math.round(me * 1.2);
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
	        				croyance : Math.round(croyance * 0.25),
	        				illumination : 0,
                            bien : Math.round(bien * 0.25),
                            mal : Math.round(mal * 0.25)
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
                    	croyance : Math.round(Utils.pow(5300, lvl, 1.8)),
	        			illumination : Math.round(Utils.pow(500, lvl, 1.58))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 1.2);
	        		var illumination = Math.round(me / 5);
	        		var bien = -Math.round(me * 0.9);
	        		var mal = Math.round(me * 1.8);
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : 0,
	        				illumination : illumination,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : 0,
	        				illumination : Math.round(illumination * 0.3),
                            bien : Math.round(bien * 0.25),
                            mal : Math.round(mal * 0.25)
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
                    	croyance : Math.round(Utils.pow(15500, lvl, 1.3)),
	        			illumination : Math.round(Utils.pow(600, lvl, 1.45))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 4.8);
	        		var illumination = Math.round(me / 11);
	        		var bien = -Math.round(me * 1.5);
	        		var mal = Math.round(2.9);
	        		
	        		if (me <= 0) {
	        			croyance = 0; illumination = 0;
	        			bien = 0; mal = 0;
	        		}
	        		return {
	        			loop : {
	        				croyance : 0,
	        				illumination : illumination,
                            bien : bien,
                            mal : mal
	        			},
	        			click : {
	        				croyance : 0,
	        				illumination : Math.round(illumination * 0.3),
                            bien : Math.round(bien * 0.25),
                            mal : Math.round(mal * 0.25)
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
                    	croyance : Math.round(Utils.pow(8300, lvl, 1.7)),
	        			illumination : Math.round(Utils.pow(300, lvl, 1.73))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 4);
	        		var bien = -Math.round(me * 1.3);
	        		var mal = Math.round(me * 2.5);
	        		var illumination = Math.round(me / 8);
	        		
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
	        				croyance : Math.round(croyance * 0.25),
	        				illumination : 0,
                            bien : Math.round(bien * 0.25),
                            mal : Math.round(mal * 0.25)
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
                    	croyance : Math.round(Utils.pow(33333, lvl, 1.4)),
	        			illumination : Math.round(Utils.pow(3333, lvl, 1.2))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 5.8);
	        		var illumination = Math.round(me / 2);
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
	        				croyance : Math.round(croyance * 0.2),
	        				illumination : Math.round(illumination * 0.3),
                            bien : Math.round(bien * 0.25),
                            mal : Math.round(mal * 0.25)
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
                    	croyance : Math.round(Utils.pow(66666, lvl, 1.2)),
	        			illumination : Math.round(Utils.pow(6666, lvl, 1.06))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 5.4);
	        		var illumination = Math.round(me);
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
	        				croyance : Math.round(croyance * 0.2),
	        				illumination : Math.round(illumination * 0.3),
                            bien : Math.round(bien * 0.25),
                            mal : Math.round(mal * 0.25)
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
                    	croyance : Math.round(Utils.pow(99999, lvl, 1.1)),
	        			illumination : Math.round(Utils.pow(9999, lvl, 0.99))
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var me = this.level + incr;
	        		
	        		var croyance = Math.round(me * 3.8);
	        		var illumination = Math.round(me * 1.5);
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
	        				croyance : Math.round(croyance * 0.2),
	        				illumination : Math.round(illumination * 0.3),
                            bien : Math.round(bien * 0.25),
                            mal : Math.round(mal * 0.25)
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
