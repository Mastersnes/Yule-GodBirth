/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/game.html",
        "app/view/game/sceneView",
        "app/view/game/spaceView"],
function($, _, Utils, page, Scene, SpaceView) {
	'use strict';

	return function(parent, load, code, Textes, Mediatheque) {
		this.init = function(parent, load, code, Textes, Mediatheque) {
		    this.el = $("#app");
			this.Textes = Textes;
			this.mediatheque = Mediatheque;
			this.kongregateUtils = parent.kongregateUtils;
			
			this.scene = new Scene(this);
			this.spaceView = new SpaceView(this);
			
			this.render(load, code);
			
			if (!this.alreadyLoop) {
			    this.alreadyLoop = true;
                this.makeEvents();
                this.loop();
            }
		};

		this.render = function(load, code) {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
			
			var save;
			if (code) save = JSON.parse(Utils.decode(code));
			else if (load) {
				var saveSession = window.localStorage.getItem(Utils.name);
				if (saveSession) save = JSON.parse(Utils.decode(saveSession));
			}
			
			if (save && save.lieu) {
			    /**LOAD**/
			} else {
			    /**NEW_GAME**/
			}
		};
		
		this.loop = function() {
            this.spaceView.loop();
            
            var that = this;
            setTimeout(function() {
                that.loop();
            }, 30);
        };
        
        this.makeEvents = function() {
            var that = this;
            
            this.scene.makeEvents();
            this.spaceView.makeEvents();
        };
		
		this.init(parent, load, code, Textes, Mediatheque);
	};
});