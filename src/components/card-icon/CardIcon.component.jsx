import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

function CardIcon({ toggleCartHidden }) {
  return (
    <div className={`${card_icon}`} onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon w-6 h-6" />
      <span className="item-count absolute text-[10px] font-bold bottom-[2px] select-none">
        0
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CardIcon);

const card_icon =
  "w-[25px] h-[25px] relative flex items-center justify-center cursor-pointer";
