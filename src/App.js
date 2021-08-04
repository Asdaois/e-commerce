import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header.component";
import { auth } from "./firebase/firebase.utils";
import Authentication from "./pages/authentication/Authentication.component";
import Homepage from "./pages/home/Homepage.component";
import ShopPage from "./pages/shop/ShopPage.component";
import "./tailwind.css";

function App() {
  const [currentUser, setCurrentUSer] = useState(null);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUSer(user);
    });

    return () => {
      unsuscribe();
    };
  }, []);
  useEffect(() => {
    console.log(currentUser ? true : false);
  }, [currentUser]);

  return (
    <div className="font-open-condense py-5 px-16">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route path={"/shop"} component={ShopPage} />
        <Route path={"/signin"} component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
