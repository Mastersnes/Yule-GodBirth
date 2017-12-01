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
			this.increment = {
			        croyance : {
			            click : 1,
			            loop : 0
			        },
			        illumination : {
			            click : 0,
			            loop : 0
			        }
			};
		};
		
		this.render = function() {
		    $("croyance .text").html(this.points.croyance);
		    $("croyance .img").attr("title", this.points.croyance);
		    
		    $("illumination .text").html(this.points.illumination);
		    $("illumination .img").attr("title", this.points.illumination);
		    if (this.points.illumination > 0) {
		        $("illumination").show();
		    }
		};
		
		this.loop = function() {
		    this.points.croyance += this.increment.croyance.loop;
		    this.points.illumination += this.increment.illumination.loop;
		    
		    this.render();
		};
		
		this.click = function() {
		    this.points.croyance += this.increment.croyance.click;
		    this.points.illumination += this.increment.illumination.click;
		    
		    this.render();
		};

		this.init(parent);
	};
});