'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/quete/quete.html",
        "app/data/quetes",
        "app/view/game/quete/detailView"], 
        function($, Utils, page, Quetes, DetailView){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".quete");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Quetes = Quetes;
            this.eventManager = parent.eventManager;
            
            this.saveManager = this.parent.saveManager;
            this.pointManager = this.parent.pointManager;
            this.ameliorationView = this.parent.spaceView.ameliorationView;
            
            this.complete = this.saveManager.load("quetesComplete");
            this.newList = [];
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			this.detailView = new DetailView(this);
			this.detailView.render();
			
			this.refresh();
			this.makeEvents();
        };
        
        this.show = function() {
        	this.render();
        	this.el.show();
        };
        
        this.refresh = function() {
        	this.el.find("quetes").empty();
        	
        	var quetes = Quetes.list();
        	for (var index in quetes) {
        		var quete = quetes[index];
        		if (this.checkDraw(quete)) this.drawQuete(quete);
        	}
        	
        	this.makeQueteEvents();
        };
        
        /**
         * Verifie si la quete doit etre afficher
         */
        this.checkDraw = function(quete) {
        	// Si la quete est deja collectée, on n'affiche pas
        	if (this.complete.indexOf(quete.name) > -1) return false;
        	
        	// Si au moins une des quete dependante n'est pas collectée, on n'affiche pas
        	var checkQuete = quete.apparition.isComplete;
        	for (var indexComplete in checkQuete) {
        		var queteToCheck = checkQuete[indexComplete];
        		if (this.complete.indexOf(queteToCheck) == -1) return false;
        	}
        	
        	// Si au moins une des ameliorations dependante n'a pas le niveau necessaire, on n'affiche pas
        	var checkAmeliorations = quete.apparition.ameliorations;
        	for (var indexAmelioration in checkAmeliorations) {
        		var ameliorationToCheck = checkAmeliorations[indexAmelioration];
        		var amelioration = this.ameliorationView.Items.get(ameliorationToCheck.name);
        		if (amelioration.level < ameliorationToCheck.level) return false;
        	}
        	
        	// Sinon, on affiche
        	return true;
        };
        
        /**
         * Verifie si une quete est reussie
         */
        this.checkComplete = function(quete) {
        	if (!this.checkDraw(quete)) return false;
        	
        	// Si au moins une des ameliorations n'a pas le niveau necessaire, la quete n'est pas complete
        	var checkAmeliorations = quete.conditions;
        	for (var indexAmelioration in checkAmeliorations) {
        		var ameliorationToCheck = checkAmeliorations[indexAmelioration];
        		if (!this.checkCondition(ameliorationToCheck)) return false;
        	}
        	
        	if (quete.conditionsFunction) return quete.conditionsFunction(this);
        	
        	return true;
        };
        
        /**
         * Verifie la condition d'une quete
         */
        this.checkCondition = function(condition) {
            var amelioration = this.ameliorationView.Items.get(condition.name);
            if (amelioration.level < condition.level) return false;
            return true;
        };
        
        /**
         * Affiche la quete
         */
        this.drawQuete = function(quete) {
        	var queteDom = $("<quete></quete>");
        	queteDom.attr("id", quete.name);
        	queteDom.addClass("h-center");
        	
        	var queteCheck = $("<collecte></collecte>");
        	if (this.checkComplete(quete)) {
        		queteCheck.addClass("complete");
        	}
        	queteDom.append(queteCheck);

        	var queteContent = $("<content></content>");
	        	var queteTitre = $("<div></div>");
	        	queteTitre.addClass("text underline");
	        	queteTitre.html(this.Textes.get(quete.name));
	        	queteContent.append(queteTitre);
	        	
	        	var queteText = $("<div></div>");
	        	queteText.addClass("text");
	        	queteText.html(this.Textes.get(quete.description));
	        	queteContent.append(queteText);
        	queteDom.append(queteContent);
        	
        	this.el.find("quetes").append(queteDom);
        };
        
        this.loop = function(game) {
        	if (this.newList.length > 0) {
        		this.newList.length = 0;
        		this.parent.alertPopup("newQuete", null, true);
        	}
        };

        this.renderLoop = function(game) {
        	var quetes = Quetes.list();
        	for (var index in quetes) {
        		var quete = quetes[index];
        		this.refreshQuete(quete);
        	}
        	
        	this.detailView.loop();
        };
        
        this.refreshQuete = function(quete) {
        	var queteDom = $("quete#"+quete.name);
        	if (this.checkComplete(quete)) {
        		if (quete.name != "quete-start" && !queteDom.find("collecte").hasClass("complete")) {
        			this.newList.push(quete.name);
        		}
        		
        		queteDom.find("collecte").addClass("complete");
        	}
        	else queteDom.find("collecte").removeClass("complete");
        };
        
        /**
         * Complete la quete
         */
        this.completeQuete = function(quete, queteId) {
            if (!quete) quete = Quetes.get(queteId);
            
            if (!this.checkComplete(quete)) return false;
            this.complete.push(quete.name);
            
            this.saveManager.save("quetesComplete", this.complete);
            this.pointManager.addPoints(quete.gains, null, "click");
            if (quete.success) quete.success(this);
            
            this.refresh();
            return true;
        };
        
        this.makeEvents = function() {
        	var that = this;
        	this.el.find(".goto").click(function() {
        		that.parent.showConstellation();
        	});
        	
        	this.detailView.makeEvents();
        };
        
        this.makeQueteEvents = function() {
        	var that = this;
        	this.el.find("quete collecte").click(function() {
        		var queteId = $(this).parent().attr("id");
        		that.detailView.show(queteId);
        	});
        };
        
        this.init(parent);
    };
});