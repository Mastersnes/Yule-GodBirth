'use strict';
define(["jquery"], function($){
	/**
	 * Si on refuse d'entendre les emissaires
	 */
	var data = {
			"refus-secheresse-event" : {
				name : "refus-secheresse-event",
			    text : "refus-secheresse-event",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
                         name : "pas-probleme",
                         action : function(game) {
                        	 game.pointManager.addPointsPercent({
                                 croyance : 0,
                                 illumination : 0,
                                 bien : 0,
                                 mal : 20
                              });
                        	 game.eventManager.addEvents(["demonfeu-1-event"]);
                        	 game.alertPopup("refus-secheresse-event-ko");
                         }
                     },
                     {
                         name : "enqueter",
                         action : function(game) {
                        	 game.eventManager.addEvents(["demonfeu-1-event"]);
                        	 game.alertPopup("refus-secheresse-event-ok", function() {
                        		 game.artefactsView.add("idole-feu");
                        	 });
                         }
                     }
			    ]
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		},
		list : function(key) {
			var names = [];
			for (var index in data) {
				var elmt = data[index];
				if (elmt)names.push(elmt.name);
			}
			
			return names;
		}
	};
});
