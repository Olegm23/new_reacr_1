
const initialState = {
  chats: [
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Andrey'
    },
    {
      id: 3,
      name: 'Oleg'
    }
  ]
};

export const chatReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'delete':
      return {
        ...state,
        chats: state.chats.filter((chat) => chat.id !== action.payload),
      }
    case 'add':
      return {
        ...state,
        chats: [...state.chats, action.payload]
      }
    default:
      return state;
  }
}