'use strict';
define(["jquery", 
        "app/data/events/emissaires-events",
        "app/data/events/peuple-events",
        "app/data/events/pegre-events",
        "app/data/events/boss-events"], function($, EmissairesEvents, PeupleEvents, PegreEvents, BossEvents){
	var data = {
	        /**
	         * Evenements generaux
	         */
			"first-event" : {
				name : "first-event",
			    text : "first-event",
			    rarity : 0,
			    unique : true,
			    timer : -1,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.pointManager.addPointsPercent({
		 						croyance : 10,
		 						illumination : 0,
		 						bien : 5,
		 						mal : 0
			            	 });
			                 
			                 game.eventManager.addEvents(["pluie?-event", "eclipse?-event", "sacrifice?-event", "blessure?-event", /**"argent?-event", "vrai-dieu?-event"**/]);
			                 game.alertPopup("first-event-ok", function() {
			                	 game.artefactsView.add("corne-abondance");
			                 });
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                croyance : 5,
                                illumination : 0,
                                bien : 0,
                                mal : 6
                             });
                             
                        	 game.eventManager.addEvents(["secheresse!-event", "glaciation!-event", "sacrifice!-event", "epidemie!-event", "famine!-event", "faux-dieu!-event"]);
                        	 game.alertPopup("first-event-ko", function() {
                        		 game.artefactsView.add("torque");
                        	 });
                         }
                     }
			    ]
			},
        	"culte-eau-event" : {
        	    name : "culte-eau-event",
        	    text : "culte-eau-event",
        	    rarity : 10,
        	    unique : true,
        	    actions : [
        	               {
        	                   name : "yesButton",
        	                   action : function(game) {}
        	               },
        	               {
        	                   name : "noButton",
        	                   action : function(game) {}
        	               }
        	               ]
        	},
            "culte-feu-event" : {
                name : "culte-feu-event",
                text : "culte-feu-event",
                rarity : 10,
                unique : true,
                actions : [
                           {
                               name : "yesButton",
                               action : function(game) {}
                           },
                           {
                               name : "noButton",
                               action : function(game) {}
                           }
                           ]
            },
            "culte-glace-event" : {
                name : "culte-glace-event",
                text : "culte-glace-event",
                rarity : 10,
                unique : true,
                actions : [
                           {
                               name : "yesButton",
                               action : function(game) {}
                           },
                           {
                               name : "noButton",
                               action : function(game) {}
                           }
                           ]
            },
            "un-monde-feu-event" : {
                name : "un-monde-feu-event",
                text : "un-monde-feu-event",
                rarity : 10,
                unique : true,
                actions : [
                           {
                               name : "yesButton",
                               action : function(game) {}
                           },
                           {
                               name : "noButton",
                               action : function(game) {}
                           }
                           ]
            },
            "un-monde-glace-event" : {
                name : "un-monde-glace-event",
                text : "un-monde-glace-event",
                rarity : 10,
                unique : true,
                actions : [
                           {
                               name : "yesButton",
                               action : function(game) {}
                           },
                           {
                               name : "noButton",
                               action : function(game) {}
                           }
                           ]
            },
            "deux-monde-feu-glace-event" : {
                name : "deux-monde-feu-glace-event",
                text : "deux-monde-feu-glace-event",
                rarity : 10,
                unique : true,
                actions : [
                           {
                               name : "yesButton",
                               action : function(game) {}
                           },
                           {
                               name : "noButton",
                               action : function(game) {}
                           }
                           ]
            }
	};
	
	return {
		get : function(key) {
			var event = EmissairesEvents.get(key);
			if (!event) PeupleEvents.get(key);
			if (!event) PegreEvents.get(key);
			if (!event) BossEvents.get(key);
		    if (!event) event = data[key];
		    
		    return event;
		}
	};
});
