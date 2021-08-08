import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Authentication from "./pages/authentication/Authentication.component";
import Homepage from "./pages/home/Homepage.component";
import ShopPage from "./pages/shop/ShopPage.component";
import { setCurrentUser } from "./redux/user/user.actions";
import "./tailwind.css";

function App({ setCurrentUser }) {
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });

    return () => {
      unSubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-16 py-5 font-open-condense">
      <Header />
      <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route path={"/shop"} component={ShopPage} />
        <Route path={"/signin"} component={Authentication} />
      </Switch>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
