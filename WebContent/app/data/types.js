'use strict';
define(["jquery"], function($){
	var data = {
	        /**
	         * Commencement
	         */
			"dust" : {
				name : "dust",
			    nbr : 5,
				next : "egg",
				text : ["didactitiel1", "didactitiel2", "didactitiel3", "didactitiel4", "didactitiel5"],
				events : {
                    typeEvents : [],
                    newEvents : []
                }
			},
			/**
			 * Level 0
			 */
			"egg" : {
			    name : "egg",
			    nbr : 3,
				next : "baby",
				text : [],
				events : {
	                typeEvents : [],
	                newEvents : []
	            }
			},
			/**
			 * Level 3 : Yule
			 */
			"baby" : {
				name : "baby",
				nbr : 5,
				next : "imbolc",
				text : [],
				events : {
	                typeEvents : [],
	                newEvents : []
	            }
			},
			/**
			 * Level 8 : Imbolc
			 */
            "imbolc" : {
                name : "imbolc",
                nbr : 7,
				next : "ostara",
                text : ["cinematique-imbolc", "cinematique-imbolc1", "cinematique-imbolc2", "cinematique-imbolc3", "cinematique-imbolc4", "cinematique-imbolc5"],
                events : {
                    typeEvents : [],
                    newEvents : []
                },
                animations : [
	                {
	                	name : "cligne",
	                	chance : 5,
	                	time : 500
	                },
	                {
	                	name : "langue",
	                	chance : 10,
	                	time : 500
	                },
	                {
	                	name : "tourneTete",
	                	chance : 10,
	                	time : 800
	                }
                ]
            },
            /**
             * Level 15 : Ostara
             */
            "ostara" : {
                name : "ostara",
                nbr : 10,
				next : "beltane",
                text : ["cinematique-ostara", "cinematique-ostara-1", "cinematique-ostara-2"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 25 : Beltane
             */
            "beltane" : {
                name : "beltane",
                nbr : 15,
				next : "litha",
                text : ["cinematique-beltane", "cinematique-beltane-1", "cinematique-beltane-2"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 40 : Litha
             */
            "litha" : {
                name : "litha",
                nbr : 15,
				next : "lammas",
                text : ["cinematique-litha","cinematique-litha-1","cinematique-litha-2"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 55 : Lammas
             */
            "lammas" : {
                name : "lammas",
                nbr : 15,
				next : "mabon",
                text : ["cinematique-lammas","cinematique-lammas-1","cinematique-lammas-2"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 70 : Mabon
             */
            "mabon" : {
                name : "mabon",
                nbr : 15,
				next : "samhain",
                text : ["cinematique-mabon","cinematique-mabon-1","cinematique-mabon-2"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 85 : Samhain
             */
            "samhain" : {
                name : "samhain",
                nbr : 15,
				next : "yule-fin",
                text : ["cinematique-samhain","cinematique-samhain-1","cinematique-samhain-2"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 100 : Yule Fin
             */
            "yule-fin" : {
                name : "yule-fin",
                text : ["cinematique-yule-fin"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            }
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		}
	};
});