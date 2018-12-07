'use strict';
define(["jquery"
       ],
        function($){
	var data = {
			/**
			 * Premier evenement
			 */
			"mabon-start-event-titre" : {
				fr : "",
				en : ""
			},
			"mabon-start-event" : {
				fr : "",
				en : ""
			}
	};
	
	return {
		get : function(key) {
			var text = data[key];
			return text;
		}
	};
});
