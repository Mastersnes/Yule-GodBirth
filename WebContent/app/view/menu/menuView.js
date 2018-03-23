/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/utils/kongregateUtils",
        "app/data/textes",
        "app/utils/mediatheque",
        "app/manager/saveManager",
        "text!app/template/menu/menu.html",
        "app/view/game/gameView",
        "app/view/menu/loadView",
        "app/view/menu/optionView",
        "app/view/menu/creditView",
        "app/view/menu/partenaireView"], 
function($, _, Utils, Kongregate, Textes, Mediatheque, SaveManager, page, GameView, LoadView, OptionView, CreditView, PartenaireView) {
	'use strict';

	return function() {
		this.init = function() {
		    this.el = $("#app");
            this.mediatheque = new Mediatheque();
            this.mediatheque.play("music/menu.mp3");
            this.kongregateUtils = new Kongregate(Textes);
            this.saveManager = new SaveManager();
            
            var that = this;
			if (window.location.href.indexOf("kongregate") > -1) {
	            console.log("kongregate Load");
				this.kongregateUtils.load(function() {
	            	that.render();
	            });
			}else {
				console.log("Pas sur kongregate !");
				this.render();
			}
		};

		this.render = function() {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			
			var saveExists = this.saveManager.getSave() != null;
			
			var templateData = {
					text : Textes,
					saveExists : saveExists
			};
			this.el.html(template(templateData));
			this.kongregateUtils.render();
			
			this.makeEvents();
			
			setTimeout(function() {
				$(".bebel").fadeOut("slow");
				$(".preload").empty();
			}, 1000);
		};
		
		this.makeEvents = function() {
			var that = this;
			$("#new").click(function() {
			    PopupUtils.confirm("eraseSave", function() {
			        
			    }, function() {
			        
			    })
			    that.saveManager.eraseSave();
				that.loadGame();
			});
			$("#load").click(function() {
			    that.loadGame();
			});
			$("#option").click(function() {
				new OptionView(that, Textes).show();
			});
			$("#credit").click(function() {
				new CreditView(Textes).show();
			});
			$("#partenaire").click(function() {
				new PartenaireView(Textes).show();
			});
			
			$("#login").click(function() {
				that.kongregateUtils.login();
			});
		};
		
		this.loadGame = function() {
			new GameView(this);
		};
		
		this.init();
	};
});