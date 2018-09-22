'use strict';
define(["jquery",
        "app/data/events/imbolc/demons-events",
        "app/data/events/imbolc/croisade-events",
        "app/data/events/imbolc/zombie-events",
        "app/data/events/imbolc/epreuve-events",
        ], function($, DemonsEvents, CroisadeEvents, ZombieEvents, EpreuveEvents){
	/**
	 * Si on refuse d'entendre les emissaires
	 */
	var data = {
			"refus-desert-event" : {
				name : "refus-desert-event",
			    text : "refus-desert-event",
			    rarity : 20,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "pasMonProbleme-button",
			             action : function(game) {
			            	 game.gainLoop({
                            	 croyance : 0,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 10
                             });
			            	 game.eventManager.addEvents(DemonsEvents.start());
			                 game.alertPopup("refus-desert-event-refus");
			             }
			         },
			         {
                         name : "refus-desert-event-enquete-button",
                         action : function(game) {
                        	 game.eventManager.addEvents(DemonsEvents.start());
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
			    starter : true,
				actions : [
				           {
				        	   name : "refus-sacrifice-event-recompense-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 20,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 20
				        		   });
				        		   game.eventManager.addEvents(CroisadeEvents.start());
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
				        			   mal : 20
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
				        			   mal : 20
				        		   });
				        		   game.eventManager.addEvents(CroisadeEvents.start());
				        		   game.alertPopup("refus-sacrifice-event-recompense");
				        	   }
				           }
				           ]
			},
			
			"refus-maladie-event" : {
				name : "refus-maladie-event",
				text : "refus-maladie-event",
				rarity : 30,
				unique : true,
			    starter : true,
				actions : [
				           {
				        	   name : "enquete-button",
				        	   action : function(game) {
				        		   game.eventManager.addEvents(ZombieEvents.start());
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
				        		   game.eventManager.addEvents(ZombieEvents.start());
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
				        			   mal : 20
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
				        		   game.eventManager.addEvents(ZombieEvents.start());
				        		   game.alertPopup("refus-maladie-event-laisser");
				        	   }
				           }
				           ]
			},
			
			"refus-question-event" : {
				name : "refus-question-event",
				text : "refus-question-event",
				rarity : 40,
				unique : true,
			    starter : true,
				actions : [
				           {
				        	   name : "ignore-button",
				        	   action : function(game) {
				        		   game.eventManager.rebellion++;
				        		   game.pointManager.addPointsPercent({
		                        		 croyance : -50,
		                        		 illumination : 0,
		                        		 bien : 0,
		                        		 mal : 0
		                        	 });
				        		   game.alertPopup("refus-question-event-ignore");
				        	   }
				           },
				           {
				        	   name : "refus-question-event-punir-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 30,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 20
				        		   });
				        		   game.eventManager.rebellion++;
				        		   game.alertPopup("refus-question-event-punir");
				        	   }
				           },
				           {
				        	   name : "refus-question-event-dementir-button",
				        	   action : function(game) {
				        		   game.eventManager.addEvents(EpreuveEvents.start());
				        		   game.alertPopup("refus-question-event-dementir");
				        	   }
				           }
				           ]
			},
	};
	
	return {
		get : function(key) {
			var event = DemonsEvents.get(key);
		    if (!event) event = CroisadeEvents.get(key);
		    if (!event) event = ZombieEvents.get(key);
		    if (!event) event = EpreuveEvents.get(key);
            if (!event) event = data[key];
            return event;
		},
		start : function(key) {
			var names = [];
			for (var index in data) {
				var elmt = data[index];
				if (elmt && elmt.starter) names.push(elmt.name);
			}
			
			return names;
		}
	};
});
