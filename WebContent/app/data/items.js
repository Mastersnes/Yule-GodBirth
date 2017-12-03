'use strict';
define(["jquery"], function($){
	var data = {
			"planete" : function() {
				this.level = 0;
				this.name = "planete";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : that.level+10,
	        			illumination : 0
	        		};
			    };
			    this.gain = function () {
	        		var that = this;
	        		return {
	        			click : {
	        				croyance : that.level*5,
	        				illumination : 0
	        			},
	        			loop : {
	        				croyance : 0,
	        				illumination : 0
	        			}
	        		};
	        	};
			},
			"test" : function() {
				this.level = 0;
				this.name = "test";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : that.level+20,
	        			illumination : 0
	        		};
			    };
			    this.gain = function () {
	        		var that = this;
	        		return {
	        			click : {
	        				croyance : 0,
	        				illumination : 0
	        			},
	        			loop : {
	        				croyance : that.level,
	        				illumination : 0
	        			}
	        		};
	        	};
			},
			"test2" : function() {
				this.level = 0;
				this.name = "test2";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : that.level+30,
	        			illumination : that.level
	        		};
			    };
			    this.gain = function () {
	        		var that = this;
	        		return {
	        			click : {
	        				croyance : 0,
	        				illumination : 0
	        			},
	        			loop : {
	        				croyance : 0,
	        				illumination : that.level
	        			}
	        		};
	        	};
			}
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return data[key];
//			return $.extend(true, {}, data[key]);
		}
	};
});
