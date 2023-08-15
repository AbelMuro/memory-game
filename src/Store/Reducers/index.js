import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import playersReducer from "./playersReducer";
import gridReducer from "./gridReducer";
import tilesReducer from "./tilesReducer";
import resetAllTilesReducer from "./resetAllTilesReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    players: playersReducer,
    grid: gridReducer,
    tiles: tilesReducer,
    reset: resetAllTilesReducer,
})

export default rootReducer;