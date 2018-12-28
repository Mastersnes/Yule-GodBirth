/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/space/events.html",
        "app/data/events"
        ],
function($, _, Utils, page, Events) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "#popupEvent";
			this.parent = parent;
			this.Textes = parent.Textes;
			this.saveManager = parent.saveManager;
			this.textManager = parent.textManager;
			this.mediatheque = parent.mediatheque;
			
			this.currentEvent = null;
			this.eventOpen = false;
			this.timer = 0;
			this.toShowNow = null;
			
			this.typeEvents = [];
			this.generalEvents = this.saveManager.load("generalEvents");
			this.uniquesEvents = this.saveManager.load("uniquesEvents");
			this.rebellion = this.saveManager.load("rebellion");
			this.epidemie = this.saveManager.load("epidemie");
			this.sagesse = this.saveManager.load("sagesse");
		};
		
		this.loop = function() {
			// Si la rebellion est trop forte, on ajoute l'evenement
			if (this.rebellion >= 100) this.addEvents(["rebellion-start-event"]);
			
			// Si l'epidemie est trop forte, on ajoute l'evenement
			if (this.epidemie >= 2) this.addEvents(["zombie-step-event-2"]);
			if (this.epidemie >= 10) this.addEvents(["zombie-step-event-3"]);
			
			//Si il y a deja un evenement en cours
		    if (this.currentEvent) return this.checkTimer();

		    //Si la popup est deja ouverte, on stop tout
			if (this.eventOpen) return;
		    
			// Si on a une popup info ouverte
			if (this.parent.alertOpen) return;
			
			// Si le grand tout n'est pas encore au level 6
			var ameliorationView = parent.spaceView.ameliorationView;
			var grandToutLevel = 0;
			if (ameliorationView) {
				grandToutLevel = ameliorationView.Items.get("grandTout");
			}
			if (grandToutLevel < 6) return;
			
			// Si un evenement doit être affiché en priorité
			if (this.toShowNow) {
				this.currentEvent = Events.get(this.toShowNow);
				this.toShowNow = null;
				this.show();
				return;
			}
			
			// Sinon, on cherche aleatoirement un evenement
		    var totalEvents = this.typeEvents.concat(this.generalEvents);
		    /**
		     * On retire les evenements uniques deja eu lieu du total des evenements pour ne pas poluer le choix
		     */
		    for (var index in this.uniquesEvents) {
		    	var eventName = this.uniquesEvents[index];
		    	var eventIndex = totalEvents.indexOf(eventName);
		    	totalEvents.splice(eventIndex, 1);
		    }
		    if (totalEvents.length == 0) return;
		    
	        var randIndex = Utils.rand(0, totalEvents.length);
	        var randEvent = Events.get(totalEvents[randIndex]);
	        
	    	if (this.checkEvent(randEvent)) this.currentEvent = randEvent;
            if (this.currentEvent) {
            	this.showTimer();
            }
		};
		
		/**
		 * Si il y a un evenement en cours, il ne reste que x secondes
		 */
		this.checkTimer = function() {
			if (this.eventOpen) {
				return;
			}
			
			var that = this;
			this.timer++;
			var timerMax = 5;
			if (this.currentEvent.timer) timerMax = this.currentEvent;
			if (this.timer > timerMax && timerMax != -1) {
				$(".scene #event-timer").removeClass("start");
				var lastCurrentEvent = this.currentEvent;
				$(".scene #event-timer").fadeOut("fast", function() {
					if (that.currentEvent == lastCurrentEvent) that.currentEvent = null;
				});
			}
		};
		
		/**
		 * Affiche un sablier permettant d'afficher l'event en cours
		 */
		this.showTimer = function() {
			this.timer = 0;
			$(".scene .event-timer-new").fadeIn("fast", function() {
				$(".scene .event-timer-new").fadeOut(1500);
			});
			$(".scene #event-timer").fadeIn("fast", function() {
				$(".scene #event-timer").addClass("start");
			});
			this.mediatheque.playSound("sablier.ogg");
		};
		
		/**
		 * Cette methode permet de verifier qu'une evenement est valable
		 */
		this.checkEvent = function(randEvent) {
			// Il ne peut pas être nulle
			if (!randEvent) return false;
			// Ca ne doit pas etre le meme que precedemment
			if (this.previousEvent == randEvent) return false;
			
			// Si il est unique, il ne doit pas exister dans la liste des evenements deja rencontrés
			if (randEvent.unique && this.uniquesEvents.indexOf(randEvent.name) > -1)
				return false;
			
			// Si il est rare, il faut tomber sur sa rareté
			var isOk = true;
			var rarity = randEvent.rarity;
			if (rarity == 0) return isOk;
			if (!rarity) rarity = 100;
			
			var result = Utils.rand(0, rarity);
			isOk = result == 0;
			
			return isOk;
		};
		
		this.show = function() {
			if (!this.currentEvent) return;
		    this.eventOpen = true;
		    
		    this.parent.spaceView.ameliorationView.descriptionView.close();
		    this.parent.autelView.pierresView.detailView.close();
		    this.parent.queteView.detailView.close();
		    
		    var that = this;
		    
		    _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    me : this,
                    text : that.Textes,
                    event : that.currentEvent
            };
            $(this.el).html(template(templateData));
            
            $(".popupEvent").show();
            
            this.makeEvents();
		};

		this.hide = function() {
		    if (this.currentEvent.unique) {
                this.uniquesEvents.push(this.currentEvent.name);
                this.saveManager.save("uniquesEvents", this.uniquesEvents);
            }
		    this.previousEvent = this.currentEvent;
			this.currentEvent = null;
			this.eventOpen = false;
		    $(".popupEvent").hide();
		};
		
		/**
		 * Definie les evenements lié au type de dieu
		 */
		this.setTypeEvents = function(events) {
		    if (!events) return;
		    this.typeEvents = events.typeEvents;
		    this.addEvents(events.newEvents);
		};

		/**
		 * Ajoute des evenements à la liste des evenements generaux
		 */
		this.addEvents = function(events) {
		    if (!events || events.lenght == 0) return false;
		    var oneEventAdded = false;
		    for (var indexEvent in events) {
		    	var eventToAdd = events[indexEvent];
		    	if (!this.contains(eventToAdd)) {
		    		oneEventAdded = true;
		    		this.generalEvents.push(eventToAdd);
		    	}
		    }
		    this.saveManager.save("generalEvents", this.generalEvents);
		    return oneEventAdded;
		};
		
		/**
		 * Permet de prioriser un evenement
		 */
		this.showNow = function(event) {
			this.toShowNow = event;
		};
		
		this.makeEvents = function() {
		    var that = this;
		    $(".choix li").click(function() {
		        var index = parseInt($(this).attr("index"));
		        if (that.currentEvent) that.currentEvent.actions[index].action(that.parent);
		        else console.log("Erreur l'evenement est null");
		        that.hide();
		    });
		};
		
		this.makeGeneralEvents = function() {
			var that = this;
			$(".scene #event-timer").click(function() {
				that.parent.didactitielManager.data.indication.event = false;
				$(".scene #event-timer").removeClass("start");
				$(".scene #event-timer").fadeOut("fast");
				that.show();
		    });
		};
		
		this.contains = function(event) {
			return (this.generalEvents.indexOf(event) > -1) || (this.uniquesEvents.indexOf(event) > -1);
		};
		
		this.removeEvent = function(event) {
		    this.generalEvents.splice(this.generalEvents.indexOf(event), 1);
		};
		
		/**
		 * Verifie si une action doit apparaitre et etre proposée
		 */
		this.checkActionAffichable = function(action) {
			var conditions = action.conditions;
			if (!conditions || conditions.length == 0) return true;
            
            var ameliorationView = parent.spaceView.ameliorationView;
            
            for (var index in conditions) {
                var condition = conditions[index];
                
                var itemRestrict = ameliorationView.Items.get(condition.name);
                // Si la condition porte sur une amelioration
                if (itemRestrict && itemRestrict.level < condition.level) return false;
                // Sinon, elle porte sur un artefact
                else if (!parent.artefactsView.checkHad(condition.name)) return false;
            }
            return true;
        };

		this.init(parent);
	};
});