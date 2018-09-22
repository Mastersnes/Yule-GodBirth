'use strict';
define(["jquery",
        "app/data/textes/textes-events"], function($, EventsTextes){
	var data = {
		/**
		 * Plateformes
		 */
		"bienvenue" : {
			fr : "Bienvenue",
			en : "Welcome"
		},
		"guest" : {
			fr : "Invité",
			en : "Guest"
		},
		"newGame" : {
			fr : "Nouvelle partie",
			en : "New Game"
		},
		"eraseSave" : {
			fr : "Attention, ceci effacera votre partie enregistrée !",
			en : "Warning, this will erase your registered save !"
		},
		"continuerButton" : {
			fr : "Continuer",
			en : "Continue"
		},
		"cancelButton" : {
			fr : "Annuler",
			en : "Cancel"
		},
		"loadGame" : {
			fr : "Charger une partie",
			en : "Load game"
		},
		"load" : {
			fr : "Charger",
			en : "Load"
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
		"passer-notation-courte" : {
			fr : "Passer en notation courte (K=Mille, M=Million, G=Milliard)",
			en : "-"
		},
		"passer-notation-longue" : {
			fr : "Passer en notation longue",
			en : "-"
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
         * Popups
         */
		"yesButton" : {
			fr : "Oui",
			en : "Yes"
		},
		"noButton" : {
			fr : "Non",
			en : "No"
		},
		"acceptButton" : {
			fr : "Accepter",
			en : "Accept"
		},
		"refusButton" : {
			fr : "Refuser",
			en : "Refuse"
		},
		"suivant" : {
			fr : "Suivant >",
			en : "Next >"
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
        "success" : {
        	fr : "Succès",
        	en : "Success"
        },
        "artefacts" : {
        	fr : "Artefacts",
        	en : "-"
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
        	fr : "Repere de monstres cruels ou berceau de sinistres histoires, le Gouffre enferme un secret que nul ne voudrait revoir.",
        	en : "-"
        },
        "vide" : {
            fr : "Vide",
            en : "-"
        },
        "vide-desc" : {
        	fr : "C'est là, dans le Vide, que debute les choses et qu'elles terminent.<br/>C'est aussi là, dans le Vide, que se cache les maux les plus perfides.",
        	en : "-"
        },
        "chaos" : {
            fr : "Chaos",
            en : "-"
        },
        "chaos-descr" : {
        	fr : "Le Chaos engendre l'odre et l'ordre, inévitablement, engendre le Chaos. Dans toute chose il existe et toutes chose il consumera...",
        	en : "-"
        },
        "abysse" : {
            fr : "Abysses",
            en : "-"
        },
        "abysse-descr" : {
        	fr : "C'est là, au milieu des profondeurs et des Abymes, que se terrent les entités les plus infames...<br/> Ne serait-ce qu'y penser, et votre âme sombre déjà dans des abysses sans fond.",
        	en : "-"
        },
        /**
         * Ameliorations - Concept
         */
        "amour" : {
            fr : "Amour",
            en : "Love"
        },
        "amour-descr" : {
        	fr : "Moteur de l'univers, il est la representation abstraite du cycle de la déesse et du dieu. Ni bonne, ni mauvaise, seulement eternelle.",
        	en : "-"
        },
        "connaissance" : {
            fr : "Connaissance",
            en : "Knowledge"
        },
        "connaissance-descr" : {
        	fr : "Le savoir est une force supreme permettant de comprendre les rouages de l'univers. Entre de mauvaise main, elle marque la fin de toute chose...",
        	en : "-"
        },
        "evolution" : {
            fr : "Evolution",
            en : "Evolution"
        },
        "evolution-descr" : {
        	fr : "De l'enfant vient l'adulte, de la foudre vient l'orage. Les choses sont en perpetuelles evolutions et paradoxalement en perpetuel recomencement.<br/> La fin de ce cycle, marquera le debut d'un nouveau...",
        	en : "-"
        },
        /**
         * Quetes
         */
        "quete-start" : {
        	fr : "Au commencement...",
        	en : "At Beginning..."
        },
        "quete-start-desc" : {
        	fr : "Ameliorez le Grand-Tout pour la première fois",
        	en : "Upgrade the great everything for the first time"
        },
        "quete-univers" : {
        	fr : "La création de l'univers",
        	en : "Universe creation"
        },
        "quete-univers-desc" : {
        	fr : "Creez l'univers",
        	en : "Create the universe"
        },
        "quete-vie" : {
        	fr : "La création de la vie",
        	en : "The life creation"
        },
        "quete-vie-desc" : {
        	fr : "Creez la vie",
        	en : "Create the life"
        },
        "quete-mort" : {
        	fr : "La création de la mort",
        	en : "The death creation"
        },
        "quete-mort-desc" : {
        	fr : "Creez la mort",
        	en : "Create the death"
        },
        "quete-concept" : {
        	fr : "Humanité",
        	en : "Humanity"
        },
        "quete-concept-desc" : {
        	fr : "Creez les concepts humain",
        	en : "Create the human concept"
        },
        
        "quete-imbolc" : {
        	fr : "Imbolc",
        	en : "Imbolc"
        },
        "quete-imbolc-desc" : {
        	fr : "Atteignez Imbolc",
        	en : "Reach Imbolc"
        },
        "quete-ostara" : {
        	fr : "Ostara",
        	en : "Ostara"
        },
        "quete-ostara-desc" : {
        	fr : "Atteignez Ostara",
        	en : "Reach Ostara"
        },
        "quete-beltane" : {
        	fr : "Beltane",
        	en : "Beltane"
        },
        "quete-beltane-desc" : {
        	fr : "Atteignez Beltane",
        	en : "Reach Beltane"
        },
        "quete-litha" : {
        	fr : "Litha",
        	en : "Litha"
        },
        "quete-litha-desc" : {
        	fr : "Atteignez Litha",
        	en : "Reach Litha"
        },
        "quete-lammas" : {
        	fr : "Lammas",
        	en : "Lammas"
        },
        "quete-lammas-desc" : {
        	fr : "Atteignez Lammas",
        	en : "Reach Lammas"
        },
        "quete-mabon" : {
        	fr : "Mabon",
        	en : "Mabon"
        },
        "quete-mabon-desc" : {
        	fr : "Atteignez Mabon",
        	en : "Reach Mabon"
        },
        "quete-samhain" : {
        	fr : "Samhain",
        	en : "Samhain"
        },
        "quete-samhain-desc" : {
        	fr : "Atteignez Samhain",
        	en : "Reach Samhain"
        },
        
        /**
         * Pierres
         */
        "primaire" : {
          fr : "Primaire",
          en : "Primaire"
        },
        "solaire" : {
            fr : "Solaire",
            en : "Solar"
        },
        "lunaire" : {
            fr : "Lunaire",
            en : "Lunar"
        },
        "secrete" : {
            fr : "Secrete",
            en : "Secret"
        },
        "pierreDejaPlace" : {
        	fr : "La pierre est déjà placée sur l'autel",
        	en : "The stone is already placed on the altar"
        },
        "retirerPierre" : {
        	fr : "Retirer la pierre de l'autel ?",
        	en : "Remove the stone from the altar?"
        },
        "diamant" : {
        	fr : "Diamant",
        	en : "Diamond"
        },
        "diamant-desc" : {
        	fr : "Symbole de pureté et de perfection, il peut également amener la mort et la destruction dans son sillage...",
        	en : "Symbol of purity and perfection, it can also bring death and destruction on its way..."
        },
        "rubis" : {
        	fr : "Rubis",
        	en : "Ruby"
        },
        "rubis-desc" : {
        	fr : "Le Rubis représente le sang de notre Mère nature. Symbole de l'amour divin, il peut également renforcer la colère de son porteur.",
        	en : "Ruby represents the blood of our Mother Nature. Symbol of divine love, it can also reinforce the anger of its wearer."
        },
        "emeraude" : {
        	fr : "Émeraude",
        	en : "Emerald"
        },
        "emeraude-desc" : {
        	fr : "L'émeraude porte le symbole d'un espoir éternelle et d'une grande connaissance. Par sa couleur, il rappelle le renouveau du printemps et donc la renaissance.",
        	en : "The emerald bears the symbol of eternal hope and great knowledge. By its colour, it recalls the revival of spring and therefore the rebirth."
        },
        "saphir" : {
        	fr : "Saphir",
        	en : "Sapphire"
        },
        "saphir-desc" : {
        	fr : "Pierre de vérité et de justice. Au début du temps, un groupe de géant dérobèrent un morceau de ciel. Les dieux, fous de rage, les transformèrent en montagne, oubliant le bien volé. Ainsi le Saphir naquit...",
        	en : "Stone of truth and justice. At the beginning of time, a group of giants stole a piece of sky. The gods, mad with rage, turned them into mountains, forgetting the stolen good. Thus the Sapphire was born..."
        },
		"larme-apache" : {
			fr : "Larme d'Apache",
			en : "Apache's tear"
		},
		"larme-apache-desc" : {
			fr : "Cette puissante pierre est une Obsidienne particuliere.<br/>D'une grande pureté, elle sont en réalité les larmes de jeunes femmes pleurant leur amour disparus.",
			en : ""
		},
		"cristal-de-roche" : {
			fr : "Cristal de Roche",
			en : "Rock Crystal"
		},
		"cristal-de-roche-desc" : {
			fr : "Essence du monde, elle amplifie la puissance des pierres qui l'entoure et symbolise l'elevation de l'âme.",
			en : ""
		},
		
		/**
		 * Solaire
		 */
		"grenat" : {
			fr : "Grenat",
			en : "Garnet"
		},
		"grenat-desc" : {
			fr : "Pierre du courage, elle represente les epreuves que doit franchir le heros dans sa quete eternelle.",
			en : "-"
		},
		"onyx" : {
			fr : "Onyx",
			en : "Onyx"
		},
		"onyx-desc" : {
			fr : "Tantôt symbole de discorde, Tantôt pierre protectrice, l'onyx represente la volonté et l'intuition.",
			en : "-"
		},
		"ambre" : {
			fr : "Ambre",
			en : "Amber"
		},
		"ambre-desc" : {
			fr : "Larme des premiers arbres peuplant la terre, l'ambre contient la lumiére du monde. Sa bienveillance amene sagesse et serenité.",
			en : "-"
		},
		"obsidienne" : {
			fr : "Obsidienne",
			en : "Obsidian"
		},
		"obsidienne-desc" : {
			fr : "Cette puissante pierre possede autant le pouvoir d'ouvrir les chairs que de les refermer.<br/> Elle protege et aide à combattre les idées négatives, ou les amplifies...",
			en : "-"
		},
		"hematite" : {
			fr : "Hematite",
			en : "Hematite"
		},
		"hematite-desc" : {
			fr : "Pierre de sang, elle suit les progrès de l'humanité depuis ses debuts. Elle est un symbole de dynamisme et de vitalité.",
			en : "-"
		},
		"pierre-de-soleil" : {
			fr : "Pierre de Soleil",
			en : "Sunstone"
		},
		"pierre-de-soleil-desc" : {
			fr : "Lumiere dans la tempete, elle guide les hommes vers la grandeur du soleil. Mais gare aux fous qui pourraient s'y bruler !",
			en : "-"
		},
		
		/**
		 * Lunaire
		 */
		"malachite" : {
			fr : "Malachite",
			en : "Malachite"
		},
		"malachite-desc" : {
			fr : "Symbole de beauté, la légende raconte qu'elle permettrait la comprehension du langage animal.",
			en : "-"
		},
		"amethyste" : {
			fr : "Amethyste",
			en : "Amethyst"
		},
		"amethyste-desc" : {
			fr : "La Pierre des dieux par son symbole d'intelligence et de sagesse. L'amethyste aide à dissiper toutes mauvaises pensées et protege ainsi sont porteur.",
			en : "-"
		},
		"lapis-lazuli" : {
			fr : "Lapis Lazuli",
			en : "Lapis Lazuli"
		},
		"lapis-lazuli-desc" : {
			fr : "Pierre de protection et de bonne humeur par excellence, le lapis-lazuli serait un morceau de ciel étoilé tombé des cieux.",
			en : "-"
		},
		"labradorite" : {
			fr : "Labradorite",
			en : "Labradorite"
		},
		"labradorite-desc" : {
			fr : "Prison minérale contenant le feu de l'aurore boreale.<br/>La labradorite est une pierre d'equilibre renfermant l'esprit des ancetres.",
			en : "-"
		},
		"azurite" : {
			fr : "Azurite",
			en : "Azurite"
		},
		"azurite-desc" : {
			fr : "Pierre de protection par excellence, l'azurite permet également de se connecter à la sagesse superieur.",
			en : "-"
		},
		"pierre-de-lune" : {
			fr : "Pierre de Lune",
			en : "Moonstone"
		},
		"pierre-de-lune-desc" : {
			fr : "Pierre de pureté et de feminité, elle est constitué de lumiere solaire et reflete l'imensité du cosmos.",
			en : "-"
		},
		/**
		 * Secrete
		 */
		"ringwoodite" : {
            fr : "Ringwoodite",
            en : "Ringwoodite"
        },
        "ringwoodite-desc" : {
            fr : "Caché au centre du monde, un nouvel ocean bien plus grand et bien plus ancien sommeil...<br/> Entendez-le gronder, il ne cherche qu'a remonter...",
            en : "-"
        },
        "hypatia" : {
            fr : "Hypatia",
            en : "Hypatia"
        },
        "hypatia-desc" : {
            fr : "Noyau stellaire d'une comete eteinte depuis des millions d'années.<br/> L'histoire de notre cosmos debute et se termine ainsi...",
            en : "-"
        },
		
		/**
		 * Didactitiel
		 */
		"didactitiel1" : {
			fr : "Yule - La Naissance d'un dieu <br/> (Cliquez sur \"Suivant\" pour passer à la suite)",
			en : "-"
		},
		"didactitiel2" : {
			fr : "Bienvenue jeune maître ! Comment fut votre repos ? <br/> Je me nomme Origine, je serais votre serviteur dans cette aventure.",
			en : "-"
		},
		"didactitiel3" : {
			fr : "C'est un heureux jour qui se prepare ! <br/> Notre deesse s'apprete a enfanter un nouveau dieu !",
			en : "-"
		},
		"didactitiel4" : {
			fr : "Vous pourriez les aider mais plus personne ne croit en vous, le Grand-Tout...",
			en : "-"
		},
		"didactitiel5" : {
			fr : "Heureusement, je ne vous ai pas oublié ! <br/> Servez-vous de cette croyance pour vous elever !",
			en : "-"
		},
		/**
		 * Barre
		 */
		"didactitiel-barre1" : {
			fr : "Ah ! Je vous sens deja beaucoup plus present ! <br/> Voyez-vous cette barre au dessus de l'espace ?",
			en : "-"
		},
		"didactitiel-barre2" : {
			fr : "Elle represente l'equilibre de l'univers ! <br/> Gardez toujours un oeil sur le cercle d'equilibre au centre !",
			en : "-"
		},
		"didactitiel-barre3" : {
			fr : "Malheureusement, depuis votre depart, le mal a pris le dessus...",
			en : "-"
		},
		"didactitiel-barre4" : {
			fr : "Essayez de vous familiariser avec ce systeme.<br/> Je reviendrais vers vous lorsque le dieu sera parmi nous.",
			en : "-"
		},
		/**
		 * Constellation
		 */
		"didactitiel-dieu1" : {
			fr : "Le dieu est née, c'est un grand jour ! Tout cela merite un petit cadeau !",
			en : "-"
		},
		"didactitiel-dieu2" : {
			fr : "Vous voyez cette constellation en bas à droite ? <br/> Vous y trouverez toutes sorte d'options.",
			en : "-"
		},
		"didactitiel-dieu3" : {
			fr : "Pour commencer, accedez à la constellation, puis accomplissez l'objectif. Ensuite, revenez me voir.",
			en : "-"
		},
		/**
		 * Autel
		 */
		"didactitiel-autel1" : {
			fr : "Felicitation, vous avez atteind votre premier objectif !.<br/> Offrons maintenant notre cadeau au nouveau née.",
			en : "-"
		},
		"didactitiel-autel2" : {
			fr : "Pour ce faire, retourner sur la constellation, achetez une pierre à l'autel puis posez là dessus.",
			en : "-"
		},
		/**
		 * Fin
		 */
		"didactitiel-pierrePose" : {
			fr : "Bien joué ! Il ne vous reste plus qu'a poser la pierre sur l'autel.",
			en : "-"
		},
		"didactitiel-fin1" : {
			fr : "Bravo ! Vous êtes en bonne voie pour retablir l'equilibre de l'univers !",
			en : "-"
		},
		"didactitiel-fin2" : {
			fr : "Maintenant c'est à vous ! Bon courage ! le destin de l'univers est entre vos mains !",
			en : "-"
		},
		
		/**
		 * Cinematiques
		 */
		"cinematique-imbolc" : {
			fr : "Imbolc - Purification du corps et de l'esprit",
			en : "-"
		},
		"cinematique-imbolc1" : {
			fr : "Felicitation maître ! Le dieu a bien grandit et la deesse veille sur lui de son aura chaleureuse.",
			en : "-"
		},
		"cinematique-imbolc2" : {
			fr : "Il est maintenant temps de prendre les bonnes decisions pour votre univers.",
			en : "-"
		},
		"cinematique-imbolc3" : {
			fr : "Attention, chacune d'entre elle peut avoir une incidence bonne ou mauvaise sur la suite des evenements.",
			en : "-"
		},
		"cinematique-imbolc4" : {
			fr : "Lorsque le sablier du destin apparait, cliquez-dessus pour prendre vos decisions.",
			en : "-"
		},
		"cinematique-imbolc5" : {
			fr : "Bon courage mon maître ! Vous saurez faire les bons choix !",
			en : "-"
		},
		
		/**
		 * Ado - Ostara
		 */
		"cinematique-ostara" : {
			fr : "Ostara - Renouveau de la vie et de la terre",
			en : "-"
		},

		/**
		 * Adulte - Beltane
		 */
		"cinematique-beltane" : {
			fr : "Beltane - L'unification de deux âmes",
			en : "-"
		},

		/**
		 * Mariage - Litha
		 */
		"cinematique-litha" : {
			fr : "Litha - Mariage du ciel et de la terre",
			en : "-"
		},

		/**
		 * Faiblesse - Lammas
		 */
		"cinematique-lammas" : {
			fr : "Lammas - Le déclin du guerrier",
			en : "-"
		},

		/**
		 * Vieillesse - Mabon
		 */
		"cinematique-lammas" : {
			fr : "Mabon - La sagesse de l'eternel",
			en : "-"
		},

		/**
		 * Mort - Samhain
		 */
		"cinematique-samhain" : {
			fr : "Samhain - La fin d'un cycle",
			en : "-"
		},
		
		/**
		 * Success
		 */
		"gainSuccess" : {
			fr : "Félicitation, vous avez gagné le succes : {?} !<br/> Voyagez dans la constellation pour consulter les details.",
			en : "Congratulation, you earn the success : {?} !<br/> Travel to the constelation to consult the details."
		},
		"success-100click" : {
			fr : "100 Clics",
			en : "100 Clicks"
		},
		"success-100click-descr" : {
			fr : "Effectuer un total de 100 clics",
			en : "Do a total of 100 clicks"
		},
		"success-500click" : {
			fr : "500 Clics",
			en : "500 Clicks"
		},
		"success-500click-descr" : {
			fr : "Effectuer un total de 500 clics",
			en : "Do a total of 500 clicks"
		},
		"success-1000click" : {
			fr : "1K Clics",
			en : "1K Clicks"
		},
		"success-1000click-descr" : {
			fr : "Effectuer un total de 1000 clics !",
			en : "Do a total of 1000 clicks !"
		},
		"success-5000click" : {
			fr : "5K Clics",
			en : "5K Clicks"
		},
		"success-5000click-descr" : {
			fr : "Effectuer un total de 5000 clics ! Incroyable !",
			en : "Do a total of 5000 clicks ! Awesome !"
		},
		"success-10000click" : {
			fr : "10KClics",
			en : "10K Clicks"
		},
		"success-10000click-descr" : {
			fr : "Effectuer un total de 10000 clics... Vous n'avez que ca à faire ?",
			en : "Do a total of 100 clicks... Don't you have anything else to do ?"
		},
		"success-50000click" : {
			fr : "50K Clics",
			en : "50K Clicks"
		},
		"success-50000click-descr" : {
			fr : "Effectuer un total de 50000 clics !!! Il faut arreter maintenant oO",
			en : "Do a total of 50000 clicks !!! You have to stop now oO"
		},
		"success-100000click" : {
			fr : "100K Clics",
			en : "100K Clicks"
		},
		"success-100000click-descr" : {
			fr : "Effectuer un total de 100000 clics !!! Top of the pop !",
			en : "Do a total of 100000 clicks !!! Top of the pop !"
		},
		"success-amour" : {
        	fr : "Premier amour",
        	en : "First love"
        },
        "success-amour-descr" : {
        	fr : "Amener le Dieu et la Deesse au niveau 5.",
        	en : "Make the God and Goddess to be at level 5."
        },
		"success-imbolc" : {
        	fr : "Imbolc",
        	en : "Imbolc"
        },
        "success-imbolc-descr" : {
        	fr : "Atteindre Imbolc.",
        	en : "Reach Imbolc."
        },
		"success-ostara" : {
        	fr : "Ostara",
        	en : "Ostara"
        },
        "success-ostara-descr" : {
        	fr : "Atteindre Ostara.",
        	en : "Reach Ostara."
        },
		"success-beltane" : {
        	fr : "Beltane",
        	en : "Beltane"
        },
        "success-beltane-descr" : {
        	fr : "Atteindre Beltane.",
        	en : "Reach Beltane."
        },
		"success-litha" : {
        	fr : "Litha",
        	en : "Litha"
        },
        "success-litha-descr" : {
        	fr : "Atteindre Litha.",
        	en : "Reach Litha."
        },
		"success-lammas" : {
        	fr : "Lammas",
        	en : "Lammas"
        },
        "success-lammas-descr" : {
        	fr : "Atteindre Lammas.",
        	en : "Reach Lammas."
        },
		"success-mabon" : {
        	fr : "Mabon",
        	en : "Mabon"
        },
        "success-mabon-descr" : {
        	fr : "Atteindre Mabon.",
        	en : "Reach Mabon."
        },
		"success-samhain" : {
        	fr : "Samhain",
        	en : "Samhain"
        },
        "success-samhain-descr" : {
        	fr : "Atteindre Samhain.",
        	en : "Reach Samhain."
        },
        "success-autel" : {
        	fr : "Remplir l'autel",
        	en : "Fill the altar"
        },
        "success-autel-descr" : {
        	fr : "Placer 6 pierres sur l'autel.",
        	en : "Put 6 stones on the altar."
        },
		
		/**
		 * Artefacts
		 */
		"gainArtefact" : {
			fr : "Félicitation, vous avez gagné l'artefact : {?} !<br/> Voyagez dans la constellation pour consulter les details.",
			en : "Congratulation, you earn the artefact : {?} !<br/> Travel to the constelation to consult the details."
		},
		"torque" : {
			fr : "Torque",
			en : "Torque"
		},
		"torque-desc" : {
			fr : "Symbole des grands guerrier. Il est l'objet essentiel à tout dieu en apprentissage !",
			en : "Symbol of the great warrior. He is the essential object of every learning god !"
		},
		"corne-abondance" : {
			fr : "Corne d'abondance",
			en : "Horn of plenty"
		},
		"corne-abondance-desc" : {
			fr : "Corne d'abondance et de joie. Elle apportera le bonheur à son posseseur et son entourage !",
			en : "Horn of plenty and joy. It will bring happiness to it's owner and his entourage !"
		},
		"3eme-oeil" : {
			fr : "3eme Oeil",
			en : "-"
		},
		"3eme-oeil-desc" : {
			fr : "Qui possede le 3eme oeil permet de comprendre l'equilibre complexe de l'univers.",
			en : "-"
		},
		"idole-feu" : {
			fr : "Idole de feu",
			en : "Idol of fire"
		},
		"idole-feu-desc" : {
			fr : "Une étrange statuette representant une créature enflammée.",
			en : "A strange statuette representing an inflamed creature."
		},
		"idole-mort" : {
			fr : "Idole de mort",
			en : "-"
		},
		"idole-mort-desc" : {
			fr : "Une étrange statuette representant une créature ensanglantée.",
			en : "-"
		},
		"saint-graal" : {
			fr : "Saint Graal",
			en : "Holy Grail"
		},
		"saint-graal-desc" : {
			fr : "Un calice sacré ayant contenu le sang du dieu. Sa puissance divine donne à son possesseur les pleins pouvoirs.",
			en : "A sacred chalice that contained the blood of the god. His divine power gives his possessor full powers."
		},
	};
	
	return {
		local : null,
		
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			if (!this.local) {
				this.local = navigator.language || navigator.userLanguage;
				if (this.local) {
					this.local = this.local.toLowerCase();
					if (this.local.indexOf("fr") > -1) this.local = "fr";
					else if (this.local.indexOf("en") > -1) this.local = "en";
				}else {
					this.local = "en";
				}
			}
			
			var text = EventsTextes.get(key);
			if (!text) text = data[key];
			if (!text) return key;
			
			if (text[this.local]) return text[this.local]; 
			else if (text.en) return text.en;
			else return key;
		}
	};
});
