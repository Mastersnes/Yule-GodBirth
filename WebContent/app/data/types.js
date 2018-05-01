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
				next : "child",
				text : ["didactitiel-dieu1", "didactitiel-dieu2", "didactitiel-dieu3"],
				events : {
	                typeEvents : [],
	                newEvents : []
	            }
			},
            "child" : {
                name : "child",
                text : ["cinematique-child1", "cinematique-child2", "cinematique-child3"],
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
