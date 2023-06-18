import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import { Redirect } from 'react-router-dom';

function SignupForm(){
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const user = useSelector((state) => state.session.user);
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        setErrors([]);
        return dispatch(sessionActions.signup({ firstName, lastName, email, password }))
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
        <div className="signup-modal-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h1 className="modal-title bold-words center-words"> Create an Account </h1>
                    <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                <hr className="modal-line"></hr>

                {/* <img src="/pictures/beauty-insider-logo.png" alt="Beauty Insider" class="css-1g5g0po eanm77i0" data-comp="Image StyledComponent BaseComponent "></img> */}
                <h4 className="modal-message"> Join the Beauty Insider loyalty program. Earn points, get <strong className="bold-words"> FREE standard shipping</strong>, redeem rewards, and more.</h4>
                <br></br>
            <div className="first-line">
                <label className="box-name">
                <input className="name-input"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    required
                    />
                
                </label>
                <br />
                <label className ="box-name">
                <input className="name-input"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    required
                    />
                </label>
              </div>
                <br />
                <label className="box-name ">
                <input className="name-input"
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </label>
                
                <br />
                <label className="box-name ">
                <input className="name-input"
                    type="password"
                    placeholder="Password (6 to 12 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
                <br />
                <label className="box-name">
                <input className="name-input"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
                </label >
                <br />
                <button type="submit" className="signup-button">Join Now</button>
            </form>

       </div> 
    );

    if (user) {
		return <Redirect to='/' />;
	}


}
  


export default SignupForm;

