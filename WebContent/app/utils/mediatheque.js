'use strict';
define(["jquery"], function($){
	return function(){
		this.sounds = [];
		
		this.loadAll = function() {
			var list = [];
			for (var index in list) {
				var key = list[index];
				this.load(key);
			}
		};
		
		/**
		* Permet de charger les sons
		**/
		this.load = function(key) {
			console.log("load :", key);
			var sound;
			if (window.Audio)
				sound = new Audio("app/"+key);
			else
				sound = new HTMLAudioElement("app/"+key);
			sound.volume=1;
			if (key.indexOf("music") > -1) {
				sound.addEventListener('ended', function() {
					this.currentTime = 0;
				    this.play();
				}, false);
			}
			
			sound.load();
			this.sounds[key] = sound;
		};
		
		/**
		 * Joue le son et le creer s'il n'existe pas
		 */
		this.play = function(key) {
			if (!key) return;
			if (!this.sounds[key]) {
				console.log("Never pass!");
				this.load(key);
			}
			try {
				if (key.indexOf("music") > -1) this.currentMusic = key;
				if (this.isMute) return;
				
				// Si c'est une music est qu'elle est deja en cours, on ne la relance pas
				if (key.indexOf("music") > -1 && 
						this.sounds[key].duration > 0 && 
						!this.sounds[key].paused) 
					return;
				console.log("play : ", key);
				this.sounds[key].play();
			}catch (e) {
				this.load(key);
			}
		};

		/**
		 * Joue le son et le creer s'il n'existe pas
		 */
		this.playSound = function(key) {
			if (!key) return;
			this.play("sounds/"+key);
		};
		
		this.stopSound = function(key) {
			if (!key) return;
			this.stop("sounds/"+key);
		};
		
		this.stop = function(key) {
			if (!key) return;
			try {
				this.sounds[key].pause();
				this.sounds[key].currentTime = 0;
			}catch (e) {
				//this.load(key);
			}
		};
		
		this.stopAllMusic = function() {
			for (var index in this.sounds) {
				if (index.indexOf("music") > -1) {
					this.stop(index);
				}
			}
		};
		
		this.mute = function(activation) {
			if (activation) {
				this.isMute = true;
				this.stopAllMusic();
			} else {
				this.isMute = false;
				if (this.currentMusic) this.play(this.currentMusic);
			}
		};
		
		this.loadAll();
	};
});