import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { chatReduser } from "./chatReduser/chatReduser";
import { messageReduser } from "./messagesReduser/messageReduser";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: 'root',
  storage
}

const reducer = combineReducers({
  chats: chatReduser,
  messages: messageReduser
});

const persisterReducer = persistReducer(persistConfig, reducer);

// const logger = createLogger({
//   diff: true,
//   collapsed: true
// });

// const timer = store => next => action => {
//   const delay = action?.meta?.delay;
//   if (!delay) {
//     return next(action)
//   }
//   const timeout = setTimeout(() => next(action), delay);
//   return () => {
//     clearTimeout(timeout);
//   }
// }

// export const store = createStore(reducer);
export const store = createStore(persisterReducer);
export const persist = persistStore(store);