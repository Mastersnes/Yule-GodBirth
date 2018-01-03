/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/game.html",
        "app/manager/sceneManager",
        "app/manager/textManager",
        "app/manager/eventManager",
        "app/manager/pointManager",
        "app/view/game/space/spaceView",
        "app/view/game/quete/queteView",
        "app/view/game/constellation/constellationView",
        "app/view/game/endView"
        ],
function($, _, Utils, page, 
		SceneManager, TextManager, EventManager, PointManager, 
		SpaceView, QueteView, ConstellationView, EndView) {
	'use strict';

	return function(parent, load, code, Textes, Mediatheque) {
		this.init = function(parent, load, code, Textes, Mediatheque) {
		    this.el = $("#app");
			this.Textes = Textes;
			this.mediatheque = Mediatheque;
			this.kongregateUtils = parent.kongregateUtils;
			this.pause = false;
			this.endGame = false;
			
			this.render(load, code);
			
			// Manager
            this.scene = new SceneManager(this);
            this.textManager = new TextManager(this);
            this.eventManager = new EventManager(this);
            this.pointManager = new PointManager(this);

            this.spaceView = new SpaceView(this);
            this.spaceView.render();

            this.constellationView = new ConstellationView(this);
            this.constellationView.render();

            this.queteView = new QueteView(this);
            this.queteView.render();

            this.endView = new EndView(this);


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
		    if (!this.endGame) {
    		    if (!this.pause) {
        		    this.spaceView.loop(this);
        		    this.queteView.loop(this);
        		    this.constellationView.loop(this);
                    this.eventManager.loop();
                    
                    if (this.pointManager.gameOver()) {
                        this.gameOver();
                    }
                }
                var that = this;
                setTimeout(function() {
                    that.loop();
                }, 1000);
		    }
        };
        
        this.gameOver = function() {
            this.endGame = true;
            this.endView.render();
        };
        
        this.showConstellation = function() {
        	$(".constellation-star").hide();
        	$(".constellation").show();
        	
        	setTimeout(function() {
        		$(".constellation").removeClass("zoom");
        	}, 10);
        };
        this.showStar = function(star) {
        	var cible = star.attr("cible");
        	
        	$(".constellation").attr("cible", star.attr("class"));
        	$(".constellation").addClass("zoom");
        	
        	var that = this;
        	setTimeout(function() {
            	$(".constellation").hide();
            	that[cible + "View"].show();
        	}, 1000);
        };
        
        this.makeEvents = function() {
            var that = this;
            
            this.spaceView.makeEvents();
            this.queteView.makeEvents();
            this.constellationView.makeEvents();
            
            $(".text").click(function() {return true;});
            $(".text").bind('selectstart', function(){return false;});
        };
		
		this.init(parent, load, code, Textes, Mediatheque);
	};
});