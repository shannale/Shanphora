import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import { SplashPage } from "./components/SplashPage";
import { Products } from "./components/Products";

function App() {
  return (
    <>
      <header>
        <Route path="/" component={Navigation}/>
      </header>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/products/" component={Products} />
      </Switch>
    </>
  );
}

export default App;

