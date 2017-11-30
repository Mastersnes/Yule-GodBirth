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
			        connaissance : 0,
			        illumination : 0
			};
			this.increment = {
			        
			};
		};
		
		this.loop = function() {
		    
		};

		this.init(parent);
	};
});