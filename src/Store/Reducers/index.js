import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import playersReducer from "./playersReducer";
import gridReducer from "./gridReducer";
import tilesReducer from "./tilesReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    players: playersReducer,
    grid: gridReducer,
    tiles: tilesReducer,
})

export default rootReducer;