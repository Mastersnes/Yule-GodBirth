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
					return [{
						name : "dieu",
						level : lvl
					},{
						name : "deesse",
						level : lvl
					}];
			    };
				this.prix = function (lvl) {
				    if(!lvl) lvl = this.level;
					return {
	        			croyance : Math.round(100*Math.pow(lvl, 3) + 100*Math.pow(lvl, 2) + 50*lvl),
	        			illumination : Math.round(lvl<5?0:5*Math.pow(lvl-5, 2) + 2*(lvl-5) + 5)
	        		};
			    };
			    this.gain = function (lvl) {
	        		if (!lvl) lvl = this.level;
	        		return {
	        			loop : {
	        				croyance : Math.round(0.25*Math.pow(lvl, 3) + 5*Math.pow(lvl, 2) + 3*lvl + 1) + 10000,
	        				illumination : Math.round(lvl<10?0:Math.pow(lvl-9, 2)) + 10000,
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
				
				this.restrictions = function (lvl) {};
				this.prix = function (lvl) {
				    if(!lvl) lvl = this.level;
					return {
	        			croyance : Math.round(110*Math.pow(lvl, 3) + 50*Math.pow(lvl, 2) + 20*lvl),
	        			illumination : Math.round(lvl<10?0:5*Math.pow(lvl-8, 2) + 4*(lvl-8))
	        		};
			    };
			    this.gain = function (lvl) {
	        		if (!lvl) lvl = this.level;
	        		return {
	        			loop : {
	        				croyance : Math.round(1*Math.pow(lvl, 3) + 3*Math.pow(lvl, 2) + 2*lvl + 3),
	        				illumination : 0,
	        				bien : -Math.round(2*Math.pow(lvl, 3) + 0.5*Math.pow(lvl, 2) + 1*lvl),
	        				mal : Math.round(5*Math.pow(lvl, 3) + 2*Math.pow(lvl, 2) + 2*lvl)
	        			}
	        		};
	        	};
	        	this.select = function(game, ameliorations) {
	        	};
			},
			"deesse" : new function() {
				this.level = 0;
				this.name = "deesse";
				
				this.restrictions = function (lvl) {};
				this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
					return {
	        			croyance : Math.round(105*Math.pow(lvl, 3) + 40*Math.pow(lvl, 2) + 30*lvl),
	        			illumination : Math.round(lvl<10?0:3*Math.pow(lvl-8, 2) + 2*(lvl-8))
	        		};
			    };
			    this.gain = function (lvl) {
	        		if (!lvl) lvl = this.level;
	        		return {
	        			loop : {
	        				croyance : Math.round(1*Math.pow(lvl, 2) + 1*lvl + 1),
	        				illumination : Math.round(lvl<5?0:0.25*Math.pow(lvl-5, 3) + 30.5*Math.pow(lvl-5, 2) + 1*(lvl-5) + 1),
	        				bien : Math.round(8*Math.pow(lvl, 3) + 4*Math.pow(lvl, 2) + 3*lvl + 1),
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
                this.gain = function (lvl) {
                    if (!lvl) lvl = this.level;
                    return {
                        loop : {
                            croyance : lvl,
                            illumination : 0,
                            bien : lvl,
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
                this.gain = function (lvl) {
                    if (!lvl) lvl = this.level;
                    return {
                        loop : {
                            croyance : lvl,
                            illumination : 0,
                            bien : lvl,
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
                this.gain = function (lvl) {
                    if (!lvl) lvl = this.level;
                    return {
                        loop : {
                            croyance : lvl,
                            illumination : 0,
                            bien : lvl,
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
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (lvl) {
                    if (!lvl) lvl = this.level;
                    return {
                        loop : {
                            croyance : lvl,
                            illumination : 0,
                            bien : lvl,
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
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (lvl) {
                    if (!lvl) lvl = this.level;
                    return {
                        loop : {
                            croyance : lvl,
                            illumination : 0,
                            bien : lvl,
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
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (lvl) {
                    if (!lvl) lvl = this.level;
                    return {
                        loop : {
                            croyance : lvl,
                            illumination : 0,
                            bien : lvl,
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
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (lvl) {
                    if (!lvl) lvl = this.level;
                    return {
                        loop : {
                            croyance : lvl,
                            illumination : 0,
                            bien : lvl,
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
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (lvl) {
                    if (!lvl) lvl = this.level;
                    return {
                        loop : {
                            croyance : lvl,
                            illumination : 0,
                            bien : lvl,
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
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (lvl) {
                    if (!lvl) lvl = this.level;
                    return {
                        loop : {
                            croyance : lvl,
                            illumination : 0,
                            bien : lvl,
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
                this.gain = function (lvl) {
                    if (!lvl) lvl = this.level;
                    return {
                        loop : {
                            croyance : lvl,
                            illumination : 0,
                            bien : lvl,
                            mal : 0
                        }
                    };
                };
                this.select = function(game, ameliorations) {
                };
            },
            "abysses" : new function() {
                this.level = 0;
                this.name = "abysses";
                
                this.restrictions = function (lvl) {};
                this.prix = function (lvl) {
                    if(!lvl) lvl = this.level;
                    return {
                        croyance : lvl*3,
                        illumination : 0
                    };
                };
                this.gain = function (lvl) {
                    if (!lvl) lvl = this.level;
                    return {
                        loop : {
                            croyance : lvl,
                            illumination : 0,
                            bien : lvl,
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
