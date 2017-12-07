/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/game.html",
        "app/manager/sceneManager",
        "app/manager/textManager",
        "app/manager/eventManager",
        "app/manager/pointManager",
        "app/view/game/spaceView",
        "app/view/game/ameliorationView"],
function($, _, Utils, page, 
		SceneManager, TextManager, EventManager, PointManager, 
		SpaceView, AmeliorationView) {
	'use strict';

	return function(parent, load, code, Textes, Mediatheque) {
		this.init = function(parent, load, code, Textes, Mediatheque) {
		    this.el = $("#app");
			this.Textes = Textes;
			this.mediatheque = Mediatheque;
			this.kongregateUtils = parent.kongregateUtils;
			this.pause = false;
			
			this.render(load, code);
			
			// Manager
            this.scene = new SceneManager(this);
            this.textManager = new TextManager(this);
            this.eventManager = new EventManager(this);
            this.pointManager = new PointManager(this);

            this.ameliorationView = new AmeliorationView(this);
            this.ameliorationView.render();
            
            this.spaceView = new SpaceView(this);
            this.spaceView.render();


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
            if (!this.pause) {
    		    this.spaceView.loop();
                this.eventManager.loop();
                this.ameliorationView.loop(this);
            }
            var that = this;
            setTimeout(function() {
                that.loop();
            }, 1000);
        };
        
        this.click = function() {
            this.ameliorationView.click(this);
        };
        
        this.makeEvents = function() {
            var that = this;
            
            this.spaceView.makeEvents();
            
            $(".text").click(function() {
            	return true;
            });
            $(".text").bind('selectstart', function(){
            	return false;
            });
        };
		
		this.init(parent, load, code, Textes, Mediatheque);
	};
});