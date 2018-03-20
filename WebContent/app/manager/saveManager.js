/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(parent) {
	    this.init = function(parent) {
			this.el = "";
			this.parent = parent;
			
			this.saveData = {
			        "points" : {
			            "croyance" : null,
			            "illumination" : null,
			            "bien" : null,
			            "mal" : null
			        },
			        "maxPoints" : {
			            "croyance" : null,
			            "illumination" : null,
			            "bien" : null,
			            "mal" : null
			        },
			        "quetesComplete" : [],
			        "eventsComplete" : [],
			        "compteurClick" : 0,
			        "pierres" : {},
			        "ameliorations" : {
			            "grandTout" : 0, 
			            "dieu" : 0, 
			            "deesse" : 0,
			            "terre" : 0,
			            "lune" : 0,
			            "soleil" : 0,
			            "ciel" : 0,
			            "foret" : 0,
			            "volcan" : 0,
			            "ocean" : 0,
			            "gouffre" : 0,
			            "vide" : 0,
			            "chaos" : 0,
			            "abysse" : 0,
			            "amour" : 0,
			            "connaissance" : 0,
			            "evolution" : 0
			        }
			    };
			this.getSave();
		};
		
		this.checkSave = function() {
		    var saveSession = window.localStorage.getItem(Utils.name);
		    return saveSession ? true : false;
		};
		
		this.getSave = function(type) {
	        var saveSession = window.localStorage.getItem(Utils.name);
	        if (saveSession) {
	            this.saveData = JSON.parse(Utils.decode(saveSession));
	        }
		};

		this.init(parent);
	};
});