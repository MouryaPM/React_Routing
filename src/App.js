import React from "react";
import Welcome from "./Components/Pages/Welcome";
import Product from "./Components/Pages/Product";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./Components/MainHeader/MainHeader";
import ProductDetails from "./Components/Pages/ProductDetails";
import NotFound from "./Components/Pages/NotFound";
function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          <Route path="/products" component={Product} exact />
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
