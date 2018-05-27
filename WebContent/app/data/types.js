'use strict';
define(["jquery"], function($){
	var data = {
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
				nbr : 3,
				next : "imbolc",
				text : ["didactitiel-dieu1", "didactitiel-dieu2", "didactitiel-dieu3"],
				events : {
	                typeEvents : [],
	                newEvents : []
	            }
			},
			/**
			 * Level 10 : Imbolc
			 */
            "imbolc" : {
                name : "imbolc",
                nbr : 5,
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
                nbr : 5,
				next : "beltane",
                text : ["cinematique-ostara"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 20 : Beltane
             */
            "beltane" : {
                name : "beltane",
                nbr : 5,
				next : "litha",
                text : ["cinematique-beltane"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 25 : Litha
             */
            "litha" : {
                name : "litha",
                nbr : 5,
				next : "lammas",
                text : ["cinematique-litha"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 30 : Lammas
             */
            "lammas" : {
                name : "lammas",
                nbr : 5,
				next : "mabon",
                text : ["cinematique-lammas"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 35 : Mabon
             */
            "mabon" : {
                name : "mabon",
                nbr : 5,
				next : "samhain",
                text : ["cinematique-mabon"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 40 : Samhain
             */
            "samhain" : {
                name : "samhain",
                nbr : 5,
				next : "yule-fin",
                text : ["cinematique-samhain"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            /**
             * Level 45 : Yule Fin
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