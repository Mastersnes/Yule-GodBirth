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
		    $("croyance .text").html(this.points.croyance);
		    $("croyance .img").attr("title", this.Textes.get("croyance") + this.points.croyance);
		    
		    $("illumination .text").html(this.points.illumination);
		    $("illumination .img").attr("title", this.Textes.get("illumination") + this.points.illumination);
		    if (this.points.illumination > 0) $("illumination").show();

		    $("bien .text").html(this.points.bien);
		    $("bien .img").attr("title", this.Textes.get("bien") + this.points.bien);
		    if (this.points.bien > 0) $("bien").show();
		    
		    $("mal .text").html(this.points.mal);
		    $("mal .img").attr("title", this.Textes.get("mal") + this.points.mal);
		    if (this.points.mal > 0) $("mal").show();
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
		
		this.depenser = function(prix) {
		    if (this.points.croyance >= prix.croyance && this.points.illumination >= prix.illumination) {
		        this.points.croyance -= prix.croyance;
		        this.points.illumination -= prix.illumination;
		        this.render();
		        return true;
		    }
		    return false;
		};
		
		this.gameOver = function() {
		    return (this.points.bien * this.points.mal) <= 0;
		};
		
		this.init(parent);
	};
});