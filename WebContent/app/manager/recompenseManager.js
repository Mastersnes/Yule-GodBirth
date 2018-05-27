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
			
			this.compteurClick = this.saveManager.load("compteurClick");
			this.complete = this.saveManager.load("successComplete");
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
			
			this.pointManager.addPoints(recompense);
		};
		
		/**
		 * Verifie si le succes doit etre ajouté
		 */
		this.checkClickSuccess = function(limit, gainCroyance, gainIllumination, recompense) {
			if (this.compteurClick >= limit) {
				if (this.addSuccess("success-"+limit+"click")) {
					recompense.croyance += gainCroyance;
					recompense.illumination += gainIllumination;
				}
			}
		};
		
		/**
		 * On revalide les success pour eviter toute perte
		 */
		this.reloadSuccess = function() {
			for (var index in this.complete) {
				var success = this.complete[index];
				this.addSuccess(success);
			}
		};
		
		this.addSuccess = function(success) {
			this.parent.kongregateUtils.score(success, 1);
			if (this.complete.indexOf(success) > -1) return false;
			
			this.complete.push(success);
			this.saveManager.save("successComplete", this.complete);
			
			this.parent.spaceView.ameliorationView.descriptionView.close();
		    this.parent.autelView.pierresView.detailView.close();
		    this.parent.queteView.detailView.close();
		    
			this.parent.alertPopup(success, null, true);
			return true;
		};
		
		this.init(parent);
	};
});