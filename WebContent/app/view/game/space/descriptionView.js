/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils"],
function($, _, Utils) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = $("#description");
		    this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            this.Items = parent.Items;
            this.refreshMax = false;
            
            this.pointManager = parent.pointManager;
		};

		this.show = function(itemId, reinitIncr) {
			this.currentItem = itemId;
            
            if (reinitIncr) {
            	this.currentIncr = 1;
            	this.refreshMax = false;
            }
            this.refresh();
            
            this.el.show();
        };
        
        this.refresh = function() {
        	var itemId = this.currentItem;
		    var item = this.Items.get(itemId);
        	
		    if (!item) return;
		    
		    var maxIncr = this.getMaxIncr(item);
            if (this.refreshMax) this.currentIncr = maxIncr;
		    
        	this.fill("#current", item, 0);
            this.fill("#next", item, this.currentIncr);
            
            if (!this.parent.checkAchetable(item, item.level+1)) this.el.find(".nextLevel[incr='1']").attr("disabled", "disabled");
            else this.el.find(".nextLevel[incr='1']").removeAttr("disabled");
            
            if (!this.parent.checkAchetable(item, item.level+10)) this.el.find(".nextLevel[incr='10']").attr("disabled", "disabled");
            else this.el.find(".nextLevel[incr='10']").removeAttr("disabled");
            
            this.el.find(".nextLevel#max").attr("incr", maxIncr);
            this.el.find(".nextLevel#max span").html("+" + maxIncr);
            if (maxIncr == 0) this.el.find(".nextLevel#max").attr("disabled", "disabled");
            else this.el.find(".nextLevel#max").removeAttr("disabled");
        };
        
        /**
         * Permet de remplir les champs de la description
         */
        this.fill = function(domId, item, incr) {
            var dom = this.el.find(domId);
            
            var level = item.level + incr;
            
            /**
             * LEVEL
             */
            dom.find("#nom").html(this.Textes.get(item.name));
            dom.find("#level").html(level);
            
            /**
             * Restrictions
             */
            var restrictions = item.restrictions(level);
            if (!restrictions || restrictions.length == 0) dom.find("#restrictions").hide();
            else {
                dom.find("#restrictions > #list").empty();
                dom.find("#restrictions").show();
                for (var index in restrictions) {
                    var restriction = restrictions[index];
                    
                    var restrictionDom = $("<div></div>");
                    restrictionDom.attr("class", "categorie");
                    if (this.parent.checkRestriction(restriction)) restrictionDom.addClass("ok");
                    
                    var restrictionIcon = $("<span></span>");
                    restrictionIcon.attr("class", "icon");
                    restrictionDom.append(restrictionIcon);
                    
                    var restrictionText = $("<span></span>");
                    restrictionText.attr("class", "text");
                    restrictionText.append(this.Textes.get(restriction.name)).append(" (" + restriction.level + ")");
                    restrictionDom.append(restrictionText);
                    
                    dom.find("#restrictions > #list").append(restrictionDom);
                }
            }
            
            /**
             * PRIX
             */
            var pointPossede = this.pointManager.points;
            var prix = item.prix(level);
            if (prix) {
                dom.find("#croyance-prix > span").html(Utils.format(prix.croyance, true, this.Textes));
                if (prix.croyance) {
                	dom.find("#croyance-prix").show();
                	console.log("prix : ", prix.croyance, pointPossede.croyance);
                	if (pointPossede.croyance >= prix.croyance) dom.find("#croyance-prix").addClass("ok");
                	else dom.find("#croyance-prix").removeClass("ok");
                }
                else dom.find("#croyance-prix").hide();
    
                dom.find("#illumination-prix > span").html(Utils.format(prix.illumination, true, this.Textes));
                if (prix.illumination) {
                	dom.find("#illumination-prix").show();
                	if (pointPossede.illumination >= prix.illumination) dom.find("#illumination-prix").addClass("ok");
                	else dom.find("#illumination-prix").removeClass("ok");
                }
                else dom.find("#illumination-prix").hide();
            }
            
            /**
             * GAIN
             */
            //Croyance
            var gain = item.gain(level);
            
            dom.find("#croyance-loop span").html(Utils.format(gain.loop.croyance, true, this.Textes));
            if (gain.loop.croyance) dom.find("#croyance").show();
            else dom.find("#croyance").hide();
            
            //Illumination
            dom.find("#illumination-loop span").html(Utils.format(gain.loop.illumination, true, this.Textes));
            if (gain.loop.illumination) dom.find("#illumination").show();
            else dom.find("#illumination").hide();

            //Bien
            dom.find("#bien-loop span").html(Utils.format(gain.loop.bien, true, this.Textes));
            if (gain.loop.bien) dom.find("#bien").show();
            else dom.find("#bien").hide();

            //Mal
            dom.find("#mal-loop span").html(Utils.format(gain.loop.mal, true, this.Textes));
            if (gain.loop.mal) dom.find("#mal").show();
            else dom.find("#mal").hide();
        };
        
        this.getMaxIncr = function(item) {
        	var incr = 0;
        	while(this.parent.checkAchetable(item, item.level+incr+1)) {
        		incr++;
        	}
        	return incr;
        };
        
		this.makeEvents = function() {
		    var that = this;
		    
		    this.el.find(".nextLevel").click(function() {
		    	var incr = parseInt($(this).attr("incr"));
		    	
                var itemId = that.currentItem;
                var item = that.Items.get(itemId);
                var level = item.level+incr;
                
                if (that.parent.checkAchetable(item, level)) {
                    if (that.pointManager.depenser(item.prix(level))) {
                        if (item.level == 0) that.close();
                        item.level+=incr;
                        $("item#"+itemId).attr("level", item.level);
                        
                        if (item.select) item.select(that.parent.parent.parent, that.parent, incr);
                        that.refresh();
                    }
                }
            });
		    
		    this.el.find(".nextLevel").hover(function() {
		        that.refreshMax = $(this).attr("id") == "max";
		    	that.currentIncr = parseInt($(this).attr("incr"));
		        that.refresh();
            });
		    
		    this.el.find(".close-button, mask").click(function() {
                that.close();
            });
		};
		
		this.close = function() {
			this.currentItem = null;
            this.el.hide();
		};
		
		this.loop = function(game) {
            this.refresh();
		};
		
		this.init(parent);
	};
});