'use strict';
define(["jquery"], function($){
	var data = {
			"primaire" : {
			    start : true,
			    conditions : [],
				name : "primaire",
			    pierres : ["diamant", "rubis", "emeraude", "saphir", "larme-apache", "cristal-de-roche"]
			},
			"solaire" : {
			    conditions : [
				    {
				    	name : "dieu",
				    	level : 5
				    }
			    ],
				name : "solaire",
			    pierres : ["grenat", "onyx", "ambre", "obsidienne", "hematite", "pierre-de-soleil"]
			},
            "lunaire" : {
                conditions : [
                    {
                        name : "deesse",
                        level : 5
                    }
                ],
                name : "lunaire",
                pierres : ["malachite", "amethyste", "lapis-lazuli", "labradorite", "azurite", "pierre-de-lune"]
            }
			,"secrete" : {
                conditions : [
                    {
                        name : "grandTout",
                        level : 30
                    },
                    {
                        name : "deesse",
                        level : 10
                    },
                    {
				    	name : "dieu",
				    	level : 10
				    }
                ],
                name : "secrete",
                pierres : ["ringwoodite", "hypatia"]
            }
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		},
        list : function() {
            return data;
        }
	};
});
