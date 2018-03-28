'use strict';
define(["jquery"], function($){
	var data = {
			"dust" : {
				name : "dust",
			    nbr : 5,
				next : "egg",
				text : ["didactitiel1", "didactitiel2", "didactitiel3"],
				events : {
                    typeEvents : ["dust-event1"],
                    newEvents : []
                }
			},
			"egg" : {
			    name : "egg",
			    nbr : 3,
				next : "baby",
				text : ["cinematique-egg1", "", "cinematique-egg2"],
				events : {
	                typeEvents : ["egg-event1"],
	                newEvents : []
	            }
			},
			"baby" : {
				name : "baby",
				nbr : 3,
				next : "child",
				text : ["cinematique-baby1"],
				events : {
	                typeEvents : ["baby-event1"],
	                newEvents : []
	            }
			},
            "child" : {
                name : "child",
                text : ["cinematique-child1"],
                events : {
                    typeEvents : ["child-event1"],
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
