/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "";
			this.parent = parent;
			this.Textes = parent.Textes;
			
			this.pointManager = parent.pointManager;
			this.saveManager = parent.saveManager;
			this.mediatheque = parent.mediatheque;
			
			this.compteurClick = this.saveManager.load("compteurClick");
			this.complete = this.saveManager.load("successComplete");
			this.newList = [];
		};
		
		this.addClick = function() {
			if (this.compteurClick >= 1000000000) return;
			
			this.compteurClick++;
			
			this.parent.kongregateUtils.score("compteurClick", this.compteurClick);
			this.saveManager.save("compteurClick", this.compteurClick);
			
			var recompense = {
				croyance : 0,
				illumination : 0,
				bien : 0,
				mal : 0
			};
			
			/**
			 * Tout les 500 cliques on gagne 1 point d'illumination
			 */
			if (this.compteurClick % 500 == 0) {
				recompense.illumination += 1;
			}
			
			this.checkClickSuccess(100, this.compteurClick, 1, recompense);
			this.checkClickSuccess(500, this.compteurClick, 10, recompense);
			this.checkClickSuccess(1000, this.compteurClick, 50, recompense);
			this.checkClickSuccess(5000, this.compteurClick, 100, recompense);
			this.checkClickSuccess(10000, this.compteurClick, 500, recompense);
			this.checkClickSuccess(50000, this.compteurClick, 1000, recompense);
			this.checkClickSuccess(100000, this.compteurClick, 10000, recompense);
			
			this.pointManager.addPoints(recompense, null, "quete");
		};
		
		/**
		 * Verifie si le succes doit etre ajouté
		 */
		this.checkClickSuccess = function(limit, gainCroyance, gainIllumination, recompense) {
			if (this.compteurClick == limit) {
				if (this.addSuccess("success-"+limit+"click")) {
					recompense.croyance += gainCroyance;
					recompense.illumination += gainIllumination;
				}
			}
		};

		this.reloadSuccess = function() {
			this.checkClickSuccessInit(100);
			this.checkClickSuccessInit(500);
			this.checkClickSuccessInit(1000);
			this.checkClickSuccessInit(5000);
			this.checkClickSuccessInit(10000);
			this.checkClickSuccessInit(50000);
			this.checkClickSuccessInit(100000);
		};
		
		/**
		 * Verifie si le succes doit etre ajouté à l'initialisation
		 */
		this.checkClickSuccessInit = function(limit) {
			if (this.compteurClick >= limit) {
				this.addSuccess("success-"+limit+"click", true);
			}
		};
		
		this.addSuccess = function(success, withoutMessage) {
			this.parent.kongregateUtils.score(success, 1);
			if (this.complete.indexOf(success) > -1) return false;
			
			this.complete.push(success);
			this.newList.push(success);
			this.saveManager.save("successComplete", this.complete);
			
			if (!withoutMessage) {
				this.parent.spaceView.ameliorationView.descriptionView.close();
			    this.parent.autelView.pierresView.detailView.close();
			    this.parent.queteView.detailView.close();
			    
			    var gainText = this.Textes.get("gainSuccess");
        		gainText = gainText.replace("{?}", this.Textes.get(success));
			    
        		this.mediatheque.playSound("success.ogg");
				this.parent.alertPopup(gainText, null, true);
			}
			return true;
		};
		
		this.init(parent);
	};
});