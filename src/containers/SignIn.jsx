import React from 'react';
import signInImg from '../assets/Frame.png'
import {Link} from 'react-router-dom'

import '../App.css'

function SignIn() {
  return <div className="App">
            <div className="sign-in-image">
                <img src={signInImg} alt="Sign in image" />
            </div>
            <div className="sign-in-form">
                <form>
                <h1 className="sign-in__title">Sign in</h1>
                <p className="sign-in__text">Do you not have an account? <Link to='/login'>Sign up</Link></p>
                <div className="sign-in__group">
                    <input type="email" name="email" placeholder="Email"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <buton type="submit" className="sign-in__button">Next step</buton>
                </div>
                </form>
            </div>
         </div> 
}

export default SignIn;