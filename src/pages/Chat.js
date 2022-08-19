import React from "react";
import { useState } from "react";

const Chats = () => {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Chat1"
    },
    {
      id: 2,
      name: "Chat2"
    },
  ]);

  const [name, setName] = useState("");

  const deleteChats = (id) => {
    const filtered = chats.filter((chat) => chat.id !== id);
    setChats(filtered);
  };

  const addChats = () => {
    const randomId = Math.random();
    const obj = {
      id: randomId,
      name: name
    };
    setChats(prevState => [...prevState, obj]);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addChats}>Add Chats</button>
      {chats.map((chat) => {
        return (
          <div style={{ display: "flex" }} key={chat.id}>
            <h4>{chat.name}</h4>
            <button onClick={() => deleteChats(chat.id)}>x</button>
          </div>
        )
      })}
    </div>
  );
};

export default Chats;