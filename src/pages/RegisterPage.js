import { SingUp } from 'components/SingUp';
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SingUp />
      <p>
        ALready have an account <Link to='/login'>Sing in</Link>
      </p>
    </div>
  )
}

export default RegisterPage