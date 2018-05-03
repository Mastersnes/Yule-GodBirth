'use strict';
define(["jquery"], function($){
	var data = {
			"first-event" : {
				name : "first-event",
			    text : "first-event",
			    rarity : 1,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 var ameliorationView = game.spaceView.ameliorationView;
			                 var grandTout = this.ameliorationView.Items.get("grandTout");
			                 var deesse = this.ameliorationView.Items.get("deesse");
			                 game.pointManager.addPoints({
		 						croyance : parseInt(grandTout.gain.croyance.loop * 10),
		 						illumination : 0,
		 						bien : parseInt(deesse.gain.bien.loop * 10),
		 						mal : 0
			            	 });
			                 
			                 game.eventManager.addEvents(["pluie?-event", "eclipse?-event", "sacrifice?-event", "blessure?-event", "argent?-event", "vrai-dieu?-event"]);
			                 game.alertPopup("first-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             var ameliorationView = game.spaceView.ameliorationView;
                             var grandTout = this.ameliorationView.Items.get("grandTout");
                             var dieu = this.ameliorationView.Items.get("dieu");
                             game.pointManager.addPoints({
                                croyance : parseInt(grandTout.gain.croyance.loop * 5),
                                illumination : 0,
                                bien : 0,
                                mal : parseInt(dieu.gain.mal.loop * 15)
                             });
                             
                        	 game.eventManager.addEvents(["secheresse!-event", "glaciation!-event", "sacrifice!-event", "epidemie!-event", "famine!-event", "faux-dieu!-event"]);
                        	 game.alertPopup("first-event-ko");
                         }
                     }
			    ]
			},
			/**
			 * Question des emissaires
			 */
			"pluie?-event" : {
				name : "pluie?-event",
			    text : "pluie?-event",
			    rarity : 10,
			    unique : true,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 var ameliorationView = game.spaceView.ameliorationView;
                             var deesse = this.ameliorationView.Items.get("deesse");
                             game.pointManager.addPoints({
                                croyance : parseInt(deesse.gain.croyance.loop * 5),
                                illumination : 0,
                                bien : parseInt(deesse.gain.bien.loop * 20),
                                mal : 0
                             });
                             
			                 game.alertPopup("pluie?-event-ok");
			                 game.eventManager.addEvents(["cadeau-pluie?-event"]);
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                             var ameliorationView = game.spaceView.ameliorationView;
                             var dieu = this.ameliorationView.Items.get("dieu");
                             game.pointManager.addPoints({
                                croyance : parseInt(dieu.gain.croyance.loop * 5),
                                illumination : 0,
                                bien : 0,
                                mal : parseInt(dieu.gain.mal.loop * 20)
                             });
                             game.alertPopup("pluie?-event-ko");
                             game.eventManager.addEvents(["secheresse!-event"]);
                         }
                     }
			    ]
			},
			"cadeau-pluie?-event" : {
                name : "cadeau-pluie?-event",
                text : "cadeau-pluie?-event",
                rarity : 20,
                unique : false,
                actions : [
                     {
                         name : "croyance",
                         action : function(game) {
                             var ameliorationView = game.spaceView.ameliorationView;
                             var grandTout = this.ameliorationView.Items.get("grandTout");
                             game.pointManager.addPoints({
                                croyance : parseInt(grandTout.gain.croyance.loop * 10),
                                illumination : 0,
                                bien : 0,
                                mal : 0
                             });
                             
                             game.alertPopup("cadeau-pluie?-event-croyance");
                         }
                     },
                     {
                         name : "illumination",
                         action : function(game) {
                             var ameliorationView = game.spaceView.ameliorationView;
                             var lune = this.ameliorationView.Items.get("lune");
                             game.pointManager.addPoints({
                                croyance : 0,
                                illumination : 5 + parseInt(lune.gain.illumination.loop * 5),
                                bien : 0,
                                mal : 0
                             });
                             
                             game.alertPopup("cadeau-pluie?-event-illumination");
                         }
                     }
                ]
            },
			"eclipse?-event" : {
				name : "eclipse?-event",
			    text : "eclipse?-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("eclipse?-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("eclipse?-event-ko");
                         }
                     }
			    ]
			},
			"sacrifice?-event" : {
				name : "sacrifice?-event",
			    text : "sacrifice?-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("sacrifice?-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("sacrifice?-event-ko");
                         }
                     }
			    ]
			},
			"blessure?-event" : {
				name : "blessure?-event",
			    text : "blessure?-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("blessure?-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("blessure?-event-ko");
                         }
                     }
			    ]
			},
			"argent?-event" : {
				name : "argent?-event",
			    text : "argent?-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("argent?-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("argent?-event-ko");
                         }
                     }
			    ]
			},
			"vrai-dieu?-event" : {
                name : "vrai-dieu?-event",
                text : "vrai-dieu?-event",
                rarity : 10,
                unique : false,
                actions : [
                     {
                         name : "yesButton",
                         action : function(game) {
                             game.alertPopup("vrai-dieu?-event-ok");
                         }
                     },
                     {
                         name : "noButton",
                         action : function(game) {
                             game.alertPopup("vrai-dieu?-event-ko");
                         }
                     }
                ]
            },
			/**
			 * Sans Emissaires
			 */
			"secheresse!-event" : {
				name : "secheresse!-event",
			    text : "secheresse!-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("secheresse!-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("secheresse!-event-ko");
                         }
                     }
			    ]
			},
			"glaciation!-event" : {
				name : "glaciation!-event",
			    text : "glaciation!-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("glaciation!-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("glaciation!-event-ko");
                         }
                     }
			    ]
			},
			"sacrifice!-event" : {
				name : "sacrifice!-event",
			    text : "sacrifice!-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("sacrifice!-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("sacrifice!-event-ko");
                         }
                     }
			    ]
			},
			"epidemie!-event" : {
				name : "epidemie!-event",
			    text : "epidemie!-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("epidemie!-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("epidemie!-event-ko");
                         }
                     }
			    ]
			},
			"famine!-event" : {
				name : "famine!-event",
			    text : "famine!-event",
			    rarity : 10,
			    unique : false,
			    actions : [
			         {
			             name : "yesButton",
			             action : function(game) {
			                 game.alertPopup("famine!-event-ok");
			             }
			         },
			         {
                         name : "noButton",
                         action : function(game) {
                        	 game.alertPopup("famine!-event-ko");
                         }
                     }
			    ]
			},
			"faux-dieu!-event" : {
                name : "faux-dieu!-event",
                text : "faux-dieu!-event",
                rarity : 10,
                unique : false,
                actions : [
                     {
                         name : "yesButton",
                         action : function(game) {
                             game.alertPopup("faux-dieu!-event-ok");
                         }
                     },
                     {
                         name : "noButton",
                         action : function(game) {
                             game.alertPopup("faux-dieu!-event-ko");
                         }
                     }
                ]
            },
	};
	
	return {
		/**
		* Permet d'appeler un WS
		**/
		get : function(key) {
			return $.extend(true, {}, data[key]);
		}
	};
});
