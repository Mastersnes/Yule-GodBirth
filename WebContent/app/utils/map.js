'use strict';
define(["jquery"], function($){
	return function(collection){
		this.init = function(collection) {
			if (!collection) collection = [];
			this.data = collection;
		};
		
		this.put = function(key, value) {
			this.data[key] = value;
		};
		this.push = function(key) {
			this.data[key] = key;
		};
		
		this.length = function() {
			var taille = 0;
			for (var index in this.data) {
				var item = this.data[index];
				if (item) taille++;
			}
			return taille;
		};
		
		this.remove = function(key) {
			var retour = this.data.splice(key, 1);
			if (retour && retour.length > 1) return true;
			
			delete this.data[key];
		};
		
		this.get = function(key) {
			return this.data[key];
		};
		
		this.getKey = function(value) {
			for (var index in this.data) {
				var item = this.data[index];
				if (item == value) return index;
			}
			return null;
		};
		
		this.contains = function(value) {
			return this.getKey(value) != null;
		};
		
		/**
		 * Renvoi la premiere clef vide ou null
		 * Si toutes les clefs sont renseignées, renvoi la derniere clef
		 */
		this.getFirstEmptyKey = function() {
			var firstKey;
			for (var index in this.data) {
				if (!index) break;
				if (!firstKey) firstKey = index;
				
				var item = this.data[index];
				if (item == null || item == "") return index;
			}
			return firstKey;
		};
		
		this.init(collection);
	};
});