'use strict';
define(["jquery",
        "app/data/events/ostara/demi-dieu-events"], function($, DemiDieuEvents){
	/**
	 * Tyrannie
	 */
	var data = {
			"tyrannie-start-event" : {
				name : "tyrannie-start-event",
			    text : "tyrannie-start-event",
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
			     			game.alertPopup("tyrannie-start-event-2");
			             }
			         }			    
			    ]
			},

			"tyrannie-soeur-event" : {
				name : "tyrannie-soeur-event",
				text : "tyrannie-soeur-event",
				rarity : 40,
				unique : true,
				starter : true,
				actions : [
				           {
				        	   name : "acceptButton",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 30,
				        			   illumination : 0,
				        			   bien : 20,
				        			   mal : 0
				        		   }, "quete");
				        		   game.alertPopup("tyrannie-soeur-event-accept");
				        	   }
				           },			    
				           {
				        	   name : "refusButton",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 20
				        		   }, "quete");
				        		   game.eventManager.rebellion++;
				        		   game.alertPopup("tyrannie-soeur-event-refus");
				        	   }
				           },			    
				           ]
			},

			"tyrannie-fete-event" : {
				name : "tyrannie-fete-event",
				text : "tyrannie-fete-event",
				rarity : 40,
				unique : true,
				starter : true,
				actions : [
				           {
				        	   name : "tyrannie-fete-event-participe-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 30,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 0
				        		   }, "quete");
				        		   game.pointManager.addPointsPercent({
		                        		 croyance : 0,
		                        		 illumination : -30,
		                        		 bien : 0,
		                        		 mal : 0
		                        	 }, "quete");
				        		   game.alertPopup("tyrannie-fete-event-participe");
				        		   game.eventManager.addEvents(DemiDieuEvents.start());
				        	   }
				           },
				           {
				        	   name : "tyrannie-fete-event-nonparticipe-button",
				        	   action : function(game) {
				        		   game.eventManager.rebellion++;
				        		   game.alertPopup("tyrannie-fete-event-nonparticipe");
				        	   }
				           },
				           {
				        	   name : "tyrannie-fete-event-annule-button",
				        	   action : function(game) {
				        		   game.eventManager.rebellion++;
				        		   game.pointManager.addPointsPercent({
		                        		 croyance : -20,
		                        		 illumination : 0,
		                        		 bien : 0,
		                        		 mal : 0
		                        	 }, "quete");
				        		   game.alertPopup("tyrannie-fete-event-annule");
				        	   }
				           },
				           {
				        	   name : "tyrannie-fete-event-boire-button",
				        	   action : function(game) {
				        		   game.eventManager.rebellion++;
				        		   game.gainLoop({
				        			   croyance : 30,
				        			   illumination : 30,
				        			   bien : 0,
				        			   mal : 20
				        		   }, "quete");
				        		   game.eventManager.addEvents(DemiDieuEvents.start());
				        		   game.alertPopup("tyrannie-fete-event-boire", function() {
				        			   game.artefactsView.remove("corne-abondance");
				        		   });
				        	   },
				        	   conditions : [{name : "corne-abondance"}]
				           }
				           ]
			},

			"tyrannie-esclave-event" : {
				name : "tyrannie-esclave-event",
				text : "tyrannie-esclave-event",
				rarity : 50,
				unique : true,
				starter : true,
				actions : [
				           {
				        	   name : "tyrannie-esclave-event-encourage-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 30,
				        			   illumination : 0,
				        			   bien : 20,
				        			   mal : 0
				        		   }, "quete");
				        		   game.eventManager.rebellion++;
				        		   game.alertPopup("tyrannie-esclave-event-encourage");
				        	   }
				           },
				           {
				        	   name : "tyrannie-esclave-event-taire-button",
				        	   action : function(game) {
				        		   game.gainLoop({
				        			   croyance : 0,
				        			   illumination : 0,
				        			   bien : 0,
				        			   mal : 20
				        		   }, "quete");
				        		   game.alertPopup("tyrannie-esclave-event-taire");
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
			return ["tyrannie-start-event"];
		}
	};
});
