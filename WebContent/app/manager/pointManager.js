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
			        illumination : 0
			};
		};
		
		this.render = function() {
		    $("croyance .text").html(this.points.croyance);
		    $("croyance .img").attr("title", this.Textes.get("croyance") + this.points.croyance);
		    
		    $("illumination .text").html(this.points.illumination);
		    $("illumination .img").attr("title", this.Textes.get("illumination") + this.points.illumination);
		    if (this.points.illumination > 0) {
		        $("illumination").show();
		    }
		};
		
		this.addPoints = function(points) {
		    this.points.croyance += points.croyance;
		    this.points.illumination += points.illumination;
		    
		    this.render();
		};
		
		this.init(parent);
	};
});