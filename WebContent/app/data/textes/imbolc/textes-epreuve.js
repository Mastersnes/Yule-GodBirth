'use strict';
define(["jquery"], function($){
	var data = {
		/**
		 * Epreuve
		 * Start
		 */
		"epreuve-start-event-titre" : {
			fr : "Epreuve",
			en : "-"
		},
		"epreuve-start-event" : {
			fr : "Bien monsieur... Alors comme cela, vous dites être un dieu ? Dans ce cas, il va falloir nous le prouver !",
			en : "Well sir... So you say you're a god? Then you'll have to prove it to us."
		},
		"epreuve-start-event-2" : {
			fr : "Vous devrez réussir une série d’épreuve. Un faux pas et tout le monde saura que vous êtes un imposteur !",
			en : "You will have to pass a series of tests. One false move and everyone will know you're an impostor!"
		},

		/**
		 * Faire pleuvoir
		 */
		"epreuve-1-event-titre" : {
			fr : "Epreuve de l'eau",
			en : "-"
		},
		"epreuve-1-event" : {
			fr : "Première épreuve : Dans cette première épreuve, vous devrez simplement faire pleuvoir. Allez-y j'attend...",
			en : "First test : In this first trial, you will simply have to make it rain. Come on, I'll wait..."
		},
		"epreuve-1-event-pleuvoir-button" : {
			fr : "Faire pleuvoir",
			en : "Make it rain"
		},
		"epreuve-1-event-pleuvoir" : {
			fr : "Magnifique ! Mais bon... Soyons réaliste ! C'était très facile ! Même ma grand-mère aurait pu le faire !",
			en : "Beautiful! But hey... Let's be realistic! It was very easy! Even my grandmother could have done it!"
		},
		"epreuve-1-event-no" : {
			fr : "Comment ! Même ce petit tour vous ne pouvez pas le réaliser !?<br/>C'est une blague ? Bon aller je vous donne encore une petite chance...",
			en : "How?! Even that little trick you can't do!?<br/>It's a joke? Well go I still give you a small chance..."
		},

		/**
		 * Question
		 */
		"epreuve-2-event-titre" : {
			fr : "Epreuve du savoir",
			en : "-"
		},
		"epreuve-2-event" : {
			fr : "Seconde épreuve : Tout simplement, une question ! Quel est la réponse à la grande question de l'univers, de la vie, et de tout le reste...",
			en : "Second test : Quite simply, a question! What is the answer to the great question of the universe, life, and everything else..."
		},
		"epreuve-2-event-amour-button" : {
			fr : "L'amour !",
			en : "Love !"
		},
		"epreuve-2-event-amour" : {
			fr : "Ahah bien tenté mais non pas du tout ! Vous êtes même très loin... À des année lumières ! Mais bon, on vous laisse une dernière chance.",
			en : "Ahah well tried but not at all! You are even very far away... Light years away! But we'll give you one last chance."
		},
		"epreuve-2-event-mort-button" : {
			fr : "La mort",
			en : "The death"
		},
		"epreuve-2-event-mort" : {
			fr : "Oula, c'est glauque... Il vous passe des choses bizarres dans la tête ! Mais bon, on vous laisse une dernière chance.",
			en : "Oula, that's creepy... Something weird is going through your head! But, hey, we'll give you one last chance."
		},
		"epreuve-2-event-42-button" : {
			fr : "42 !",
			en : "42 !"
		},
		"epreuve-2-event-42" : {
			fr : "Bravo ! Vous connaissez la grande réponse ! Mais quelle était la question déjà ? Hum... Peut importe.",
			en : "Bravo! You know the big answer! But what was the question again? Um... no one cares."
		},
		"epreuve-2-event-D-button" : {
			fr : "D ! La réponse D !",
			en : "D ! Answer D!"
		},
		"epreuve-2-event-D" : {
			fr : "Hein ? euh... là j’avoue que je suis pris au dépourvu... Je vous laisse une autre chance...",
			en : "Huh ? Uh... now I admit I'm caught off guard... I'll give you one more chance..."
		},

		/**
		 * Tuer roger
		 */
		"epreuve-3-event-titre" : {
			fr : "Epreuve du feu",
			en : "-"
		},
		"epreuve-3-event" : {
			fr : "Troisième épreuve : Tuez Roger ! (désolé Roger... c'est tombé sur toi...)",
			en : "Third test : Kill Roger! (sorry Roger... it fell on you...)"
		},
		"epreuve-3-event-tuer-button" : {
			fr : "Tuer Roger",
			en : "Kill Roger"
		},
		"epreuve-3-event-tuer" : {
			fr : "Quoi ! Mais non c'était une blague ! Oh mon dieu Roger !!! Non !!! OK vous avez réussis...",
			en : "What?! It was just a joke! Oh my God Roger!!! No !!!! OK you succeeded..."
		},
		"epreuve-3-event-refus" : {
			fr : "Bien bien ! C'était simplement un test ! Roger a eu chaud à ce que je vois !",
			en : "Good, good, good! It was just a test!  Roger was warm as I can see.  "
		},

		/**
		 * Etoiles
		 */
		"epreuve-4-event-titre" : {
			fr : "Epreuve de l'infini",
			en : "-"
		},
		"epreuve-4-event" : {
			fr : "Quatrième épreuve : Encore une question ! Combien y a-t-il d'étoiles dans le ciel ?",
			en : "Fourth test : One more question! How many stars are in the sky?"
		},
		"epreuve-4-event-2-button" : {
			fr : "2 !",
			en : "2 !"
		},
		"epreuve-4-event-2" : {
			fr : "Donc vous êtes un dieu qui ne sait pas compter ? C'est bien ça ? Laissez moi rire... Les épreuves sont terminées... Vous êtes recalé !",
			en : "So you're a god who can't count? Is that correct? Let me laugh... The tests are over... You flunked!"
		},
		"epreuve-4-event-6-button" : {
			fr : "6 !",
			en : "6 !"
		},
		"epreuve-4-event-6" : {
			fr : "Bien joué ! Elle n'était pas facile celle-là ! La dernière est donnée ne vous en faites pas !",
			en : "Well done! That wasn't an easy one. The last one is given don't worry !"
		},
		"epreuve-4-event-151-button" : {
			fr : "151 Comme les Pokemon !",
			en : "151 like Pokemon !"
		},
		"epreuve-4-event-151" : {
			fr : "Bien joué... Mais c'est pas ça du tout ! Vous vous fichez de moi ?! Recalé !",
			en : "Well done... But that's not it at all! Are you kidding me?! Failed!"
		},
		"epreuve-4-event-milliard-button" : {
			fr : "Des milliard !",
			en : "Billions !"
		},
		"epreuve-4-event-milliard" : {
			fr : "Ça c'est vraiment pas prendre de risque... Vous auriez pas un chiffre plus précis par hasard ? Recalé !",
			en : "That's really not taking any chances... You wouldn't happen to have a more accurate number, would you? Failed!"
		},

		/**
		 * Artefact
		 */
		"epreuve-5-event-titre" : {
			fr : "Epreuve du vide",
			en : "-"
		},
		"epreuve-5-event" : {
			fr : "Dernière épreuve : C'est facile ! Vous devez simplement abandonner un artefact aléatoire.",
			en : "Last test : It's easy! You just have to lose a random artifact."
		},
		"epreuve-5-event-yes" : {
			fr : "Vous êtes réellement un dieu, C'est une certitude à présent ! Nous serons éternellement vos fidèles !",
			en : "You really are a god, that's a certainty now! We will be your followers forever!"
		},
		"epreuve-5-event-no" : {
			fr : "Je comprend que vous ne souhaitiez pas perdre vos précieux bien mais vous remportez tout de même le lot de consolation !",
			en : "I understand that you did not want to lose your precious good but you still win the consolation present !"
		},
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
