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
    <div className="flex justify-between w-full h-20 mb-6 header">
      <Link to="/" className="w-16 h-full p-6 logo-container">
        <Logo className="relative block m-auto logo" />
      </Link>
      <div className="flex items-center justify-end w-1/2 h-full font-thin tracking-wider options">
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
