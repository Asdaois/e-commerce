import React from "react";
import CustomButton from "../custon-buttom/CustomButton.component";

function CardDropdown() {
  return (
    <div className="cart-dropdown absolute w-60 h-[340px] flex flex-col p-5 border border-solid border-black top-[60px] right-[1px] z-[5] bg-white">
      <div className="cart-items h-60 flex flex-col overflow-auto"></div>
      <CustomButton addClass="mt-auto">GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CardDropdown;
