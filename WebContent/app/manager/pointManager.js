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
		    $("croyance .text").html(Utils.format(this.points.croyance, true, this.Textes));
		    
		    $("illumination .text").html(Utils.format(this.points.illumination, true, this.Textes));
		    if (this.points.illumination > 0) $("illumination").show();

		    $("bien .text").html(Utils.format(this.points.bien, true, this.Textes));
		    if (this.points.bien > 0) $("bien").show();
		    
		    $("mal .text").html(Utils.format(this.points.mal, true, this.Textes));
		    if (this.points.mal > 0) $("mal").show();
		    
		    var total = this.points.bien + this.points.mal;
		    var bienPercent = Utils.toPercent(this.points.bien, total);
		    
		    $("jauge yang").css({
		    	width : bienPercent + "%"
		    });
		    $("jauge yinyang").css({
		    	left : (bienPercent - 2.25) + "%"
		    });
		};
		
		this.addPoints = function(points) {
		    this.points.croyance += points.croyance;
		    this.points.illumination += points.illumination;
		    this.points.bien += points.bien;
		    if (this.points.bien < 0) this.points.bien = 0;
		    this.points.mal += points.mal;
		    if (this.points.mal < 0) this.points.mal = 0;
		    
		    this.render();
		};
		
		this.checkOk = function(prix) {
		    if (this.points.croyance >= prix.croyance && this.points.illumination >= prix.illumination) {
		        return true;
		    }
		    return false;
		};
		this.depenser = function(prix) {
		    if (this.checkOk(prix)) {
		        this.points.croyance -= prix.croyance;
		        this.points.illumination -= prix.illumination;
		        this.render();
		        return true;
		    }
		    return false;
		};
		
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