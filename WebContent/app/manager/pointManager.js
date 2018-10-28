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
			var notationCourte = this.isNotationCourte();
		    $(this.el).find("croyance .text").html(Utils.format(this.points.croyance, notationCourte, this.Textes));
		    
		    $(this.el).find("illumination .text").html(Utils.format(this.points.illumination, notationCourte, this.Textes));
		    if (this.points.illumination > 0) $(this.el).find("illumination").show();
		    else $(this.el).find("illumination").hide();

		    if (this.parent.artefactsView.checkHad("troisieme-oeil")) {
			    $(this.el).find("bien .text").html(Utils.format(this.points.bien, notationCourte, this.Textes));
			    $(this.el).find("mal .text").html(Utils.format(this.points.mal, notationCourte, this.Textes));
		    }
		    
		    var total = this.points.bien + this.points.mal;
		    var bienPercent = Utils.toPercent(this.points.bien, total);
		    
		    $(this.el).find("jauge yang").css({
		    	width : bienPercent + "%"
		    });
		    $(this.el).find("jauge yinyang").css({
		    	left : (bienPercent - 2.25) + "%"
		    });
		};
		
		this.isNotationCourte = function() {
			return this.saveManager.load("options")["notation-courte"];
		};
		
		/**
		 * Definie les avantages
		 */
		this.setAvantages = function(avantages, id) {
			this.avantages[id] = avantages;
			this.saveManager.save("avantages", this.avantages);
		};
		
		/**
		 * Ajoute les points
		 */
		this.addPoints = function(points, multiplierParam) {
			var multiplier = {
					croyance : 1,
					illumination : 1,
					bien : 1,
					mal : 1
			};
			if(multiplierParam) {
				if (multiplierParam.croyance != undefined) multiplier = multiplierParam;
				else {
					multiplier.croyance = multiplierParam;
					multiplier.illumination = multiplierParam;
					multiplier.bien = multiplierParam;
					multiplier.mal = multiplierParam;
				}
			}
			
			var avantages = {
					"croyance" : 0,
					"illumination" : 0,
					"bien" : 0,
					"mal" : 0
			};
			
			for (var indexAvantage in this.avantages) {
				var currentAvantage = this.avantages[indexAvantage];
				avantages.croyance += currentAvantage.croyance;
				avantages.illumination += currentAvantage.illumination;
				avantages.bien += currentAvantage.bien;
				avantages.mal += currentAvantage.mal;
			}
			
			var maxPoint = Math.pow(10, 12);
		    if (points.croyance) {
		        if (points.croyance < maxPoint) {
    		    	this.points.croyance += ((points.croyance + parseInt(Utils.percent(points.croyance, avantages.croyance))) * multiplier.croyance);
    		    	if (this.points.croyance < 0) this.points.croyance = 0;
		        }
		    }
		    if (points.illumination) {
		        if (points.illumination < maxPoint) {
    		    	this.points.illumination += ((points.illumination + parseInt(Utils.percent(points.illumination, avantages.illumination))) * multiplier.illumination);
    		    	if (this.points.illumination < 0) this.points.illumination = 0;
		        }
		    }
		    if (points.bien) {
    		    if (points.bien < maxPoint) {
    			    this.points.bien += ((points.bien + parseInt(Utils.percent(points.bien, avantages.bien))) * multiplier.bien);
    			    if (this.points.bien < 0) this.points.bien = 0;
    		    }
		    }
		    if (points.mal) {
    		    if (points.mal < maxPoint) {
    			    this.points.mal += ((points.mal + parseInt(Utils.percent(points.mal, avantages.mal))) * multiplier.mal);
    			    if (this.points.mal < 0) this.points.mal = 0;
    			}
		    }
		    
		    if (this.points.bien > 1000000 && this.points.mal > 1000000) {
		    	this.points.bien = parseInt(this.points.bien / 10);
		    	this.points.mal = parseInt(this.points.mal / 10);
		    }
		    
		    this.saveManager.save("points", this.points);		    
		    this.saveManager.saveMaxPoints(this.points);
		    
		    this.parent.kongregateUtils.score("maxCroyance", this.points.croyance);
		    this.parent.kongregateUtils.score("maxIllumination", this.points.illumination);
		    this.parent.kongregateUtils.score("maxBien", this.points.bien);
		    this.parent.kongregateUtils.score("maxMal", this.points.mal);
		    
		    this.render();
		};
		
		/**
         * Ajoute les points en pourcentage
         */
        this.addPointsPercent = function(points) {
        	var that = this;
            this.addPoints({
                croyance : parseInt(Utils.percent(that.points.croyance, points.croyance)),
                illumination : parseInt(Utils.percent(that.points.illumination, points.illumination)),
                bien : parseInt(Utils.percent(that.points.bien, points.bien)),
                mal : parseInt(Utils.percent(that.points.mal, points.mal))
            });
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
		
		this.depenserPercent = function(prix) {
		    var that = this;
             var prix = {
                 croyance : parseInt(Utils.percent(that.points.croyance, prix.croyance)),
                 illumination : parseInt(Utils.percent(that.points.illumination, prix.illumination))
             };
		    
            return this.depenser(prix);
        };
		
		/**
		 * Condition de gameOver si le bien ou le mal prennent le pas l'un sur l'autre
		 */
		this.gameOver = function() {
			var perdu = this.points.bien * this.points.mal <= 0;
			var bienGagne = this.points.bien > (5 * this.points.mal);
			var malGagne = this.points.mal > (5 * this.points.bien);
			
			return perdu || bienGagne || malGagne;
		};
		
		this.init(parent);
	};
});