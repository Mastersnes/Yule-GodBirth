'use strict';
define([ "jquery" ], function($) {
	var data = {
	        /**
	         * Primaires
	         */
		"diamant" : {
			name : "diamant",
			description : "diamant-desc",
			conditions : [],
			gains : {
				croyance : 10,
				illumination : 10,
				bien : 0,
				mal : 0
			},
            bonusCentre : {
                croyance : 0,
                illumination : 0,
                bien : 0,
                mal : 0
            },
            good : [],
            bad : []
		},
		"rubis" : {
			name : "rubis",
			description : "rubis-desc",
			conditions : [],
			gains : {
				croyance : 30,
				illumination : 0,
				bien : 10,
				mal : 20
			},
            bonusCentre : {
                croyance : 30,
                illumination : 0,
                bien : 0,
                mal : 100
            },
            good : [],
            bad : []
		},
		"emeraude" : {
			name : "emeraude",
			description : "emeraude-desc",
			conditions : [],
			gains : {
				croyance : 20,
				illumination : 0,
				bien : 10,
				mal : 10
			},
            bonusCentre : {
                croyance : 50,
                illumination : 50,
                bien : 0,
                mal : 0
            },
            good : [],
            bad : []
		},
		"saphir" : {
			name : "saphir",
			description : "saphir-desc",
			conditions : [],
			gains : {
				croyance : 30,
				illumination : 0,
				bien : 10,
				mal : -10
			},
            bonusCentre : {
                croyance : 0,
                illumination : 30,
                bien : 100,
                mal : 0
            },
            good : [],
            bad : []
		},
		"larme-apache" : {
			name : "larme-apache",
			description : "larme-apache-desc",
			conditions : [],
			gains : {
				croyance : 20,
				illumination : 20,
				bien : 20,
				mal : -10
			},
            bonusCentre : {
                croyance : 150,
                illumination : 0,
                bien : 50,
                mal : 50
            },
            good : [],
            bad : []
		},
		"cristal-de-roche" : {
			name : "cristal-de-roche",
			description : "cristal-de-roche-desc",
			conditions : [],
			gains : {
				croyance : 30,
				illumination : 0,
				bien : 0,
				mal : 0
			},
			bonusCentre : {
			    croyance : 100,
                illumination : 100,
                bien : 100,
                mal : 100
			},
            good : [],
            bad : []
		},
		/**
		 * Solaire
		 */
		"grenat" : {
			name : "grenat",
			description : "grenat-desc",
			conditions : [],
			gains : {
				croyance : 50,
				illumination : 0,
				bien : 0,
				mal : 20
			},
            bonusCentre : {
                croyance : 20,
                illumination : 0,
                bien : 0,
                mal : 110
            },
            good : [],
            bad : []
		},
		"onyx" : {
			name : "onyx",
			description : "onyx-desc",
			conditions : [],
			gains : {
				croyance : -20,
				illumination : 0,
				bien : -20,
				mal : 30
			},
            bonusCentre : {
                croyance : 10,
                illumination : 20,
                bien : -20,
                mal : 80
            },
            good : [],
            bad : []
		},
		"ambre" : {
			name : "ambre",
			description : "ambre-desc",
			conditions : [],
			gains : {
				croyance : 30,
				illumination : 0,
				bien : 0,
				mal : 10
			},
            bonusCentre : {
                croyance : 0,
                illumination : 0,
                bien : 0,
                mal : 0
            }
		},
		"obsidienne" : {
			name : "obsidienne",
			description : "obsidienne-desc",
			conditions : [],
			gains : {
				croyance : 20,
				illumination : 20,
				bien : -30,
				mal : 30
			},
            bonusCentre : {
                croyance : 100,
                illumination : -50,
                bien : -50,
                mal : 50
            },
            good : [],
            bad : []
		},
		"hematite" : {
			name : "hematite",
			description : "hematite-desc",
			conditions : [],
			gains : {
				croyance : 10,
				illumination : -10,
				bien : -10,
				mal : 30
			},
            bonusCentre : {
                croyance : 50,
                illumination : 20,
                bien : 0,
                mal : 100
            },
            good : [],
            bad : []
		},
		"pierre-de-soleil" : {
			name : "pierre-de-soleil",
			description : "pierre-de-soleil-desc",
			conditions : [],
			gains : {
				croyance : 20,
				illumination : 40,
				bien : -50,
				mal : 50
			},
            bonusCentre : {
                croyance : 100,
                illumination : 0,
                bien : -100,
                mal : 100
            },
            good : [],
            bad : []
		},
		/**
		 * Lunaire
		 */
		"malachite" : {
			name : "malachite",
			description : "malachite-desc",
			conditions : [],
			gains : {
				croyance : 45,
				illumination : 15,
				bien : 20,
				mal : 0
			},
            bonusCentre : {
                croyance : 0,
                illumination : 10,
                bien : 110,
                mal : 0
            },
            good : [],
            bad : []
		},
		"amethyste" : {
			name : "amethyste",
			description : "amethyste-desc",
			conditions : [],
			gains : {
				croyance : 10,
				illumination : 20,
				bien : 20,
				mal : -30
			},
            bonusCentre : {
                croyance : 10,
                illumination : 10,
                bien : 20,
                mal : -80
            },
            good : [],
            bad : []
		},
		"lapis-lazuli" : {
			name : "lapis-lazuli",
			description : "lapis-lazuli-desc",
			conditions : [],
			gains : {
				croyance : 30,
				illumination : 0,
				bien : 10,
				mal : 0
			},
            bonusCentre : {
                croyance : 0,
                illumination : 0,
                bien : 0,
                mal : 0
            },
            good : [],
            bad : []
		},
		"labradorite" : {
			name : "labradorite",
			description : "labradorite-desc",
			conditions : [],
			gains : {
				croyance : 30,
				illumination : 20,
				bien : 30,
				mal : -30
			},
            bonusCentre : {
                croyance : -50,
                illumination : 50,
                bien : 50,
                mal : -50
            },
            good : [],
            bad : []
		},
		"azurite" : {
			name : "azurite",
			description : "azurite-desc",
			conditions : [],
			gains : {
				croyance : -10,
				illumination : 20,
				bien : 10,
				mal : 30
			},
            bonusCentre : {
                croyance : 20,
                illumination : 50,
                bien : 0,
                mal : 100
            },
            good : [],
            bad : []
		},
		"pierre-de-lune" : {
			name : "pierre-de-lune",
			description : "pierre-de-lune-desc",
			conditions : [],
			gains : {
				croyance : 0,
				illumination : 60,
				bien : 50,
				mal : -50
			},
            bonusCentre : {
                croyance : 0,
                illumination : 100,
                bien : -100,
                mal : 100
            },
            good : [],
            bad : []
		},
		/**
		 * Secretes
		 */
        "ringwoodite" : {
            name : "ringwoodite",
            description : "ringwoodite-desc",
            conditions : [],
            gains : {
                croyance : 500,
                illumination : 0,
                bien : 200,
                mal : 200
            },
            bonusCentre : {
                croyance : -50,
                illumination : -100,
                bien : -100,
                mal : -50
            },
            good : [],
            bad : []
        },
        "hypatia" : {
            name : "hypatia",
            description : "hypatia-desc",
            conditions : [],
            gains : {
                croyance : 0,
                illumination : 200,
                bien : 200,
                mal : 0
            },
            bonusCentre : {
                croyance : -200,
                illumination : -100,
                bien : 50,
                mal : -50
            },
            good : [],
            bad : []
        }
	};

	return {
		/**
		 * Permet d'appeler un WS
		 */
		get : function(key) {
			if (data[key]) return $.extend(true, {}, data[key]);
			else return null;
		},
		list : function() {
			return data;
		}
	};
});
