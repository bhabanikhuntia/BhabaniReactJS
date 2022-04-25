import React from "react";
import './SignIn.css';

export default function SignIn() {
  return (
    <div className="form">
      <div className="form-body"> 
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="btn">
          Signin
        </button>
      </div>
    </div>
  );
}
