/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"
        ],
function($, _, Utils) {
	'use strict';

	return function(kongregateUtils) {
	    this.init = function(kongregateUtils) {
			this.el = "";
			this.kongregateUtils = kongregateUtils;
			
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
			            "mal" : 200
			        },
			        "avantages" : [],
			        "maxPoints" : {
			            "croyance" : 0,
			            "illumination" : 0,
			            "bien" : 100,
			            "mal" : 200
			        },
			        "compteurClick" : 0,
			        "successComplete" : [],
			        
			        "godInitType" : "dust",
			        "godInitLevel" : 0,
			        
			        "quetesComplete" : [],
			        
			        "generalEvents" : [],
			        "uniquesEvents" : [],
			        "rebellion" : 0,
			        "epidemie" : 0,
			        "sagesse" : 0,
			        "artefactsUses" : 0,
			        "GameComplete" : 0,
			        "GameOver" : 0,
			        "artefactsNumber" : 0,
			        "upgradeNumber" : 0,
			        
			        "pierresComplete" : [],
			        "selectedPierres" : {
            			"haut" : null, 
            			"droite" : null,
            			"bas-droite" : null,
            			"bas-gauche" : null,
            			"gauche" : null,
            			"centre" : null
            		},
            		"pierre-primaire-success" : 0,
            		"pierre-lunaire-success" : 0,
            		"pierre-solaire-success" : 0,
            		"pierre-secrete-success" : 0,
            		
            		"inventaire" : {},
            		"options" : {
            			"notation-courte" : true
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
						step : {
						    name : "debut",
						    index : 0
						}
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
			this.saveSession = window.localStorage.getItem(Utils.name);
			if (!this.saveSession) {
			    var username = this.kongregateUtils.username;
			    console.log("Kongregate", this.kongregateUtils, username);
			    if (this.kongregateUtils.isLoad && username) {
                    var that = this;
                    var request = {
                        "username" : username,
                        "secretPass" : Utils.hash("Yule5497" + username)
                    };
                    Utils.load("https://bebel-server.herokuapp.com/yule/getSave", request, function(data, status) {
                        console.log("Succes de la recuperation de la sauvegarde", data, "avec le status", status);
                        that.saveSession = data.data;
                    });
			    }
			}
			return this.saveSession != null;
		};

		/**
		 * Permet de charger la sauvegarde en memoire
		 */
		this.loadSave = function() {
	        if (this.saveSession) {
	            this.loaded = true;
	        	this.saveData = JSON.parse(Utils.decode(this.saveSession));

	        	console.log("Chargement de la sauvegarde", this.saveData)

                //On rejout les succes à ce moment
                var maxPoints = this.load("maxPoints");
                this.kongregateUtils.score("maxCroyance", maxPoints.croyance);
                this.kongregateUtils.score("maxIllumination", maxPoints.illumination);
                this.kongregateUtils.score("maxBien", maxPoints.bien);
                this.kongregateUtils.score("maxMal", maxPoints.mal);
                this.kongregateUtils.score("compteurClick", this.load("compteurClick"));
                this.kongregateUtils.score("artefactsUses", this.load("artefactsUses"));
                this.kongregateUtils.score("artefactsNumber", this.load("artefactsNumber"));
                this.kongregateUtils.score("upgradeNumber", this.load("upgradeNumber"));
                this.kongregateUtils.score("eventsComplete", this.load("uniquesEvents").length);
                if (this.load("artefactsUses") >= 1) this.kongregateUtils.score("artefactsUses1", 1);
                if (this.load("artefactsUses") >= 3) this.kongregateUtils.score("artefactsUses3", 1);
                if (this.load("pierre-primaire-success"))
                    this.kongregateUtils.score("pierre-primaire-success", 1);
                if (this.load("pierre-lunaire-success"))
                    this.kongregateUtils.score("pierre-lunaire-success", 1);
                if (this.load("pierre-solaire-success"))
                    this.kongregateUtils.score("pierre-solaire-success", 1);
                if (this.load("pierre-secrete-success"))
                    this.kongregateUtils.score("pierre-secrete-success", 1);
                if (this.load("GameComplete"))
                    this.kongregateUtils.score("GameComplete", 1);
                if (this.load("GameOver"))
                    this.kongregateUtils.score("GameOver", 1);

                var successComplete = this.load("successComplete");
                for (var index in successComplete) {
                    this.kongregateUtils.score(successComplete[index], 1);
                }
	        }
		};
		
		/**
		 * Permet de sauvegarder en memoire
		 */
		this.saveInSession = function() {
			var saveJeton = Utils.encode(JSON.stringify(this.saveData));
		    window.localStorage.setItem(Utils.name, saveJeton);
		};
		this.saveInCloud = function() {
			var saveJeton = Utils.encode(JSON.stringify(this.saveData));
		    var username = this.kongregateUtils.username;
		    console.log("Kongregate", this.kongregateUtils, username);
            if (this.kongregateUtils.isLoad && username) {
                var that = this;
                var request = {
                    "username" : username,
                    "secretPass" : Utils.hash("Yule5497" + username),
                    "data" : saveJeton
                };
                //loadAsync
                Utils.load("https://bebel-server.herokuapp.com/yule/save", request, null, "POST", true);
            }
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
		
		this.init(kongregateUtils);
	};
});