import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import Option from "./Option.component";

export default function Header({ currentUser }) {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="header w-full h-20 flex justify-between mb-6">
      <Link to="/" className="logo-container h-full w-16 p-6">
        <Logo className="logo block relative m-auto" />
      </Link>
      <div className="options w-1/2 h-full flex items-center justify-end font-thin tracking-wider">
        <Option to="/shop" name="SHOP" />
        <Option to="/shop" name="CONTACT" />
        {DecideSignAction(currentUser, signOut)}
      </div>
    </div>
  );
}

function DecideSignAction(currentUser = {}, signOut) {
  if (!!currentUser) {
    return <Option onClick={signOut} name="SIGN OUT" />;
  }
  return <Option to="/signin" name="SIGN IN" />;
}
