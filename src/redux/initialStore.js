import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { postsReducer } from "./postsReduser/postsReducer";

export const store = createStore(postsReducer, applyMiddleware(thunk));