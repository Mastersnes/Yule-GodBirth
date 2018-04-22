/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "#didactitiel";
			this.parent = parent;
			this.Textes = parent.Textes;
			
			this.gameView = parent;
			this.pointManager = parent.pointManager;
			this.textManager = parent.textManager;
			this.ameliorationView = parent.spaceView.ameliorationView;
			
			this.step = 0;
			
			this.blocker = {
				ameliorations : true,
				constellations : true,
				autel : true
			};
			this.indication = {
				barre : false,
				constellations : false
			};
			this.recompense = {
				start : false
			};
		};
		
		this.loop = function() {
			$(this.el).hide();
			var toShow = false;
			$(this.el).find(".step").hide();
			
			/**
			 * Espace
			 */
			if (this.blocker.ameliorations && this.parent.lieu == "space") {
				toShow = true;
				$(this.el).find(".step.block-ameliorations").show();
			}
			if (this.blocker.constellations && this.parent.lieu == "space") {
				toShow = true;
				$(this.el).find(".step.block-constellations").show();
			}
			if (this.indication.barre && this.parent.lieu == "space") {
				toShow = true;
				$(this.el).find(".step.fleche-barre").show();
			}
			if (this.indication.constellations && this.parent.lieu == "space") {
				toShow = true;
				$(this.el).find(".step.fleche-constellations").show();
			}
			
			/**
			 * Constellation
			 */
			if (this.blocker.autel && this.parent.lieu == "constellation") {
				toShow = true;
				$(this.el).find(".step.block-autel").show();
			}
			
			/**
			 * Premiere etape, explication du click et des ameliorations
			 */
			if (this.step == 0) this.step++;
			
			/**
			 * Seconde etape, explication de la barre
			 */
			var grandTout = this.ameliorationView.Items.get("grandTout");
			if (this.recompense.start && grandTout.level == 1) {
				if (this.step == 1) {
					this.step++;
					this.indication.barre = true;
					this.textManager.show(["didactitiel-barre1", "didactitiel-barre2", "didactitiel-barre3", "didactitiel-barre4"]);
					this.textManager.next();
				}
			}
			
			/**
			 * Troisieme etape, explication de l'autel
			 */
			if (this.step == 2) {
				var queteView = this.parent.queteView;
				if (queteView.complete.length > 0) {
					this.step++;
					this.textManager.show(["didactitiel-autel1", "didactitiel-autel2"]);
					this.textManager.next();
				}
			}
			
			/**
			 * Derniere etape, la pierre est posée
			 */
			if (this.step == 3) {
				var autelView = this.parent.autelView;
				var pierresView = autelView.pierresView;
				if (pierresView.complete.length > 0) {
					if (autelView.selectedPierres.get("haut")) {
						this.step++;
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
			
			if (toShow) $(this.el).show();
		};
		
		this.click = function() {
			var currentText = this.textManager.currentTextId();
			/**
			 * Pour commencer on donne 10 points au joueur
			 */
			if (currentText == "didactitiel5") {
				if (!this.recompense.start) {
					this.recompense.start = true;
					this.pointManager.addPoints({
						croyance : 10,
						illumination : 0,
						bien : 0,
						mal : 0
					});
				}
				this.blocker.ameliorations = false;
			}
			/**
			 * On cache les fleches apres lui avoir montrer la barre
			 */
			if (currentText == "didactitiel-barre3") {
				this.indication.barre = false;
			}
			/**
			 * Le dieu est née ! Allons voir les objectif
			 */
			if (currentText == "didactitiel-dieu1") {
				this.indication.barre = false;
			}
			if (currentText == "didactitiel-dieu2") {
				this.indication.constellations = true;
			}
			if (currentText == "didactitiel-dieu3") {
				this.blocker.constellations = false;
				this.indication.constellations = false;
			}
			
			/**
			 * Acces à l'autel
			 */
			if (currentText == "didactitiel-autel2") {
				this.blocker.autel = false;
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