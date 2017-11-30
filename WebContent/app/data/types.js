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
                text : ["cinematique-baby1"],
                events : {
                    typeEvents : ["baby-event1", "baby-event2"],
                    newEvents : ["general-event1", "general-event2"]
                    
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
