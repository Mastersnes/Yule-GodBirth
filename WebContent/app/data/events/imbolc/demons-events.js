'use strict';
define(["jquery"], function($){
	/**
	 * Demons
	 */
	var data = {
			"demons-start-event" : {
				name : "demons-start-event",
			    text : "demons-start-event",
			    rarity : 50,
			    unique : true,
			    actions : [
			         {
			             name : "continuerButton",
			             action : function(game) {
			            	var names = [];
			     			for (var index in data) {
			     				var elmt = data[index];
			     				if (elmt && elmt.name != this.name && elmt.starter)names.push(elmt.name);
			     			}
			            	
			     			game.eventManager.addEvents(names);
			     			game.alertPopup("demons-start-event-2");
			             }
			         }			    
			    ]
			},
			
			"demons-attaque-event" : {
				name : "demons-attaque-event",
			    text : "demons-attaque-event",
			    rarity : 35,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "acceptButton",
			             action : function(game) {
			            	 game.gainLoop({
                            	 croyance : 30,
                            	 illumination : 20,
                            	 bien : 0,
                            	 mal : 0
                             }, "quete");
			            	 game.eventManager.addEvents(["demons-attaque-event-2"]);
			                 game.alertPopup("demons-attaque-event-accept");
			             }
			         },
			         {
			             name : "refusButton",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
                        		 croyance : -50,
                        		 illumination : 0,
                        		 bien : 0,
                        		 mal : 0
                        	 }, "quete");
			            	 game.eventManager.rebellion++;
			                 game.alertPopup("demons-attaque-event-refus");
			             }
			         }
			    ]
			},
			"demons-attaque-event-2" : {
				name : "demons-attaque-event-2",
				text : "demons-attaque-event-2",
				rarity : 30,
				unique : true,
				actions : [
				           {
				        	   name : "demons-attaque-event-torture-button",
				        	   action : function(game) {
				        		   game.pointManager.addPointsPercent({
		                        		 croyance : -50,
		                        		 illumination : 0,
		                        		 bien : 0,
		                        		 mal : 0
		                        	 }, "quete");
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 20
				        		   }, "quete");
				        		   game.alertPopup("demons-attaque-event-torture", function() {
				        			   game.alertPopup("demons-attaque-event-torture-2");
				        		   });
				        	   }
				           },
				           {
				        	   name : "le-tuer-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 20,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 20
				        		   }, "quete");
				        		   game.alertPopup("demons-attaque-event-tuer");
				        	   }
				           },
				           {
				        	   name : "laisser-partir-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 20,
				        			   bien : 20,
				        			   mal : 0
				        		   }, "quete");
				        		   game.eventManager.rebellion++;
				        		   game.alertPopup("demons-attaque-event-partir");
				        	   }
				           }
				           ]
			},
			
			"demons-village-event" : {
				name : "demons-village-event",
			    text : "demons-village-event",
			    rarity : 40,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "demons-village-event-detruire-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
                        		 croyance : -50,
                        		 illumination : -30,
                        		 bien : 0,
                        		 mal : 0
                        	 }, "quete");
			            	 game.gainLoop({
                            	 croyance : 0,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 30
                             }, "quete");
			                 game.alertPopup("demons-village-event-detruire");
			             }
			         },
			         {
			             name : "demons-village-event-tuer-button",
			             action : function(game) {
			            	 game.gainLoop({
                            	 croyance : 30,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 30
                             }, "quete");
			                 game.alertPopup("demons-village-event-tuer");
			             }
			         },
			         {
			             name : "demons-village-event-stop-button",
			             action : function(game) {
			            	 game.gainLoop({
                            	 croyance : 30,
                            	 illumination : 30,
                            	 bien : 40,
                            	 mal : 0
                             }, "quete");
			                 game.alertPopup("demons-village-event-stop", function() {
			                	 game.artefactsView.remove("torque");
			                 });
			             },
			             conditions : [{name : "torque"}]
			         }
			    ]
			},
			
			"demons-desert-event" : {
				name : "demons-desert-event",
			    text : "demons-desert-event",
			    rarity : 40,
			    unique : true,
			    starter : true,
			    actions : [
			         {
			             name : "demons-desert-event-vie-button",
			             action : function(game) {
			            	 game.gainLoop({
                            	 croyance : 30,
                            	 illumination : 30,
                            	 bien : 20,
                            	 mal : 0
                             }, "quete");
			                 game.alertPopup("demons-desert-event-vie", function() {
			                	 game.artefactsView.remove("idole-feu");
			                 });
			             },
			             conditions : [{name : "idole-feu"}]
			         },
			         {
			             name : "demons-desert-event-innonder-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
                        		 croyance : -80,
                        		 illumination : -50,
                        		 bien : 0,
                        		 mal : 0
                        	 }, "quete");
			            	 game.gainLoop({
                            	 croyance : 0,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 20
                             }, "quete");
			            	 game.alertPopup("demons-desert-event-innonder");
			             }
			         },
			         {
			             name : "ignore-button",
			             action : function(game) {
			            	 game.pointManager.addPointsPercent({
                        		 croyance : -80,
                        		 illumination : -80,
                        		 bien : 0,
                        		 mal : 0
                        	 }, "quete");
			            	 game.gainLoop({
                            	 croyance : 0,
                            	 illumination : 0,
                            	 bien : 0,
                            	 mal : 30
                             }, "quete");
			                 game.alertPopup("demons-desert-event-laisser");
			             }
			         }
			    ]
			},
	};
	
	return {
		get : function(key) {
			return data[key];
		},
		start : function(key) {
			return ["demons-start-event"];
		}
	};
});
