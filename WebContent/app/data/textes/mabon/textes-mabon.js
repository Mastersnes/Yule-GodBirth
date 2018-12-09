'use strict';
define(["jquery"
       ],
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"mabon-start-event-titre" : {
				fr : "Éternel recommencement",
				en : "Eternal restarting"
			},
			"mabon-start-event" : {
				fr : "Nous y étions. La fin de l'univers était très proche... De plus en plus d'être vivant s’évaporait en énergie pure et certaines planète avaient même commencée à disparaître.",
				en : "We were there. The end of the universe was very close... More and more living beings were evaporating into pure energy and some planets had even begun to disappear."
			},
			"mabon-start-event2" : {
				fr : "Dans le fond de votre palais, fatigué par une vie de choix. Vous aperçûtes à nouveau devant vous cette magnifique lueur surgir du néant.<br/>Votre décision était prise, d'un pas décidé, vous entrâtes dans la lumière.",
				en : "In the back of your palate, tired by a life of choice. You saw again in front of you this magnificent glow emerging from nothingness.<br/>Your decision was taken, with a decided step, you entered the light."
			},
			
			/**
			 * Good
			 */
			"mabon-fin-good-event-titre" : {
				fr : "Bon dieu",
				en : "Good god"
			},
			"mabon-fin-good-event" : {
				fr : "Ainsi, vous voici de nouveau parmi nous, au sein de l’immatériel...<br/>Le moment est venu vous savez ? Toute chose doit trouver à nouveau sa place dans le grand cycle.",
				en : "So, here you are again among us, within the immaterial...<br/>The time has come, you know ? Everything must find its place again in the great cycle."
			},
			"mabon-fin-good-event2" : {
				fr : "Je me dois de vous féliciter, vos actes ont été un modèle de sagesse et de bonté.<br/>Les choix que vous avez fait rayonneront à jamais dans le nouvel univers qui se prépare.",
				en : "I must congratulate you, your actions have been a model of wisdom and kindness.<br/>The choices you have made will shine forever in the new universe that is preparing."
			},
			"mabon-fin-good-event3" : {
				fr : "Vous rouvrîtes les yeux, assis dans votre palais. L'univers touchais toujours à sa fin mais cela ne vous inquiétait plus...",
				en : "You reopen your eyes, sitting in your palace. The universe was still coming to an end, but you were no longer worried about it..."
			},
			"mabon-fin-good-event4" : {
				fr : "Les choses sont en perpétuel changement, même les dieux n'y peuvent rien...<br/>Mais malgré les difficultés, nous pouvons rendre les choses plus belles, de cycle en cycle.",
				en : "Things are in constant change, even the gods can do nothing about it...<br/>But despite the difficulties, we can make things more beautiful, from cycle to cycle."
			},
			"mabon-fin-event-conclusion" : {
				fr : "...Les seules choses entre vos mains, sont les choix que vous faites...",
				en : "...The only things in your hands are the choices you make..."
			},
			
			/**
			 * Bad
			 */
			"mabon-fin-bad-event-titre" : {
				fr : "Mauvais dieu",
				en : "Bad god"
			},
			"mabon-fin-bad-event" : {
				fr : "Ainsi, vous voici de nouveau parmi nous, au sein de l’immatériel...<br/>Le moment est venu vous savez ? Toute chose doit trouver à nouveau sa place dans le grand cycle.",
				en : "So, here you are again among us, within the immaterial...<br/>The time has come, you know ? Everything must find its place again in the great cycle."
			},
			"mabon-fin-bad-event2" : {
				fr : "Je vous avoue que je suis surpris, vos actes ont été terrible et le nouvel univers qui se prépare regorgera de haine et de terreur...",
				en : "I must confess that I am surprised, your actions have been terrible and the new universe that is about to be created will be filled with hatred and terror..."
			},
			"mabon-fin-bad-event3" : {
				fr : "Sachez que vos choix ont une incidence sur tout ce qui est et tout ce qui sera. Malheureusement, vous ne serez plus parmi nous pour le constater...",
				en : "Know that your choices have an impact on everything that is and will be. Unfortunately, you will no longer be with us to see this...."
			},
			"mabon-fin-bad-event4" : {
				fr : "Vous vous réveillâtes en sursaut, assis dans votre palais. L'univers touchais toujours à sa fin et cela vous inquiétait...",
				en : "You woke up with a start, sitting in your palace. The universe was still coming to an end and you were worried about it..."
			},
			"mabon-fin-bad-event5" : {
				fr : "Les choses sont en perpétuel changement, même les dieux n'y peuvent rien...<br/>Et malgré les efforts, les choses se dégradent, de cycle en cycle.",
				en : "Things are in perpetual change, even the gods can do nothing about it...<br/>And despite all the efforts, things are getting worse, from cycle to cycle."
			}
	};
	
	return {
		get : function(key) {
			var text = data[key];
			return text;
		}
	};
});
