import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Howl, Howler } from "howler";

import rootReducer from "../reducers";
import App from "../components/App/App";

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);

const sounds = {};
const file = "public/Toonlink - Majorly Beloved.mp3";
const DEFAULT_VOLUME = 0.5;

let selectedSound;
let currentId;

document.body.onload = function() {
	document.querySelector("#volume-slider").value = `${DEFAULT_VOLUME}`;
	changeVolume(DEFAULT_VOLUME);

	// load file
	document.querySelector("#menu-file").onclick = function(e) {
		console.log(e);

		selectedSound = load(file);
		// currentId = selectedSound.play();
		// console.log(selectedSound.playing());
	};

	// Play/pause
	document.querySelector("#button-play-pause").onclick = function(e) {
		console.log(e);

		if (isPlaying()) {
			selectedSound.pause(currentId);
			e.target.children[0].className = "fas fa-play";
		} else if (selectedSound) {
			selectedSound.play(currentId);
			e.target.children[0].className = "fas fa-pause";
		} else {
			console.log("nothing loaded, do nothing");
		}
	};

	// Prev
	document.querySelector("#button-prev").onclick = function(e) {
		if (isPlaying()) {
			console.log("restart sound");
			selectedSound.seek(0, currentId);
		} else if (selectedSound) {
			console.log("go to prev sound");
		} else {
			console.log("nothing loaded, do nothing");
		}
	};

	document.querySelector("#volume-slider").oninput = function(e) {
		console.log(this.value);
		changeVolume(this.value / 100);
	};
};

function isPlaying() {
	return selectedSound && selectedSound.playing();
}

function load(path) {
	const sound = new Howl({ src: path, volume: getVolume(), html5: true });
	sounds[path] = sound;

	return sound;
}

function changeVolume(percentage) {
	Howler.volume(percentage);
}

function getVolume() {
	return parseInt(document.querySelector("#volume-slider").value);
}
