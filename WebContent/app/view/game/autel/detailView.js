'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/autel/pierre-detail.html"], 
        function($, Utils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $("#pierre-popup");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Pierres = parent.Pierres;
            this.pointManager = parent.pointManager;
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			this.makeEvents();
        };
        
        this.show = function(pierreId, withoutMask) {
            this.currentPierre = this.Pierres.get(pierreId);
            
            if (!this.currentPierre) return;
            
            this.refresh();
            if (withoutMask) {
            	this.el.find("mask").hide();
            	this.el.find("#acheter").hide();
            	this.el.find(".close-button").hide();
            	this.el.find("#restrictions").hide();
            	this.el.find("#prix").hide();
            	this.el.find("#gain-titre").hide();
            	this.el.addClass("innactive");
            }else {
            	this.el.find("mask").show();
            	this.el.find("#acheter").show();
            	this.el.find(".close-button").show();
            	this.el.find("#restrictions").show();
            	this.el.find("#prix").show();
            	this.el.find("#gain-titre").show();
            	this.el.removeClass("innactive");
            }
        	this.el.show();
        };
        
        this.refresh = function() {
            var pierre = this.currentPierre;
            
            if (!pierre) return;
            
            var dom = this.el;
            
            /**
             * Titre
             */
            dom.find("#nom").html(this.Textes.get(pierre.name));
            dom.find("#descr").html(this.Textes.get(pierre.description));
            
            /**
             * Conditions
             */
            var conditions = pierre.conditions;
            dom.find("#restrictions > #list").empty();
            for (var index in conditions) {
                var condition = conditions[index];
                
                var conditionDom = $("<div></div>");
                conditionDom.attr("class", "categorie");
                if (this.parent.checkCondition(condition)) conditionDom.addClass("ok");
                
                var conditionIcon = $("<span></span>");
                conditionIcon.attr("class", "icon");
                conditionDom.append(conditionIcon);
                
                var conditionText = $("<span></span>");
                conditionText.attr("class", "text");
                conditionText.append(this.Textes.get(condition.name)).append(" (" + condition.level + ")");
                conditionDom.append(conditionText);
                
                dom.find("#restrictions > #list").append(conditionDom);
            }
            
            /**
             * PRIX
             */
            var notationCourte = this.pointManager.isNotationCourte();
            var pointPossede = this.pointManager.points;
            var prix = this.parent.calculPrix();
            dom.find("#croyance-prix > span").html(Utils.format(prix.croyance, notationCourte, this.Textes, true));
            if (prix.croyance) {
            	dom.find("#croyance-prix").show();
            	if (pointPossede.croyance >= prix.croyance) dom.find("#croyance-prix").addClass("ok");
            	else dom.find("#croyance-prix").removeClass("ok");
            }
            else dom.find("#croyance-prix").hide();

            dom.find("#illumination-prix > span").html(Utils.format(prix.illumination, notationCourte, this.Textes, true));
            if (prix.illumination) {
            	dom.find("#illumination-prix").show();
            	if (pointPossede.illumination >= prix.illumination) dom.find("#illumination-prix").addClass("ok");
            	else dom.find("#illumination-prix").removeClass("ok");
            }
            else dom.find("#illumination-prix").hide();
            
            /**
             * Gain
             */
            var gain = pierre.gains;
            
            var prefix = gain.croyance > 0?"+":"";
            dom.find("#croyance-gain").html(prefix + gain.croyance + " %");
            if (gain.croyance) dom.find("#croyance").show();
            else dom.find("#croyance").hide();
            
            //Illumination
            prefix = gain.illumination > 0?"+":"";
            dom.find("#illumination-gain").html(prefix + gain.illumination + " %");
            if (gain.illumination) dom.find("#illumination").show();
            else dom.find("#illumination").hide();

            //Bien
            prefix = gain.bien > 0?"+":"";
            dom.find("#bien-gain").html(prefix + gain.bien + " %");
            if (gain.bien) dom.find("#bien").show();
            else dom.find("#bien").hide();

            //Mal
            prefix = gain.mal > 0?"+":"";
            dom.find("#mal-gain").html(prefix + gain.mal + " %");
            if (gain.mal) dom.find("#mal").show();
            else dom.find("#mal").hide();
            
            /**
             * Acheter
             */
            if (!this.parent.checkAchetable(pierre)) dom.find("#acheter").attr("disabled", "disabled");
            else this.el.find("#acheter").removeAttr("disabled");
        };
        
        this.loop = function(game) {
        	this.refresh();
        };
        
        this.close = function(isSelected) {
        	if (this.currentPierre && !isSelected) {
        		$(this.parent.el).find("item#"+this.currentPierre.name).removeClass('in').addClass('out');
        	}
            this.currentPierre = null;
            this.el.hide();
        };
        
        this.makeEvents = function() {
        	var that = this;
        	
        	this.el.find(".close-button, mask").click(function() {
                that.close();
            });
        	this.el.find("#acheter").click(function() {
        	    var pierre = that.currentPierre;
        	    if (!pierre) return;
        	    if (!that.parent.acheter(pierre)) return;
        	    that.close();
        	});
        };
        
        this.init(parent);
    };
});