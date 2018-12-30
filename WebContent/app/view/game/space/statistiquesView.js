'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/space/statistiques.html"], 
        function($, Utils, page){
    return function(parent){
        this.init = function(parent) {
        	this.el = "#statistiques";
            this.parent = parent;
            this.Textes = parent.Textes;
            this.gameView = parent.parent;
            this.pointManager = parent.pointManager;
            this.ameliorationView = parent.ameliorationView;
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			$(this.el).html(template(templateData));
			
			this.makeEvents();
        };
        
        this.makeEvents = function() {
        	var that = this;
        	$("jauge").hover(function() {
        		that.ameliorationView.click(that.gameView, true);
        		$(that.el).show();
        	}, function() {
        		$(that.el).hide();
        	});
        };
        
        this.renderLoop = function() {
        	this.refresh();
        };
        
        this.refresh = function() {
        	var dom = $(this.el);
        	
        	var notationCourte = this.pointManager.isNotationCourte();
        	var gain = this.ameliorationView.totalGainsPerte;
            //Croyance
            dom.find("#croyance-loop span").html(Utils.format(gain.loop.croyance, notationCourte, this.Textes, true));
            dom.find("#croyance-click span").html(Utils.format(gain.click.croyance, notationCourte, this.Textes, true));
            dom.find("#croyance").show();
            
            //Illumination
            dom.find("#illumination-loop span").html(Utils.format(gain.loop.illumination, notationCourte, this.Textes, true));
            dom.find("#illumination-click span").html(Utils.format(gain.click.illumination, notationCourte, this.Textes, true));
            dom.find("#illumination").show();

            //Bien
            dom.find("#bien-loop span").html(Utils.format(gain.loop.bien, notationCourte, this.Textes, true));
            dom.find("#bien-click span").html(Utils.format(gain.click.bien, notationCourte, this.Textes, true));
            dom.find("#bien").show();

            //Mal
            dom.find("#mal-loop span").html(Utils.format(gain.loop.mal, notationCourte, this.Textes, true));
            dom.find("#mal-click span").html(Utils.format(gain.click.mal, notationCourte, this.Textes, true));
            dom.find("#mal").show();
        };
        
        this.close = function() {
            $(this.el).hide();
        };
        
        this.init(parent);
    };
});