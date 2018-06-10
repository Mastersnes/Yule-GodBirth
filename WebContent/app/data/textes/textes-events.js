'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Evenements
		 */
		/**
		 * Premier evenement
		 */
		"first-event" : {
			fr : "Maître ! De nombreux representants de diverses planetes demandent à vous voir. Souhaitez-vous les recevoir ?",
			en : "-"
		},
		"first-event-ok" : {
			fr : "Très bon choix maître ! Je vais les faire entrer.",
			en : "-"
		},
		"first-event-ko" : {
			fr : "Très bien... Peut-être n'est-ce pas le bon moment... Je vais leur demander de quitter les lieux.",
			en : "-"
		},
		/**
		 * Pluie ?
		 */
		"pluie?-event" : {
            fr : "Merci de me recevoir jeune dieu !<br/>Malheureusement, il ne pleut plus depuis des années sur ma planete.<br/>Pourriez-vous intervenir ?",
            en : "-"
        },
        "pluie?-event-ok" : {
            fr : "Merci mon dieu, vous nous sauvez la vie ! Nous vous en serons eternellement reconnaissant !",
            en : "-"
        },
        "pluie?-event-ko" : {
            fr : "Notre perte est donc inevitable... Un dieu n'est-il pas censé proteger ses fideles ?",
            en : "-"
        },
        /**
         * Cadeau pour la pluie
         */
        "cadeau-pluie?-event" : {
            fr : "Vous nous avez sauvé et, pour vous remercier, nous vous offrons un petit cadeau.<br/>Choisissez :",
            en : "-"
        },
        "cadeau-pluie?-event-croyance" : {
            fr : "Nous, les noystri, allons creer un temple à votre effigie et nous partageront votre parole dans l'univers !",
            en : "-"
        },
        "cadeau-pluie?-event-illumination" : {
            fr : "Nous, les noystri, allons nous orienter vers la voie de l'illumination. Nous suivrons vos enseignements pour nous elever !",
            en : "-"
        },
        /**
         * Eclipse ?
         */
        "eclipse?-event" : {
            fr : "Bien le bonjour jeune dieu !<br/>Ah, Le jour... Il n'est pas bon pour mes affaires... Pourriez-vous, dans votre grande sagesse, creer une eclipse sur ma planète ?<br/> Je saurai vous recompenser...",
            en : "-"
        },
        "eclipse?-event-ok" : {
            fr : "Vous avez fait le bon choix mon dieu !",
            en : "-"
        },
        "eclipse?-event-ko" : {
            fr : "Vous n'avez aucune ambition, dieu pathetique...",
            en : "-"
        },
        "eclipse-punition?-event" : {
            fr : "Ce mortel vous a insulté... C'est impardonnable. Souhaitez-vous le tuer ?",
            en : "-"
        },
        "letuer" : {
            fr : "Le tuer",
            en : "-"
        },
        "lelaisserpartir" : {
            fr : "Le laisser partir",
            en : "-"
        },
        "eclipse-punition?-event-ok" : {
            fr : "Il l'avait sans doute merité mais etait-ce vraiment indispensable ?...",
            en : "-"
        },
        "eclipse-punition?-event-ko" : {
            fr : "Cela montre votre sagesse. Felicitation seigneur !",
            en : "-"
        },
        
        /**
         * Sacrifice ?
         */
        "sacrifice?-event" : {
            fr : "B...Bo...Bonjour euh... dieu ? Euh... En fait notre pretre... Il dit que c'est bien de sacrifier des gens...<br/>Vous trouvez ca cool non ?",
            en : "-"
        },
        "sacrifice?-event-ok" : {
            fr : "Hahaha chouette ! Eh euh josé, on continue le massacre hein ! euh Merci euh.. monsieur dieu.",
            en : "-"
        },
        "sacrifice?-event-ko" : {
            fr : "Ah ? Bah euh... D'accord... Bon bah on le fera plus alors... Au revoir monsieur le dieu.",
            en : "-"
        },
        
        /**
         * Blessure ?
         */
        "blessure?-event" : {
            fr : "Outch, ah... c'est top dur, laissez moi là... Courage, encore quelques pas !<br/> Cher dieu, je me suis couper au doigt, ca brule, je souffre tellement !<br/> Pourriez-vous me soigner ?",
            en : "-"
        },
        "bisoumagique" : {
            fr : "Faire un bisou magique",
            en : "-"
        },
        "blessure?-event-ok" : {
            fr : "Ahhhh, je me sens déjà mieux ! Merci beaucoup et à bientôt ! Euh... où est la sortie s'il vous plait ?",
            en : "-"
        },
        "blessure?-event-ko" : {
            fr : "Ahhhh non !!!! La douleur est beaucoup trop insupportable ! Je me sens defaillir !",
            en : "-"
        },

        /**
         * Argent ?
         */
        "argent?-event" : {
            fr : "Bonjour cher dieu ! J'ai, euh, comment dire... besoin de votre aide !<br/> Rendez-moi riche et je vous assure que vous ne le regretterez pas !",
            en : "-"
        },
        "argent?-event-ok" : {
            fr : "Magnifique ! Je suis riche ! Ahaha ! Voilà le vrai pouvoir ! Merci à vous grand dieu !",
            en : "-"
        },
        "argent?-event-ko" : {
            fr : "Très bien... Comme vous le desirez... Sachez tout de même que ça ne s'arretera pas là !",
            en : "-"
        },
        
        /**
         * Vrai dieu ?
         */
        "vrai-dieu?-event" : {
            fr : "Bonjour ! Bon... Je n'irais pas par quatres chemins. Êtes-vous un vrai dieu ?",
            en : "-"
        },
        "vrai-dieu?-event-ok" : {
            fr : "Incroyable ! Ils existent réellement ? J'ai vraiment du mal à y croire !",
            en : "-"
        },
        "vrai-dieu?-event-ko" : {
            fr : "Hum... Oui, c'est bien ce que je pensais...",
            en : "-"
        },
        
        /**
         * Secheresse ?
         */
        "secheresse!-event" : {
            fr : "Maître ! Il semblerait qu'une planete entiere soit devenue desertique.<br/> Voulez-vous intervenir ?",
            en : "-"
        },
        "faire-pleuvoir" : {
            fr : "Faire pleuvoir",
            en : "-"
        },
        "secheresse!-event-ok" : {
            fr : "Les choses semblent s'ameliorer et la vie recommence à apparaitre.",
            en : "-"
        },
        "secheresse!-event-ko" : {
            fr : "Le desert galactique s'etend mais certaine formes de vie semble s'y aclimater...",
            en : "-"
        },

        /**
         * Glaciation ?
         */
        "glaciation!-event" : {
        	fr : "Maître ! Un nuage stellaire gele toute une planete ! Voulez-vous intervenir ?",
        	en : "-"
        },
        "glaciation!-event-ok" : {
        	fr : "Nous avons evité une catastrophe ! Les blocs de glace commence à fondre doucement.",
        	en : "-"
        },
        "glaciation!-event-ko" : {
        	fr : "La glace s'etend... Esperont que les choses se reglent d'elles même...",
        	en : "-"
        },

        /**
         * Sacrifice !
         */
        "sacrifice!-event" : {
            fr : "C'est une catastrophe ! Une planete de l'espace A42-22C sacrifie nombre de leurs habitant en votre nom ! Que devons-nous faire ?",
            en : "-"
        },
        "arreter-massacre" : {
            fr : "Arreter ce massacre !",
            en : "-"
        },
        "laisserfaire" : {
            fr : "Laisser faire",
            en : "-"
        },
        "sacrifice!-event-ko" : {
            fr : "Comment ?! Euh... Tr... Très bien maître...",
            en : "-"
        },
        
        /**
         * Sacrifice 2 !
         */
        "sacrifice!-event-2" : {
            fr : "Impossible de les arreter maître ! Ils ont completement perdus la raison et ne nous ecoute plus !",
            en : "-"
        },
        "envoyerdieudeesse" : {
        	fr : "Envoyer le dieu et la deesse",
        	en : "-"
        },
        "sacrifice!-event-2-ok" : {
            fr : "Ils semblent se calmer... Mais d'où provenait cette folie ?",
            en : "-"
        },
        "tuezles" : {
        	fr : "Tuez-les !",
        	en : "-"
        },
        "sacrifice!-event-2-tuer" : {
            fr : "Cela me semble extreme mais soit ! Il en sera fait selon vos ordres !",
            en : "-"
        },
        "tantpis" : {
        	fr : "Tant pis...",
        	en : "-"
        },
        "sacrifice!-event-2-ko" : {
        	fr : "Bien... Nous verrons bien où cela nous menera...",
        	en : "-"
        },
        
        /**
         * Epidemie !
         */
        "epidemie!-event" : {
            fr : "Une maladie rare commence à se rependre sur une planete. Que devons nous faire ?",
            en : "-"
        },
        "etudier" : {
        	fr : "L'etudier",
        	en : "-"
        },
        "epidemie!-event-etude" : {
            fr : "Bien maître. Nous commençont l'etude !",
            en : "-"
        },
        "brulertous" : {
        	fr : "Bruler tous !",
        	en : "-"
        },
        "soigner" : {
        	fr : "Soignez les",
        	en : "-"
        },
        "epidemie!-event-soin" : {
	        fr : "Felicitation maître ! Nous avons pu soigner tout le monde !",
	        en : "-"
    	},
    	"epidemie!-event-laisser" : {
	        fr : "Bien... Ils arriveront bien à s'en sortir seul après tout...",
	        en : "-"
    	},
    	
    	/**
    	 * Bruler les gens de l'epidemie
    	 */
    	"epidemie!-event-bruler" : {
            fr : "Mais... Maître ! Il y a encore des gens sur cette planete !",
            en : "-"
        },
        "brulertousinsiste" : {
        	fr : "J'ai dis : Bruler tous !",
        	en : "-"
        },
        "epidemie!-event-bruler-ok" : {
            fr : "Bien maître. À vos ordre...",
            en : "-"
        },
        "brulermalades" : {
        	fr : "Bruler uniquement les malades",
        	en : "-"
        },
        "epidemie!-event-bruler-brulermalades" : {
        	fr : "Bien maître. Je pense malheureusement que nous n'ayons pas le choix...",
        	en : "-"
        },
        
        /**
         * Famine !
         */
        "famine!-event" : {
            fr : "Maître ! Les gens ont faim. Ne devrions nous pas ameliorer leurs recoltes ?",
            en : "-"
        },
        "famine!-event-ok" : {
            fr : "Merci maître, cela leur sera certainement très utile !",
            en : "-"
        },
        "famine!-event-ko" : {
            fr : "Bien maître. Pourquoi s'embeter pour si peu après tout ?",
            en : "-"
        },
        
        /**
         * Faux dieu !
         */
        "faux-dieu!-event" : {
            fr : "Certaines personnes commencent à pretendre que vous êtes un faux dieu !",
            en : "-"
        },
        "spectacle" : {
        	fr : "Faire un spectacle",
        	en : "-"
        },
        "faux-dieu!-event-spectacle" : {
            fr : "Il ont été très impressionné par vos pouvoirs !",
            en : "-"
        },
        "tuerresponsable" : {
        	fr : "Tuer les responsables",
        	en : "-"
        },
        "faux-dieu!-event-tuer" : {
        	fr : "Les responsables ont été éliminé mais il semble qu'ils soient devenus des martyrs !<br/> Les gens se revoltent contre votre autorité !",
        	en : "-"
        },
        "dementir" : {
        	fr : "Dementir",
        	en : "-"
        },
        "faux-dieu!-event-dementir" : {
        	fr : "Ils ne vous croient pas ! Il va falloir leur prouver...",
        	en : "-"
        },
	};
	
	return {
		local : null,
		
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return data[key];
		}
	};
});
