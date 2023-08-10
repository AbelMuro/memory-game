import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import playersReducer from "./playersReducer";
import gridReducer from "./gridReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    players: playersReducer,
    grid: gridReducer
})

export default rootReducer;