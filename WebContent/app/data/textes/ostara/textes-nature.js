'use strict';
define(["jquery"], 
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"nature-abeille-event-titre" : {
				fr :"Un bourdonnement lointain...",
				en :"A distant buzzing..."
			},
			"nature-abeille-event" : {
				fr :"Maître! Il semblerait que toutes les abeilles aient disparu! Que pouvons-nous faire?",
				en :"Master! It seems that all bees have disappeared! What could we do?"
			},
			"nature-abeille-enquete" : {
				fr :"Des savants ont déjà commencé les recherches. Nous aurons les résultats sous peu.",
				en :"Scientists have already begun the search. We'll have the results shortly."
			},
			"nature-abeille-event-ignore" : {
				fr :"Plus jamais on n’entendit une seule abeille...<br/>Les conséquences ne furent pas visibles de suite. Et pourtant... Elles ne tardèrent pas à arriver...",
				en :"Never again a single bee was heard...<br/>The consequences were not immediately visible. And yet... They soon arrived..."
			},

			/**
			 * On fait l'enquete
			 */
			"nature-abeille-event-enquete-titre" : {
				fr :"Étouffant",
				en :"Suffocating"
			},
			"nature-abeille-event-enquete" : {
				fr :"Les savants sont formels : les abeilles ont disparu à cause des industries humaines!<br/>Il semblerait que le gaz qui s'échappe de leurs usines détruise la nature environnante!",
				en :"Scientists are formal : bees have disappeared because of human industries!<br/>It seems that the gas escaping from their factory is destroying the surrounding nature!"
			},
			"detruire-usine-button" : {
				fr :"Détruire les usines",
				en :"Destroy factories"
			},
			"nature-abeille-event-enquete-detruire" : {
				fr :"Les nombreuses usines explosèrent sur l'instant, libérant dans l’atmosphère des radiations mortelles...",
				en :"The many factories exploded instantly, releasing deadly radiation into the atmosphere..."
			},
			"punir-humain-button" : {
				fr :"Punir les humains",
				en :"Punishing humans"
			},
			"nature-abeille-event-enquete-punir" : {
				fr :"Par vos enseignements, les humains comprirent l'importance de la nature.<br/>Ils entreprirent de démanteler les usines de façon propre et durable.",
				en :"Through your teachings, humans understood the importance of nature.<br/>They undertook to dismantle factories in a clean and sustainable way."
			},
			"nature-abeille-event-enquete-ignore" : {
				fr :"La pollution continua de plus belle. La nature se dégrada de plus en plus au fil du temps...",
				en :"Pollution continued to increase. Nature deteriorated more and more over time..."
			},

			/**
			 * On a pas fait l'enquete, ca se degrade
			 */
			"nature-fleurs-event-titre" : {
				fr :"Un parfum oublié...",
				en :"A forgotten fragrance..."
			},
			"nature-fleurs-event" : {
				fr :"C'est maintenant au tour des fleurs de disparaître! Quelque chose d’étrange se passe sur Terre, c'est une certitude...",
				en :"Now it's the flowers' turn to disappear! Something strange is happening on Earth, it's a certainty..."
			},

			/**
			 * Accident nucleaire
			 */
			"nature-nucleaire-event-titre" : {
				fr :"Accident nucléaire",
				en :"Nuclear accident"
			},
			"nature-nucleaire-event" : {
				fr :"Plus rien ne subsiste à la surface de la Terre...<br/>Les Hommes se sont terrés dans les entrailles de notre planète pour survivre.<br/>La seule solution serait d'utiliser tout votre pouvoir pour les sauver...",
				en :"Nothing remains on the surface of Earth... Men have hid in the depths of our planet to survive.<br/>The only solution would be to use your full power to save them..."
			},
			"nature-nucleaire-event-ignore" : {
				fr :"On continua à polluer, à l'intérieur même de la Terre, visant toujours plus de profits.<br/>L'Humanité n'avait toujours rien compris de ses erreurs...",
				en :"They continued to pollute, even within Earth, with the aim of increasing profits.<br/>Humanity had never understood anything of its mistakes..."
			},
			"nature-nucleaire-event-intervenir" : {
				fr :"Le nuage se dissipa, emportant avec lui la mort et la maladie.<br/>Durant les siècles qui suivirent, les êtres vivant sortirent doucement de leur cachette...<br/>Plus rien ne restait à la surface, la nature avait repris ses droits.",
				en :"The cloud dissipated, carrying with it death and disease.<br/>During the following centuries, living beings slowly came out of hiding...<br/>Nothing remained on the surface, nature had regained its rights."
			},

			/**
			 * Destruction de la nature
			 */
			"nature-destruction-event-titre" : {
				fr :"Fin de la nature",
				en :"End of nature"
			},
			"nature-destruction-event" : {
				fr :"Ce qui devait arriver arriva... La nature sur Terre disparut, ne laissant qu'une planète morte. Un désert de sable en somme...<br/>Les seuls survivants se battaient entre eux pour le moindre espoir de nourriture...<br/>L'Humanité vivait ses derniers jours...",
				en :"What was supposed to happen happened... Nature on Earth disappeared, leaving only a dead planet. A sandy desert in short...<br/>The only survivors were fighting each other for any hope of food...<br/>Humanity was living its last days..."
			},
			"nature-destruction-event-ignore" : {
				fr :"La planète continua alors à décrépir, puis vola enfin dans un nuage de poussière. Il ne restait plus personne dans l'Univers pour croire en vous...",
				en :"The planet continued to decline, then finally flew in a cloud of dust. There was no one left in the Universe to believe in you..."
			},
			"nature-destruction-event-sauver-button" : {
				fr :"Sauver la nature",
				en :"Save the nature"
			},
			"nature-destruction-event-sauver" : {
				fr :"Des dizaines d'années passèrent, sans résultat. Puis, un jour, on vit réapparaître le premier papillon.<br/>Tout alla très vite. Les plantes recommencèrent à pousser puis, vint le tour des arbres...<br/>La Terre avait retrouvé sa grandeur passée!",
				en :"Decades passed, with no results. Then, one day, they saw the first butterfly reappear.<br/>Everything went very quickly. Plants restarted growing again and then came the trees...<br/>The Earth had regained its ancient greatness!"
			}
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
