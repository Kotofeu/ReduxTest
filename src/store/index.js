import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./postsReducer";

const rootReducer = combineReducers({
    posts: reducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
