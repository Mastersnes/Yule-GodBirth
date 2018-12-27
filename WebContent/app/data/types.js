'use strict';
define(["jquery"], function($){
	var data = {
	        /**
	         * Commencement
	         */
			"dust" : {
				name : "dust",
				music : "eveil.ogg",
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
				music : "eveil.ogg",
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
				music : "eveil.ogg",
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
				music : "apprentissage.ogg",
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
				music : "ravage.ogg",
                text : ["cinematique-ostara", "cinematique-ostara-1", "cinematique-ostara-2"],
                events : {
                    typeEvents : [],
                    newEvents : ["ostara-start-event"]
                }
            },
            /**
             * Level 25 : Beltane
             */
            "beltane" : {
                name : "beltane",
                nbr : 15,
				next : "litha",
				music : "futureOfLove.ogg",
                text : ["cinematique-beltane", "cinematique-beltane-1", "cinematique-beltane-2"],
                events : {
                    typeEvents : [],
                    newEvents : ["beltane-start-event"]
                }
            },
            /**
             * Level 40 : Litha
             */
            "litha" : {
                name : "litha",
                nbr : 15,
				next : "lammas",
				music : "mariage.ogg",
                text : ["cinematique-litha","cinematique-litha-1","cinematique-litha-2"],
                events : {
                    typeEvents : [],
                    newEvents : ["litha-start-event"]
                }
            },
            /**
             * Level 55 : Lammas
             */
            "lammas" : {
                name : "lammas",
                nbr : 15,
				next : "mabon",
				music : "zenitude.ogg",
                text : ["cinematique-lammas","cinematique-lammas-1","cinematique-lammas-2"],
                events : {
                    typeEvents : [],
                    newEvents : ["lammas-frere-event"]
                }
            },
            /**
             * Level 70 : Mabon
             */
            "mabon" : {
                name : "mabon",
                nbr : 15,
				next : "samhain",
				music : "declin.ogg",
                text : ["cinematique-mabon","cinematique-mabon-1","cinematique-mabon-2"],
                events : {
                    typeEvents : [],
                    newEvents : ["mabon-start-event"]
                }
            },
            /**
             * Level 85 : Samhain
             */
            "samhain" : {
                name : "samhain",
                nbr : 15,
				next : "yule-fin",
				music : "instantDivin.ogg",
                text : ["cinematique-samhain", "cinematique-samhain-1", "cinematique-samhain-2"],
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