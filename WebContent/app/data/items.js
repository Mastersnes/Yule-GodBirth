'use strict';
define(["jquery"], function($){
	var data = {
			"grandTout" : new function() {
				this.level = 1;
				this.name = "grandTout";
				
				this.restriction = function () {
					var lvl = this.level+1;
					return [{
						name : "dieu",
						level : lvl
					},{
						name : "deesse",
						level : lvl
					}];
			    };
				this.prix = function () {
					var lvl = this.level+1;
					return {
	        			croyance : lvl*10,
	        			illumination : 0
	        		};
			    };
			    this.gain = function (lvl) {
	        		if (!lvl) lvl = this.level;
	        		return {
	        			click : {
	        				croyance : lvl*20,
	        				illumination : lvl*30,
	        				bien : lvl*10,
	        				mal : -lvl*20
	        			},
	        			loop : {
	        				croyance : lvl*10,
	        				illumination : lvl*200,
                            bien : 0,
                            mal : 0
	        			}
	        		};
	        	};
	        	this.select = function(game, ameliorations) {
	        	};
			},
			"dieu" : new function() {
				this.level = 0;
				this.name = "dieu";
				
				this.restriction = function () {};
				this.prix = function () {
					var lvl = this.level+1;
					return {
	        			croyance : lvl*2,
	        			illumination : 0
	        		};
			    };
			    this.gain = function (lvl) {
	        		if (!lvl) lvl = this.level;
	        		return {
	        			click : {
	        				croyance : 0,
	        				illumination : 0,
	        				bien : 0,
	        				mal : 0
	        			},
	        			loop : {
	        				croyance : lvl,
	        				illumination : 0,
	        				bien : 0,
	        				mal : lvl
	        			}
	        		};
	        	};
	        	this.select = function(game, ameliorations) {
	        	};
			},
			"deesse" : new function() {
				this.level = 0;
				this.name = "deesse";
				
				this.restriction = function () {};
				this.prix = function () {
					var lvl = this.level+1;
					return {
	        			croyance : lvl*3,
	        			illumination : 0
	        		};
			    };
			    this.gain = function (lvl) {
	        		if (!lvl) lvl = this.level;
	        		return {
	        			click : {
	        				croyance : lvl,
	        				illumination : 0,
	        				bien : 0,
	        				mal : 0
	        			},
	        			loop : {
	        				croyance : lvl,
	        				illumination : 0,
	        				bien : lvl,
	        				mal : 0
	        			}
	        		};
	        	};
	        	this.select = function(game, ameliorations) {
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
