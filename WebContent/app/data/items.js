'use strict';
define(["jquery"], function($){
	var data = {
			"cernunos" : new function() {
				this.level = 1;
				this.name = "cernunos";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : that.level,
	        			illumination : 0
	        		};
			    };
			    this.gain = function (lvl) {
	        		if (!lvl) lvl = this.level;
	        		return {
	        			click : {
	        				croyance : lvl,
	        				illumination : lvl,
	        				bien : lvl,
	        				mal : -lvl
	        			},
	        			loop : {
	        				croyance : 0,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
	        			}
	        		};
	        	};
			},
			"gaia" : new function() {
				this.level = 0;
				this.name = "gaia";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : (that.level+1)*100,
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
                            mal : 0
	        			}
	        		};
	        	};
	        	this.unlock = function(ameliorations) {
	        		ameliorations.unlockOnglet("gaia");
	        	};
			},
			"hecate" : new function() {
				this.level = 0;
				this.name = "hecate";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : (that.level+1)*10,
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
	        				croyance : 0,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
	        			}
	        		};
	        	};
			},
			"selene" : new function() {
				this.level = 0;
				this.name = "selene";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : (that.level+1)*10,
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
	        				croyance : 0,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
	        			}
	        		};
	        	};
			},
			"gaia-1" : new function() {
				this.level = 0;
				this.name = "gaia-1";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : (that.level+1)*10,
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
	        				croyance : 0,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
	        			}
	        		};
	        	};
			},
			"gaia-2" : new function() {
				this.level = 0;
				this.name = "gaia-2";
				
				this.prix = function () {
					var that = this;
					return {
	        			croyance : (that.level+1)*10,
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
	        				croyance : 0,
	        				illumination : 0,
                            bien : 0,
                            mal : 0
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
		},
		list : function() {
		    return data;
		}
	};
});
