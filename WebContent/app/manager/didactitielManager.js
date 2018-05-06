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
			this.saveManager = this.parent.saveManager;
			
			this.data = this.saveManager.load("didactitiel");
		};
		
		this.loop = function() {
			$(this.el).hide();
			var toShow = false;
			$(this.el).find(".step").hide();
			
			/**
			 * Espace
			 */
			if (this.data.blocker.ameliorations && this.parent.lieu == "space") {
				toShow = true;
				$(this.el).find(".step.block-ameliorations").show();
			}
			if (this.data.blocker.constellations && this.parent.lieu == "space") {
				toShow = true;
				$(this.el).find(".step.block-constellations").show();
			}
			if (this.data.indication.barre && this.parent.lieu == "space") {
				toShow = true;
				$(this.el).find(".step.fleche-barre").show();
			}
			if (this.data.indication.constellations && this.parent.lieu == "space") {
				toShow = true;
				$(this.el).find(".step.fleche-constellations").show();
			}
			
			/**
			 * Constellation
			 */
			if (this.data.blocker.autel && this.parent.lieu == "constellation") {
				toShow = true;
				$(this.el).find(".step.block-autel").show();
			}
			
			/**
			 * Premiere etape, explication du click et des ameliorations
			 */
			if (this.data.step == 0) this.data.step++;
			
			/**
			 * Seconde etape, explication de la barre
			 */
			var grandTout = this.ameliorationView.Items.get("grandTout");
			if (this.data.recompense.start && grandTout.level >= 1) {
				if (this.data.step == 1) {
					this.data.step++;
					this.data.indication.barre = true;
					this.textManager.show(["didactitiel-barre1", "didactitiel-barre2", "didactitiel-barre3", "didactitiel-barre4"]);
					this.textManager.next();
				}
			}
			
			/**
			 * Troisieme etape, explication de l'autel
			 */
			if (this.data.step == 2) {
				var queteView = this.parent.queteView;
				if (queteView.complete.length > 0) {
					this.data.step++;
					this.textManager.show(["didactitiel-autel1", "didactitiel-autel2"]);
					this.textManager.next();
				}
			}
			
			/**
			 * Derniere etape, la pierre est posée
			 */
			if (this.data.step == 3) {
				var autelView = this.parent.autelView;
				var pierresView = autelView.pierresView;
				if (pierresView.complete.length > 0) {
					if (autelView.selectedPierres.get("haut")) {
						this.data.step++;
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
			
			if (this.data.indication.event) {
				toShow = true;
				$(this.el).find(".step.fleche-event").show();
			}
			
			this.saveManager.save("didactitiel", this.data);
			
			if (toShow) $(this.el).show();
		};
		
		this.click = function() {
			var currentText = this.textManager.currentTextId();
			/**
			 * Pour commencer on donne 10 points au joueur
			 */
			if (currentText == "didactitiel5") {
				if (!this.data.recompense.start) {
					this.data.recompense.start = true;
					this.pointManager.addPoints({
						croyance : 10,
						illumination : 0,
						bien : 0,
						mal : 0
					});
				}
				this.data.blocker.ameliorations = false;
			}
			/**
			 * On cache les fleches apres lui avoir montrer la barre
			 */
			if (currentText == "didactitiel-barre3") {
				this.data.indication.barre = false;
			}
			/**
			 * Le dieu est née ! Allons voir les objectif
			 */
			if (currentText == "didactitiel-dieu1") {
				this.data.indication.barre = false;
			}
			if (currentText == "didactitiel-dieu2") {
				this.data.indication.constellations = true;
			}
			if (currentText == "didactitiel-dieu3") {
				this.data.blocker.constellations = false;
				this.data.indication.constellations = false;
			}
			/**
			 * Acces à l'autel
			 */
			if (currentText == "didactitiel-autel2") {
				this.data.blocker.autel = false;
			}
			
			if (currentText == "cinematique-child4" || currentText == "cinematique-child5") {
				var inGeneralEvent = this.parent.eventManager.generalEvents.indexOf("first-event") > -1;
				var inUniqueEvent = this.parent.eventManager.uniquesEvents.indexOf("first-event") > -1;
				if (!(inGeneralEvent || inUniqueEvent)) {
					this.parent.eventManager.addEvents("first-event");
					this.data.indication.event = true;
				}
			}
			
			var grandTout = this.ameliorationView.Items.get("grandTout");
			if (grandTout.level > 5) {
				this.data.blocker.ameliorations = false;
				this.data.blocker.constellations = false;
				this.data.blocker.autel = false;
				
				this.data.indication.barre = false;
				this.data.indication.constellations = false;
			}
			if (grandTout.level > 6) {
				var inGeneralEvent = this.parent.eventManager.generalEvents.indexOf("first-event") > -1;
				var inUniqueEvent = this.parent.eventManager.uniquesEvents.indexOf("first-event") > -1;
				if (!(inGeneralEvent || inUniqueEvent)) {
					this.parent.eventManager.addEvents("first-event");
				}
				this.data.indication.event = false;
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