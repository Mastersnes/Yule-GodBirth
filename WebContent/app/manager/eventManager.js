/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/events.html",
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
		    console.log("events : ", totalEvents);
		    
		    var rand = Utils.rand(0, 100);
		    if (rand == 0) {
		        var randIndex = Utils.rand(0, totalEvents.length);
		        var randEvent = Events.get(totalEvents[randIndex]);
		        var appair = true;
		        if (randEvent.rarity) appair = Utils.rand(0, randEvent.rarity) == 0;
		        if (appair) {
		            this.currentEvent = randEvent;
		            this.show();
		        }
		    }
		}
		
		this.show = function() {
		    if (!this.currentEvent) return;
		    this.parent.pause = true;
		    
		    console.log("show events : ", this.currentEvent);
		    
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
		
		this.setTypeEvents = function(events) {
		    if (!events) return;
		    console.log("set events : ", events);
		    
		    this.typeEvents = events.typeEvents;
		    this.addEvents(events.newEvents);
		};

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