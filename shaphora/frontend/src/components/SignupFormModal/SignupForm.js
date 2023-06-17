import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm(){
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        setErrors([]);
        return dispatch(sessionActions.signup({ email, firstname, lastname, password }))
          .catch(async (res) => {
          let data;
          try {
            data = await res.clone().json();
          } catch {
            data = await res.text(); 
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        });
      }
      return setErrors(['Confirm Password field must be the same as the Password field']);
    };
  
    return (
      <form onSubmit={handleSubmit} className="signup-form">
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <br />
        <div className="name-input">
        <label className="first-name ">
          <input className="name-input"
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
           
        </label>
        <br />
        <label>
          <input className="name-input"
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>
        </div>
        <br />
        <label>
          <input className="text-input"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        
        <br />
        <label>
          <input className="text-input"
            type="password"
            placeholder="Password (minimum: 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input className="text-input"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit" className="signup-button">Join Now</button>
      </form>
    );
}
  


export default SignupForm;

