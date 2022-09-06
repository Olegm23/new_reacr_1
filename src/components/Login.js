import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from './Form';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slice/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        push('/');
      })
      .catch(console.error)
  };

  return (
    <Form title="Sign In" handleClick={handleLogin} />
  )
}

export { Login }