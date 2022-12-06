import React from 'react';
import "./SignUpScreen.css";

const SignInScreen = () => {
  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder='Email Address'/>
        <input  placeholder='password'/>
        <button type='submit'>Sign In</button>
      </form>

    </div>
  )
}

export default SignInScreen;