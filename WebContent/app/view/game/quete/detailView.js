'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/quete/quete-detail.html"], 
        function($, Utils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = $("#quete-popup");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Quetes = parent.Quetes;
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
        
        this.show = function(queteId) {
            this.currentQuete = this.Quetes.get(queteId);
            
            if (!this.currentQuete) return;
            
            this.refresh();
        	this.el.show();
        };
        
        this.refresh = function() {
            var quete = this.currentQuete;
            
            if (!quete) return;
            
            var dom = this.el;
            
            /**
             * Titre
             */
            dom.find("#nom").html(this.Textes.get(quete.name));
            dom.find("#descr").html(this.Textes.get(quete.description));
            
            /**
             * Conditions
             */
            var conditions = quete.conditions;
            if (!conditions || conditions.length == 0) dom.find("#restrictions").hide();
            else {
                dom.find("#restrictions > #list").empty();
                dom.find("#restrictions").show();
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
            }
            
            /**
             * Gain
             */
            var gain = quete.gains;
            
            dom.find("#croyance-gain").html(Utils.format(gain.croyance, true, this.Textes));
            if (gain.croyance) dom.find("#croyance").show();
            else dom.find("#croyance").hide();
            
            //Illumination
            dom.find("#illumination-gain").html(Utils.format(gain.illumination, true, this.Textes));
            if (gain.illumination) dom.find("#illumination").show();
            else dom.find("#illumination").hide();

            //Bien
            dom.find("#bien-gain").html(Utils.format(gain.bien, true, this.Textes));
            if (gain.bien) dom.find("#bien").show();
            else dom.find("#bien").hide();

            //Mal
            dom.find("#mal-gain").html(Utils.format(gain.mal, true, this.Textes));
            if (gain.mal) dom.find("#mal").show();
            else dom.find("#mal").hide();
            
            /**
             * Collecte
             */
            if (!this.parent.checkComplete(quete)) dom.find("#collecte").attr("disabled", "disabled");
            else this.el.find("#collecte").removeAttr("disabled");
        };
        
        this.loop = function(game) {
            this.refresh();
        };
        
        this.close = function() {
            this.currentItem = null;
            this.el.hide();
        };
        
        this.makeEvents = function() {
        	var that = this;
        	
        	this.el.find(".close-button, mask").click(function() {
                that.close();
            });
        	this.el.find("#collecte").click(function() {
        	    var quete = that.currentQuete;
        	    if (!quete) return;
        	    if (!that.parent.completeQuete(quete)) return;
        	    that.close();
        	});
        };
        
        this.init(parent);
    };
});