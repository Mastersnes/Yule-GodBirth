'use strict';
define(["jquery", 
        "app/utils/utils",
        "text!app/template/game/quete/quete.html",
        "app/data/quetes"], 
        function($, Utils, page, Quetes){
    return function(parent){
        this.init = function(parent) {
        	this.el = $(".quete");
            
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            
            this.ameliorationView = this.parent.spaceView.ameliorationView;

            this.complete = [];
        };
        
        this.render = function() {
        	_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes,
					quetes : Quetes.list(),
					complete : this.complete
			};
			this.el.html(template(templateData));
			
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
         * Affiche la quete
         */
        this.drawQuete = function(quete) {
        	var queteDom = $("<quete></quete>");
        	queteDom.attr("id", quete.name);
        	queteDom.addClass("h-center");
        	
        	var queteCheck = $("<collecte></collecte>");
        	queteDom.append(queteCheck);

        	var queteContent = $("<content></content>");
	        	var queteText = $("<div></div>");
	        	queteText.addClass("text");
	        	queteText.html(this.Textes.get(quete.name));
	        	queteContent.append(queteText);
        	queteDom.append(queteContent);
        	
        	this.el.find("quetes").append(queteDom);
        };
        
        this.loop = function(game) {
        };
        
        this.makeEvents = function() {
        	var that = this;
        	this.el.find(".goto").click(function() {
        		that.parent.showConstellation();
        	});
        };
        
        this.init(parent);
    };
});