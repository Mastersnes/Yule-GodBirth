/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/autel/pierres.html",
        "app/data/pierres",
        "app/view/game/autel/detailView"],
function($, _, Utils, page, Pierres, DetailView) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = "#pierres";
		    this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Pierres = Pierres;
            
            this.pointManager = this.parent.pointManager;
            this.ameliorationView = this.parent.spaceView.ameliorationView;
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			$(this.el).html(template(templateData));
			
			this.showPierres();
			
			this.detailView = new DetailView(this);
			this.detailView.render();
		};
		
		this.showPierres = function() {
			var pierres = Pierres.list();
			for (var indexPierre in pierres) {
				var pierre = pierres[pierre];
				this.addPierre(pierre.name);
			}
			
			this.makePierresEvents();
		};
		
		this.addPierre = function(pierre) {
			var pierreDom = $("<item></item>");
			pierreDom.attr("class", pierre.name);
			pierreDom.attr("title", this.Textes.get(pierre.name));
			pierreDom.attr("id", pierre.name);
			pierreDom.html("<span></span>");
			
			$(this.el).find("content").append(pierreDom);
		};
		
		this.loop = function(game) {
		};

		this.click = function(game) {
		};
		
		/**
         * Verifie la condition d'acquisition d'une pierre
         */
        this.checkCondition = function(condition) {
            var amelioration = this.ameliorationView.Items.get(condition.name);
            if (amelioration.level < condition.level) return false;
            return true;
        };
        
        /**
         * Verifie si une pierre peut etre achetée
         */
        this.checkAchetable = function(pierre) {
        	// Si au moins une des ameliorations n'a pas le niveau necessaire, la pierre n'est pas achetable
        	var checkAmeliorations = pierre.conditions;
        	for (var indexAmelioration in checkAmeliorations) {
        		var ameliorationToCheck = checkAmeliorations[indexAmelioration];
        		if (!this.checkCondition(ameliorationToCheck)) return false;
        	}
        	
        	return this.pointManager.checkOk(prixTotal);
        };

        /**
         * Achete une pierre
         */
        this.acheter = function(pierre) {
        	if (!this.checkAchetable(pierre)) return false;
        	if (!this.pointManager.depenser(pierre.prix)) return false;
        	this.complete.push(piere.name);
        	
        	this.refresh();
        	return true;
        };
        
		this.init(parent);
	};
});