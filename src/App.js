import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header.component";
import Homepage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shopPage/ShopPage.component";

function App() {
  return (
    <div className="font-open-condense py-5 px-16">
      <Header />
      <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route path={"/shop"} component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
