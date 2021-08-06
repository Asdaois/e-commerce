import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Authentication from "./pages/authentication/Authentication.component";
import Homepage from "./pages/home/Homepage.component";
import ShopPage from "./pages/shop/ShopPage.component";
import "./tailwind.css";

function App() {
  const [currentUser, setCurrentUSer] = useState(null);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUSer({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUSer(userAuth);
    });

    return () => {
      unsuscribe();
    };
  }, []);

  useEffect(() => {
    console.log(currentUser ? true : false);
  }, [currentUser]);

  return (
    <div className="px-16 py-5 font-open-condense">
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
