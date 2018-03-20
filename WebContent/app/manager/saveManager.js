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
			
			this.kongregateUtils = parent.kongregateUtils;
			
			this.saveData = null;
			this.getSave();
		};
		
		this.checkSave = function() {
		    var saves = [];
		    
		    var saveSession = window.localStorage.getItem(Utils.name);
		    if (saveSession) {
		        saves.push("session");
		    }
		    
		    var saveKongregate = this.kongregateUtils.getScore("save-points");
		    if (saveKongregate) {
		        saves.push("kongregate");
		    }
		    
		    return saves.length > 0 ? saves : null;
		};
		
		this.getSave = function(type) {
		    if (!type) type = "session";

		    // Chargement via navigateur
		    if (type == session) {
		        var saveSession = window.localStorage.getItem(Utils.name);
		        this.saveData = JSON.parse(Utils.decode(saveSession));
			}
		    // Chargement via Kongregate
		    else {
		        var saveKongregate = this.kongregateUtils.getScore("points");
		        this.saveData = JSON.parse(Utils.decode(saveKongregate));
			}
		};

		this.init(parent);
	};
});