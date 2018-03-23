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
			
			this.saveData = null;
			this.getSave();
		};
		
		/**
		 * Charge la partie si elle ne l'est pas deja et renvoi la sauvegarde
		 */
		this.getSave = function(type) {
	        if (this.saveData == null) {
    		    var saveSession = window.localStorage.getItem(Utils.name);
    	        if (saveSession) {
    	            this.saveData = JSON.parse(Utils.decode(saveSession));
    	        }
	        }
	        return this.saveData;
		};

		/**
		 * Supprime la partie sauvegardée
		 */
		this.eraseSave = function(type) {
		    this.saveData = null;
		    window.localStorage.removeItem(Utils.name);
		};

		this.init(parent);
	};
});