'use strict';
define(["jquery"
       ],
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"lammas-frere-event-titre" : {
				fr : "Une disparition inquietante",
				en : "A worrying disappearance"
			},
			"lammas-frere-event" : {
				fr : "Mon Dieu ! Pourriez vous me venir en aide ? C'est mon frère, il a disparut ! Répondez à mon appel, je vous en prie !",
				en : "My God ! Could you help me ? It's my brother, he's missing ! Please answer my call !"
			},
			"lammas-frere-event-intervenir" : {
				fr : "Malgré vos efforts vous ne parvîntes pas à le ramener parmi les vivants. Son âme même semblait avoir disparu...",
				en : "Despite your efforts, you are unable to bring him back to the living. His very soul seemed to have disappeared..."
			},
			"lammas-frere-event-ignore" : {
				fr : "La prière se perdit dans le vide de l'espace ne trouvant jamais réponse...",
				en : "Prayer was lost in the void of space that never found an answer...."
			},
			
			"lammas-frere2-event-titre" : {
				fr : "Une disparition inquietante",
				en : "A worrying disappearance"
			},
			"lammas-frere2-event" : {
				fr : "La femme vous expliqua que son frère s’était simplement évaporé devant ses yeux dans une merveilleuse lumière...",
				en : "The woman explained to you that her brother had simply vanished before her eyes in a wonderful light..."
			},
			"lammas-frere2-event-enquete" : {
				fr : "De nombreux analyste furent envoyer dans le système, sans succès.<br/>Les gens semblaient disparaître sans raison, toujours de la même façon...",
				en : "Many analysts were sent into the system, without success.<br/>People seemed to disappear for no reason, always in the same way..."
			},
			"lammas-frere2-event-laisser" : {
				fr : "La femme éclata en sanglot. Elle savait que si vous, vous n'y étiez pas parvenu, personne ne le pourrait...",
				en : "The woman burst into tears. She knew that if you, you hadn't succeeded, no one could..."
			},
			
			/**
			 * Disparition
			 */
			"lammas-disparition-event-titre" : {
				fr : "Étrange personnage",
				en : "Strange character"
			},
			"lammas-disparition-event" : {
				fr : "Un vieille homme entra péniblement dans votre palais. Son regard vide laissait présagé des millénaires de réflexion intense...",
				en : "An old man painfully entered your palace. His empty gaze foreshadowed millennia of intense reflection..."
			},
			"lammas-disparition-event-question-button" : {
				fr : "Le questionner",
				en : "Question him"
			},
			"lammas-disparition-event-question" : {
				fr : "Vous aurez bientôt à faire un grand choix pour l'univers.",
				en : "You will soon have to make a wide choice for the universe."
			},
			
			"lammas-disparition2-event-titre" : {
				fr : "Un grand tournant",
				en : "A great turning point"
			},
			"lammas-disparition2-event" : {
				fr : "L'issue est déjà décidé pour vous mais peut être pourrez vous la changer...",
				en : "The outcome is already decided for you but maybe you can change it..."
			},
			"lammas-disparition2-event-comment-button" : {
				fr : "Comment ?",
				en : "What ?"
			},
			"lammas-disparition2-event-comment" : {
				fr : "À peine l'homme eut-il terminé sa phrase qu'il disparu aussitôt dans une intense lumière...",
				en : "As soon as the man had finished his sentence, he immediately disappeared in an intense light..."
			},
			
			"lammas-disparition3-event-titre" : {
				fr : "La lumière au bout du tunnel",
				en : "Light at the end of the tunnel"
			},
			"lammas-disparition3-event" : {
				fr : "Une faible lueur persistait encore à l'emplacement même où il se trouvait quelques secondes plus tôt.",
				en : "A faint glow still persisted at the very location where he was a few seconds earlier."
			},
			"lammas-disparition3-event-ignore" : {
				fr : "La faible lueur finie par s’éteindre au bout de quelques seconde. Vous ne connaîtrez jamais le réel sens de son intervention...",
				en : "The dim glow eventually fades out after a few seconds. You will never know the real meaning of his intervention..."
			},
			"lammas-disparition3-event-lumiere-button" : {
				fr : "Plonger dans la lumière",
				en : "Dive into the light"
			},
			"lammas-disparition3-event-lumiere" : {
				fr : "Vous voyagez à une vitesse phénoménale, à travers les dimensions et le réel.",
				en : "You travel at a phenomenal speed, through dimensions and reality."
			},
			"lammas-disparition3-event-lumiere2" : {
				fr : "Tout ce qui existe autour de vous n'a plus aucune consistance et semble être un écho lointain.",
				en : "Everything around you has no consistency and seems to be a distant echo."
			},
			"lammas-disparition3-event-lumiere3" : {
				fr : "Une voix vous interpelle :<br/>Bien le bonjour grand tout. Je vous connais bien vous savez, vous, le pere de toute chose materiel.",
				en : "A voice calls out to you:<br/>Good morning, everything. I know you well you know, you, the father of all material things."
			},
			"lammas-disparition3-event-lumiere4" : {
				fr : "L'univers existe grâce à votre bon vouloir et tourne selon vos pensée.",
				en : "The universe exists thanks to your goodwill and rotates according to your thoughts."
			},
			"lammas-disparition3-event-lumiere5" : {
				fr : "Un lieu au delà de l'existence. Tout ce qui n'a jamais existé et tout ce qui existera se rassemblera en ce lieu.",
				en : "A place beyond existence. Everything that has never existed and everything that will exist will be gathered in this place."
			},
			"lammas-disparition3-event-lumiere6" : {
				fr : "Votre expérience touche à sa fin. Les pensées divines ayant façonnées votre monde s'estompe peu à peu mais n'ayez crainte.",
				en : "Your experience is coming to an end. The divine thoughts that have shaped your world are gradually fading away, but don't be afraid."
			},
			"lammas-disparition3-event-lumiere7" : {
				fr : "L’énergie accumulée prendra forme d'une façon ou d'une autre ici et façonnera un nouvelle univers.",
				en : "The accumulated energy will take shape somehow here and shape a new universe."
			},
			"lammas-disparition3-event-lumiere8" : {
				fr : "Serez vous acteur ou pantin de ce mécanisme ? Ne répondez pas ici...<br/>Répondez simplement de façon juste aux choix que votre univers vous propose. Nous nous reverrons grand dieu...",
				en : "Will you be an actor or a puppet of this mechanism ? Don't answer here...<br/>Response simply in a fair way to the choices your universe offers you. We will meet again, my goodness..."
			},
			"lammas-disparition3-event-lumiere9" : {
				fr : "Vous ouvrez les yeux dans votre palais... Jamais vous n'auriez pensé qu'une entité puisse dépassé l'entendement même des dieux.",
				en : "You open your eyes in your palace... You would never have thought that an entity could surpass the very understanding of the gods."
			}
	};
	
	return {
		get : function(key) {
			var text = data[key];
			return text;
		}
	};
});
