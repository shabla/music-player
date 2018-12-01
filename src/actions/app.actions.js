import { Howl, Howler } from "howler";

export const setAppTitle = title => ({
	type: "SET_APP_TITLE",
	payload: { title }
});

export const minimize = () => ({
	type: "MINIMIZE_APP"
});

export const maximize = () => ({
	type: "MAXIMIZE_APP"
});

export const close = () => ({
	type: "CLOSE_APP"
});

export const loadFile = (path, b64) => (dispatch, getState) => {
	const state = getState();

	if (state.sounds.all[path]) {
		return;
	}

	let interval;

	// dispatch is loading?

	return new Promise((resolve, reject) => {
		const sound = new Howl({
			src: b64 ? b64 : path,
			html5: true,
			onload: async () => {
				await dispatch({
					type: "SOUND_LOADED",
					payload: {
						path,
						sound,
						duration: sound.duration()
					}
				});

				resolve();
			},
			onloaderror: (id, err) => {
				console.error("load error", id, err);
			},
			onplayerror: (id, err) => {
				console.error("play error", id, err);
			},
			onplay: id => {
				dispatch({
					type: "PLAY",
					payload: { id }
				});

				interval = setInterval(() => {
					const seek = sound.seek();
					dispatch({
						type: "SEEK",
						payload: { seek }
					});
				}, 300);
			},
			onpause: id => {
				clearInterval(interval);

				dispatch({
					type: "PAUSE",
					payload: { id }
				});
			},
			onend: id => {
				clearInterval(interval);

				dispatch({
					type: "END",
					payload: { id }
				});
			},
			onstop: id => {
				clearInterval(interval);

				dispatch({
					type: "STOP",
					payload: { id }
				});
			},
			onvolume: id => {
				console.log("volume changed");
			},
			onmute: (id, a) => {
				console.log(id, a);
				dispatch({
					type: "MUTE",
					payload: { muted: true }
				});
			},
			onseek: id => {}
		});
	});
};
