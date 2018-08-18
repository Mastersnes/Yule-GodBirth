'use strict';
define(["jquery"], function($){
	/**
	 * Si on refuse d'entendre les emissaires
	 */
	var data = {
			"refus-desert-event" : {
				name : "refus-desert-event",
			    text : "refus-desert-event",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "refus-desert-event-refus-button",
			             action : function(game) {
			            	 game.gainLoop({
                            	 croyance : 0,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 15
                             });
			            	 game.eventManager.addEvents(DemonsFeuEvents.list());
			                 game.alertPopup("refus-desert-event-refus");
			             }
			         },
			         {
                         name : "refus-desert-event-enquete-button",
                         action : function(game) {
                        	 game.eventManager.addEvents(DemonsFeuEvents.list());
                        	 game.alertPopup("refus-desert-event-enquete", function() {
                        		 game.artefactsView.add("idole-feu");
                        	 });
                         }
                     }
			    ]
			},

			"refus-sacrifice-event" : {
				name : "refus-sacrifice-event",
				text : "refus-sacrifice-event",
				rarity : 25,
				unique : true,
				actions : [
				           {
				        	   name : "refus-sacrifice-event-recompense-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 15,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 25
				        		   });
				        		   game.eventManager.addEvents(CroisadeEvents.list());
				        		   game.alertPopup("refus-sacrifice-event-recompense");
				        	   }
				           },
				           {
				        	   name : "refus-sacrifice-event-arreter-button",
				        	   action : function(game) {
				        		   game.eventManager.showNow("refus-sacrifice-event-2");
				        	   }
				           }
				           ]
			},
			"refus-sacrifice-event-2" : {
				name : "refus-sacrifice-event-2",
				text : "refus-sacrifice-event-2",
				rarity : -1,
				unique : true,
				actions : [
				           {
				        	   name : "refus-sacrifice-event-tuer-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 30
				        		   });
				        		   game.alertPopup("refus-sacrifice-event-tuer");
				        	   }
				           },
				           {
				        	   name : "refus-sacrifice-event-seisme-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 20,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 0
				        		   });
				        		   game.alertPopup("refus-sacrifice-event-seisme");
				        	   },
				        	   conditions : [
	        					    {
	        					    	name : "terre",
	        					    	level : 1
	        					    }
	        				   ]
				           },
				           {
				        	   name : "refus-sacrifice-event-recompense-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 15,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 25
				        		   });
				        		   game.eventManager.addEvents(CroisadeEvents.list());
				        		   game.alertPopup("refus-sacrifice-event-recompense");
				        	   }
				           }
				           ]
			},
			
			"refus-maladie-event" : {
				name : "refus-maladie-event",
				text : "refus-maladie-event",
				rarity : 40,
				unique : true,
				actions : [
				           {
				        	   name : "enquete-button",
				        	   action : function(game) {
				        		   game.eventManager.addEvents(ZombieEvents.list());
				        		   game.alertPopup("refus-maladie-event-enquete", function() {
				        			   game.artefactsView.add("idole-mort");
				        		   });
				        	   }
				           },
				           {
				        	   name : "refus-maladie-event-bruler-button",
				        	   action : function(game) {
				        		   game.eventManager.showNow("refus-maladie-event-2");
				        	   }
				           },
				           {
				        	   name : "refus-maladie-event-laisser-button",
				        	   action : function(game) {
				        		   game.eventManager.addEvents(ZombieEvents.list());
				        		   game.alertPopup("refus-maladie-event-laisser");
				        	   }
				           }
				           ]
			},
			"refus-maladie-event-2" : {
				name : "refus-maladie-event-2",
				text : "refus-maladie-event-2",
				rarity : -1,
				unique : true,
				actions : [
				           {
				        	   name : "refus-maladie-event-bruler-2-button",
				        	   action : function(game) {
				        		   game.pointManager.addPointsPercent({
		                        		 croyance : -50,
		                        		 illumination : -30,
		                        		 bien : 0,
		                        		 mal : 0
		                        	 });
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 30
				        		   });
				        		   game.alertPopup("refus-maladie-event-bruler");
				        	   }
				           },
				           {
				        	   name : "refus-maladie-event-bruler-malade-button",
				        	   action : function(game) {
				        		   game.eventManager.rebellion++;
				        		   game.alertPopup("refus-maladie-event-bruler-malade");
				        	   }
				           },
				           {
				        	   name : "refus-maladie-event-changer-button",
				        	   action : function(game) {
				        		   game.eventManager.rebellion++;
				        		   game.pointManager.addPointsPercent({
		                        		 croyance : -30,
		                        		 illumination : 0,
		                        		 bien : 0,
		                        		 mal : 0
		                        	 });
				        		   game.eventManager.addEvents(ZombieEvents.list());
				        		   game.alertPopup("refus-maladie-event-changer");
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
