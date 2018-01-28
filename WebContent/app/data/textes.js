'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Plateformes
		 */
		"bienvenue" : {
			fr : "Bienvenue",
			en : "Wellcome"
		},
		"guest" : {
			fr : "Invité",
			en : "Guest"
		},
		"newGame" : {
			fr : "Nouvelle partie",
			en : "New Game"
		},
		"loadGame" : {
			fr : "Charger une partie",
			en : "Load game"
		},
		"fromCode" : {
			fr : "Veuillez entrer votre code de sauvegarde :",
			en : "Please enter your save code :"
		},
		"codeHolder" : {
			fr : "Code de sauvegarde",
			en : "Save code"
		},
		"codeError" : {
			fr : "Code de sauvegarde invalide",
			en : "Invalide save code"
		},
		"load" : {
			fr : "Charger",
			en : "Load"
		},
		"or" : {
			fr : "…Ou…",
			en : "…Or…"
		},
		"fromNavigateur" : {
			fr : "Charger depuis la sauvegarde navigateur",
			en : "Load from browser save"
		},
		"options" : {
			fr : "Options",
			en : "Options"
		},
		"langage" : {
			fr : "Langage :",
			en : "Language :"
		},
		"fullscreen" : {
			fr : "Plein &eacutecran (appuyez sur echap pour revenir)",
			en : "Fullscreen (press escape for return)"
		},
		"credits" : {
			fr : "Credits",
			en : "Credits"
		},
		"illustration" : {
			fr : "Illustrations",
			en : "Illustrations"
		},
		"developpement" : {
			fr : "D&eacuteveloppement",
			en : "Development"
		},
		"musique" : {
			fr : "Musiques",
			en : "Musics"
		},
		"textes" : {
			fr : "Textes",
			en : "Texts"
		},
		"followUs" : {
            fr : "Suivez-nous sur <a target='_blank' alt='Facebook' href='https://www.facebook.com/lesjeuxdebebel/'>Facebook</a> ou <a target='_blank' alt='Twitter' href='http://twitter.com/lesjeuxdebebel'>Twitter</a>.",
            en : "Follow us on <a target='_blank' alt='Facebook' href='https://www.facebook.com/lesjeuxdebebel/'>Facebook</a> or <a target='_blank' alt='Twitter' href='http://twitter.com/lesjeuxdebebel'>Twitter</a>."
        },
        "followUs2" : {
            fr : "Soutenez-nous sur <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>.",
            en : "Support us on <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>."
        },
        "followUs3" : {
            fr : "Nos autres jeux sur <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>.",
            en : "Our other games on <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>."
        },
        
        "mute" : {
            fr : "Mute",
            en : "Mute"
        },
        
		"partenaires" : {
			fr : "Partenaires",
			en : "Partners"
		},
		"copyright-licence" : {
			fr : "Cette oeuvre est sous license ",
			en : "This work is licensed by "
		},
		"copyright-donot" : {
			fr : "Merci de ne pas la modifier ou la partager de fa&ccedil;on commerciale sans notre accord.",
			en : "Please don't modify and share it commercially without our consent."
		},
		"gameOver-1" : {
		    fr : "L'équilibre de l'univers a été rompus... Vous avez échoué...",
		    en : "The balance of the universe has been broken... You have failed..."
		},
		"gameOver-2" : {
            fr : "Vous pouvez réessayer en rechargeant le jeu !",
            en : "You can try again by reloading the game !"
        },
        "gameOver-3" : {
            fr : "Decouvrez nos autres jeux sur <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>.",
            en : "Discover our other games on <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>."
        },
        "gameOver-4" : {
            fr : "Et si vous voulez nous encouragez, allez faire un tour sur <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>.",
            en : "And if you want to encourage us, join us on <a target='_blank' alt='Tipeee' href='https://www.tipeee.com/les-jeux-de-bebel/'>Tipeee</a>."
        },
		
		/**
		 * Jeu
		 */
        "quetes" : {
        	fr : "Objectifs",
        	en : "Objectifs"
        },
        "autel" : {
        	fr : "Autel",
        	en : "Autel"
        },
		"croyance" : {
			fr : "Croyance",
			en : "Croyance"
		},
		"illumination" : {
			fr : "Illumination",
			en : "Illumination"
		},
		"bien" : {
		    fr : "Bien",
		    en : "Bien"
		},
		"mal" : {
		    fr : "Mal",
		    en : "Mal"
		},
		"equilibre" : {
			fr : "Equilibre de l'univers",
			en : "Equilibre de l'univers"
		},
		"level" : {
			fr : "Level : ",
			en : "Level : "
		},
		"passageLevel" : {
		    fr : "Passage au level : ",
		    en : "Passage au level : "
		},
		"prix" : {
			fr : "Prix : ",
			en : "Prix : "
		},
		"gain" : {
			fr : "Gain : ",
			en : "Gain : "
		},
		"parSec" : {
			fr : "/sec",
			en : "/sec"
		},
		/**
		 * Ameliorations - Onglets
		 */
		"deite" : {
            fr : "Deités",
            en : "Deities"
        },
        "univers" : {
            fr : "Univers",
            en : "Univers"
        },
        "vie" : {
            fr : "Vie",
            en : "Life"
        },
        "mort" : {
            fr : "Mort",
            en : "Death"
        },
        "concept" : {
        	fr : "Concept",
        	en : "Concept"
        },
        /**
         * Ameliorations - Deites
         */
        "grandTout" : {
            fr : "Grand-Tout",
            en : "Great Everything"
        },
        "grandTout-descr" : {
        	fr : "Le début et la fin de toute chose. Le Grand-Tout evoluera pour chaque amélioration effectuée.",
        	en : "-"
        },
        "dieu" : {
            fr : "Dieu",
            en : "God"
        },
        "dieu-descr" : {
        	fr : "Dieu de la nature, de la forêt et géniteur de toutes choses. Il est complémentaire de la Déesse et progresse en sa compagnie.",
        	en : "-"
        },
        "deesse" : {
        	fr : "Déesse",
        	en : "Goddess"
        },
        "deesse-descr" : {
            fr : "Elle représente la fertilité, la magie et le feminin sacré. Elle est forte et indépendante.",
            en : "-"
        },
        /**
         * Ameliorations - Univers
         */
        "terre" : {
            fr : "Terre",
            en : "Earth"
        },
        "terre-descr" : {
        	fr : "Au départ, fut la Terre. Lieu eternel de sagesse et d'equilibre. Le Dieu et la Déesse lui donne sa force à travers les âges.",
        	en : "-"
        },
        "lune" : {
            fr : "Lune",
            en : "Moon"
        },
        "lune-descr" : {
        	fr : "Sanctuaire de la Déesse. Elle garde en son sein la beauté et la grâce de toute femme.",
        	en : "Moon"
        },
        "soleil" : {
            fr : "Soleil",
            en : "Sun"
        },
        "soleil-descr" : {
        	fr : "Symbole de puissance et sanctuaire du Dieu cornu. Son pouvoir illumine le monde.",
        	en : "-"
        },
        /**
         * Ameliorations - Vie
         */
        "ciel" : {
            fr : "Ciel",
            en : "Sky"
        },
        "ciel-descr" : {
        	fr : "Centre spirituel de l'inconscient. Le Dieu et la Lune nous élève vers la beauté de l'immateriel.",
        	en : "-"
        },
        "foret" : {
            fr : "Forêts",
            en : "Forest"
        },
        "foret-descr" : {
        	fr : "L'energie du monde circule dans ses veines et dans son corps. Le Dieu cornu en est son gardien, la Terre en est son berceau.",
        	en : "-"
        },
        "volcan" : {
            fr : "Volcans",
            en : "Volcanoes"
        },
        "volcan-descr" : {
        	fr : "C'est dans le feu et les cendres que l'homme jaillit sur terre. C'est dans le feu et les cendres qu'il disparaitra. La Déesse peut donner, mais c'est par la Terre qu'elle nous reprendra.",
        	en : "-"
        },
        "ocean" : {
            fr : "Oceans",
            en : "Oceans"
        },
        "ocean-descr" : {
        	fr : "Berceau de la vie. L'Ocean reflete la magie de la Lune et la grandeure de la Déesse.",
        	en : "-"
        },
        /**
         * Ameliorations - Mort
         */
        "gouffre" : {
            fr : "Gouffre",
            en : "-"
        },
        "gouffre-descr" : {
        	fr : "-",
        	en : "-"
        },
        "vide" : {
            fr : "Vide",
            en : "-"
        },
        "chaos" : {
            fr : "Chaos",
            en : "-"
        },
        "abysse" : {
            fr : "Abysses",
            en : "-"
        },
        /**
         * Ameliorations - Concept
         */
        "amour" : {
            fr : "Amour",
            en : "Love"
        },
        "connaissance" : {
            fr : "Connaissance",
            en : "Knowledge"
        },
        "evolution" : {
            fr : "Evolution",
            en : "Evolution"
        },
        /**
         * Quetes
         */
        "quete-1" : {
        	fr : "Au commencement...",
        	en : "At Beginning..."
        },
        "quete-1-desc" : {
        	fr : "Ameliorez le Grand-Tout pour la première fois",
        	en : "Ameliorez le Grand-Tout pour la première fois"
        },
        "quete-2" : {
        	fr : "Premier amour",
        	en : "First love"
        },
        "quete-2-desc" : {
        	fr : "Donnez une chance à l'amour en ce monde",
        	en : "Donnez une chance à l'amour en ce monde"
        },
        "quete-3" : {
        	fr : "La création de l'univers",
        	en : "La création de l'univers"
        },
        "quete-3-desc" : {
        	fr : "Creez l'univers",
        	en : "Creez l'univers"
        },
        
        /**
         * Notations
         */
        "milliards" : {
            fr : "Milliards",
            en : "Billions"
        },
        "millions" : {
            fr : "Millions",
            en : "Millions"
        },
        "mille" : {
            fr : "Mille",
            en : "Thousand"
        }
	};
	
	return {
		local : null,
		
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			if (!this.local) {
				this.local = navigator.language || navigator.userLanguage;
			}
			var text = $.extend(true, {}, data[key]);
			
			if (text[this.local]) return text[this.local]; 
			else if (text.en) return text.en;
			else return key;
		}
	};
});
