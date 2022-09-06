import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Form } from './Form';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slice/userSlice';

const SingUp = () => {
  const dispatch = useDispatch();

  const push = useNavigate();
  const handleSingUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
    <Form title="Sign In" handleClick={handleSingUp} />
  )
}

export { SingUp }