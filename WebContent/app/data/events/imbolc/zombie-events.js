'use strict';
define(["jquery"], function($){
	/**
	 * Zombie
	 */
	var data = {
			/**
			 * Niveau 1 de l'epidemie
			 */
			"zombie-start-event" : {
				name : "zombie-start-event",
			    text : "zombie-start-event",
			    rarity : 40,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	var names = [];
			     			for (var index in data) {
			     				var elmt = data[index];
			     				if (elmt && elmt.name != this.name && elmt.epidemie == 1)names.push(elmt.name);
			     			}
			            	
			     			game.eventManager.addEvents(names);
			     			game.alertPopup("zombie-start-event-2");
			             }
			         }			    
			    ]
			},

			"zombie-fou-event" : {
				name : "zombie-fou-event",
				text : "zombie-fou-event",
				rarity : 30,
				unique : true,
				epidemie : 1,
				actions : [
				           {
				        	   name : "pasMonProbleme-button",
				        	   action : function(game) {
				        		   game.eventManager.epidemie++;
				        		   game.alertPopup("zombie-fou-event-no");
				        	   }
				           },
				           {
				        	   name : "le-tuer-button",
				        	   action : function(game) {
				        		   game.pointManager.addPointsPercent({
		                        		 croyance : -30,
		                        		 illumination : 0,
		                        		 bien : 0,
		                        		 mal : 0
		                        	 }, "quete");
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 10
				        		   }, "quete");
				        		   game.alertPopup("zombie-fou-event-tuer");
				        	   }
				           }
				           ]
			},

			"zombie-taverne-event" : {
				name : "zombie-taverne-event",
				text : "zombie-taverne-event",
				rarity : 40,
				unique : true,
				epidemie : 1,
				actions : [
				           {
				        	   name : "pasMonProbleme-button",
				        	   action : function(game) {
				        		   game.eventManager.epidemie+=3;
				        		   game.alertPopup("zombie-taverne-event-no");
				        	   }
				           },
				           {
				        	   name : "zombie-taverne-event-boire-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 20,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 0
				        		   }, "quete");
				        		   game.eventManager.epidemie+=5;
				        		   game.alertPopup("zombie-taverne-event-boire");
				        	   }
				           },
				           {
				        	   name : "enfermer-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 5,
				        			   mal : 0
				        		   }, "quete");
				        		   game.eventManager.epidemie++;
				        		   game.alertPopup("zombie-taverne-event-enferme");
				        	   }
				           },
				           {
				        	   name : "les-tuer-button",
				        	   action : function(game) {
				        		   game.pointManager.addPointsPercent({
		                        		 croyance : -20,
		                        		 illumination : -10,
		                        		 bien : 0,
		                        		 mal : 0
		                        	 }, "quete");
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 10
				        		   }, "quete");
				        		   game.alertPopup("zombie-taverne-event-tuer");
				        	   }
				           }
				           ]
			},

			"zombie-enfant-event" : {
				name : "zombie-enfant-event",
				text : "zombie-enfant-event",
				rarity : 30,
				unique : true,
				epidemie : 1,
				actions : [
				           {
				        	   name : "noButton",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 10
				        		   }, "quete");
				        		   game.eventManager.epidemie++;
				        		   game.alertPopup("zombie-enfant-event-no");
				        	   }
				           },
				           {
				        	   name : "yesButton",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 20,
				        			   illumination : 0,
				        			   bien : 10,
				        			   mal : 0
				        		   }, "quete");
				        		   game.alertPopup("zombie-enfant-event-yes");
				        	   }
				           }
				           ]
			},

			"zombie-blessure-event" : {
				name : "zombie-blessure-event",
				text : "zombie-blessure-event",
				rarity : 40,
				unique : false,
				epidemie : 1,
				actions : [
				           {
				        	   name : "noButton",
				        	   action : function(game) {
				        		   game.eventManager.epidemie++;
				        		   game.alertPopup("accueil-blessure-event-ko");
				        	   }
				           },
				           {
				        	   name : "accueil-blessure-event-ok-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 10,
				        			   mal : 0
				        		   }, "quete");
				        		   game.alertPopup("accueil-blessure2-event-ok");
				        	   }
				           }
				           ]
			},
			
			/**
			 * Niveau 2 de l'epidemie
			 */
			"zombie-step-event-2" : {
				name : "zombie-step-event-2",
			    text : "zombie-step-event-2",
			    rarity : 30,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	var names = [];
			     			for (var index in data) {
			     				var elmt = data[index];
			     				if (elmt && elmt.name != this.name && elmt.epidemie == 2)names.push(elmt.name);
			     			}
			            	
			     			game.eventManager.addEvents(names);
			             }
			         }			    
			    ]
			},

			"zombie-groupe-event" : {
				name : "zombie-groupe-event",
				text : "zombie-groupe-event",
				rarity : 35,
				unique : true,
				epidemie : 2,
				actions : [
				           {
				        	   name : "enfermer-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 20,
				        			   mal : 0
				        		   }, "quete");
				        		   game.eventManager.epidemie+=3;
				        		   game.alertPopup("zombie-groupe-event-enfermer");
				        	   }
				           },
				           {
				        	   name : "les-tuer-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 20
				        		   }, "quete");
				        		   game.alertPopup("zombie-groupe-event-tuer");
				        	   }
				           }
				           ]
			},

			"zombie-cata-event" : {
				name : "zombie-cata-event",
				text : "zombie-cata-event",
				rarity : 40,
				unique : true,
				epidemie : 2,
				actions : [
				           {
				        	   name : "pasMonProbleme-button",
				        	   action : function(game) {
				        		   game.eventManager.epidemie+=5;
				        		   game.alertPopup("zombie-cata-event-no");
				        	   }
				           },
				           {
				        	   name : "zombie-groupe-event-tuer-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 20
				        		   }, "quete");
				        		   game.pointManager.addPointsPercent({
		                        		 croyance : 0,
		                        		 illumination : -20,
		                        		 bien : 0,
		                        		 mal : 0
		                        	 }, "quete");
				        		   game.alertPopup("zombie-cata-event-tuer");
				        	   }
				           }
				           ]
			},

			"zombie-guerre-event" : {
				name : "zombie-guerre-event",
				text : "zombie-guerre-event",
				rarity : 40,
				unique : true,
				epidemie : 2,
				actions : [
				           {
				        	   name : "pasMonProbleme-button",
				        	   action : function(game) {
				        		   game.eventManager.epidemie+=5;
				        		   game.alertPopup("zombie-guerre-event-no");
				        	   }
				           },
				           {
				        	   name : "les-arreter-button",
				        	   action : function(game) {
				        		   game.eventManager.epidemie+=2;
				        		   game.alertPopup("zombie-guerre-event-arreter");
				        	   }
				           },
				           {
				        	   name : "zombie-groupe-event-tuer-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 20
				        		   }, "quete");
				        		   game.pointManager.addPointsPercent({
		                        		 croyance : -30,
		                        		 illumination : -20,
		                        		 bien : 0,
		                        		 mal : 0
		                        	 }, "quete");
				        		   game.alertPopup("zombie-guerre-event-tuer");
				        	   }
				           }
				           ]
			},

			/**
			 * Niveau 3 de l'epidemie
			 * Apocalypse
			 */
			"zombie-step-event-3" : {
				name : "zombie-step-event-3",
				text : "zombie-step-event-3",
				rarity : 30,
				unique : true,
				actions : [
				           {
				        	   name : "laisser-tomber-button",
				        	   action : function(game) {
				        		   game.alertPopup("zombie-step-event-3-laisser");
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 50
				        		   }, "quete");
				        	   }
				           },
				           {
				        	   name : "zombie-step-event-3-bruler-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 30
				        		   }, "quete");
				        		   game.pointManager.addPointsPercent({
				        			   croyance : -100,
				        			   illumination : -100,
				        			   bien : 0,
				        			   mal : 0
				        		   }, "quete");
				        		   game.alertPopup("zombie-step-event-3-bruler");
				        	   }
				           },
				           {
				        	   name : "zombie-step-event-3-invoquer-button",
				        	   action : function(game) {
				        		   game.pointManager.addPointsPercent({
				        			   croyance : -100,
				        			   illumination : -100,
				        			   bien : 0,
				        			   mal : 0
				        		   }, "quete");
				        		   game.alertPopup("zombie-step-event-3-invoquer", function() {
				        			   game.artefactsView.remove("idole-mort");
				        			   
				        			   for (var index in data) {
						     				var elmt = data[index];
						     				if (elmt) {
						     					game.eventManager.epidemie = 0;
						     					game.eventManager.removeEvent(elmt.name);
						     				}
						     			}
				        		   });
				        	   },
				        	   conditions : [{name : "idole-mort"}]
				           }
				           ]
			},
	};
	
	return {
		get : function(key) {
			return data[key];
		},
		start : function(key) {
			return ["zombie-start-event"];
		}
	};
});
