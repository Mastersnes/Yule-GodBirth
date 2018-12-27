'use strict';
define(["jquery"], function($){
	return function(){
		this.sounds = [];
		this.soundsTicker = [];
		
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
		this.load = function(key, id) {
			if (!id) id = "";
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
			this.sounds[key + id] = sound;
		};
		
		/**
		 * Joue le son et le creer s'il n'existe pas
		 */
		this.play = function(key, id) {
			if (!key) return;
			if (!id) id = "";
			if (!this.sounds[key + id]) {
				console.log("Never pass!");
				this.load(key, id);
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
				this.sounds[key + id].play();
			}catch (e) {
				this.load(key, id);
			}
		};

		/**
		 * Joue le son et le creer s'il n'existe pas
		 */
		this.playSound = function(key) {
			if (!key) return;
			if (this.soundsTicker[key] == undefined) this.soundsTicker[key] = 0;
			this.play("sounds/"+key, this.soundsTicker[key]++);
			if (this.soundsTicker[key] > 3) this.soundsTicker[key] = 0;
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