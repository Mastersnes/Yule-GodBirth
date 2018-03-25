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
			prix : {
				croyance : 100,
				illumination : 0,
			},
			gains : {
				croyance : 10,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"rubis" : {
			name : "rubis",
			description : "rubis-desc",
			conditions : [],
			prix : {
				croyance : 500,
				illumination : 1,
			},
			gains : {
				croyance : 15,
				illumination : 0,
				bien : 5,
				mal : 10
			}
		},
		"emeraude" : {
			name : "emeraude",
			description : "emeraude-desc",
			conditions : [],
			prix : {
				croyance : 1000,
				illumination : 2,
			},
			gains : {
				croyance : 15,
				illumination : 0,
				bien : 10,
				mal : 10
			}
		},
		"saphir" : {
			name : "saphir",
			description : "saphir-desc",
			conditions : [],
			prix : {
				croyance : 5000,
				illumination : 5,
			},
			gains : {
				croyance : 20,
				illumination : 0,
				bien : 10,
				mal : -10
			}
		},
		"larme-apache" : {
			name : "larme-apache",
			description : "larme-apache-desc",
			conditions : [],
			prix : {
				croyance : 10000,
				illumination : 10,
			},
			gains : {
				croyance : 20,
				illumination : 5,
				bien : 20,
				mal : -15
			}
		},
		"cristal-de-roche" : {
			name : "cristal-de-roche",
			description : "cristal-de-roche-desc",
			conditions : [],
			prix : {
				croyance : 100000,
				illumination : 100,
			},
			gains : {
				croyance : 30,
				illumination : 10,
				bien : 0,
				mal : 0
			}
		},
		/**
		 * Solaire
		 */
		"grenat" : {
			name : "grenat",
			description : "grenat-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"onyx" : {
			name : "onyx",
			description : "onyx-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"ambre" : {
			name : "ambre",
			description : "ambre-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"obsidienne" : {
			name : "obsidienne",
			description : "obsidienne-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"hematite" : {
			name : "hematite",
			description : "hematite-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"pierre-de-soleil" : {
			name : "pierre-de-soleil",
			description : "pierre-de-soleil-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		/**
		 * Lunaire
		 */
		"malachite" : {
			name : "malachite",
			description : "malachite-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"amethyste" : {
			name : "amethyste",
			description : "amethyste-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"lapis-lazuli" : {
			name : "lapis-lazuli",
			description : "lapis-lazuli-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"selenite" : {
			name : "selenite",
			description : "selenite-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"azurite" : {
			name : "azurite",
			description : "azurite-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
		},
		"pierre-de-lune" : {
			name : "pierre-de-lune",
			description : "pierre-de-lune-desc",
			conditions : [],
			prix : {
				croyance : 1,
				illumination : 0,
			},
			gains : {
				croyance : 1,
				illumination : 0,
				bien : 0,
				mal : 0
			}
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
