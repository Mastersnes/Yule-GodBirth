'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Imbolc
		 */
		/**
		 * Premier evenement
		 */
		"first-event" : {
			fr : "Maître ! Vos fideles demandent à vous parler. Souhaitez-vous les recevoir ?",
			en : "Master ! Your faithful ask to talk to you. Do you want to receive them ?"
		},
		"first-event-ok" : {
			fr : "Très bien maître ! Je vais les faire entrer.",
			en : "Fine Master ! I'll let them in."
		},
		"first-event-ko" : {
			fr : "Très bien. Je vais leur demander de quitter les lieux.",
			en : "Alright Master. I'll ask them to leave this place."
		},
		
		/**
		 * Imbolc - Accueil
		 * Pluie
		 */
		"accueil-pluie-event" : {
			fr : "Bonjour mon dieu. Nous sommes une pauvre famille de paysan qui luttont pour survivre.<br/>Pourriez-vous faire tomber la pluie pour ameliorer les recoltes ? Aidez-nous, je vous en prie !",
			en : "Hello my god. We are a poor peasant family wich are strugling to survive.<br/>Could you make the rain down to improve our crops ? I beg of you, please help us !"
		},
		"accueil-pluie-event-ok" : {
			fr : "Ohh merci mon dieu ! Grâce à vous nous allons pouvoir survivre quelques années de plus. Merci beaucoup !",
			en : "Ohh thanks my god ! thanks to you, we will be able to survive a few years more. Thanks a lot !"
		},
		"accueil-pluie-event-ko" : {
			fr : "Comment ? Mes enfants vont mourir cet hiver ! Comment pouvez vous faire cela ?!",
			en : "What ? My children will dies this winter ! How can you do that ?!"
		},
		
		/**
		 * Sacrifice
		 */
		"accueil-sacrifice-event" : {
			fr : "Cher maitre ! Acceptez ce sacrifice humain comme preuve de notre foi.<br/>Apportez-nous en retour votre soutien ! Ainsi soit-il...",
			en : "Dear Master ! Accept this human sacrifice as proof of our faith.<br/>In return, give us your support ! May it be..."
		},
		"accueil-sacrifice-event-accept" : {
			fr : "Nous continuerons à vous servir comme il se doit maitre. Votre bonté est grande.",
			en : "We'll continue to deserve you properly, master. Your generosity is great."
		},
		"accueil-sacrifice-event-refus" : {
			fr : "Nous comprenons les signes maitre. Nous vous venererons desormais comme il se doit.",
			en : "We understand the signs master. Now, we will honour you properly."
		},
		"accueil-sacrifice-event-tuer-pretre-button" : {
			fr : "Tuer le pretre en chef",
			en : "Kill the priest in charge"
		},
		"accueil-sacrifice-event-tuer-pretre" : {
			fr : "Oh maitre, veuillez accepter nos excuse. Nos pauvres sacrifices sont indigne de votre grandeur.",
			en : "Oh master, please accept our apologies. Our poor sacrifices are unworthy of your greatness."
		},

		/**
		 * Blessure
		 */
		"accueil-blessure-event" : {
			fr : "Arrrghh ! Mon dieu ! Je vous en supplie, aidez-moi ! Je souffre !!!",
			en : "Arrrghh ! My god ! Please, help me ! I'm suffering !!!"
		},
		"accueil-blessure-event-ok-button" : {
			fr : "Le guerir",
			en : "Heal him"
		},
		"accueil-blessure-event-ok" : {
			fr : "Merci beaucoup seigneur ! Cette coupure au petit doigt etait reellement horrible !",
			en : "Thanks my lord ! This cut to my little finger was really horrible !"
		},
		"accueil-blessure-event-ko" : {
			fr : "Arrrghh ! Nonnn ! Je suis perdu !!!",
			en : "Arrrghh ! Nooo ! I'm lost !!!"
		},
		"accueil-blessure2-event-ok" : {
			fr : "Merci beaucoup seigneur ! Vous m'avez sauver la vie !",
			en : "Thanks my lord ! You save my life !"
		},

		/**
		 * Riche
		 */
		"accueil-riche-event" : {
			fr : "Cher dieu, les affaires ne vont pas fort en ce moment. J'aimerai être le plus riche des hommes !<br/>Je saurai vous recompenser...",
			en : "Dear god, business is not going well rencently. I would like to be the richest man !<br/>I would know how to reward you..."
		},
		"accueil-riche-event-ok" : {
			fr : "Oh yeah ! Les affaires reprennent ! Vous ne serez pas déçu !",
			en : "Oh men ! Business is back ! You won't be disapointed !"
		},
		"accueil-riche-event-ko" : {
			fr : "Dieu pathetique... Vous n'avez aucune ambition !",
			en : "pathetic god... You don't have any ambition"
		},
		"accueil-riche-event-2" : {
			fr : "Ce mortel vous a insulté ! Souhaitez-vous le punir ?",
			en : "This mortal insulted you ! Do you want to punish him ?"
		},
		"accueil-riche-event-tuer-button" : {
			fr : "Le tuer",
			en : "Kill him"
		},
		"accueil-riche-event-tuer" : {
			fr : "L'homme s'ecroule, sans même s'en rendre compte...",
			en : "The man collapse, without realizing it..."
		},
		"accueil-riche-event-partir-button" : {
			fr : "Le laisser partir",
			en : "Let him go"
		},
		"accueil-riche-event-partir" : {
			fr : "À jamais, dieu de pacotille !",
			en : "Goodbye, junk god !"
		},
		
		/**
		 * Question
		 */
		"accueil-question-event" : {
			fr : "Bonjour ! Bon, je n'irais pas par quatres chemins... êtes-vous un vrai dieu ?",
			en : "Hello ! Well, i won't beat around the bush... Are you a really god ?"
		},
		"accueil-question-event-ok" : {
			fr : "Wahh ! Vraiment ? Je n'arrive pas à y croire !",
			en : "Wahh ! Really ? I just can't believe it !"
		},
		"accueil-question-event-ko" : {
			fr : "Ouai... C'est bien ce que je pensais...",
			en : "Yes... That's just what is thought..."
		},
		
		/**
		 * Imbolc - Refus
		 * Demon de feu
		 */
		"refus-desert-event" : {
			fr : "Maitre ! Il semblerait que tout un village se soit transformé en desert ! Que doit-on faire ?",
			en : "Master ! It seems that whole a village has been transformed into a desert ! What should we do ?"
		},
		"refus-desert-event-refus-button" : {
			fr : "Pas mon probléme",
			en : "Not my problem"
		},
		"refus-desert-event-refus" : {
			fr : "Ainsi, Le desert continua à s'étendre...",
			en : "Thus, The desert continued to expand..."
		},
		"refus-desert-event-enquete" : {
			fr : "Plus rien de subsistait dans ce néant de cendre.<br/> Malgré tout, en cherchant dans les decombres, on decouvrit les debris d'une étrange statuette...",
			en : "Nothing survive in this void of ashes.<br/> Despite all, searching through the rubble, the debris of a strange statuette was discovered..."
		},
		
		/**
		 * Sacrifice
		 */
		"refus-sacrifice-event" : {
			fr : "Maître ! Un village sacrifie ses habitants en votre nom ! Que devons nous faire ?",
			en : "Master ! A village sacrifices its inhabitants in your name ! What should we do ?"
		},
		"refus-sacrifice-event-recompense-button" : {
			fr : "Récompensez les",
			en : "Reward them"
		},
		"refus-sacrifice-event-recompense" : {
			fr : "Votre règne, long et prospère, s'étendra jusqu'au confins du monde !",
			en : "Your long and prosperous reign will extend to the limits of the world !"
		},
		"refus-sacrifice-event-arreter-button" : {
			fr : "Arretez les !",
			en : "Stop them !"
		},
		"refus-sacrifice-event-2" : {
			fr : "Ils ne veulent rien entendre ! Ils sont devenus complètement fous !",
			en : "They don't want to hear anything ! They've gone completely crazy !"
		},
		"refus-sacrifice-event-tuer-button" : {
			fr : "Tuez les tous !",
			en : "Kill them all !"
		},
		"refus-sacrifice-event-tuer" : {
			fr : "Plus personne n'entendit parler de ce village... Certaine légende racontent qu'ils auraient désobeits à leur dieu...",
			en : "No one heard from this village anymore... Some legends tell that they disobeyed their god..."
		},
		"refus-sacrifice-event-seisme-button" : {
			fr : "Déclencher un séisme",
			en : "Invoke an earthquake"
		},
		"refus-sacrifice-event-seisme" : {
			fr : "Il semblerait que les habitants ait pris cela comme un signe de votre colére. Plus aucun sacrifice n'aura lieu sur ce sol.",
			en : "It would seems that the inhabitants took this like a sign of your wraith. No more sacrifice will take place here."
		},

		/**
		 * Maladie
		 */
		"refus-maladie-event" : {
			fr : "Maitre ! C'est terrible ! Une maladie inconnue decime un village entier ! Que pouvons nous faire ?",
			en : "Master ! It's terrible ! An unknown illness decimates an entire village ! What could we do ?"
		},
		"refus-maladie-event-enquete" : {
			fr : "Tout est mort sur place et certains cadavres semblent avoir disparus.<br/>Les villages proches parlent de créatures humanoïdes...",
			en : "All is dead here and somes corpses seems to have disappeared.<br/>Nearby villages talk of humanoid creatures..."
		},
		"refus-maladie-event-laisser-button" : {
			fr : "Laisser",
			en : "Let it"
		},
		"refus-maladie-event-laisser" : {
			fr : "Dans les jours qui suivirent, le mal s'étendis aux villages environnant.<br/>Certains parlerent de créatures humanoïdes...",
			en : "In the following days, the illness spread to nearby villages.<br/>Some people talked about humanoid creatures..."
		},
		"refus-maladie-event-bruler-button" : {
			fr : "Brûlez-tout",
			en : "Burn everything"
		},
		"refus-maladie-event-2" : {
			fr : "Maitre ! Mais il reste encore des gens sain !",
			en : "Master ! But there is still healthy people !"
		},
		"refus-maladie-event-bruler-2-button" : {
			fr : "J'ai dit : Brûlez-tout !",
			en : "I said : Burn everything !"
		},
		"refus-maladie-event-bruler" : {
			fr : "Rien ne survecue ce jour là... Les légendes parlent d'un mal qui fut vaincu par le grand dieu.",
			en : "Nothing survive this day... legends talks about an "
		},
		"refus-maladie-event-bruler-malade-button" : {
			fr : "Ne brûlez que les malades",
			en : "Burn only sick people"
		},
		"refus-maladie-event-bruler-malade" : {
			fr : "",
			en : ""
		},
		"refus-maladie-event-changer-button" : {
			fr : "Changer d'avis",
			en : "Change your mind"
		},
		"refus-maladie-event-changer" : {
			fr : "",
			en : ""
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
