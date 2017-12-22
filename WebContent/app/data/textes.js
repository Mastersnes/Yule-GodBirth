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
		"croyance" : {
			fr : "Croyance : ",
			en : "Croyance : "
		},
		"illumination" : {
			fr : "Illumination : ",
			en : "Illumination : "
		},
		"bien" : {
		    fr : "Bien : ",
		    en : "Bien : "
		},
		"mal" : {
		    fr : "Mal : ",
		    en : "Mal : "
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
		"parClick" : {
			fr : "/click",
			en : "/click"
		},
		"parSec" : {
			fr : "/sec",
			en : "/sec"
		},
		/**
		 * Ameliorations - Onlets
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
        /**
         * Ameliorations - Deites
         */
        "grandTout" : {
            fr : "Grand Tout",
            en : "Great Everything"
        },
        "dieu" : {
            fr : "Dieu",
            en : "God"
        },
        "deesse" : {
            fr : "Déesse",
            en : "Goddess"
        },
        /**
         * Ameliorations - Univers
         */
        "terre" : {
            fr : "Terre",
            en : "Earth"
        },
        "lune" : {
            fr : "Lune",
            en : "Moon"
        },
        "soleil" : {
            fr : "Soleil",
            en : "Sun"
        },
        /**
         * Ameliorations - Vie
         */
        "ciel" : {
            fr : "Ciel",
            en : "Sky"
        },
        "foret" : {
            fr : "Fôrets",
            en : "Forest"
        },
        "volcan" : {
            fr : "Volcans",
            en : "Volcanoes"
        },
        "ocean" : {
            fr : "Oceans",
            en : "Oceans"
        },
        /**
         * Ameliorations - Mort
         */
        "gouffre" : {
            fr : "Gouffre",
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
        "abysses" : {
            fr : "Abysses",
            en : "-"
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
