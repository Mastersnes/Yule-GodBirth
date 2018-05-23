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
			
			switch (this.compteurClick) {
				case 500 :
					this.addSuccess("success-500click");
					recompense.croyance += this.compteurClick;
					break;
				case 1000 :
					this.addSuccess("success-1000click");
					recompense.croyance += this.compteurClick;
					recompense.illumination += 1;
					break;
				case 5000 :
					this.addSuccess("success-5000click");
					recompense.croyance += this.compteurClick;
					recompense.illumination += 5;
					break;
				case 10000 :
					this.addSuccess("success-10000click");
					recompense.croyance += this.compteurClick;
					recompense.illumination += 10;
					break;
				case 50000 :
					this.addSuccess("success-50000click");
					recompense.croyance += this.compteurClick;
					recompense.illumination += 50;
					break;
				case 1000000 :
					this.addSuccess("success-1000000click");
					recompense.croyance += this.compteurClick;
					recompense.illumination += 100;
					break;
				case 50000000 :
					this.addSuccess("success-50000000click");
					recompense.croyance += this.compteurClick;
					recompense.illumination += 500;
					break;
				case 100000000 :
					recompense.croyance += this.compteurClick;
					recompense.illumination += 1000;
					break;
				case 500000000 :
					recompense.croyance += this.compteurClick;
					recompense.illumination += 5000;
					break;
				case 999000000 :
					recompense.croyance += this.compteurClick;
					recompense.illumination += 10000;
					break;
			}
			
			this.pointManager.addPoints(recompense);
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
			console.log("success : ", success);
			this.parent.kongregateUtils.score(success, 1);
			if (this.complete.indexOf(success) > -1) return;
			
			this.complete.push(success);
			this.saveManager.save("successComplete", this.complete);
			
			this.parent.spaceView.ameliorationView.descriptionView.close();
		    this.parent.autelView.pierresView.detailView.close();
		    this.parent.queteView.detailView.close();
		    
			this.parent.alertPopup(success);
		};
		
		this.init(parent);
	};
});