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
		
		this.remove = function(key) {
			var index = this.data.indexOf(key);
			this.data.splice(index, 1);
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