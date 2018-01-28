'use strict';
define(["jquery"], function($){
	var data = {
			"dust" : {
				name : "dust",
			    nbr : 5,
				next : "egg",
				text : ["cinematique-dust1", "", "cinematique-dust2"]
			},
			"egg" : {
			    name : "egg",
			    nbr : 3,
				next : "baby",
				text : ["cinematique-egg1", "", "cinematique-egg2"]
			},
			"baby" : {
				name : "baby",
				nbr : 3,
				next : "child",
				text : ["cinematique-baby1"]
			},
            "child" : {
                name : "child",
                text : ["cinematique-child1"],
                events : {
                    typeEvents : ["child-event1", "child-event2"],
                    newEvents : ["general-event1", "general-event2"]
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
