'use strict';
define(["jquery"], function($){
	var data = {
			/**
			 * Deites
			 */
	        "grandTout" : new function() {
				this.level = 1;
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
	        			croyance : lvl*10,
	        			illumination : 0
	        		};
			    };
			    this.gain = function (lvl) {
	        		if (!lvl) lvl = this.level;
	        		return {
	        			loop : {
	        				croyance : lvl*10,
	        				illumination : lvl*200,
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
	        			croyance : lvl*2,
	        			illumination : 0
	        		};
			    };
			    this.gain = function (lvl) {
	        		if (!lvl) lvl = this.level;
	        		return {
	        			loop : {
	        				croyance : lvl,
	        				illumination : 0,
	        				bien : 0,
	        				mal : lvl
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
