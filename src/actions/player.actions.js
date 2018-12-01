import { Howler } from "howler";

export const setVolume = volume => dispatch => {
	Howler.volume(volume / 100);

	dispatch({
		type: "SET_VOLUME",
		payload: { volume }
	});
};

export const play = sound => dispatch => {
	sound.play();
};

export const pause = sound => async dispatch => {
	sound.pause();
	// action is dispatched in the event listener registered when the file was loaded
};

export const setSeek = (sound, seconds) => async dispatch => {
	if (sound) {
		sound.seek(seconds);
		dispatch({
			type: "SEEK",
			payload: { seek: seconds }
		});
	}
};

// export const toggleMute = () => (dispatch, getState) => {
// 	const state = getState();

// 	Howler.mute(!state.sounds.isMuted);
// };
