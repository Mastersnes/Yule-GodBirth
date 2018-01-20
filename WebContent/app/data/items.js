'use strict';
define(["jquery"], function($){
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
	        			croyance : 10*lvl,
	        			illumination : 0
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level + incr;
	        		var deesse = ameliorations.get("deesse").level + incr;
	        		return {
	        			loop : {
	        				croyance : dieu + deesse,
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
	        			croyance : lvl*10,
	        			illumination : 0
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		return {
	        			loop : {
	        				croyance : this.level + incr,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
	        			croyance : 0,
	        			illumination : 0
	        		};
			    };
			    this.gain = function (incr, ameliorations) {
	        		if (!incr) incr = 0;
	        		return {
	        			loop : {
	        				croyance : this.level + incr,
	        				illumination : 0,
                            bien : 0,
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
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level + incr;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : deesse + me,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level + incr;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : deesse + me,
	        				illumination : 0,
                            bien : 0,
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
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level + incr;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : dieu + me,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
                        croyance : lvl*4,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level + incr;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : deesse + me,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
                        croyance : lvl*4,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level + incr;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : dieu + me,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
                        croyance : lvl*4,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level + incr;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : dieu + me,
	        				illumination : 0,
                            bien : 0,
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
                        croyance : lvl*4,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level + incr;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : deesse + me,
	        				illumination : 0,
                            bien : 0,
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
                        croyance : lvl*5,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level + incr;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : deesse + me,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
                        croyance : lvl*5,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level + incr;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : dieu + me,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var dieu = ameliorations.get("dieu").level + incr;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : dieu + me,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level + incr;
	        		var me = this.level + incr;
	        		return {
	        			loop : {
	        				croyance : deesse + me,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
                        croyance : lvl*10,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var deesse = ameliorations.get("deesse").level + incr;
	        		var dieu = ameliorations.get("dieu").level + incr;
	        		return {
	        			loop : {
	        				croyance : deesse * dieu,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
                        croyance : lvl*10,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var terre = ameliorations.get("terre").level + incr;
	        		var lune = ameliorations.get("lune").level + incr;
	        		var soleil = ameliorations.get("soleil").level + incr;
	        		return {
	        			loop : {
	        				croyance : (terre + lune) * soleil,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
                        croyance : lvl*10,
                        illumination : 0
                    };
                };
                this.gain = function (incr, ameliorations) {
                	if (!incr) incr = 0;
	        		var foret = ameliorations.get("foret").level + incr;
	        		var ocean = ameliorations.get("ocean").level + incr;
	        		var vide = ameliorations.get("vide").level + incr;
	        		var chaos = ameliorations.get("chaos").level + incr;
	        		return {
	        			loop : {
	        				croyance : (foret + chaos) * (ocean + vide),
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
