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
			fr : "Maître ! Vos fideles demandent à vous voir. Souhaitez-vous les recevoir ?",
			en : "-"
		},
		"first-event-ok" : {
			fr : "Très bien maître ! Je vais les faire entrer.",
			en : "-"
		},
		"first-event-ko" : {
			fr : "Très bien. Je vais leur demander de quitter les lieux.",
			en : "-"
		},
		
		/**
		 * Entrer des emissaires
		 */
		/**
		 * Pluie
		 */
		"entrer-pluie-event" : {
            fr : "Merci de me recevoir jeune dieu !<br/>Malheureusement, il ne pleut plus depuis des années chez moi.<br/>Pourriez-vous intervenir ?",
            en : "-"
        },
        "entrer-pluie-event-ok" : {
            fr : "Merci mon dieu, vous nous sauvez la vie ! Nous vous en serons eternellement reconnaissant !",
            en : "-"
        },
        "entrer-pluie-event-ko" : {
            fr : "Notre perte est donc inevitable... Un dieu n'est-il pas censé proteger ses fideles ?",
            en : "-"
        },
        
        /**
         * Eclipse
         */
        "entrer-eclipse-event" : {
            fr : "Bien le bonjour jeune dieu !<br/>Ah, Le jour... Il n'est pas bon pour mes affaires... Pourriez-vous, dans votre grande sagesse, creer une eclipse ?<br/> Je saurai vous recompenser...",
            en : "-"
        },
        "entrer-eclipse-event-ok" : {
            fr : "Vous avez fait le bon choix mon dieu !",
            en : "-"
        },
        "entrer-eclipse-event-ko" : {
            fr : "Vous n'avez aucune ambition, dieu pathetique...",
            en : "-"
        },
        "entrer-eclipse-punition-event" : {
            fr : "Ce mortel vous a insulté... C'est impardonnable. Souhaitez-vous le tuer ?",
            en : "-"
        },
        "letuer" : {
            fr : "Le tuer",
            en : "-"
        },
        "entrer-eclipse-punition-event-tuer" : {
            fr : "L'homme se tord dans de terrible souffrance. Dans ses cris de douleurs vous comprenez à peine quelques mots : <i>Notre vrai maître me vengera...</i>.",
            en : "-"
        },
        "lelaisserpartir" : {
            fr : "Le laisser partir",
            en : "-"
        },
        "entrer-eclipse-punition-event-partir" : {
            fr : "L'homme s'en va avec un air daidaigneux... Esperont ne plus jamais le revoir...",
            en : "-"
        },
        
        /**
         * Sacrifice ?
         */
        "entrer-sacrifice-event" : {
            fr : "B...Bo...Bonjour euh... dieu ? Euh... En fait notre pretre... Il dit que c'est bien de sacrifier des gens...<br/>Vous trouvez ca cool non ?",
            en : "-"
        },
        "entrer-sacrifice-event-ok" : {
            fr : "Hahaha chouette ! Eh euh josé, on continue le massacre hein ! Euh merci euh.. monsieur dieu.",
            en : "-"
        },
        "entrer-sacrifice-event-ko" : {
            fr : "Ah ? Bah euh... Dommage... Bon bah on le fera plus alors... Au revoir monsieur le dieu.",
            en : "-"
        },
        "tuerpretre" : {
        	fr : "Tuer le pretre",
        	en : "-"
        },
        "entrer-sacrifice-event-tuer" : {
        	fr : "José ? José ? Non !!! Comment avez vous pu ? Joséééééé !!!!!!",
        	en : "-"
        },
        
        /**
         * Blessure
         */
        "entrer-blessure-event" : {
            fr : "Outch, ah... c'est trop dur, laissez moi là... Allez, encore quelques pas !<br/> Cher dieu... Je me suis couper au doigt, ca brûle, je souffre tellement !<br/> Pourriez-vous me soigner ?",
            en : "-"
        },
        "bisoumagique" : {
            fr : "Faire un bisou magique",
            en : "-"
        },
        "entrer-blessure-event-ok" : {
            fr : "Ahhhh, je me sens beaucoup mieux ! Merci beaucoup et à bientôt ! Euh... où est la sortie s'il vous plait ?",
            en : "-"
        },
        "entrer-blessure-event-ko" : {
            fr : "Ahhhh non !!!! La douleur est beaucoup trop insupportable ! Je me sens defaillir !",
            en : "-"
        },

        /**
         * Argent
         */
        "entrer-argent-event" : {
            fr : "Bonjour cher dieu ! J'ai, hum, comment dire... besoin de votre aide !<br/> Rendez-moi riche et je vous assure que vous ne le regretterez pas !",
            en : "-"
        },
        "entrer-argent-event-ok" : {
            fr : "Magnifique ! Je suis riche ! Ahaha ! Voilà le vrai pouvoir ! Merci à vous grand dieu !",
            en : "-"
        },
        "entrer-argent-event-ko" : {
            fr : "Très bien... Comme vous le desirez... Sachez tout de même que ça ne s'arretera pas là !",
            en : "-"
        },
        
        /**
         * Vrai dieu
         */
        "entrer-vraidieu-event" : {
            fr : "Bonjour ! Bon... Je n'irais pas par quatres chemins. Êtes-vous un vrai dieu ?",
            en : "-"
        },
        "entrer-vraidieu-event-ok" : {
            fr : "Incroyable ! Ils existent réellement ? J'ai vraiment du mal à y croire !",
            en : "-"
        },
        "entrer-vraidieu-event-ko" : {
            fr : "Hum... Oui, c'est bien ce que je pensais...",
            en : "-"
        },
        
        /**
         * Refus des emissaires
         */
        /**
         * Secheresse
         */
        "refus-secheresse-event" : {
            fr : "Maître ! Il semblerait qu'une planete entiere soit devenue desertique.<br/> Voulez-vous intervenir ?",
            en : "-"
        },
        "pas-probleme" : {
            fr : "Pas mon probleme",
            en : "-"
        },
        "refus-secheresse-event-ko" : {
            fr : "Le desert s'etend mais certaine formes de vie semble s'y aclimater...",
            en : "-"
        },
        "enqueter" : {
        	fr : "Enqueter",
        	en : "-"
        },
        "refus-secheresse-event-ok" : {
        	fr : "Nous avons decouvert une vieille idole d'un peuple inconnu... Etrange...",
        	en : "-"
        },

        /**
         * Glaciation
         */
        "refus-glaciation-event" : {
        	fr : "Maître ! Un nuage stellaire gele toute une planete ! Voulez-vous intervenir ?",
        	en : "-"
        },
        "refus-glaciation-event-ko" : {
        	fr : "La glace s'etend... Esperont que les choses se reglent d'elles-même...",
        	en : "-"
        },
        "refus-glaciation-event-ok" : {
        	fr : "Nous avons decouvert une vieille idole d'un peuple inconnu... Tout cela me glace le sang...",
        	en : "-"
        },

        /**
         * Sacrifice
         */
        "refus-sacrifice-event" : {
            fr : "C'est une catastrophe ! Un peuple sacrifie nombre de ses gens en votre nom ! Que devons-nous faire ?",
            en : "-"
        },
        "laisserfaire" : {
            fr : "Laisser faire",
            en : "-"
        },
        "refus-sacrifice-event-ko" : {
            fr : "Votre grandeur n'en sera que plus belle !",
            en : "-"
        },
        "recompenser" : {
        	fr : "Recompenser les",
        	en : "-"
        },
        "refus-sacrifice-event-recompense" : {
            fr : "Votre peuple aprecit le geste. Ils continueront pour votre gloire.",
            en : "-"
        },
        "arreter-massacre" : {
            fr : "Arreter ce massacre !",
            en : "-"
        },
        
        /**
         * Sacrifice 2
         */
        "refus-sacrifice-event-2" : {
            fr : "Impossible de les arreter ! Ils ont completement perdus la raison et ne nous ecoute plus !",
            en : "-"
        },
        "tuezles" : {
        	fr : "Tuez-les !",
        	en : "-"
        },
        "refus-sacrifice-event-2-tuer" : {
            fr : "Bien ! Il en sera fait selon vos ordres !",
            en : "-"
        },
        "tantpis" : {
        	fr : "Tant pis...",
        	en : "-"
        },
        "refus-sacrifice-event-2-tantpis" : {
        	fr : "Bien, Nous verrons bien où cela nous menera...",
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
