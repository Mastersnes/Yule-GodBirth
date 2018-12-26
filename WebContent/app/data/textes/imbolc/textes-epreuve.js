'use strict';
define(["jquery"], function($){
	var data = {
			/**
			 * Epreuve
			 * Start
			 */
			"epreuve-start-event-titre" : {
				fr :"Épreuve",
				en :"Challenge"
			},
			"epreuve-start-event" : {
				fr :"Bien, monsieur... Alors comme cela, vous dites être un dieu? Dans ce cas, il va falloir nous le prouver!",
				en :"Well, sir... So, you say you're a god? Then, you'll have to prove it to us."
			},
			"epreuve-start-event-2" : {
				fr :"Vous devrez réussir une série d’épreuves. Un seul faux pas et tout le monde saura que vous êtes un imposteur!",
				en :"You'll have to pass a series of tests. A single false not and everyone will know that you're an impostor!"
			},

			/**
			 * Faire pleuvoir
			 */
			"epreuve-1-event-titre" : {
				fr :"Épreuve de l'eau",
				en :"Water challenge"
			},
			"epreuve-1-event" : {
				fr :"Première épreuve : Dans cette première épreuve, vous devrez simplement faire pleuvoir. Allez-y, j'attends...",
				en :"First challenge : In this first challenge, you'll simply have to make it rain. Come on, I waiting..."
			},
			"epreuve-1-event-pleuvoir-button" : {
				fr :"Faire pleuvoir",
				en :"Make it rain"
			},
			"epreuve-1-event-pleuvoir" : {
				fr :"Magnifique! Mais bon... soyons réalistes, c'était très facile. Même ma grand-mère aurait pu le faire!",
				en :"Wonderful! But hey... let's be realistic, it was very easy. Even my grandmother could have done it!"
			},
			"epreuve-1-event-no" : {
				fr :"Comment?! Même ce petit tour, vous ne pouvez pas le réaliser?!<br/>C'est une blague? Bon aller, on vous donne encore une petite chance...",
				en :"What?! Even that little trick, you can't do it?!<br/>It's a joke? All right, come on, we'll give you one more chance..."
			},

			/**
			 * Question
			 */
			"epreuve-2-event-titre" : {
				fr :"Épreuve du savoir",
				en :"Knowledge challenge"
			},
			"epreuve-2-event" : {
				fr :"Seconde épreuve : Tout simplement, une question. Quelle est la réponse à la grande question de l'Univers, de la vie, et de tout le reste?",
				en :"Second challenge : Quite simply, a question. What is the answer to the great question of the Universe, life, and everything else?"
			},
			"epreuve-2-event-amour-button" : {
				fr :"L'amour!",
				en :"Love!"
			},
			"epreuve-2-event-amour" : {
				fr :"Ahah! Bien tenté mais, non, pas du tout! Vous êtes même très loin... À des années-lumière!<br/>Mais bon, comme vous êtes mignon, on vous laisse une dernière chance.",
				en :"Ahah! Well tried but, not at all! You are even very far away... Light years away!<br/>But well, cause you're so cute, we'll give you one last chance."
			},
			"epreuve-2-event-mort-button" : {
				fr :"La mort",
				en :"The death"
			},
			"epreuve-2-event-mort" : {
				fr :"Oula, c'est glauque... Il vous passe des choses bizarres dans la tête! Mais bon, on vous laisse une dernière chance.",
				en :"Oula, that's creepy... There are strange things going on in your head! But then, we'll give you one last chance."
			},
			"epreuve-2-event-42-button" : {
				fr :"42!",
				en :"42!"
			},
			"epreuve-2-event-42" : {
				fr :"Bravo! Vous connaissez la grande réponse! Mais, quelle était la question déjà? Hum... peu importe.",
				en :"Bravo! You know the big answer! But, what was the question again? Um... no one cares."
			},
			"epreuve-2-event-D-button" : {
				fr :"D! La réponse D!",
				en :"D! Answer D!"
			},
			"epreuve-2-event-D" : {
				fr :"Hein? Euh... Là, j’avoue que je suis pris au dépourvu... Je vous laisse une autre chance...",
				en :"Huh? Um... Now, I admit I was unprepared.... I'll give you one more chance..."
			},

			/**
			 * Tuer roger
			 */
			"epreuve-3-event-titre" : {
				fr :"Épreuve du feu",
				en :"Fire challenge"
			},
			"epreuve-3-event" : {
				fr :"Troisième épreuve : Tuez Roger! (Désolé, Roger... C'est tombé sur toi...)",
				en :"Third challenge : Kill Roger! (Sorry, Roger... It fell on you...)"
			},
			"epreuve-3-event-tuer-button" : {
				fr :"Tuer Roger",
				en :"Kill Roger"
			},
			"epreuve-3-event-tuer" : {
				fr :"Quoi?! Mais non! C'était une blague! Oh mon Dieu, Roger!!! Non!!! Ok, vous avez réussi...",
				en :"What?! It was just a joke! Oh my God, Roger!!! No!!!! Ok, you succeeded..."
			},
			"epreuve-3-event-refus" : {
				fr :"Bien, bien... C'était simplement un test. Roger a eu chaud à ce que je vois!",
				en :"Good, good... It was just a test. Roger was lucky as I can see!"
			},

			/**
			 * Etoiles
			 */
			"epreuve-4-event-titre" : {
				fr :"Épreuve de l'infini",
				en :"Infinity challenge"
			},
			"epreuve-4-event" : {
				fr :"Quatrième épreuve : Encore une question! Combien y a-t-il d'étoiles dans le ciel?",
				en :"Fourth challenge : One more question! How many stars are in the sky?"
			},
			"epreuve-4-event-2-button" : {
				fr :"2!",
				en :"2!"
			},
			"epreuve-4-event-2" : {
				fr :"Donc, vous êtes un dieu qui ne sait pas compter? C'est bien ça? Laissez-moi rire... Les épreuves sont terminées. Vous êtes recalé!",
				en :"So, you're a god who can't count? Is that correct? Let me laugh... The challenges are over. You failed!"
			},
			"epreuve-4-event-6-button" : {
				fr :"6!",
				en :"6!"
			},
			"epreuve-4-event-6" : {
				fr :"Bien joué! Elle n'était pas facile, celle-là! La dernière est donnée, ne vous en faites pas...",
				en :"Well done! It wasn't easy, that one. The last one is given, don't worry..."
			},
			"epreuve-4-event-151-button" : {
				fr :"151, comme les Pokemon!",
				en :"151, like Pokemon!"
			},
			"epreuve-4-event-151" : {
				fr :"Bien joué! Mais, c'est pas ça du tout. Vous vous fichez de moi?! Recalé!",
				en :"Well done! But, that's not it at all. Are you kidding me?! Failed!"
			},
			"epreuve-4-event-milliard-button" : {
				fr :"Des milliards!",
				en :"Billions!"
			},
			"epreuve-4-event-milliard" : {
				fr :"Ça, c'est vraiment pas prendre de risque... Vous n’auriez pas un chiffre plus précis par hasard? Recalé!",
				en :"That, it's really not taking any risks... You wouldn't have a more accurate number? Failed!"
			},

			/**
			 * Artefact
			 */
			"epreuve-5-event-titre" : {
				fr :"Épreuve du vide",
				en :"Void challenge"
			},
			"epreuve-5-event" : {
				fr :"Dernière épreuve : C'est facile! Vous devez simplement abandonner un artéfact aléatoire.",
				en :"Last challenge : It's easy! You just have to give up a random artifact."
			},
			"epreuve-5-event-yes" : {
				fr :"Vous êtes réellement notre Dieu, c'est une certitude à présent! Nous serons éternellement vos fidèles!",
				en :"You're really our God, that's a certainty now! We'll be your faithful forever!"
			},
			"epreuve-5-event-yes-2" : {
				fr :"Prenez ce cadeau pour preuve de notre foi!",
				en :"Take this present to prove our faith!"
			},
			"epreuve-5-event-no" : {
				fr :"Je comprends que vous ne souhaitiez pas perdre vos précieux biens, mais vous remportez tout de même le lot de consolation!",
				en :"I understand that you didn't want to lose your precious property, but you still win the consolation present!"
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
