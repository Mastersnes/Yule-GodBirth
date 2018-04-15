/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "text!app/template/game/game.html",
        "app/manager/sceneManager",
        "app/manager/textManager",
        "app/manager/eventManager",
        "app/manager/pointManager",
        "app/manager/recompenseManager",
        "app/manager/didactitielManager",
        "app/view/game/space/spaceView",
        "app/view/game/quete/queteView",
        "app/view/game/autel/autelView",
        "app/view/game/constellation/constellationView",
        "app/view/game/endView"
        ],
function($, _, Utils, page, 
		SceneManager, TextManager, 
		EventManager, PointManager, 
		RecompenseManager, DidactitielManager,
		SpaceView, QueteView, 
		AutelView, ConstellationView, EndView) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = $("#app");
			this.Textes = parent.Textes;
			this.mediatheque = parent.Mediatheque;
			this.kongregateUtils = parent.kongregateUtils;
			this.pause = false;
			this.endGame = false;
			this.lieu = "space";
			
			this.render();
			
			// Manager
			this.saveManager = parent.saveManager;
			
            this.scene = new SceneManager(this);
            this.textManager = new TextManager(this);
            this.eventManager = new EventManager(this);
            this.pointManager = new PointManager(this);
            this.recompenseManager = new RecompenseManager(this);

            this.spaceView = new SpaceView(this);
            this.spaceView.render();

            this.constellationView = new ConstellationView(this);
            this.constellationView.render();

            this.queteView = new QueteView(this);
            this.queteView.render();
            
            this.autelView = new AutelView(this);
            this.autelView.render();

            this.endView = new EndView(this);
            
            this.didactitielManager = new DidactitielManager(this);

			if (!this.alreadyLoop) {
			    this.alreadyLoop = true;
                this.makeEvents();
                this.loop();
            }
		};

		this.render = function(load) {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
		};
		
		this.loop = function() {
		    if (!this.endGame) {
    		    if (!this.pause) {
    		    	this.didactitielManager.loop();
        		    this.spaceView.loop(this);
        		    this.queteView.loop(this);
        		    this.autelView.loop(this);
        		    this.constellationView.loop(this);
                    this.eventManager.loop();
                    
                    this.saveManager.saveInSession();
                    
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
        	this.lieu = "constellation";
        	$(".constellation-star").hide();
        	$(".constellation").show();
        	
        	setTimeout(function() {
        		$(".constellation").removeClass("zoom");
        	}, 10);
        };
        this.showStar = function(star) {
        	var cible = star.attr("cible");
        	this.lieu = cible;
        	
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
            this.autelView.makeEvents();
            this.constellationView.makeEvents();
            this.didactitielManager.makeEvents();
            
            $(".text").click(function(e) {
            	e.preventDefault();
            	return true;
            });
            $(".text").bind('selectstart', function(e){
            	e.preventDefault();
            	return false;
            });
        };
		
		this.init(parent);
	};
});