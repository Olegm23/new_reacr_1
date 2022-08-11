import './App.css';
import Message from './Message';
import React, { useEffect, useState, useRef } from "react";


function App() {
  const [messageList, setMessageList] = useState([]);
  const ref = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const author = target.author.value;
    const text = target.text.value;

    setMessageList(prev => [...prev, {
      id: giveLastId(prev),
      author: author,
      text: text,
    }]);

  }

  function giveLastId(array) {
    return array.length ? array[array.length - 1].id + 1 : 0;
  }

  useEffect(() => {
    setTimeout(() => {
      botAnswer(messageList);
    }, 1500);
  }, [messageList]);

  function botAnswer() {
    const lastAuthor = messageList[messageList.length - 1];
    if (lastAuthor && lastAuthor.author) {
      setMessageList(prev => [...prev, {
        id: giveLastId(prev),
        text: `Сообщение автора ${lastAuthor.author} отправлено`,
      }]);
    }
    ref.current.focus()
  }

  return (
    <div >
      <div className="container">
        <div component="form" noValidate
          autoComplete="off" mt={4} display="flex"
          flexDirection="column" onSubmit={handleSubmit}>
          <input id="name" label="Имя"
            variant="outlined" sx={{ mb: 2 }}
            name="author"
            inputRef={ref} />
          <input id="message" label="Сообщение"
            variant="outlined" sx={{ mb: 2 }}
            name="text"
            inputRef={ref} />
          <button variant="outlined" color='primary.light'
            size="small" type="submit" sx={{ mb: 4 }}>Отправить</button>
        </div>
        <div className="message-list">
          {messageList.map(message => <div className="message-list__item" key={message.id}>
            {message.author && <p className="message-list__p"><span>Автор:</span> {message.author}</p>}
            <p className="message-list__p">{message.author && <span>Текст:</span>} {message.text}</p>
          </div>)}
        </div>
      </div>

    </div>
  );
}

export default App;
