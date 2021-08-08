import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CardIcon from "../card-icon/CardIcon.component";
import CardDropdown from "../card/CardDropdown.component";
import Option from "./Option.component";

function Header({ currentUser, hidden }) {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="flex justify-between w-full h-20 mb-6 header relative">
      <Link to="/" className="w-16 h-full p-6 logo-container">
        <Logo className="relative block m-auto logo" />
      </Link>
      <div className="flex items-center justify-end w-1/2 h-full font-thin tracking-wider options">
        <Option to="/shop" name="SHOP" />
        <Option to="/shop" name="CONTACT" />
        {DecideSignAction(currentUser, signOut)}
        <CardIcon />
      </div>
      {!hidden && <CardDropdown />}
    </div>
  );
}
function DecideSignAction(currentUser = {}, signOut) {
  if (!!currentUser) {
    return <Option onClick={signOut} name="SIGN OUT" />;
  }
  return <Option to="/signin" name="SIGN IN" />;
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
