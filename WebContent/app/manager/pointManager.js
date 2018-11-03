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
		this.addPoints = function(points, multiplierParam, from) {
			var gainsPertes = {
					"croyance" : 0,
					"illumination" : 0
			};
			if (points.croyance == 0 && points.illumination == 0 && points.bien == 0 && points.mal == 0) return gainsPertes;
			
			
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
			
			gainsPertes.croyance = this.incrementPoints(points, avantages, multiplier, "croyance", from);
			gainsPertes.illumination = this.incrementPoints(points, avantages, multiplier, "illumination", from);
			this.incrementPoints(points, avantages, multiplier, "bien", from);
			this.incrementPoints(points, avantages, multiplier, "mal", from);
			
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
		    
		    return gainsPertes;
		};
		
		this.incrementPoints = function(points, avantages, multiplier, key, from) {
			if (!points[key]) return 0;
			if (points[key] > Math.pow(10, 12)) return 0;
			
			var gainPerte = 0;
			if (points[key] < 0) {
				gainPerte += (points[key] * multiplier[key]);
			}else {
				gainPerte += ((points[key] + parseInt(Utils.percent(points[key], avantages[key]))) * multiplier[key]);
			}
			
			if (from == "quete") this.launchAnimQuete(gainPerte, key);
			
			this.points[key] += gainPerte;
			if (this.points[key] < 0) this.points[key] = 0;
			
			return gainPerte;
		};
		
		/**
		 * Si on vient des quetes, on affiche l'animation de gain/perte
		 */
		this.launchAnimQuete = function(gainPerte, key) {
			var that = this;
			if (gainPerte > 0) {
				$(this.el).find(key).addClass("gain");
				$(this.el).find(key).find(".icon").html("+");
			}else if (gainPerte < 0) {
				$(this.el).find(key).addClass("perte");
				$(this.el).find(key).find(".icon").html("-");
			}
			setTimeout(function() {
				$(that.el).find(key).removeClass("gain");
				$(that.el).find(key).removeClass("perte");
            }, 500);
		};

		/**
		 * Si on vient des clicks
		 */
		this.launchAnimClick = function(gainsPertes) {
			var mouse = this.parent.currentMousePos;
			if (mouse.x == -1) return;
			
			var clickDom = $("#app").find("clickanim.hidden").first();
			if (clickDom.length == 0) return;
			clickDom.css({
				left: mouse.x,
				top: mouse.y
			});
			
			var signe;
			if (gainsPertes.croyance != 0) {
				signe = gainsPertes.croyance>0?"+":"-";
				clickDom.find("croyance").show();
				clickDom.find("croyance .text").html(signe + gainsPertes.croyance);
			}else clickDom.find("croyance").hide();
			if (gainsPertes.illumination != 0) {
				signe = gainsPertes.illumination>0?"+":"-";
				clickDom.find("illumination").show();
				clickDom.find("illumination .text").html(signe + gainsPertes.illumination);
			}else clickDom.find("illumination").hide();
			
			clickDom.removeClass("hidden");
			$("#app").append(clickDom);
			
			setTimeout(function() {
				clickDom.addClass("goTop");
            }, 30);
			setTimeout(function() {
				clickDom.removeClass("goTop");
				clickDom.addClass("hidden");
            }, 500);
		};
		
		/**
         * Ajoute les points en pourcentage
         */
        this.addPointsPercent = function(points, from) {
        	var that = this;
            this.addPoints({
                croyance : parseInt(Utils.percent(that.points.croyance, points.croyance)),
                illumination : parseInt(Utils.percent(that.points.illumination, points.illumination)),
                bien : parseInt(Utils.percent(that.points.bien, points.bien)),
                mal : parseInt(Utils.percent(that.points.mal, points.mal))
            }, null, from);
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