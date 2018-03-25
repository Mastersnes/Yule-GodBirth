'use strict';
define(["jquery",
        'underscore',
        "text!app/template/popups/confirm.html",], function($, _, confirmPage){
	return {
		/**
		* Affiche une popup de confirmation
		**/
		confirm : function(Textes, textePopup, callbackSuccess, callbackCancel, texteYes, texteNo) {
		    if (!texteYes) texteYes = Textes.get("yesButton");
		    if (!texteNo) texteNo = Textes.get("noButton");
			
			var el = $("body > #popups");
			_.templateSettings.variable = "data";
            var template = _.template(confirmPage);
            var templateData = {
            		text : Textes,
            		textePopup : textePopup,
                    texteYes : texteYes,
                    texteNo : texteNo
            };
            el.html(template(templateData));
            el.find(".popup").show();
            
            el.find(".yes").click(function() {
            	el.find(".popup").hide();
            	if (callbackSuccess) callbackSuccess();
            });
            el.find(".no").click(function() {
            	el.find(".popup").hide();
            	if (callbackCancel) callbackCancel();
            });
		}
	};
});