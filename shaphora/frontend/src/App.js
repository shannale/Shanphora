import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import { SplashPage } from "./components/SplashPage";

function App() {
  return (
    <>
      <Navigation />
        <SplashPage />
        <Switch>
        </Switch>
    </>
  );
}

export default App;

