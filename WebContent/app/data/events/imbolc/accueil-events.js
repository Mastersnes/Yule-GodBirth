'use strict';
define(["jquery"], function($){
	/**
	 * Question des emissaires
	 */
	var data = {
			"entrer-pluie-event" : {
				name : "entrer-pluie-event",
			    text : "entrer-pluie-event",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
                             game.pointManager.addPointsPercent({
                                croyance : 10,
                                illumination : 0,
                                bien : 10,
                                mal : 0
                             });
                             
			                 game.alertPopup("entrer-pluie-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.pointManager.addPointsPercent({
                                croyance : 0,
                                illumination : 0,
                                bien : 0,
                                mal : 15
                             });
                             game.eventManager.rebellion++;
                             game.alertPopup("entrer-pluie-event-ko");
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
