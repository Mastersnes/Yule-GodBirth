/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils, page) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "";
			this.parent = parent;
			
			this.kongregateUtils = parent.kongregateUtils;
			
			this.saveData = null;
			this.getSave();
		};
		
		this.getSave = function() {
			this.kongregateUtils.getStat("point");
		};

		this.init(parent);
	};
});