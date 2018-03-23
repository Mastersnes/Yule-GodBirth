'use strict';
define(["jquery",
        'underscore',
        "text!app/template/popups/confirm.html",], function($, _, confirmPage){
	return {
		/**
		* Affiche une popup de confirmation
		**/
		confirm : function(texte, callbackSuccess, callbackCancel, texteYes, texteNo) {
		    _.templateSettings.variable = "data";
            var template = _.template(page);
            var templateData = {
                    textPopup : texte,
                    texteYes : texteYes,
                    textNo : textNo
            };
            $(this.el).html(template(templateData));
		}
	};
});