import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/postsReduser/postsReducer";

function App() {
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, []);

  const restart = () => {
    dispatch(getPosts())
  };

  if (loading) {
    return (
      <div>
        Идет загрузка....
      </div>
    )
  }

  if (error) {
    return (
      <div>
        Произошла ошибка. <button onClick={restart} >Обновить</button>
      </div>
    )
  }

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            {post.title}
          </div>
        )
      })}
    </div >
  );
};

export default App;