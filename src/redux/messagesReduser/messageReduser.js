
const initialState = {
  messages: [
    {
      id: 1,
      title: 'Who&',
      chatId: 2
    },
    {
      id: 2,
      title: 'Where&',
      chatId: 3
    },
    {
      id: 3,
      title: 'Here&',
      chatId: 1
    },
  ]
};

export const messageReduser = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}