import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  const handleDemoSignIn = async () => {
      // setTimeout(()=> {setEmail("d")}, 200);
      // setTimeout(()=> {setEmail("de")}, 400);
      // setTimeout(()=> {setEmail("dem")}, 600);
      // setTimeout(()=> {setEmail("demo")}, 800);
      // setTimeout(()=> {setEmail("demo@")}, 1000);
      // setTimeout(()=> {setEmail("demo@u")}, 1200);
      // setTimeout(()=> {setEmail("demo@us")}, 1400);
      // setTimeout(()=> {setEmail("demo@use")}, 1600);
      // setTimeout(()=> {setEmail("demo@user")}, 1800);
      // setTimeout(()=> {setEmail("demo@user.")}, 2000);
      // setTimeout(()=> {setEmail("demo@user.i")}, 2200);
      // setTimeout(()=> {setEmail("demo@user.io")}, 2400);
      // setTimeout( () => {
      // dispatch(sessionActions.login({ email: "demo@user.io" , password: "password" }))}, 2500)
    dispatch(sessionActions.login({ email: "demo@user.io" , password: "password" }))
  };



  return (
    <>
    <div className="signup-modal-container"> 
        <h1 className="modal-title bold-words">Sign In</h1>
        <br /> 
        <h4 className="modal-message" > Sign in or create an account to enjoy <strong className="bold-words"> FREE standard shipping </strong> on all orders. </h4>
        <br />
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>

        <label className="box-name">
          <input className="name-input"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="box-name">
          <input className="name-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
  
  
        <button className="signup-button" type="submit">Sign In</button>

  

      </form>

        <button className="demo-login-button" onClick={handleDemoSignIn}>
                <span>Sign In With Demo </span>
        </button>


        <h5 className="end-message"> By clicking "Sign In" you agree to the current version of our TERMS OF USE, and have read Shaphora's privacy policy, have fun browsing through Shaphora :3 </h5>

      </div>
    </>
  );
}

export default LoginForm;
