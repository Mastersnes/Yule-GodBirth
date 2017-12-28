'use strict';
define(["jquery"], function($){
	var data = {
			"baby-event1" : {
				name : "baby-event1",
			    text : "test-baby-event1",
			    actions : [
			         {
			             name : "oui",
			             action : function(game) {
			                 alert("test-baby-event1 oui");
			             }
			         },
			         {
                         name : "non",
                         action : function(game) {
                             alert("test-baby-event1 non");
                         }
                     }
			    ]
			},
			"baby-event2" : {
				name : "baby-event2",
                text : "test-baby-event2",
                actions : [
                     {
                         name : "oui",
                         action : function(game) {
                             alert("test-baby-event2 oui");
                         }
                     },
                     {
                         name : "non",
                         action : function(game) {
                             alert("test-baby-event2 non");
                         }
                     }
                ]
            },
            "general-event1" : {
            	name : "general-event1",
                text : "test-general-event1",
                actions : [
                     {
                         name : "oui",
                         action : function(game) {
                             alert("test-general-event1 oui");
                         }
                     },
                     {
                         name : "non",
                         action : function(game) {
                             alert("test-general-event1 non");
                         }
                     }
                ]
            },
            "general-event2" : {
            	name : "general-event2",
                text : "test-general-event2",
                actions : [
                     {
                         name : "oui",
                         action : function(game) {
                             alert("test-general-event2 oui");
                         }
                     },
                     {
                         name : "non",
                         action : function(game) {
                             alert("test-general-event2 non");
                         }
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
