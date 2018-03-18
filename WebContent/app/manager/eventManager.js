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
			
			this.currentEvent = null;
			this.typeEvents = [];
			this.generalEvents = [];
		};
		
		this.loop = function() {
		    var totalEvents = this.typeEvents.concat(this.generalEvents);
		    if (totalEvents == 0) return;
		    
		    // Toute les secondes on a 1 chance sur 100 d'afficher un evenement
		    var rand = Utils.rand(0, 100);
		    if (rand == 0) {
		    	var randEvent;
		    	var limit = 0;
		    	while (!this.checkEvent(randEvent) && limit < 100) {
			        var randIndex = Utils.rand(0, totalEvents.length);
			        randEvent = Events.get(totalEvents[randIndex]);
			        limit++;
		    	}
		        
	            this.currentEvent = randEvent;
	            // Si l'evenement est unique, on l'ajoute à la liste  des evenements deja rencontrés
	            if (this.currentEvent.unique) this.uniquesEvent.push(this.currentEvent.name);
	            this.show();
		    }
		};
		
		/**
		 * Cette methode permet de verifier qu'une evenement est valable
		 */
		this.checkEvent = function(randEvent) {
			// Il ne peut pas être nulle
			if (!randEvent) return false;
			var isOk = true;
			
			// Si il est unique, il ne doit pas exister dans la liste des evenements deja rencontrés
			if (randEvent.unique) {
				isOk = this.uniquesEvent.indexOf(randEvent.name) < 0;
			}
			
			// Si il est rare, il faut tomber sur sa rareté
			if (randEvent.rarity) {
				isOk = Utils.rand(0, randEvent.rarity) == 0;
			}
			return isOk;
		};
		
		this.show = function() {
		    if (!this.currentEvent) return;
		    //this.parent.pause = true;
		    
		    var that = this;
		    
		    _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    text : that.Textes,
                    event : that.currentEvent
            };
            $(this.el).html(template(templateData));
            
            $(".popupEvent").show();
            
            this.makeEvents();
		};

		this.hide = function() {
		    this.parent.pause = false;
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
		    if (!events) return;
		    this.generalEvents = this.generalEvents.concat(events);
		};
		
		this.makeEvents = function() {
		    var that = this;
		    $(".choix li").click(function() {
		        var index = parseInt($(this).attr("index"));
		        that.currentEvent.actions[index].action(that.parent);
		        that.hide();
		    });
		};

		this.init(parent);
	};
});