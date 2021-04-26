import React from 'react';
import { Route, Link } from 'react-router-dom';

function Event() {
  return (
    <div className="Event">
      <div className="Event-header">
        <h1>
          Create-Event
        </h1>
      </div>
      <div className="Event-body">
        <div className="Event">
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
          <label htmlFor="password">Set a Password: </label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </div>
      </div>
      <div className="Event-footer">
      </div>
    </div>
  );
}

export default Event;
