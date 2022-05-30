import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
    repositories: repositoriesReducer
})

export default reducers

// new type that describes the type of data inside the redux store
export type RootState = ReturnType<typeof reducers>