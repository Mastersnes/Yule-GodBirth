'use strict';
define(["jquery"], function($){
	var data = {
			"planete" : new function() {
				this.level = 0;
				this.name = "planete";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : that.level+10,
	        			illumination : 0
	        		};
			    };
			    this.gain = function (lvl) {
	        		if (!lvl) lvl = this.level;
	        		return {
	        			click : {
	        				croyance : lvl*5,
	        				illumination : 0
	        			},
	        			loop : {
	        				croyance : 0,
	        				illumination : 0
	        			}
	        		};
	        	};
	        	
	        	this.loop = function(game) {
	        	    game.pointManager.addPoints(this.gain().loop);
	        	};
	        	this.click = function(game) {
	        	    game.pointManager.addPoints(this.gain().click);
	        	};
			},
			"test" : new function() {
				this.level = 0;
				this.name = "test";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : that.level+20,
	        			illumination : 0
	        		};
			    };
			    this.gain = function (lvl) {
			        if (!lvl) lvl = this.level+1;
	        		return {
	        			click : {
	        				croyance : lvl+5,
	        				illumination : 0
	        			},
	        			loop : {
	        				croyance : lvl,
	        				illumination : 0
	        			}
	        		};
	        	};
	        	
	        	this.loop = function(game) {
                };
                this.click = function(game) {
                    
                };
			},
			"test2" : new function() {
				this.level = 0;
				this.name = "test2";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : that.level+30,
	        			illumination : that.level+1
	        		};
			    };
			    this.gain = function (lvl) {
			        if (!lvl) lvl = this.level+1;
	        		return {
	        			click : {
	        				croyance : 0,
	        				illumination : 0
	        			},
	        			loop : {
	        				croyance : 0,
	        				illumination : lvl
	        			}
	        		};
	        	};
	        	
	        	this.loop = function(game) {
                };
                this.click = function(game) {
                    
                };
			}
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return data[key];
		},
		list : function() {
		    return data;
		}
	};
});
