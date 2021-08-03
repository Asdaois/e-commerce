import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header.component";
import Authentication from "./pages/authentication/Authentication.component";
import Homepage from "./pages/home/Homepage.component";
import ShopPage from "./pages/shop/ShopPage.component";

function App() {
  return (
    <div className="font-open-condense py-5 px-16">
      <Header />
      <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route path={"/shop"} component={ShopPage} />
        <Route path={"/signin"} component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
