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
			
			this.initSaveData();
		};
		
		/**
		 * Initialise les données de sauvegarde pour une premiere partie
		 */
		this.initSaveData = function() {
			this.loaded = false;
			this.saveData = {
			        "points" : {
			            "croyance" : 0,
			            "illumination" : 0,
			            "bien" : 100,
			            "mal" : 100
			        },
			        "avantages" : {
			            "croyance" : 0,
			            "illumination" : 0,
			            "bien" : 0,
			            "mal" : 0
			        },
			        "maxPoints" : {
			            "croyance" : 0,
			            "illumination" : 0,
			            "bien" : 100,
			            "mal" : 100
			        },
			        "compteurClick" : 0,
			        "successComplete" : [],
			        
			        "godInitType" : "dust",
			        "godInitLevel" : 0,
			        
			        "quetesComplete" : [],
			        
			        "generalEvents" : [],
			        "uniquesEvents" : [],
			        
			        "pierresComplete" : [],
			        "selectedPierres" : {
            			"haut" : null, 
            			"droite" : null,
            			"bas-droite" : null,
            			"bas-gauche" : null,
            			"gauche" : null,
            			"centre" : null
            		},

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
			        },
			        
			        didactitiel : {
			        	blocker : {
							ameliorations : true,
							constellations : true,
							autel : true
						},
						indication : {
							barre : false,
							constellations : false,
							event : false
						},
						recompense : {
							start : false
						},
						step : 0
			        }
			    };
		};
		
		/**
		 * Renvoi la sauvegarde
		 */
		this.getSave = function() {
	        if (!this.loaded) return null;
			return this.saveData;
		};
		
		/**
		 * Permet de savoir si il existe une partie a charger
		 */
		this.checkSave = function() {
			var saveSession = window.localStorage.getItem(Utils.name);
			return saveSession != null;
		};

		/**
		 * Permet de charger la sauvegarde en memoire
		 */
		this.loadSave = function() {
			var saveSession = window.localStorage.getItem(Utils.name);
	        if (saveSession) {
	            this.loaded = true;
	        	this.saveData = JSON.parse(Utils.decode(saveSession));
	        }
		};
		
		/**
		 * Permet de sauvegarder en memoire
		 */
		this.saveInSession = function() {
			var saveJeton = Utils.encode(JSON.stringify(this.saveData));
		    window.localStorage.setItem(Utils.name, saveJeton);
		};

		/**
		 * Supprime la partie sauvegardée
		 */
		this.eraseSave = function() {
			this.initSaveData();
		    window.localStorage.removeItem(Utils.name);
		};
		
		/**
		 * Permet de sauvegarder un attribut
		 */
		this.save = function(key, value) {
			this.saveData[key] = value;
		};

		/**
		 * Permet de charger un attribut
		 */
		this.load = function(key) {
			return this.saveData[key];
		};

		/**
		 * Permet de charger les ameliorations
		 */
		this.loadAmeliorations = function(Items) {
			var ameliorations = this.saveData.ameliorations;
			for (var index in ameliorations) {
				var level = ameliorations[index];
				Items.get(index).level = level;
			}
		};
		
		/**
		 * Permet de sauvegarder le level d'une amelioration
		 */
		this.saveAmelioration = function(key, value) {
			this.saveData.ameliorations[key] = value;
		};
		
		/**
		 * Permet de sauvegarder les maxPoints
		 */
		this.saveMaxPoints = function(points) {
			if (points.croyance > this.saveData.maxPoints.croyance) this.saveData.maxPoints.croyance = points.croyance;
			if (points.illumination > this.saveData.maxPoints.illumination) this.saveData.maxPoints.illumination = points.illumination;
			if (points.bien > this.saveData.maxPoints.bien) this.saveData.maxPoints.bien = points.bien;
			if (points.mal > this.saveData.maxPoints.mal) this.saveData.maxPoints.mal = points.mal;
		};
		
		this.init(parent);
	};
});