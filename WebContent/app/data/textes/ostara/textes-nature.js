'use strict';
define(["jquery"], 
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"nature-abeille-event-titre" : {
				fr : "Un bourdonnement lointain...",
				en : "A distant buzzing..."
			},
			"nature-abeille-event" : {
				fr : "Maître ! Il semblerait que toute les abeilles aient disparuent ! Que pouvons nous faire ?",
				en : "Master ! Its seems that all bees had disapears ! What could we do ?"
			},
			"nature-abeille-enquete" : {
				fr : "Des savants ont déjà commencés les recherches. Nous auront les résultats sous peu.",
				en : "Scientists have already begun the search. We will have the results shortly."
			},
			"nature-abeille-event-ignore" : {
				fr : "Plus jamais on entendis une seule abeille...<br/>Les conséquence ne furent pas visible de suite. Et pourtant... Elle ne tardèrent point à arriver...",
				en : "Never again was a single bee heard...<br/>The consequences were not immediately visible. And yet.... They soon arrived..."
			},
			
			/**
			 * On fait l'enquete
			 */
			"nature-abeille-event-enquete-titre" : {
				fr : "Etouffant",
				en : "Stifling"
			},
			"nature-abeille-event-enquete" : {
				fr : "Les savants sont formels : les abeilles ont disparus à cause des industries humaine !<br/>Il semblerait que le gaz qui s'échappe de leurs usine detruise la nature environnante !",
				en : "The scientists are formal : the bees have disappeared because of human industries !<br/>It seems that the gas escaping from their factory is destroying the surrounding nature !"
			},
			"detruire-usine-button" : {
				fr : "Detruire les usines",
				en : "Destroy factories"
			},
			"nature-abeille-event-enquete-detruire" : {
				fr : "Les nombreuses usines explosèrent sur l'instant, libérant dans l’atmosphère des radiations mortelles...",
				en : "The many factories exploded instantly, releasing deadly radiation into the atmosphere..."
			},
			"punir-humain-button" : {
				fr : "Punir les humain",
				en : "Punishing humans"
			},
			"nature-abeille-event-enquete-punir" : {
				fr : "Par vos enseignements, les humains comprirent l'importance de la nature.<br/>Ils entreprirent de démanteler les usines de façon propre et durable.",
				en : "Through your teachings, humans understood the importance of nature.<br/>They undertook to dismantle factories in a clean and sustainable way."
			},
			"nature-abeille-event-enquete-ignore" : {
				fr : "La pollution continua de plus belle. La nature se dégrada de plus en plus au fil du temps...",
				en : "The pollution continued unabated. Nature deteriorated more and more over time..."
			},
			
			/**
			 * On a pas fait l'enquete, ca se degrade
			 */
			"nature-fleurs-event-titre" : {
				fr : "Un parfum oublié...",
				en : "A forgotten fragrance..."
			},
			"nature-fleurs-event" : {
				fr : "C'est maintenant au tour des fleurs de disparaître ! Quelque chose d’étrange se passe sur terre, c'est une certitude...",
				en : "Now it's the flowers' turn to disappear ! Something strange is happening on earth, it's a certainty..."
			},

			/**
			 * Accident nucleaire
			 */
			"nature-nucleaire-event-titre" : {
				fr : "Accident nucléaire",
				en : "Nuclear accident"
			},
			"nature-nucleaire-event" : {
				fr : "Plus rien de subsiste à la surface de la terre...<br/>Les hommes se sont terré dans les entrailles de notre planète pour survivre.<br/>La seule solution serait d'utiliser tout votre pouvoir pour les sauver...",
				en : "Nothing remains on the surface of the earth.... Men have hid in the bowels of our planet to survive.<br/>The only solution would be to use all your power to save them..."
			},
			"nature-nucleaire-event-ignore" : {
				fr : "On continua à polluer, à l'interieur même de la terre, visant toujours plus de profits.<br/>L'Homme n'avait toujours rien compris de ses erreurs...",
				en : "Polluting continued, even within the earth, with the aim of increasing profits.<br/>Man had never understood anything of his mistakes..."
			},
			"nature-nucleaire-event-intervenir" : {
				fr : "Le nuage se dissipa, emportant avec lui la mort et la maladie.<br/>Durant les siècles qui suivirent les hommes sortirent doucement de leur cachette...<br/>Plus rien ne restait à la surface, la nature avait repris ses droits !",
				en : "The cloud dissipated, carrying with it death and disease.<br/>During the centuries that followed, men slowly came out of hiding...<br/>Nothing remained on the surface, nature had regained its rights !"
			},
			
			/**
			 * Destruction de la nature
			 */
			"nature-destruction-event-titre" : {
				fr : "Fin de la nature",
				en : "End of nature"
			},
			"nature-destruction-event" : {
				fr : "Ce qui devait arriver arriva... La nature sur Terre disparut, ne laissant qu'une planète morte. Un désert de sable en somme...<br/>Les seules survivant se battaient entre eux pour le moindre espoir de nourriture...<br/>L'Humanité vivait ses derniers jours...",
				en : "What was supposed to happen happened... Nature on Earth disappeared, leaving only one dead planet. A sandy desert in short...<br/>The only survivors were fighting among themselves for the slightest hope of food...<br/>Humanity was living its last days..."
			},
			"nature-destruction-event-ignore" : {
				fr : "La planète continua alors à décrépir puis vola enfin dans un nuage de poussière... Plus rien ne restait dans l'univers pour croire en vous...",
				en : "The planet then continued to decay and finally flew in a cloud of dust... There was nothing left in the universe to believe in you..."
			},
			"nature-destruction-event-sauver-button" : {
				fr : "<bonus>[Corne d'abondance]-Sauver la nature</bonus>",
				en : "<bonus>[Horn of plenty]-Save the nature</bonus>"
			},
			"nature-destruction-event-sauver" : {
				fr : "Des dizaines d'années passèrent, sans résultat. Puis, un jour, on vit réapparaître le premier papillon.<br/>Tout alla très vite, les plantes recommencèrent à pousser puis vint le tour des arbres !<br/>La terre avait retrouvé sa grandeur passée !",
				en : "Decades passed, with no results. Then, one day, we saw the first butterfly reappear.<br/>Everything went very quickly, the plants started growing again and then came the trees !<br/>The earth had found its past greatness !"
			},
	};
	
	return {
		get : function(key) {
			return data[key];
		}
	};
});
