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
				croyance : 50,
				illumination : 50,
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
				croyance : 100,
				illumination : 0,
				bien : 0,
				mal : 50
			},
            bonusCentre : {
                croyance : 100,
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
				croyance : 50,
				illumination : 50,
				bien : 100,
				mal : 100
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
				croyance : 0,
				illumination : 100,
				bien : 50,
				mal : 0
			},
            bonusCentre : {
                croyance : 0,
                illumination : 100,
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
				croyance : 50,
				illumination : 50,
				bien : -50,
				mal : -50
			},
            bonusCentre : {
                croyance : 0,
                illumination : 100,
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
				croyance : 150,
				illumination : 0,
				bien : 100,
				mal : 100
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
				croyance : 200,
				illumination : 0,
				bien : -25,
				mal : 100
			},
            bonusCentre : {
                croyance : 100,
                illumination : 0,
                bien : -50,
                mal : 100
            },
            good : [],
            bad : []
		},
		"onyx" : {
			name : "onyx",
			description : "onyx-desc",
			conditions : [],
			gains : {
				croyance : 100,
				illumination : 0,
				bien : -50,
				mal : 50
			},
            bonusCentre : {
                croyance : 50,
                illumination : -50,
                bien : -50,
                mal : 50
            },
            good : [],
            bad : []
		},
		"ambre" : {
			name : "ambre",
			description : "ambre-desc",
			conditions : [],
			gains : {
				croyance : 200,
				illumination : 50,
				bien : -25,
				mal : 150
			},
            bonusCentre : {
                croyance : 50,
                illumination : 50,
                bien : 50,
                mal : 50
            }
		},
		"obsidienne" : {
			name : "obsidienne",
			description : "obsidienne-desc",
			conditions : [],
			gains : {
				croyance : 100,
				illumination : 50,
				bien : -100,
				mal : 100
			},
            bonusCentre : {
                croyance : -50,
                illumination : -50,
                bien : -100,
                mal : 100
            },
            good : [],
            bad : []
		},
		"hematite" : {
			name : "hematite",
			description : "hematite-desc",
			conditions : [],
			gains : {
				croyance : 300,
				illumination : -50,
				bien : -100,
				mal : 100
			},
            bonusCentre : {
                croyance : 100,
                illumination : -50,
                bien : -50,
                mal : 200
            },
            good : [],
            bad : []
		},
		"pierre-de-soleil" : {
			name : "pierre-de-soleil",
			description : "pierre-de-soleil-desc",
			conditions : [],
			gains : {
				croyance : 300,
				illumination : 0,
				bien : -200,
				mal : 200
			},
            bonusCentre : {
                croyance : 200,
                illumination : 0,
                bien : 0,
                mal : 200
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
				croyance : -50,
				illumination : 100,
				bien : 50,
				mal : 50
			},
            bonusCentre : {
                croyance : -50,
                illumination : -50,
                bien : 100,
                mal : -100
            },
            good : [],
            bad : []
		},
		"amethyste" : {
			name : "amethyste",
			description : "amethyste-desc",
			conditions : [],
			gains : {
				croyance : 0,
				illumination : 100,
				bien : 100,
				mal : -50
			},
            bonusCentre : {
                croyance : 50,
                illumination : 50,
                bien : 50,
                mal : 50
            },
            good : [],
            bad : []
		},
		"lapis-lazuli" : {
			name : "lapis-lazuli",
			description : "lapis-lazuli-desc",
			conditions : [],
			gains : {
				croyance : -50,
				illumination : 150,
				bien : 150,
				mal : -200
			},
            bonusCentre : {
                croyance : 0,
                illumination : 100,
                bien : 100,
                mal : -50
            },
            good : [],
            bad : []
		},
		"labradorite" : {
			name : "labradorite",
			description : "labradorite-desc",
			conditions : [],
			gains : {
				croyance : 50,
				illumination : 100,
				bien : 50,
				mal : 50
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
				croyance : -100,
				illumination : 200,
				bien : 150,
				mal : -200
			},
            bonusCentre : {
                croyance : -50,
                illumination : 100,
                bien : 200,
                mal : -50
            },
            good : [],
            bad : []
		},
		"pierre-de-lune" : {
			name : "pierre-de-lune",
			description : "pierre-de-lune-desc",
			conditions : [],
			gains : {
				croyance : -50,
				illumination : 300,
				bien : 200,
				mal : -200
			},
            bonusCentre : {
                croyance : 0,
                illumination : 200,
                bien : 200,
                mal : 0
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
                croyance : -100,
                illumination : -100,
                bien : -100,
                mal : -100
            },
            good : [],
            bad : []
        },
        "hypatia" : {
            name : "hypatia",
            description : "hypatia-desc",
            conditions : [],
            gains : {
                croyance : -100,
                illumination : 500,
                bien : 200,
                mal : 200
            },
            bonusCentre : {
                croyance : -100,
                illumination : -100,
                bien : -100,
                mal : -100
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
