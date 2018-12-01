const initialState = {
	all: {},
	selected: null,
	currentId: null,
	volume: 50,
	seek: 0,
	isMuted: false,
	isPlaying: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "SOUND_LOADED": {
			const path = action.payload.path;
			const sound = action.payload.sound;
			const duration = action.payload.duration;

			return {
				...state,
				all: {
					...state.all,
					[path]: sound
				},
				selected: path,
				duration
			};
		}

		case "PLAY": {
			return {
				...state,
				isPlaying: true,
				currentId: action.payload.id
			};
		}

		case "PAUSE": {
			return {
				...state,
				isPlaying: false,
				currentId: action.payload.id
			};
		}

		case "END": {
			return {
				...state,
				isPlaying: false,
				currentId: action.payload.id
			};
		}

		case "SEEK": {
			return {
				...state,
				seek: action.payload.seek
			};
		}

		case "SET_VOLUME": {
			return {
				...state,
				volume: action.payload.volume
			};
		}

		default:
			return state;
	}
};
