'use strict';
define(["jquery",
        "app/utils/utils",
        "app/data/textes/textes-events"], function($, Utils, EventsTextes){
	var data = {
			"bienvenue" : {
				fr : "Bienvenue",
				en : "Welcome"
			},
			"guest" : {
				fr : "Invité",
				en : "Guest"
			},
			"chargement" : {
				fr : "...Chargement...",
				en : "...Loading..."
			},
			"use" : {
				fr : "<span class='info' title='Et perdre'>Utiliser</span>",
				en : "<span class='info' title='And lost'>Use</span>"
			},
			"clickToContinue" : {
				fr : "- Cliquez pour continuer -",
				en : "- Click to continue -"
			},
			"newGame" : {
				fr : "Nouvelle partie",
				en : "New Game"
			},
			"kongregate" : {
				fr : "Nos autres jeux sur:",
				en : "Our other games on:"
			},
			"eraseSave" : {
				fr : "Attention, ceci effacera votre partie enregistrée!",
				en : "Warning, this will erase your registered save!"
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
				fr : "Plein écran (appuyez sur echap pour revenir)",
				en : "Fullscreen (press escape for return)"
			},
			"passer-notation-courte" : {
				fr : "Passer en notation courte (K=Mille, M=Million, G=Milliard)",
				en : "Switch to short notation (K=Thousand, M=Million, G=Billion)"
			},
			"passer-notation-longue" : {
				fr : "Passer en notation longue",
				en : "Switch to long notation"
			},
			"credits" : {
				fr : "Crédits",
				en : "Credits"
			},
			"illustration" : {
				fr : "Game artist",
				en : "Game artist"
			},
			"developpement" : {
				fr : "Développement",
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
			"mute" : {
				fr : "Mute",
				en : "Mute"
			},
			"copyright-licence" : {
				fr : "Copyright © Les Jeux de Bebel, 2018. Tous droits réservés.",
				en : "Copyright © Les Jeux de Bebel, 2018. All rights reserved."
			},
			"gameOver-1" : {
				fr : "L'équilibre de l'Univers a été rompu... Vous avez échoué...",
				en : "The balance of the Universe has been broken... You've failed..."
			},
			"gameOver-2" : {
				fr : "Réessayez en rechargeant le jeu!",
				en : "Try again by reloading the game!"
			},        
			"gameOver-3" : {
				fr : "Découvrez nos autres jeux sur <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>.",
				en : "Discover our other games on <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>."
			},        
			"gameFinish-1" : {
				fr : "Au loin dans l'Univers, une grande énergie naquit.<br/>Le Dieu n'était pas mort. Il était revenu à la vie!",
				en : "Far away in the Universe, a mighty energy was born.<br/>The God was not dead. He came back to life!"
			},
			"gameFinish-2" : {
				fr : "Grâce à vos enseignements, il parvint à maintenir l'équilibre de l'Univers pour le reste des temps.",
				en : "Thanks to your teachings, he was able to preserve the balance of the Universe for the rest of the time."
			},
			"gameFinish-3" : {
				fr : "<br/>Félicitations! Vous avez sauvé l'Univers!",
				en : "<br/>Congratulations! You saved the Universe!"
			},
			"gameFinish-4" : {
				fr : "Découvrez nos autres jeux sur <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>.",
				en : "Discover our other games on <a target='_blank' alt='Kongregate' href='http://www.kongregate.com/games/JeuxBebel'>Kongregate</a>."
			},
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
				fr : "Suivant",
				en : "Next"
			},	
			"quetes" : {
				fr : "Objectifs",
				en : "Goals"
			},        
			"autel" : {
				fr : "Autel",
				en : "Altar"
			},        
			"success" : {
				fr : "Succès",
				en : "Success"
			},        
			"artefacts" : {
				fr : "Artéfacts",
				en : "Artifacts"
			},        
			"croyance" : {
				fr : "Croyance",
				en : "Faith"
			},
			"illumination" : {
				fr : "Illumination",
				en : "Illumination"
			},
			"bien" : {
				fr : "Bien",
				en : "Goodness"
			},
			"mal" : {
				fr : "Mal",
				en : "Evilness"
			},
			"buy" : {
				fr : "Acheter",
				en : "Buy"
			},
			"collect" : {
				fr : "Collecter",
				en : "Collect"
			},
			"equilibre" : {
				fr : "Équilibre de l'Univers",
				en : "Balance of Universe"
			},
			"level" : {
				fr : "Niveau : ",
				en : "Level : "
			},
			"passageLevel" : {
				fr : "Passer au niveau: ",
				en : "Go to level: "
			},
			"prix" : {
				fr : "Prix: ",
				en : "Price: "
			},
			"gain" : {
				fr : "Gains: ",
				en : "Earnings: "
			},
			"parSec" : {
				fr : "/sec",
				en : "/sec"
			},
			"parClicks" : {
				fr : "/clicks",
				en : "/clicks"
			},
			"deite" : {
				fr : "Déités",
				en : "Deities"
			},        
			"univers" : {
				fr : "Univers",
				en : "Universe"
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
			"grandTout" : {
				fr : "Grand Tout",
				en : "Great Everything"
			},        
			"grandTout-descr" : {
				fr : "Le début et la fin de toute chose. Il représente l'essence même de l'Univers.",
				en : "The beginning and the end of all things. He represents the essence of the Universe."
			},        
			"dieu" : {
				fr : "Dieu",
				en : "God"
			},        
			"dieu-descr" : {
				fr : "Dieu de la nature et géniteur de toute chose. Il est complémentaire à la Déesse et progresse en sa compagnie.",
				en : "God of nature and progenitor of all things. He is complementary to the Goddess and progresses with her."
			},        
			"deesse" : {
				fr : "Déesse",
				en : "Goddess"
			},        
			"deesse-descr" : {
				fr : "Elle représente la fertilité, la magie et le féminin sacré. Elle est forte et indépendante.",
				en : "She represents fertility, magic and the divine feminine. She's strong and independent."
			},        
			"terre" : {
				fr : "Terre",
				en : "Earth"
			},        
			"terre-descr" : {
				fr : "Au départ fut la Terre. Lieu éternel de sagesse et d'équilibre. Le Dieu et la Déesse lui donnèrent sa force à travers les âges.",
				en : "At start was the Earth. Eternal place of wisdom and balance. The God and the Goddess gave it its strength through the ages."
			},        
			"lune" : {
				fr : "Lune",
				en : "Moon"
			},        
			"lune-descr" : {
				fr : "Sanctuaire de la Déesse. Elle garde en son sein la beauté et la grâce de toute femme.",
				en : "The Goddess' sanctuary. It keeps in her heart the beauty and grace of every woman."
			},        
			"soleil" : {
				fr : "Soleil",
				en : "Sun"
			},        
			"soleil-descr" : {
				fr : "Sanctuaire du Dieu Cornu. Son éclat rayonne sa puissance et son pouvoir illumine le cœur de tout homme.",
				en : "The Horned God's sanctuary. Its glow radiates its mighty and its power illuminates the heart of every man."
			},        
			"ciel" : {
				fr : "Ciel",
				en : "Sky"
			},        
			"ciel-descr" : {
				fr : "Centre spirituel de l'inconscient. Le Dieu et la Déesse nous élèvent vers la beauté de l'immatériel.",
				en : "Spiritual center of the subconscious. The God and the Goddess elevate us to the beauty of the immaterial."
			},        
			"foret" : {
				fr : "Forêts",
				en : "Forest"
			},        
			"foret-descr" : {
				fr : "L'énergie du monde coule dans ses veines. Le Dieu Cornu en est son gardien, la Terre en est son berceau.",
				en : "Energy of the world flows through its veins. The Horned God is its keeper, the Earth its cradle."
			},        
			"volcan" : {
				fr : "Volcans",
				en : "Volcanoes"
			},        
			"volcan-descr" : {
				fr : "C'est dans le feu et les cendres que l'Homme jaillit sur Terre. C'est dans le feu et les cendres qu'il s'éteindra.",
				en : "It's in fire and ashes that Humanity gushes on Earth. It's in fire and ashes that it will be extinguished."
			},        
			"ocean" : {
				fr : "Océans",
				en : "Oceans"
			},        
			"ocean-descr" : {
				fr : "Berceau de la vie. L'ocean reflète la magie de la Lune et la grandeur de la Déesse.",
				en : "Cradle of life. The ocean reflects the magic of the Moon and the greatness of the Goddess."
			},        
			"gouffre" : {
				fr : "Gouffre",
				en : "Chasm"
			},        
			"gouffre-descr" : {
				fr : "Repaire de monstres cruels ou sources de sinistres histoires, le gouffre renferme un secret que nul ne voudrait savoir.",
				en : "Den of cruel monsters or sources of sinister stories, the chasm holds a secret that no one would want to know."
			},        
			"vide" : {
				fr : "Vide",
				en : "Void"
			},        
			"vide-descr" : {
				fr : "C'est là, dans le vide, que débutent les choses et qu'elles se terminent.<br/>C'est aussi là, dans le vide, que se cachent les maux les plus perfides.",
				en : "It's here, into the void, that all things begins and ends.<br/>It's also here, into the void, that the most perfidious evils are hidden."
			},        
			"chaos" : {
				fr : "Chaos",
				en : "Chaos"
			},        
			"chaos-descr" : {
				fr : "Le chaos engendre l'ordre et l'ordre, inévitablement, engendre le chaos.<br/>Du chaos naît la vie et dans la mort il se poursuit.",
				en : "From the chaos results order and from order, inevitably, results chaos.<br/>From the chaos born the life and it's in the death that its continue."
			},        
			"abysse" : {
				fr : "Abysses",
				en : "Abyss"
			},        
			"abysse-descr" : {
				fr : "Au milieu des profondeurs et des abymes se terrent les entités les plus infâmes...<br/>Ne serait-ce que d'y penser ferait sombrer votre âme dans des abysses sans fond.",
				en : "In the middle of the depths and abymes hide the most infamous entities...<br/>Just thinking about it would sink your soul into infinite depths."
			},
			"amour" : {
				fr : "Amour",
				en : "Love"
			},        
			"amour-descr" : {
				fr : "Moteur de l'Univers, il est la représentation abstraite du cycle de la Déesse et du Dieu. Ni bon ni mauvais, seulement éternel.",
				en : "The engine of the Universe, it's the abstract representation of the God and the Goddess' cycle. Neither good nor bad, only eternal."
			},        
			"connaissance" : {
				fr : "Connaissance",
				en : "Knowledge"
			},        
			"connaissance-descr" : {
				fr : "Le savoir est une force suprême permettant de comprendre les rouages de l'Univers. Entre de mauvaises mains, elle marque la fin de tout...",
				en : "Knowledge is a supreme strength for understanding the workings of the Universe. In the wrong hands, it marks the end of everything..."
			},        
			"evolution" : {
				fr : "Évolution",
				en : "Evolution"
			},        
			"evolution-descr" : {
				fr : "De l'enfant vient l'adulte, de la foudre vient l'orage. Les choses sont en perpétuelles évolutions et, paradoxalement, en perpétuel recommencement.<br/>La fin de ce cycle marquera le début d'un nouveau...",
				en : "From the child comes adult, from the lightning comes storm. Things are in perpetual evolution and, paradoxically, in perpetual restart.<br/>The end of this cycle will mark the beginning of new one..."
			},        
			"newQuete" : {
				fr : "Félicitations! Vous avez accompli un nouvel objectif!<br/>Voyagez dans la constellation pour consulter les détails.",
				en : "Congratulations! You've achieved a new goal!<br/>Explore the constellation to see the details."
			},
			"fois" : {
				fr : "<span class='info' title='Vous remporterez ?x? fois votre gain actuel en ?type?'>?x?x gain actuel</span>",
				en : "<span class='info' title=\"You'll receive ?x? times your current ?type? earning\">?x?x current earning</span>"
			},
			"quete-start" : {
				fr : "Au commencement...",
				en : "At beginning..."
			},        
			"quete-start-desc" : {
				fr : "Améliorez le Grand Tout pour la première fois",
				en : "Upgrade the Great Everything for the first time"
			},        
			"quete-univers" : {
				fr : "La création de l'Univers",
				en : "Universe creation"
			},        
			"quete-univers-desc" : {
				fr : "Créez l'Univers",
				en : "Create the Universe"
			},        
			"quete-vie" : {
				fr : "La création de la vie",
				en : "The life creation"
			},        
			"quete-vie-desc" : {
				fr : "Créez la vie",
				en : "Create the life"
			},        
			"quete-mort" : {
				fr : "La création de la mort",
				en : "The death creation"
			},        
			"quete-mort-desc" : {
				fr : "Créez la mort",
				en : "Create the death"
			},        
			"quete-concept" : {
				fr : "Humanité",
				en : "Humanity"
			},        
			"quete-concept-desc" : {
				fr : "Créez les concepts humains",
				en : "Create humans concepts"
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
			
			"quete-5-events" : {
				fr : "Premiers pas",
				en : "First steps"
			},        
			"quete-5-events-desc" : {
				fr : "Accomplissez 5 événements.",
				en : "Complete 5 events."
			},
			"quete-10-events" : {
				fr : "Continuez comme ça!",
				en : "Continue like this!"
			},        
			"quete-10-events-desc" : {
				fr : "Accomplissez 10 événements.",
				en : "Complete 10 events."
			},
			"quete-20-events" : {
				fr : "Assistante sociale",
				en : "Social worker"
			},        
			"quete-20-events-desc" : {
				fr : "Accomplissez 20 événements.",
				en : "Complete 20 events."
			},
			"quete-40-events" : {
				fr : "Expert en sociologie",
				en : "Expert in sociology"
			},        
			"quete-40-events-desc" : {
				fr : "Accomplissez 40 événements.",
				en : "Complete 40 events."
			},
			"quete-60-events" : {
				fr : "Omniscient",
				en : "Omniscient"
			},        
			"quete-60-events-desc" : {
				fr : "Accomplissez 60 événements.",
				en : "Complete 60 events."
			},
			
			"quete-primary-stones" : {
				fr : "Achetez toutes les pierres primaires",
				en : "Buy all primary gemstones"
			},        
			"quete-primary-stones-desc" : {
				fr : "Le début d'une grande richesse",
				en : "The beginning of a great wealth"
			},
			"quete-unlock-lunar-stones" : {
				fr : "Débloquer les pierres lunaires",
				en : "Unlock the lunar gemstones"
			},
			"quete-unlock-lunar-stones-desc" : {
				fr : "La Déesse veille sur vous",
				en : "The Goddess takes care of you"
			},
			"quete-lunar-stones" : {
				fr : "Achetez toutes les pierres lunaires",
				en : "Buy all moon gemstones"
			},        
			"quete-lunar-stones-desc" : {
				fr : "L'éclat d'une grande puissance",
				en : "The shine of a great power"
			},
			"quete-unlock-solar-stones" : {
				fr : "Débloquer les pierres solaires",
				en : "Unlock the solar gemstones"
			},        
			"quete-unlock-solar-stones-desc" : {
				fr : "Le Dieu vous protège",
				en : "God protects you"
			},
			"quete-solar-stones" : {
				fr : "Achetez toutes les pierres solaires",
				en : "Buy all solar gemstones"
			},        
			"quete-solar-stones-desc" : {
				fr : "Brûlez dans les flammes de l'ignorance!",
				en : "Burn in the flames of ignorance!"
			},
			"quete-unlock-secret-stones" : {
				fr : "Débloquer les pierres secrètes",
				en : "Unlock the secret gemstones"
			},        
			"quete-unlock-secret-stones-desc" : {
				fr : "Aucun mystère ne vous échappe",
				en : "No mystery is unknown to you"
			},
			"quete-secret-stones" : {
				fr : "Achetez toutes les pierres secrètes",
				en : "Buy all the secret gemstones"
			},        
			"quete-secret-stones-desc" : {
				fr : "Une connaissance infinie...",
				en : "An infinite knowledge..."
			},
			"primaire" : {
				fr : "Primaire",
				en : "Primary"
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
				fr : "Secrète",
				en : "Secret"
			},        
			"pierreDejaPlace" : {
				fr : "La pierre est déjà placée sur l'autel.",
				en : "The gemstone is already placed on the altar."
			},        
			"retirerPierre" : {
				fr : "Retirer la pierre de l'autel?",
				en : "Remove the gemstone from the altar?"
			},        
			"diamant" : {
				fr : "Diamant",
				en : "Diamond"
			},        
			"diamant-desc" : {
				fr : "Symbole de pureté et de perfection, il peut également amener la mort et la destruction dans son sillage...",
				en : "Symbol of purity and perfection, it can also bring death and destruction on its wake..."
			},        
			"rubis" : {
				fr : "Rubis",
				en : "Ruby"
			},        
			"rubis-desc" : {
				fr : "Le Rubis représente le sang de Mère Nature. Symbole de l'amour divin, il peut également renforcer la colère de son porteur.",
				en : "Ruby represents the blood of Mother Nature. Symbol of divine love, it can also increase the anger of its wearer."
			},        
			"emeraude" : {
				fr : "Émeraude",
				en : "Emerald"
			},        
			"emeraude-desc" : {
				fr : "L'émeraude porte le symbole d'un espoir éternel et d'une grande connaissance. Par sa couleur, il rappelle le renouveau du printemps et donc la renaissance.",
				en : "The emerald carries the symbol of eternal hope and great knowledge. By its colour, it reminds the renewal of spring and therefore of rebirth."
			},        
			"saphir" : {
				fr : "Saphir",
				en : "Sapphire"
			},        
			"saphir-desc" : {
				fr : "Pierre de vérité et de justice. Au début du temps, un groupe de géants dérobèrent un morceau de ciel. Les dieux, fous de rage, les transformèrent en montagnes, oubliant le bien volé. Ainsi le saphir naquit...",
				en : "Stone of truth and justice. At the beginning of time, a group of giants stole a piece of sky. The gods, furious, turned them into mountains, forgetting the stolen property. Then the sapphire was born..."
			},        
			"larme-apache" : {
				fr : "Larme d'Apache",
				en : "Apache's tear"
			},
			"larme-apache-desc" : {
				fr : "Cette puissante pierre est une obsidienne particulière.<br/>D'une grande pureté, elle est en réalité les larmes de jeunes femmes pleurant leur amour disparu.",
				en : "This powerful stone is a particular obsidian.<br/>Of great purity, it's in reality the tears of young women mourning their lost love."
			},
			"cristal-de-roche" : {
				fr : "Cristal de Roche",
				en : "Rock Crystal"
			},
			"cristal-de-roche-desc" : {
				fr : "Essence du monde, elle amplifie la puissance des pierres qui l'entoure et symbolise l'élévation de l'âme.",
				en : "World's essence, it's increase the strength of surrounding stones and symbolizes the elevation of the soul."
			},	
			"grenat" : {
				fr : "Grenat",
				en : "Garnet"
			},
			"grenat-desc" : {
				fr : "Pierre du courage, elle représente les épreuves que doit franchir le héros dans sa quête éternelle.",
				en : "Stone of courage, it's represents the challenges that the hero must overcome in his eternal quest."
			},
			"onyx" : {
				fr : "Onyx",
				en : "Onyx"
			},
			"onyx-desc" : {
				fr : "Symbole à mi-chemin entre discorde et protection, l'onyx représente la volonté et l'intuition.",
				en : "Symbole between discord and protection, onyx represents will and intuition."
			},
			"ambre" : {
				fr : "Ambre",
				en : "Amber"
			},
			"ambre-desc" : {
				fr : "Larmes des premiers arbres peuplant la Terre, l'ambre contient la lumière du monde. Sa bienveillance amène sagesse et sérénité.",
				en : "Tears of the first trees populating the Earth, amber contains the light of world. Its kindness brings wisdom and serenity."
			},
			"obsidienne" : {
				fr : "Obsidienne",
				en : "Obsidian"
			},
			"obsidienne-desc" : {
				fr : "Cette puissante pierre possède autant le pouvoir d'ouvrir les chairs que de les refermer.<br/>Elle protège et aide à combattre les idées négatives ou les amplifies...",
				en : "This powerful stone has as many capacity to open the flesh as to close it.<br/>It protects and helps to fight negatives ideas or increases them."
			},
			"hematite" : {
				fr : "Hématite",
				en : "Hematite"
			},
			"hematite-desc" : {
				fr : "Pierre de sang, elle suit les progrès de l'Humanité depuis ses débuts. Elle est un symbole de dynamisme et de vitalité.",
				en : "Bloodstone, it follow the progress of Humanity since its inception. It's a symbol of dynamism and vitality."
			},
			"pierre-de-soleil" : {
				fr : "Pierre de Soleil",
				en : "Sunstone"
			},
			"pierre-de-soleil-desc" : {
				fr : "Lumière dans la tempête, elle guide l'Humanité vers la grandeur du Soleil. Mais, gare aux fous qui pourraient s'y brûler!",
				en : "Light in the storm, it guides Humanity to the greatness of the Sun. But, beware of madmen who could be burned there!"
			},	
			"malachite" : {
				fr : "Malachite",
				en : "Malachite"
			},
			"malachite-desc" : {
				fr : "Symbole de beauté, la légende raconte qu'elle permettrait la compréhension du langage animal.",
				en : "Symbol of beauty, the legend tells that it would allow the understanding of animal language. "
			},
			"amethyste" : {
				fr : "Améthyste",
				en : "Amethyst"
			},
			"amethyste-desc" : {
				fr : "La Pierre des dieux par son symbole d'intelligence et de sagesse. L'améthyste aide à dissiper toutes mauvaises pensées et protège ainsi son porteur.",
				en : "The gods' stone by its symbol of intelligence and wisdom. Amethyst helps to dissipate all bad thoughts and protects its wearer."
			},
			"lapis-lazuli" : {
				fr : "Lapis-lazuli",
				en : "Lapis Lazuli"
			},
			"lapis-lazuli-desc" : {
				fr : "Pierre de protection et de bonne humeur par excellence, le lapis-lazuli serait un morceau de ciel étoilé tombé des cieux.",
				en : "Stone of protection and good mood by excellence, lapis lazuli would be a piece of staring sky fallen from heaven."
			},
			"labradorite" : {
				fr : "Labradorite",
				en : "Labradorite"
			},
			"labradorite-desc" : {
				fr : "Prison minérale contenant le feu de l'aurore boréale.<br/>La labradorite est une pierre d'équilibre renfermant l'esprit des ancêtres.",
				en : "Mineral prison containing the fire of the aurora borealis.<br/>Labradorite is a balance stone holding ancestors' spirit."
			},
			"azurite" : {
				fr : "Azurite",
				en : "Azurite"
			},
			"azurite-desc" : {
				fr : "Pierre de concentration, l'azurite permet également de se connecter à la sagesse supérieure.",
				en : "Stone of concentration, azurite also allows to connect himself to superior wisdom."
			},
			"pierre-de-lune" : {
				fr : "Pierre de Lune",
				en : "Moonstone"
			},
			"pierre-de-lune-desc" : {
				fr : "Pierre de pureté et de féminité, elle est constituée de lumière solaire et reflète l'immensité du cosmos.",
				en : "Stone of purity and feminity, it's constitued of sunlight and reflect the immensity of cosmos."
			},	
			"ringwoodite" : {
				fr : "Ringwoodite",
				en : "Ringwoodite"
			},        
			"ringwoodite-desc" : {
				fr : "Caché au centre du monde, un autre océan bien plus grand et bien plus ancien sommeille...<br/>Entendez-le gronder, il ne cherche qu'à remonter...",
				en : "Hidden in the center of world, another ocean most bigger and older sleeps...<br/>Hear it growl, it only wants to go up..."
			},        
			"hypatia" : {
				fr : "Hypatia",
				en : "Hypatia"
			},        
			"hypatia-desc" : {
				fr : "Noyau stellaire d'une comète éteinte depuis des millions d'années.<br/>L'histoire de notre cosmos débute et se termine ainsi...",
				en : "The stellar nucleus of a comet extincted since millions of years.<br/>The story of our cosmos starts and finishes like this..."
			},       
			"didactitiel1" : {
				fr : "Yule - La Naissance d'un dieu<br/>(Cliquez sur \"Suivant\" pour passer à la suite)",
				en : "Yule - Godbirth<br/>(Click on \"Next\" to continue)"
			},
			"didactitiel2" : {
				fr : "Bienvenue, jeune maître! Comment fut votre repos?<br/>Je me nomme Origine. Je serai votre serviteur dans cette aventure.",
				en : "Welcome, young master! How was your rest?<br/>My name is Origin. I will be your servant in this adventure."
			},
			"didactitiel3" : {
				fr : "C'est un heureux jour qui se prépare car notre Déesse s'apprête à enfanter un nouveau dieu!",
				en : "It's a happy day comming up because our Goddess going to give birth to a new god!"
			},
			"didactitiel4" : {
				fr : "Vous pourriez les aider, mais plus personne ne croit en vous, le Grand Tout...",
				en : "You could help them, but no one believe in you anymore, the Great Everything..."
			},
			"didactitiel5" : {
				fr : "Heureusement, moi, je ne vous ai pas oublié!<br/>Servez-vous de cette croyance pour vous élever.",
				en : "Fortunately, me, I haven't forgotten you!<br/>Use this belief to elevate yourself."
			},
			"didactitiel-barre1" : {
				fr : "Ah! Je vous sens déjà beaucoup plus présent!<br/>Voyez-vous cette barre au-dessus de l'espace?",
				en : "Ah! I already feel you much more present!<br/>Do you see this bar above the space?"
			},
			"didactitiel-barre2" : {
				fr : "Elle représente l'équilibre de l'Univers.<br/>Veillez à toujours garder un œil sur le cercle d'équilibre au centre.",
				en : "It represents the Universe balance.<br/>Always keep an eye on the balance circle in the centre."
			},
			"didactitiel-barre3" : {
				fr : "Malheureusement, depuis votre départ, le mal a pris le dessus...",
				en : "Unfortunately, since your leave, evilness got the upper hand..."
			},
			"didactitiel-barre4" : {
				fr : "Essayez de vous familiariser avec ce système.<br/>Je reviendrai vers vous lorsque le Dieu sera parmi nous.",
				en : "Try to adapt yourself with this system.<br/>I'll come back when the God will be among us."
			},	
			"didactitiel-dieu1" : {
				fr : "C'est un grand jour, le Dieu est né! Tout cela mérite un petit cadeau!",
				en : "It's a great day, the God was born! All this requires a little gift!"
			},
			"didactitiel-dieu2" : {
				fr : "Vous voyez cette constellation en bas à droite?<br/>Vous y trouverez toute sorte d'options.",
				en : "Do you see this constellation at bottom right?<br/>You'll find all kinds of options there."
			},
			"didactitiel-dieu3" : {
				fr : "Pour commencer, cliquez dessus pour y accéder, puis accomplissez l'objectif. Ensuite, revenez me voir.",
				en : "Now, click on it to access it, then complete the objective. After that, come back to see me."
			},	
			"didactitiel-autel1" : {
				fr : "Félicitations! Vous avez atteint votre premier objectif!<br/>Offrons maintenant notre cadeau au nouveau-né.",
				en : "Congratulations! You've reached your first goal!<br/>Now, offer our gift to the newborn."
			},
			"didactitiel-autel2" : {
				fr : "Pour ce faire, retournez sur la constellation, achetez une pierre à l'autel, puis posez-la dessus.",
				en : "For this, go back to the constellation, buy a gemstone at the altar, then put it on."
			},	
			"didactitiel-pierrePose" : {
				fr : "Bien joué! Il ne vous reste plus qu'à poser la pierre sur l'autel.",
				en : "Well played! All you've to do now is to put the gemstone on the altar."
			},
			"didactitiel-fin1" : {
				fr : "Bravo! Vous êtes en bonne voie pour rétablir l'équilibre de l'Univers!",
				en : "Bravo! You're on the right track to restore the balance of the Universe!"
			},
			"didactitiel-fin2" : {
				fr : "Maintenant, c'est à vous! Bon courage! Le destin de l'Univers est entre vos mains!",
				en : "It's your turn, now! Good luck! The fate of the Universe are in your hands!"
			},	
			"cinematique-imbolc" : {
				fr : "Imbolc - Purification du corps et de l'esprit",
				en : "Imbolc - Purification of body and mind"
			},
			"cinematique-imbolc1" : {
				fr : "Félicitations, maître! Le Dieu a bien grandit et la Déesse veille sur lui de son aura chaleureuse.",
				en : "Congratulations, master! The God has grown well and the Goddess takes care of him with her warm aura."
			},
			"cinematique-imbolc2" : {
				fr : "Il est maintenant temps de prendre les bonnes décisions pour l'Univers.",
				en : "Now, it's time to take the good decisions for the Universe."
			},
			"cinematique-imbolc3" : {
				fr : "Mais, attention! Chacune d'entre elles peut avoir une incidence bonne ou mauvaise sur la suite des événements!",
				en : "But, be careful! Each of them can have good or bad impact to the following events!"
			},
			"cinematique-imbolc4" : {
				fr : "Lorsque le sablier du destin apparaît, cliquez dessus pour prendre vos décisions.",
				en : "When the sandglass of fate appears, click on it to take your decisions."
			},
			"cinematique-imbolc5" : {
				fr : "Bon courage, mon maître! Vous saurez faire les bons choix!",
				en : "Good luck, my master! You'll be able to make the right choices!"
			},	
			"cinematique-ostara" : {
				fr : "Ostara - Renouveau de la vie et de la Terre",
				en : "Ostara - Renewal of life and Earth"
			},
			"cinematique-ostara-1" : {
				fr : "Félicitations! Notre Dieu grandit de jour en jour! Vous êtes sur la bonne voie!",
				en : "Congratulations! Our God grows day by day! You're on the right track!"
			},
			"cinematique-ostara-2" : {
				fr : "De nouvelles responsabilités s'offrent à vous. Continuez de faire les bons choix! L'Univers compte sur vous.",
				en : "New responsibilities are open to you. Continue to do the right choices! Universe is counting on you."
			},
			"cinematique-beltane" : {
				fr : "Beltane - L'unification de deux âmes",
				en : "Beltane - Unification of two souls"
			},
			"cinematique-beltane-1" : {
				fr : "Oh! Nous nous retrouvons de nouveau! Cela fait longtemps!",
				en : "Oh! We see each other again! It's been a long time!"
			},
			"cinematique-beltane-2" : {
				fr : "Ah, l'amour! N'est-ce pas magnifique? Notre Dieu a rencontré sa Déesse!<br/>Une belle histoire commence...",
				en : "Ah, the love! Wonderful, isn't it? Our God met his Goddess!<br/>A beautiful story begins..."
			},
			"cinematique-litha" : {
				fr : "Litha - Mariage du Ciel et de la Terre",
				en : "Litha - Wedding of Sky and Earth"
			},
			"cinematique-litha-1" : {
				fr : "Bienvenue! Nous sommes heureux de vous revoir!",
				en : "Welcome! We're happy to see you again!"
			},
			"cinematique-litha-2" : {
				fr : "C'est un grand jour aujourd'hui! Le Dieu et la Déesse se marient!<br/>Vous avez pensé au cadeau?",
				en : "It's a great day today! The God and the Goddess get married!<br/>Have you thought about the gift?"
			},
			"cinematique-lammas" : {
				fr : "Lammas - Le déclin du guerrier",
				en : "Lammas - The warrior's decline"
			},
			"cinematique-lammas-1" : {
				fr : "Que de travail en ce moment... Les prières n'en finissent plus...",
				en : "Lot of work at this time... The prayers never end..."
			},
			"cinematique-lammas-2" : {
				fr : "Notre Dieu se fatigue. Un peu de repos lui ferait le plus grand bien.",
				en : "Our God gets tired. A little rest would do him a greatest good."
			},
			"cinematique-mabon" : {
				fr : "Mabon - La sagesse de l'Éternel",
				en : "Mabon - The wisdom of Eternal One"
			},
			"cinematique-mabon-1" : {
				fr : "L'hiver arrive tout doucement. Le Dieu est très fatigué en ce moment...",
				en : "Winter is coming slowly. The God is very tired right now."
			},
			"cinematique-mabon-2" : {
				fr : "Malheureusement, le repos ne suffit plus à lui redonner sa force d'antan...",
				en : "Unfortunately, rest is no longer enough to restore it its original strength..."
			},
			"cinematique-samhain" : {
				fr : "Samhain - La fin d'un cycle",
				en : "Samhain - End of cycle"
			},
			"cinematique-samhain-1" : {
				fr : "Triste jour... Nous sommes en deuil aujourd'hui. Notre Dieu s'en est allé...",
				en : "Sad day... We're in mourning today. Our God has gone..."
			},
			"cinematique-samhain-2" : {
				fr : "La Déesse le pleure continuellement. Je vais rester auprès d'elle pour la soutenir.",
				en : "The Goddess cry him constantly. I'll stay with her to support her."
			},	
			"gainSuccess" : {
				fr : "Félicitations! Vous avez gagné le succès : {?}!<br/>Voyagez dans la constellation pour consulter les détails.",
				en : "Congratulations! You've won the success : {?}!<br/>Explore the constellation to see the details."
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
				fr : "Effectuer un total de 1000 clics!",
				en : "Do a total of 1000 clicks!"
			},
			"success-5000click" : {
				fr : "5K Clics",
				en : "5K Clicks"
			},
			"success-5000click-descr" : {
				fr : "Effectuer un total de 5000 clics! Incroyable!",
				en : "Do a total of 5000 clicks! Incredible!"
			},
			"success-10000click" : {
				fr : "10K Clics",
				en : "10K Clicks"
			},
			"success-10000click-descr" : {
				fr : "Effectuer un total de 10000 clics... Vous n'avez que ça à faire?",
				en : "Do a total of 10000 clicks... Don't you've anything else to do?"
			},
			"success-50000click" : {
				fr : "50K Clics",
				en : "50K Clicks"
			},
			"success-50000click-descr" : {
				fr : "Effectuer un total de 50000 clics!!! Il faut arrêter maintenant o_O",
				en : "Do a total of 50000 clicks!!! You have to stop now o_O"
			},
			"success-100000click" : {
				fr : "100K Clics",
				en : "100K Clicks"
			},
			"success-100000click-descr" : {
				fr : "Effectuer un total de 100000 clics!!! Top of the pop!",
				en : "Do a total of 100000 clicks!!! Top of the pop!"
			},
			"success-amour" : {
				fr : "Premier amour",
				en : "First love"
			},        
			"success-amour-descr" : {
				fr : "Amener le Dieu et la Déesse au niveau 5.",
				en : "Bring the God and Goddess to level 5."
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
				en : "Put 6 gemstones on the altar."
			},
			"success-3eoeil" : {
				fr : "Troisième œil",
				en : "Third eye"
			},        
			"success-3eoeil-descr" : {
				fr : "Gagnez le troisième œil.",
				en : "Earn the third eye."
			},
			"gainArtefact" : {
				fr : "Félicitations! Vous avez gagné l'artéfact : {?}!<br/>Voyagez dans la constellation pour consulter les détails.",
				en : "Congratulations! You've won the artefact : {?}!<br/>Explore the constellation to see the details."
			},
			"torque" : {
				fr : "Torque",
				en : "Torc"
			},
			"torque-desc" : {
				fr : "Symbole des grands guerriers. Il est l'objet essentiel à tout dieu en apprentissage!",
				en : "Symbol of the great warriors. It's the essential object of any god in learning!"
			},
			"corne-abondance" : {
				fr : "Corne d'abondance",
				en : "Horn of plenty"
			},
			"corne-abondance-desc" : {
				fr : "Corne d'abondance et de joie. Elle apportera le bonheur à son possesseur et son entourage.",
				en : "Horn of plenty and joy. It will bring happiness to it's owner and his entourage."
			},
			"troisieme-oeil" : {
				fr : "Troisième œil",
				en : "Third eye"
			},
			"troisieme-oeil-desc" : {
				fr : "Qui possède le troisième œil peut de comprendre l'équilibre complexe de l'Univers.",
				en : "Whoever possesses the third eye can understand the complex balance of the Universe."
			},
			"idole-feu" : {
				fr : "Idole de feu",
				en : "Idol of fire"
			},
			"idole-feu-desc" : {
				fr : "Une étrange statuette représentant l'essence même du feu.",
				en : "A strange statuette representing the essence of fire."
			},
			"idole-mort" : {
				fr : "Idole de mort",
				en : "Idol of death"
			},
			"idole-mort-desc" : {
				fr : "Une mystérieuse relique renfermant un terrible secret.",
				en : "A mysterious relic holding a terrible secret."
			},
			"saint-graal" : {
				fr : "Saint Graal",
				en : "Holy Grail"
			},
			"saint-graal-desc" : {
				fr : "Un calice sacré ayant contenu du sang divin. Sa puissance donne à son possesseur les pleins pouvoirs.",
				en : "A sacred chalice that contained a divin blood. Its mighty gives to his possessor the full powers."
			},
			"fragment-lunaire" : {
				fr : "Fragment lunaire",
				en : "Lunar fragment"
			},
			"fragment-lunaire-desc" : {
				fr : "Un morceau de lune en souvenir du plus périlleux des voyages. Son éclat scintillera pendant des millénaires.",
				en : "A piece of moon in memory of the most dangerous journey. Its glow will shine for millennia."
			},
			"youneed" : {
				fr : "Vous devez avoir :",
				en : "You need :"
			},
			"youearn" : {
				fr : "Vous gagnerez :",
				en : "You'll earn :"
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
		},
		
		/**
		* Permet de charger le language en session
		**/
		loadLanguage : function() {
			var sessionLanguage = window.localStorage.getItem("bebelLanguage");
			if (sessionLanguage) this.local = sessionLanguage;
		},
		
		/**
		* Permet de modifier le language en session
		**/
		setLanguage : function(newLanguage) {
			window.localStorage.setItem("bebelLanguage", newLanguage);
			try {
				parent.location.reload(true);
			}catch(e) {
				parent.location.href=parent.location.href;
			}
		}
	};
});
