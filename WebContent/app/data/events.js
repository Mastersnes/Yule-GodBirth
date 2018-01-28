'use strict';
define(["jquery"], function($){
	var data = {
			"child-event1" : {
				name : "child-event1",
			    text : "test-child-event1",
			    actions : [
			         {
			             name : "oui",
			             action : function(game) {
			                 alert("test-child-event1 oui");
			             }
			         },
			         {
                         name : "non",
                         action : function(game) {
                             alert("test-child-event1 non");
                         }
                     }
			    ]
			},
			"child-event2" : {
				name : "child-event2",
                text : "test-child-event2",
                actions : [
                     {
                         name : "oui",
                         action : function(game) {
                             alert("test-child-event2 oui");
                         }
                     },
                     {
                         name : "non",
                         action : function(game) {
                             alert("test-child-event2 non");
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
