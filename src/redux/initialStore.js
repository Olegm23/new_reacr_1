import { combineReducers, createStore } from "redux";
import { chatReduser } from "./chatReduser/chatReduser";
import { messageReduser } from "./messagesReduser/messageReduser";

export const reducer = combineReducers({
  chats: chatReduser,
  messages: messageReduser
});

export const store = createStore(reducer);
