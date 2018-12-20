/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/utils/popupUtils",
        "text!app/template/game/game.html",
        "app/manager/textManager",
        "app/manager/eventManager",
        "app/manager/pointManager",
        "app/manager/recompenseManager",
        "app/manager/didactitielManager",
        "app/view/game/space/spaceView",
        "app/view/game/quete/queteView",
        "app/view/game/autel/autelView",
        "app/view/game/success/successView",
        "app/view/game/options/optionsInGameView",
        "app/view/game/artefacts/artefactsView",
        "app/view/game/constellation/constellationView",
        "app/view/game/endView"
        ],
function($, _, Utils, PopupUtils, page, TextManager, 
		EventManager, PointManager, 
		RecompenseManager, DidactitielManager,
		SpaceView, QueteView, 
		AutelView, SuccessView,
		OptionsInGameView, ArtefactsView,
		ConstellationView, EndView) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = $("#app");
			this.parent = parent;
		    this.Textes = parent.Textes;
			this.mediatheque = parent.mediatheque;
			this.kongregateUtils = parent.kongregateUtils;
			this.pause = false;
			this.endGame = false;
			this.lieu = "space";
			this.alertOpen = false;
			this.currentMousePos = {
					x: -1,
					y: -1
			};
			
			this.render();
			
			// Manager
			parent.scene.resize();
			this.saveManager = parent.saveManager;
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

            this.successView = new SuccessView(this);
            this.successView.render();

            this.optionsView = new OptionsInGameView(this);
            this.optionsView.render();
            
            this.artefactsView = new ArtefactsView(this);
            this.artefactsView.render();

            this.endView = new EndView(this);
            
            this.didactitielManager = new DidactitielManager(this);
            
            this.recompenseManager.reloadSuccess();

			if (!this.alreadyLoop) {
			    this.alreadyLoop = true;
                this.makeEvents();
                this.loop();
                this.renderLoop();
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
        
        this.renderLoop = function() {
        	var that = this;
        	if (!this.endGame) {
    		    if (!this.pause) {
        		    this.spaceView.renderLoop(this);
        		    this.queteView.renderLoop(this);
        		    this.autelView.loop(this);
        		    this.successView.loop(this);
    		    }
    		    
    		    setTimeout(function() {
                    that.renderLoop();
                }, 100);
        	}
        };
        
        this.gainLoop = function(multiplier, from) {
        	this.spaceView.ameliorationView.loop(this, multiplier, from);
        };
        
        this.gameOver = function(gagne) {
        	this.endGame = true;
            this.endView.render(gagne);
        };
        
        this.showConstellation = function(callback) {
        	this.lieu = "constellation";
        	$(".constellation-star").hide();
        	$(".constellation").show();
        	
        	setTimeout(function() {
        		$(".constellation").removeClass("zoom");
        		if(callback) callback();
        	}, 20);
        };
        this.showStar = function(star) {
        	if (this.lieu != "constellation") return;
        	
        	$(".constellation-star").hide();
        	var cible = star.attr("cible");
        	this.lieu = cible;
        	
        	$(".constellation").attr("cible", star.attr("class"));
        	if (!$(".constellation").hasClass("zoom"))
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
            this.eventManager.makeGeneralEvents();
            
            $(".text").click(function(e) {
            	e.preventDefault();
            	return true;
            });
            $(".text").bind('selectstart', function(e){
            	e.preventDefault();
            	return false;
            });
            $(document).mousemove(function(event) {
                that.currentMousePos.x = event.pageX;
                that.currentMousePos.y = event.pageY;
            });
        };
        
        /**
         * Appel la fonction permettant d'afficher une information
         */
        this.alertPopup = function(texte, callback, noButton) {
        	var that = this;
        	that.alertOpen = true;
        	PopupUtils.alert(this.Textes, texte, "suivant", function() {
        		that.alertOpen = false;
        		if (callback) callback();
        	}, noButton);
        };
		
		this.init(parent);
	};
});