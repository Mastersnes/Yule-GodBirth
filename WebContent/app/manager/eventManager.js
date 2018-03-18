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
			this.uniquesEvent = [];
		};
		
		this.loop = function() {
		    var totalEvents = this.typeEvents.concat(this.generalEvents);
		    /**
		     * On retire les evenements uniques deja eu lieu du total des evenements pour ne pas poluer le choix
		     */
		    for (var index in this.uniquesEvent) {
		    	var eventName = this.uniquesEvent[index];
		    	var eventIndex = totalEvents.indexOf(eventName);
		    	totalEvents.splice(eventIndex, 1);
		    }
		    if (totalEvents.length == 0) return;
		    
	        var randIndex = Utils.rand(0, totalEvents.length);
	        var randEvent = Events.get(totalEvents[randIndex]);
	        
	    	if (this.checkEvent(randEvent)) this.currentEvent = randEvent;
            // Si l'evenement est unique, on l'ajoute à la liste  des evenements deja rencontrés
            if (this.currentEvent) {
            	if (this.currentEvent.unique) this.uniquesEvent.push(this.currentEvent.name);
            	this.show();
            }
		};
		
		/**
		 * Cette methode permet de verifier qu'une evenement est valable
		 */
		this.checkEvent = function(randEvent) {
			if (this.currentEvent) return false;
			
			// Il ne peut pas être nulle
			if (!randEvent) return false;
			var isOk = true;
			
			// Si il est unique, il ne doit pas exister dans la liste des evenements deja rencontrés
			if (randEvent.unique) {
				isOk = this.uniquesEvent.indexOf(randEvent.name) < 0;
			}
			
			// Si il est rare, il faut tomber sur sa rareté
			var rarity = randEvent.rarity;
			if (!rarity) rarity = 100;
			
			var result = Utils.rand(0, rarity);
			isOk = result == 0;
			
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
			this.currentEvent = null;
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