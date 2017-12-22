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
            
            this.pointManager = parent.pointManager;
		};

		this.show = function(itemId, reinitIncr) {
            this.currentItem = itemId;
		    var item = this.Items.get(itemId);
            
            this.fill("#current", item, 0);
            
            if (reinitIncr) this.currentIncr = 1;
            this.refresh(item);
            
            this.el.show();
        };
        
        this.refresh = function(item) {
            this.fill("#next", item, this.currentIncr);
            
            if (!this.parent.checkAchetable(item, item.level+1)) this.el.find(".nextLevel[incr='1']").attr("disabled", "disabled");
            else this.el.find(".nextLevel[incr='1']").removeAttr("disabled");
            
            if (!this.parent.checkAchetable(item, item.level+10)) this.el.find(".nextLevel[incr='10']").attr("disabled", "disabled");
            else this.el.find(".nextLevel[incr='10']").removeAttr("disabled");
            
            if (!this.parent.checkAchetable(item, item.level+100)) this.el.find(".nextLevel[incr='100']").attr("disabled", "disabled");
            else this.el.find(".nextLevel[incr='100']").removeAttr("disabled");
        }
        
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
            var prix = item.prix(level);
            if (prix) {
                dom.find("#croyance-prix span").html(Utils.format(prix.croyance, true, this.Textes));
                if (prix.croyance) dom.find("#croyance-prix").show();
                else dom.find("#croyance-prix").hide();
    
                dom.find("#illumination-prix span").html(Utils.format(prix.illumination, true, this.Textes));
                if (prix.illumination) dom.find("#illumination-prix").show();
                else dom.find("#illumination-prix").hide();
            }
            
            /**
             * GAIN
             */
            //Croyance
            var gain = item.gain(level);
            if (gain.click.croyance || gain.loop.croyance) dom.find("#croyance").show();
            else dom.find("#croyance").hide();
            
            dom.find("#croyance-click span").html(Utils.format(gain.click.croyance, true, this.Textes));
            if (gain.click.croyance) dom.find("#croyance-click").css("visibility", "visible");
            else dom.find("#croyance-click").css("visibility", "hidden");
            
            dom.find("#croyance-loop span").html(Utils.format(gain.loop.croyance, true, this.Textes));
            if (gain.loop.croyance) dom.find("#croyance-loop").css("visibility", "visible");
            else dom.find("#croyance-loop").css("visibility", "hidden");
            
            //Illumination
            if (gain.click.illumination || gain.loop.illumination) dom.find("#illumination").show();
            else dom.find("#illumination").hide();
            
            dom.find("#illumination-click span").html(Utils.format(gain.click.illumination, true, this.Textes));
            if (gain.click.illumination) dom.find("#illumination-click").css("visibility", "visible");
            else dom.find("#illumination-click").css("visibility", "hidden");
            
            dom.find("#illumination-loop span").html(Utils.format(gain.loop.illumination, true, this.Textes));
            if (gain.loop.illumination) dom.find("#illumination-loop").css("visibility", "visible");
            else dom.find("#illumination-loop").css("visibility", "hidden");

            //Bien
            if (gain.click.bien || gain.loop.bien) dom.find("#bien").show();
            else dom.find("#bien").hide();
            
            dom.find("#bien-click span").html(Utils.format(gain.click.bien, true, this.Textes));
            if (gain.click.bien) dom.find("#bien-click").css("visibility", "visible");
            else dom.find("#bien-click").css("visibility", "hidden");
            
            dom.find("#bien-loop span").html(Utils.format(gain.loop.bien, true, this.Textes));
            if (gain.loop.bien) dom.find("#bien-loop").css("visibility", "visible");
            else dom.find("#bien-loop").css("visibility", "hidden");

            //Mal
            if (gain.click.mal || gain.loop.mal) dom.find("#mal").show();
            else dom.find("#mal").hide();
            
            dom.find("#mal-click span").html(Utils.format(gain.click.mal, true, this.Textes));
            if (gain.click.mal) dom.find("#mal-click").css("visibility", "visible");
            else dom.find("#mal-click").css("visibility", "hidden");
            
            dom.find("#mal-loop span").html(Utils.format(gain.loop.mal, true, this.Textes));
            if (gain.loop.mal) dom.find("#mal-loop").css("visibility", "visible");
            else dom.find("#mal-loop").css("visibility", "hidden");
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
                        if (item.select) item.select(that.parent.parent, that.parent);
                        item.level+=incr;
                        
                        $("item#"+itemId).attr("level", item.level);
                        that.show(itemId, false);
                    }
                }
            });
		    
		    this.el.find(".nextLevel").hover(function() {
		        var itemId = that.currentItem;
                var item = that.Items.get(itemId);
		        that.currentIncr = parseInt($(this).attr("incr"));
		        
		        that.refresh(item);
            });
		    
		    this.el.find(".close, mask").click(function() {
                that.currentItem = null;
                that.el.hide();
            });
		};
		
		this.loop = function(game) {
		    var itemId = this.currentItem;
            var item = this.Items.get(itemId);
            
            if (item) this.refresh(item);
		};
		
		this.init(parent);
	};
});