import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import { SplashPage } from "./components/SplashPage";
import { Products } from "./components/Products";
import { BottomBar } from "./components/BottomBar";
import ProductShow  from "./components/ProductShow/index.js"
import CategoryHome from "./components/CategoryHome";
import ShoppingCart from "./components/ItemCount";

function App() {
  return (
    <>
      <header>
        <Route path="/" component={Navigation}/>
      </header>
      <Switch>
        <Route exact path="/products/" component={Products} />
        <Route exact path="/products/:productId" component={ProductShow} />
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/" component={CategoryHome} />
        {/* <Route exact path="/products/" component={ShoppingCart} /> */}
      </Switch>
      <Route path="/" component={BottomBar} />
    </>
  );
}

export default App;

