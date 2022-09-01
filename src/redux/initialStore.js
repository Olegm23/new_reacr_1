import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { chatReduser } from "./chatReduser/chatReduser";
import { messageReduser } from "./messagesReduser/messageReduser";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

export const store = createStore(applyMiddleware(thunk));