/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = ".didactitiel";
			this.parent = parent;
			this.Textes = parent.Textes;
			
			this.gameView = parent;
			this.pointManager = parent.pointManager;
			this.textManager = parent.textManager;
			this.ameliorationView = parent.spaceView.ameliorationView;
			this.godView = parent.spaceView.godView;
			this.saveManager = this.parent.saveManager;
			
			this.data = this.saveManager.load("didactitiel");
			this.barreAlreadyDisplay = false; 
		};
		
		this.loop = function() {
			var that = this;
		    $(this.el).hide();
			var toShow = false;
			$(this.el).find(".step").hide();
			
			/**
			 * Espace
			 */
			if (this.parent.lieu == "space") {
    			if (this.data.blocker.ameliorations) {
    				toShow = true;
    				$(this.el).find(".step.block-ameliorations").show();
    			}
    			if (this.data.blocker.constellations) {
    				toShow = true;
    				$(this.el).find(".step.block-constellations").show();
    			}
    			if (this.data.indication.barre) {
    				toShow = true;
    				$(this.el).find(".step.fleche-barre").show();
    			}
    			if (this.data.indication.constellations) {
    				toShow = true;
    				$(this.el).find(".step.fleche-constellations").show();
    			}
    			if (this.data.indication.event) {
                    toShow = true;
                    $(this.el).find(".step.fleche-event").show();
                }
			}
			
			/**
			 * On recupere le type du dieu pour controller l'affichage du didactitiel
			 */
			var godType = {
		        name : this.godView.type.name,
		        level : this.godView.level
			};
			
			window.godTypeName = godType.name;
			window.godTypeLevel = godType.level;
			
			/**
			 * Deuxieme etape, on explique la barre
			 */
			if (!this.barreAlreadyDisplay && godType.name == "egg" && godType.level == 2) {
			    this.barreAlreadyDisplay = true;
			    this.textManager.show(["didactitiel-barre1", "didactitiel-barre2", "didactitiel-barre2-2", "didactitiel-barre3", "didactitiel-barre4"]);
			    this.textManager.next();
			    this.data.indication.barre = true;
			    this.data.step.name = "barre";
                this.data.step.index = 0;
			}
			
			/**
			 * Troisieme etape, lorsque le dieu n�e, on demande de realiser la quete
			 */
			if (this.data.step.name == "barre" && godType.name == "baby" && godType.level == 1) {
			    this.data.step.name = "quete";
                this.data.step.index = 0;
                this.textManager.show(["didactitiel-dieu1", "didactitiel-dieu2", "didactitiel-dieu3"]);
                this.textManager.next();
			}
			/**
			 * Une fois la quete realisee on demande de mettre la pierre
			 */
			if (this.data.step.name == "quete" && this.data.step.index == 0) {
			    var queteView = this.parent.queteView;
                if (queteView.complete.length > 0) {
                    this.data.step.name = "autel";
                    this.data.step.index = 0;
                    this.textManager.show(["didactitiel-autel1", "didactitiel-autel2"]);
                    this.textManager.next();
                }
			}
			
			/**
			 * Quatrieme etape, on pose la pierre
			 */
			if (this.data.step.name == "autel" && this.data.step.index == 0) {
				var autelView = this.parent.autelView;
				var pierresView = autelView.pierresView;
				if (pierresView.complete.length > 0) {
					if (autelView.selectedPierres.get("haut")) {
					    this.data.step.index++;
						var gameView = this.parent;
						gameView.showConstellation(function() {
							gameView.showStar($("etoile.space-star"));
						});
						this.textManager.show(["didactitiel-fin1", "didactitiel-fin2"]);
						this.textManager.next();
					}else {
						var currentText = this.textManager.currentTextId();
						if (currentText != "didactitiel-pierrePose") {
							this.textManager.show(["didactitiel-pierrePose"]);
							this.textManager.next();
						}
					}
				}
			}
			
			this.saveManager.save("didactitiel", this.data);
			
			if (toShow) $(this.el).show();
		};
		
		this.click = function() {
			var currentText = this.textManager.currentTextId();
			
			/**
			 * On donne la recompense de depart
			 */
			if (currentText == "didactitiel5") {
                this.pointManager.addPoints({
                    croyance : 3,
                    illumination : 0,
                    bien : 0,
                    mal : 0
                }, null, "quete");
                this.data.blocker.ameliorations = false;
			}
			
			
			/**
			 * On cache les fleches apres lui avoir montrer la barre
			 */
			if (currentText == "didactitiel-barre3") {
				this.data.indication.barre = false;
			}
			/**
			 * Le dieu est nee ! On indique la constellation
			 */
			if (currentText == "didactitiel-dieu2") {
				this.data.indication.constellations = true;
			}
			if (currentText == "didactitiel-dieu3") {
				this.data.blocker.constellations = false;
				this.data.indication.constellations = false;
			}
			/**
			 * On a effectuer la premiere quete. On permet d'acceder a l'autel
			 */
			if (currentText == "didactitiel-autel2") {
				this.data.blocker.autel = false;
				$("etoile.autel-star").show();
			}

			/**
			 * On affiche le rpemier evenement
			 */
			if (currentText == "cinematique-imbolc4") {
			    this.data.step.name = "event";
                this.data.step.index = 0;
                if (this.parent.eventManager.addEvents(["first-event"])) {
                    this.data.indication.event = true;
                }
                $("etoile.artefacts-star").show();
			}
			
			/**
			 * Si on a ouvert l'evenement, on enleve les fleches
			 */
			if (this.parent.eventManager.eventOpen) {
				this.data.indication.event = false;
			}
			
			
			/**
			 * Controle pour les rageux qui passent le tuto
			 */
			var grandTout = this.ameliorationView.Items.get("grandTout");
			if (grandTout.level > 1) {
			    this.data.blocker.ameliorations = false;
                this.data.recompense.start = false;
			}
			if (grandTout.level > 1) {
			    this.data.indication.barre = false;
			}
			var queteView = this.parent.queteView;
            if (grandTout.level > 4 || queteView.complete.length > 0) {
			    $("etoile.success-star").show();
			    $("etoile.autel-star").show();
			    this.data.blocker.constellations = false;
			    this.data.indication.constellations = false;
			    this.data.blocker.autel = false;
			}
			if (grandTout.level > 8) {
			    this.parent.eventManager.addEvents(["first-event"]);
				this.data.indication.event = false;
				$("etoile").show();
			}
		};
		
		this.makeEvents = function() {
			var that = this;
			$("body").click(function() {
				that.click();
			});
		};
		
		this.init(parent);
	};
});