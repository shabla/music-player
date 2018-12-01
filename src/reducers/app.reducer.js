const initialState = {
	title: "Music Player"
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_APP_TITLE": {
			return {
				...state,
				title: action.payload.title
			};
		}

		default:
			return state;
	}
};
