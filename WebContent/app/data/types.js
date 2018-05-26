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
            "imbolc" : {
                name : "imbolc",
                nbr : 1,
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
            "ostara" : {
                name : "ostara",
                nbr : 1,
				next : "beltane",
                text : ["cinematique-ostara"],
                events : {
                    typeEvents : [],
                    newEvents : []
                }
            },
            "beltane" : {
                name : "beltane",
                nbr : 1,
				next : "litha",
                text : ["cinematique-beltane"],
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