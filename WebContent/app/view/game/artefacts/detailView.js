'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/artefacts/artefacts-detail.html"], 
        function($, Utils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $("#artefacts-popup");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Artefacts = parent.Artefacts;
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
        };
        
        this.show = function(artefactId) {
            this.currentArtefact = this.Artefacts.get(artefactId);
            
            if (!this.currentArtefact) return;
            
            this.refresh();
            this.el.addClass("innactive");
        	this.el.show();
        };
        
        this.refresh = function() {
            var artefact = this.currentArtefact;
            
            if (!artefact) return;
            
            var dom = this.el;
            
            /**
             * Titre
             */
            dom.find("#nom").html(this.Textes.get(artefact.name));
            dom.find("#descr").html(this.Textes.get(artefact.description));
            
            /**
             * Gain
             */
            var gain = artefact.gains;
            
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
        };
        
        this.close = function() {
            this.currentArtefact = null;
            this.el.hide();
        };
        
        this.init(parent);
    };
});