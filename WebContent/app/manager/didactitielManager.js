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
			
			this.blocker = {
				ameliorations : true,
				constellations : true
			};
			this.indication = {
					barre : false
			};
		};
		
		this.loop = function() {
//			$(this.el).hide();
//			$(this.el).find(".step").hide();
//			
//			if (this.blocker.ameliorations) {
//				$(this.el).find(".step.block-ameliorations").show();
//			}
//			if (this.blocker.constellations) {
//				$(this.el).find(".step.block-constellations").show();
//			}
//			if (this.indication.barre) {
//				$(this.el).find(".step.fleche-barre").show();
//			}
		};
		
		this.click = function() {
//			switch (this.step) {
//				case 0 :
//					if (this.textManager.ids[this.textManager.current] == "didactitiel5") {
//						this.step = 1;
//						this.pointManager.addPoints({
//							croyance : 10,
//							illumination : 0,
//							bien : 0,
//							mal : 0
//						});
//					}
//					break;
//			}
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