'use strict';
define(["jquery", "app/utils/utils", "app/data/kongregateStats", "kongregate"], function($, Utils, Stats){
	return function(Textes){
		this.init = function(Textes) {
			this.Textes = Textes;
			this.isLoad = false;
			this.username = null;
			this.isGuest = true;
		};
		
		this.load = function(callback) {
			var that = this;
            kongregateAPI.loadAPI(function(){
			    that.isLoad = true;
            	that.kongregate = kongregateAPI.getAPI();
			    callback.call();
			});
		};
		
		this.render = function() {
			if (!this.isLoad) return;
			
			var isGuest = this.isGuest;
			var username = this.username;
			if (isGuest) username = this.Textes.get("guest");
			
			$(".username").html(this.Textes.get("bienvenue") + " " + username);
			
			$(".username").removeClass("hidden");
			if (isGuest) $("#login").removeClass("hidden");
			else $("#login").addClass("hidden");
		};
		
		this.score = function(key, value) {
			if (!this.isLoad) return;
			
			this.kongregate.stats.submit(key, value);
		};
		
		this.getScore = function(key) {
			var that = this;
			var statId = Stats.get(key);
			if (!(this.isLoad && this.username && statId)) return null;
			
			Utils.load("https://api.kongregate.com/api/high_scores/lifetime/"+statId+".json", null, function(data) {
				if (!data) return null;
				for (var index in data.lifetime_scores) {
					var scoreData = data.lifetime_scores[index];
					if (scoreData.username == that.username) {
						return scoreData.score;
					}
				}
				return null;
			});
		};
		
		this.login = function() {
			console.log("login");
			if (!this.isLoad) return;
			
			var that = this;
			this.kongregate.services.addEventListener('login', function(){
				that.username = that.kongregate.services.getUsername();
            	console.log('Kongregate username changed to: ' + that.username);
            	$(".username").html(that.username);
            	that.isGuest = that.kongregate.services.isGuest();
            	if (!isGuest) {
            		$("#login").addClass("hidden");
            	}
            });
			this.kongregate.services.showRegistrationBox();
		};
		
		this.init(Textes);
	};
});