/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "#points";
			this.parent = parent;
			this.Textes = parent.Textes;
			
			this.points = {
			        croyance : 0,
			        illumination : 0,
			        bien : 100,
			        mal : 100
			};
		};
		
		this.render = function() {
		    $(this.el).find("croyance .text").html(Utils.format(this.points.croyance, true, this.Textes));
		    
		    $(this.el).find("illumination .text").html(Utils.format(this.points.illumination, true, this.Textes));
		    if (this.points.illumination > 0) $(this.el).find("illumination").show();

		    var total = this.points.bien + this.points.mal;
		    var bienPercent = Utils.toPercent(this.points.bien, total);
		    
		    $(this.el).find("jauge yang").css({
		    	width : bienPercent + "%"
		    });
		    $(this.el).find("jauge yinyang").css({
		    	left : (bienPercent - 2.25) + "%"
		    });
		};
		
		/**
		 * Ajoute les points
		 */
		this.addPoints = function(points) {
			var maxPoint = Math.pow(10, 12);
		    if (points.croyance && points.croyance < maxPoint) this.points.croyance += points.croyance;
		    if (points.illumination && points.illumination < maxPoint) this.points.illumination += points.illumination;
		    if (points.bien && points.bien < maxPoint) {
			    this.points.bien += points.bien;
			    if (this.points.bien < 0) this.points.bien = 0;
		    }
		    if (points.mal && points.mal < maxPoint) {
			    this.points.mal += points.mal;
			    if (this.points.mal < 0) this.points.mal = 0;
			}
		    
		    this.render();
		};
		
		/**
		 * Verifie si l'on assez pour ce prix
		 */
		this.checkOk = function(prix) {
		    if (this.points.croyance >= prix.croyance && this.points.illumination >= prix.illumination) {
		        return true;
		    }
		    return false;
		};
		
		/**
		 * Depense les points que l'on a en fonction du prix
		 */
		this.depenser = function(prix) {
		    if (this.checkOk(prix)) {
		        this.points.croyance -= prix.croyance;
		        this.points.illumination -= prix.illumination;
		        this.render();
		        return true;
		    }
		    return false;
		};
		
		/**
		 * Condition de gameOver si le bien ou le mal prennent le pas l'un sur l'autre
		 */
		this.gameOver = function() {
			var total = this.points.bien + this.points.mal;
		    var bienPercent = Utils.toPercent(this.points.bien, total);
			
			return ((this.points.bien * this.points.mal) <= 0) 
			|| bienPercent > 90
			|| bienPercent < 10;
		};
		
		this.init(parent);
	};
});