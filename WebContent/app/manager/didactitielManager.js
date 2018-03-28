/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "#didactitiel";
			this.parent = parent;
			this.step = 0;
			this.Textes = parent.Textes;
			
			this.pointManager = parent.pointManager;
			this.textManager = parent.textManager;
			this.ameliorationView = parent.spaceView.ameliorationView;
		};
		
		this.loop = function() {
			$(this.el).hide();
			$(this.el).find(".step").hide();
			switch (this.step) {
				case 0 :
					$(this.el).show();
					if (this.pointManager.points.croyance == 0) {
						$(this.el).find(".step.block-amelioration").show();
					}
					if (this.textManager.currentTextId() == "didactitiel3") {
						$(this.el).find(".step.fleche-barre").show();
					}
					break;
			}
		};
		
		this.click = function() {
			switch (this.step) {
				case 0 :
					if (this.textManager.ids[this.textManager.current] == "didactitiel3") {
						this.step = 1;
						this.pointManager.addPoints({
							croyance : 1,
							illumination : 0,
							bien : 0,
							mal : 0
						});
					}
					break;
			}
		};
		
		this.makeEvents = function() {
			var that = this;
			$("body").click(function() {
				that.click();
			});
		};
		
		this.init(parent);
	};
});