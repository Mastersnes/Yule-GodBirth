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
		};
		
		this.addClick = function() {
			if (this.compteurClick >= 1000000000) return;
			this.compteurClick++;
			this.saveManager.save("compteurClick");
			var recompense = {
				croyance : 0,
				illumination : 0,
				bien : 0,
				mal : 0
			};
			
			/**
			 * Tout les 100 cliques on gagne 1 point d'illumination
			 */
			if (this.compteurClick % 500 == 0) {
				recompense.illumination += 1;
			}
			
			switch (this.compteurClick) {
				case 500 :
					recompense.croyance += this.compteurClick;
					break;
				case 1000 :
					recompense.croyance += this.compteurClick;
					recompense.illumination += 1;
					break;
				case 5000 :
					recompense.croyance += this.compteurClick;
					recompense.illumination += 5;
					break;
				case 10000 :
					recompense.croyance += this.compteurClick;
					recompense.illumination += 10;
					break;
				case 50000 :
					recompense.croyance += this.compteurClick;
					recompense.illumination += 50;
					break;
				case 1000000 :
					recompense.croyance += this.compteurClick;
					recompense.illumination += 100;
					break;
				case 50000000 :
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
		
		this.init(parent);
	};
});