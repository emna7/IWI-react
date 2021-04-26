import React from 'react';
import { Route, Link } from 'react-router-dom';
import App from './App';
import Club from './Club';
import Event from './Event';

function Sign() {
  return (
    <div className="Sign">
      <div className="signUp">
        <h3>Sign Up For Free</h3>
        <label htmlFor="firstname">FirstName: </label>
        <input type="firstname" id="firstname" name="firstname" />
        <label htmlFor="lastname">LastName: </label>
        <input type="lastname" id="lastname" name="lastname" />
        <label htmlFor="gender">Gender: </label>
        <input type="gender" id="gender" name="gender" />
        <label htmlFor="phonenumber">Phone Number: </label>
        <input type="ponenumber" id="phonenumber" name="phonenumber" />
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="setpassword">Set a Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
      <div className="Log">
        <h3>Already have an account?</h3>
        <h4>Login</h4>
        <label htmlFor="username">User Name or Email or Phone Number: </label>
        <input type="usernameoremailorphone" id="usernameorphonenumber" name="usernameoremailorpho" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
    </div>
  );
}

export default Sign;
