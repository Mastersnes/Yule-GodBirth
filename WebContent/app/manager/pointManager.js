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
			this.saveManager = parent.saveManager;
			
			this.points = this.saveManager.load("points");
			this.avantages = this.saveManager.load("avantages");
		};
		
		this.render = function() {
		    $(this.el).find("croyance .text").html(Utils.format(this.points.croyance, true, this.Textes));
		    
		    $(this.el).find("illumination .text").html(Utils.format(this.points.illumination, true, this.Textes));
		    if (this.points.illumination > 0) $(this.el).find("illumination").show();

//		    $(this.el).find("bien .text").html(this.points.bien);
//		    $(this.el).find("mal .text").html(this.points.mal);

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
		 * Definie les avantages
		 */
		this.setAvantages = function(avantages) {
			this.avantages = avantages;
			this.saveManager.save("avantages", this.avantages);
		};
		
		/**
		 * Ajoute les points
		 */
		this.addPoints = function(points) {
			var avantages = this.avantages;
			
			var maxPoint = Math.pow(10, 12);
		    if (points.croyance && points.croyance < maxPoint) {
		    	this.points.croyance += points.croyance + parseInt(Utils.percent(points.croyance, avantages.croyance));
		    }
		    if (points.illumination && points.illumination < maxPoint) {
		    	this.points.illumination += points.illumination + parseInt(Utils.percent(points.illumination, avantages.illumination));
		    }
		    if (points.bien && points.bien < maxPoint) {
			    this.points.bien += points.bien + parseInt(Utils.percent(points.bien, avantages.bien));
			    if (this.points.bien < 0) this.points.bien = 0;
		    }
		    if (points.mal && points.mal < maxPoint) {
			    this.points.mal += points.mal + parseInt(Utils.percent(points.mal, avantages.mal));
			    if (this.points.mal < 0) this.points.mal = 0;
			}
		    
		    if (this.points.bien > 1000000 && this.points.mal > 1000000) {
		    	this.points.bien = parseInt(this.points.bien / 10);
		    	this.points.mal = parseInt(this.points.mal / 10);
		    }
		    
		    this.saveManager.save("points", this.points);
		    this.saveManager.saveMaxPoints(this.points);
		    
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
			var perdu = this.points.bien * this.points.mal <= 0;
			var bienGagne = this.points.bien > 4 * this.points.mal;
			var malGagne = this.points.mal > 4 * this.points.bien;
			
			return perdu || bienGagne || malGagne;
		};
		
		this.init(parent);
	};
});