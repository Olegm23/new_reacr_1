import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChats } from "../redux/chatReduser/selectors";

function App() {
  const chats = useSelector(getChats);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleDelete = (id) => {
    dispatch({
      type: 'delete', payload: id, meta: {
        delay: 1000
      }
    })
  };

  const handleChange = (event) => {
    setName(event.target.value)
  };

  const handleAdd = () => {
    const obj = {
      id: Math.random(),
      name: name,
    }
    dispatch({ type: 'add', payload: obj })
  }

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <button onClick={handleAdd} >+</button>
      {
        chats.map((chat) => {
          return (
            <div key={chat.id}>
              {chat.name}
              <button onClick={() => handleDelete(chat.id)} >X</button>
            </div>
          )
        })
      }
    </div>
  );
};

export default App;