import { combineReducers } from "redux";

import appReducer from "./app.reducer";
import soundsReducer from "./sounds.reducer";

export default combineReducers({
	app: appReducer,
	sounds: soundsReducer
});
