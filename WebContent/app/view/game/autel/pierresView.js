/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/autel/pierres.html",
        "app/data/pierresOnglets",
        "app/data/pierres",
        "app/view/game/autel/detailView"],
function($, _, Utils, page, PierresOnglets, Pierres, DetailView) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = "#pierres";
		    this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Pierres = Pierres;
            
            this.saveManager = this.parent.saveManager;
            this.pointManager = this.parent.pointManager;
            this.ameliorationView = this.parent.ameliorationView;
            
            this.complete = this.saveManager.load("pierresComplete");
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			$(this.el).html(template(templateData));
			
			this.detailView = new DetailView(this);
			this.detailView.render();
		};
		
		this.unlockOnglet = function(ongletId, show) {
			if ($(this.el).find("onglet#"+ongletId).length > 0) return;
			
			var onglet = PierresOnglets.get(ongletId);
			if (!onglet) return;
			
			var ongletDom = $("<onglet></onglet>");
			ongletDom.attr("class", "text " + ongletId);
			ongletDom.attr("id",ongletId);
			ongletDom.attr("title", this.Textes.get(ongletId));
			ongletDom.html(this.Textes.get(ongletId));
			$(this.el).find("onglets").append(ongletDom);
			
			this.makeOngletEvents(ongletId);
			
			if (show) this.showPierres(ongletId);
		};
		
		this.showPierres = function(ongletId) {
			$(this.el).find("onglet.active").removeClass("active");
			$(this.el).find("onglet#"+ongletId).addClass("active");
			
			$(this.el).find("content").empty();
			
			var onglet = PierresOnglets.get(ongletId);
			for (var id in onglet.pierres) {
				var pierreId = onglet.pierres[id];
				this.addPierre(pierreId);
			}
			
			this.makePierreEvents();
		};
		
		this.addPierre = function(pierreId) {
			var pierre = Pierres.get(pierreId);
			
			var pierreDom = $("<item></item>");
			pierreDom.attr("class", pierre.name);
			pierreDom.attr("savedTitle", this.Textes.get(pierre.name));
			pierreDom.attr("id", pierre.name);
			if (this.complete.indexOf(pierre.name) == -1) {
				pierreDom.attr("level", 0);
			}
			pierreDom.html("<span></span>");
			
			$(this.el).find("content").append(pierreDom);
		};
		
		this.refreshPierre = function(pierre) {
			var itemDom = $(this.el).find("item#"+pierre.name);
			if (itemDom.length == 0) return;
			
			/**
			 * Si la pierre est achetable, on l'indique
			 */
			if (this.checkAchetable(pierre)) {
				if (!itemDom.hasClass("dispo")) itemDom.addClass("dispo");
			}else itemDom.removeClass("dispo");
			
			/**
			 * Si on a deja acheté la pierre
			 */
			if (this.complete.indexOf(pierre.name) > -1) {
				itemDom.removeAttr("level");
	        }
			
			/**
			 * Si on a selectionné la pierre sur l'autel
			 * On la desactive dans le menu
			 */
			if (this.parent.selectedPierres.contains(pierre.name)) {
				if (!itemDom.hasClass("selected")) itemDom.addClass("selected");
				itemDom.attr("title", this.Textes.get("pierreDejaPlace"));
			}else {
				itemDom.removeClass("selected");
				itemDom.attr("title", itemDom.attr("savedTitle"));
			}
		};
		
		this.loop = function(game) {
		    var listOnglet = PierresOnglets.list();
		    for (var index in listOnglet) {
                var onglet = listOnglet[index];
                if (this.checkOngletAffichable(onglet.conditions)) {
                    this.unlockOnglet(onglet.name, onglet.start);
                }
            }
		    
		    var listPierre = Pierres.list();
		    for (var index in listPierre) {
		        var pierre = listPierre[index];
	        	this.refreshPierre(pierre);
		    }
		    
		    this.detailView.loop(game);
		};

		this.click = function(game) {
			var listPierre = Pierres.list();
		    for (var index in listPierre) {
		        var pierre = listPierre[index];
	        	this.refreshPierre(pierre);
		    }
		};
        
        this.makePierreEvents = function() {
            var that = this;
            
            $(this.el).find("item").on("click", function() {
            	var pierreId = $(this).attr("id");
            	
            	/**
            	 * On on a pas encore acheté la pierre, on affiche l'ecran de detail
            	 * Sinon, si on l'a deja acheté, on la selectionne
            	 */
            	if (that.complete.indexOf(pierreId) == -1) {
        			that.detailView.show(pierreId);
        		}else {
        			/**
            		 * Si on a pas encore selectionnée la pierre, on la selectionne
            		 */
                	if (!that.parent.selectedPierres.contains(pierreId)) 
                		that.parent.selectPierre(pierreId);
        		}
            });
            
            $(this.el).find("item").hover(function() {
            	$(this).removeClass('out').addClass('in');
            }, function() {
            	if (!that.detailView.currentPierre)
            	$(this).removeClass('in').addClass('out');
            });
        };
        
        this.makeOngletEvents = function(ongletId) {
        	var that = this;
        	
        	$(this.el).find("onglet#"+ongletId).on("click", function() {
                var ongletId = $(this).attr("id");
                that.showPierres(ongletId);
            });
        };
        
        /**
         * Verifie si un onglet doit etre afficher
         */
        this.checkOngletAffichable = function(conditions) {
            if (!conditions || conditions.length == 0) return true;
            
            for (var index in conditions) {
                var condition = conditions[index];
                var itemRestrict = this.ameliorationView.Items.get(condition.name);
                if (itemRestrict.level < condition.level) return false;
            }
            return true;
        };
		
		/**
         * Verifie la condition d'acquisition d'une pierre
         */
        this.checkCondition = function(condition) {
        	if (!conditions || conditions.length == 0) return true;
        	
            var amelioration = this.ameliorationView.Items.get(condition.name);
            if (amelioration.level < condition.level) return false;
            return true;
        };
        
        /**
         * Verifie si une pierre peut etre achetée
         */
        this.checkAchetable = function(pierre) {
        	if (this.complete.indexOf(pierre.name) > -1) return false;
        	// Si au moins une des ameliorations n'a pas le niveau necessaire, la pierre n'est pas achetable
        	var checkAmeliorations = pierre.conditions;
        	for (var indexAmelioration in checkAmeliorations) {
        		var ameliorationToCheck = checkAmeliorations[indexAmelioration];
        		if (!this.checkCondition(ameliorationToCheck)) return false;
        	}
        	
        	return this.pointManager.checkOk(pierre.prix);
        };

        /**
         * Achete une pierre
         */
        this.acheter = function(pierre) {
        	if (!this.checkAchetable(pierre)) return false;
        	if (!this.pointManager.depenser(pierre.prix)) return false;
        	this.complete.push(pierre.name);
        	this.refreshPierre(pierre);
        	
        	return true;
        };
        
		this.init(parent);
	};
});