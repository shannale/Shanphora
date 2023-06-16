import React from "react";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
// import Navigation from "./components/Navigation";


function App() {
  return (
    <>
      {/* <Navigation /> */}
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;
