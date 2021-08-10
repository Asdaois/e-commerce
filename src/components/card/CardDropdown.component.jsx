import React from "react";
import { connect } from "react-redux";
import CartItem from "../ cart-item/CartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custon-buttom/CustomButton.component";

function CardDropdown({ cartItems = [] }) {
  return (
    <div className="cart-dropdown absolute w-60 h-[340px] flex flex-col p-5 border border-solid border-black top-[60px] right-[1px] z-[5] bg-white">
      <div className="cart-items h-60 flex flex-col overflow-auto">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton addClass="mt-auto">GO TO CHECKOUT</CustomButton>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CardDropdown);
