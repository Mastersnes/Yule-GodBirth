/*global define */
define(["jquery",
        'underscore'
        ],
function($, _, page) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.el = "#popupText";
			this.parent = parent;
			this.Textes = parent.Textes;
			this.visible = false;
		};
		
		this.show = function(ids, callback) {
		    this.ids = ids;
			this.callback = callback;
			this.current = -1;
			console.log("show : ", this.ids);
			
			$("#popupText").show();
			this.visible = true;
			
			this.next();
		};
		
		this.next = function() {
		    if (!this.visible || this.ids[this.current] == "fin") return;
		    
		    this.current ++;
			if (this.current < this.ids.length) {
			    console.log("showText : ", this.id, this.current);
			    var id = this.ids[this.current];
				var value = this.Textes.get(id);
				if (value) $("#popupText.text").html(value);
				else $("#popupText.text").html(id);
			}else {
			    console.log("hideText");
			    this.visible = false;
				$("#popupText").hide();
				if (this.callback) {
					this.callback.call();
				}
			}
		};
		
		this.empty = function() {
		    return !this.visible;
		};

		this.init(parent);
	};
});