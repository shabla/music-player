import { combineReducers } from "redux";

import soundsReducer from "./sounds.reducer";

export default combineReducers({
	sounds: soundsReducer
});
