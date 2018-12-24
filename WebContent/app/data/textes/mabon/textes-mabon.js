'use strict';
define(["jquery"
       ],
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"mabon-start-event-titre" : {
				fr :"Éternel recommencement",
				en :"Eternal restarting"
			},
			"mabon-start-event" : {
				fr :"Nous y étions. La fin de l'Univers était très proche... De plus en plus d'êtres vivants s’évaporaient en énergie pure et certaines planètes avaient même commencé à disparaître.",
				en :"We were there. The end of the Universe was very close... More and more living beings were evaporating into pure energy and some planets had even begun to disappear."
			},
			"mabon-start-event2" : {
				fr :"Dans le fond de votre palais, fatigué par une vie de choix, vous aperçûtes à nouveau devant vous cette magnifique lueur surgir du néant.<br/>Votre décision était prise. D'un pas décidé, vous entrâtes dans la lumière.",
				en :"In the back of your palate, tired by a life of choice, you saw again in front of you this magnificent glow emerging from nothingness.<br/>Your decision was taken. With a decided step, you entered the light."
			},

			/**
			 * Good
			 */
			"mabon-fin-good-event-titre" : {
				fr :"Bon dieu",
				en :"Good god"
			},
			"mabon-fin-good-event" : {
				fr :"Ainsi, vous voici de nouveau parmi nous, au sein de l’immatériel...<br/>Le moment est venu, vous savez ? Toute chose doit trouver à nouveau sa place dans le grand cycle...",
				en :"So, here you are again among us, within the immaterial...<br/>The time has come, you know ? Everything must find its place again in the great cycle..."
			},
			"mabon-fin-good-event2" : {
				fr :"Je me dois de vous féliciter. Vos actes ont été un modèle de sagesse et de bonté.<br/>Les choix que vous avez faits rayonneront à jamais dans le nouvel Univers qui se prépare.",
				en :"I must congratulate you. Your actions have been a model of wisdom and kindness.<br/>The choices you've made will shine forever in the new Universe that is preparing."
			},
			"mabon-fin-good-event3" : {
				fr :"Vous rouvrîtes les yeux, assis dans votre palais. L'Univers touchait toujours à sa fin, mais cela ne vous inquiétait plus...",
				en :"You reopen your eyes, sitting in your palace. The Universe was still coming to an end, but you were no longer worried about it..."
			},
			"mabon-fin-good-event4" : {
				fr :"Les choses sont en perpétuel changement, même les dieux n'y peuvent rien...<br/>Mais, malgré les difficultés, nous pouvons les rendre plus belles de cycle en cycle.",
				en :"Things are in constant change, even the gods can do nothing about it...<br/>But, despite the difficulties, we can make things more beautiful from cycle to cycle."
			},
			"mabon-fin-event-conclusion" : {
				fr :"...La seule puissance entre vos mains résulte des choix que vous faites...",
				en :"...The only power in your hands is the result of the choices you make..."
			},

			/**
			 * Bad
			 */
			"mabon-fin-bad-event-titre" : {
				fr :"Mauvais dieu",
				en :"Bad god"
			},
			"mabon-fin-bad-event" : {
				fr :"Ainsi, vous voici de nouveau parmi nous, au sein de l’immatériel...<br/>Le moment est venu, vous savez ? Toute chose doit trouver à nouveau sa place dans le grand cycle...",
				en :"So, here you are again among us, within the immaterial...<br/>The time has come, you know ? Everything must find its place again in the great cycle..."
			},
			"mabon-fin-bad-event2" : {
				fr :"Je vous avoue que je suis surpris, vos actes ont été terribles et le nouvel Univers qui se prépare regorgera de haine et de terreur...",
				en :"I must confess that I am surprised, your actions have been terrible and the new Universe that is about to be created will be filled with hatred and terror..."
			},
			"mabon-fin-bad-event3" : {
				fr :"Sachez que vos choix ont une incidence sur tout ce qui est et tout ce qui sera. Malheureusement, vous ne serez plus parmi nous pour le constater...",
				en :"Know that your choices have an impact on everything that is and will be. Unfortunately, you'll no longer be with us to see this..."
			},
			"mabon-fin-bad-event4" : {
				fr :"Vous vous réveillâtes en sursaut, assis dans votre palais. L'Univers touchait toujours à sa fin et cela vous inquiétait...",
				en :"You woke up with a start, sitting in your palace. The Universe was still coming to an end and you were worried about it..."
			},
			"mabon-fin-bad-event5" : {
				fr :"Les choses sont en perpétuel changement, même les dieux n'y peuvent rien...<br/>Et malgré les efforts, elles se dégradent de cycle en cycle.",
				en :"Things are in perpetual change, even the gods can do nothing about it...<br/>And despite all the efforts, things are getting worse from cycle to cycle."
			}
	};
	
	return {
		get : function(key) {
			var text = data[key];
			return text;
		}
	};
});
