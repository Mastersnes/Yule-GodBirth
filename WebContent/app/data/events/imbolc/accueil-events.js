'use strict';
define(["jquery","app/utils/utils"], function($, Utils){
	/**
	 * Question des emissaires
	 */
	var data = {
			"accueil-pluie-event" : {
				name : "accueil-pluie-event",
			    text : "accueil-pluie-event",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
                             game.gainLoop({
                            	 croyance : 10,
                            	 illumination : 5,
                            	 bien : 10,
                            	 mal : 0
                             });
                             
			                 game.alertPopup("accueil-pluie-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.gainLoop({
                            	 croyance : 0,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 10
                             });
                        	 game.eventManager.rebellion++;
                             game.alertPopup("accueil-pluie-event-ko");
                         }
                     }
			    ]
			},
			
			"accueil-sacrifice-event" : {
				name : "accueil-sacrifice-event",
			    text : "accueil-sacrifice-event",
			    rarity : 15,
			    unique : true,
			    actions : [
			         {
			             name : "acceptButton",
			             action : function(game) {
                             game.gainLoop({
                            	 croyance : 10,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 20
                             });
                             
                             game.eventManager.addEvents(CroisadeEvents.list());
			                 game.alertPopup("accueil-sacrifice-event-accept");
			             }
			         },
			         {
                         name : "refusButton",
                         action : function(game) {
                        	 game.gainLoop({
                            	 croyance : 0,
                            	 illumination : 10,
                            	 bien : 20,
                            	 mal : 0
                             });
                        	 game.eventManager.rebellion++;
                             game.alertPopup("accueil-sacrifice-event-refus");
                         }
                     },
			         {
                         name : "accueil-sacrifice-event-tuer-pretre-button",
                         action : function(game) {
                        	 game.gainLoop({
                            	 croyance : 20,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 30
                             });
                        	 game.eventManager.addEvents(CroisadeEvents.list());
                             game.alertPopup("accueil-sacrifice-event-tuer-pretre");
                         }
                     }
			    ]
			},
			
			"accueil-blessure-event" : {
				name : "accueil-blessure-event",
			    text : "accueil-blessure-event",
			    rarity : 30,
			    unique : false,
			    actions : [
			         {
			             name : "accueil-blessure-event-ok-button",
			             action : function(game) {
                             if (Utils.rand(0, 10) < 5) {
				            	 game.gainLoop({
	                            	 croyance : 0,
	                            	 illumination : 0,
	                            	 bien : 10,
	                            	 mal : 0
	                             });
				                 game.alertPopup("accueil-blessure-event-ok");
                             }else {
                            	 game.gainLoop({
                                	 croyance : 5,
                                	 illumination : 5,
                                	 bien : 20,
                                	 mal : 0
                                 });
    			                 game.alertPopup("accueil-blessure2-event-ok");
                             }
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 if (Utils.rand(0, 10) < 5) {
	                        	 game.gainLoop({
	                            	 croyance : 0,
	                            	 illumination : 0,
	                            	 bien : 0,
	                            	 mal : 10
	                             });
                        	 }else {
	                        	 game.gainLoop({
	                            	 croyance : 0,
	                            	 illumination : 0,
	                            	 bien : 0,
	                            	 mal : 20
	                             });
                        	 }
                        	 game.eventManager.rebellion++;
                             game.alertPopup("accueil-blessure-event-ko");
                         }
                     }
			    ]
			},
			
			"accueil-riche-event" : {
				name : "accueil-riche-event",
			    text : "accueil-riche-event",
			    rarity : 25,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			            	 game.eventManager.addEvents(TyranieEvents.list());
			                 game.alertPopup("accueil-riche-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             game.alertPopup("accueil-riche-event-ko");
                             game.eventManager.showNow("accueil-riche-event-2");
                         }
                     }
			    ]
			},
			"accueil-riche-event-2" : {
				name : "accueil-riche-event-2",
				text : "accueil-riche-event-2",
				rarity : -1,
				unique : true,
				actions : [
				           {
				        	   name : "accueil-riche-event-tuer-button",
				        	   action : function(game) {
				        		   game.gainLoop({
		                            	 croyance : 0,
		                            	 illumination : 0,
		                            	 bien : 0,
		                            	 mal : 20
		                             });
				        		   game.eventManager.rebellion++;
				        		   game.alertPopup("accueil-riche-event-tuer");
				        	   }
				           },
				           {
				        	   name : "accueil-riche-event-partir-button",
				        	   action : function(game) {
				        		   game.gainLoop({
		                            	 croyance : 0,
		                            	 illumination : 25,
		                            	 bien : 20,
		                            	 mal : 0
		                             });
				        		   game.alertPopup("accueil-riche-event-partir");
				        	   }
				           }
				           ]
			},
			
			"accueil-question-event" : {
				name : "accueil-question-event",
			    text : "accueil-question-event",
			    rarity : 40,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			            	 game.eventManager.addEvents(EpreuveEvents.list());
			                 game.alertPopup("accueil-question-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.pointManager.addPointsPercent({
                        		 croyance : -50,
                        		 illumination : -20,
                        		 bien : 0,
                        		 mal : 0
                        	 });
                        	 game.eventManager.rebellion++;
                        	 game.alertPopup("accueil-question-event-ko");
                         }
                     }
			    ]
			},
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
