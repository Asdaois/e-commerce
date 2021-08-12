import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CheckoutItem } from "../../components/checkout-item/CheckoutItem.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import HeaderBlock from "./HeaderBlock.component";

const Checkout = ({ cartItems = [], total }) => {
  return (
    <div className="checkout-page w-[55%] min-h-[90vh] flex flex-col items-center mt-[50px] mx-auto mb-0">
      <div className="checkout-header w-full h-10 flex justify-between border-b border-solid border-b-gray-700">
        <HeaderBlock name="Product" />
        <HeaderBlock name="Description" />
        <HeaderBlock name="Quantity" />
        <HeaderBlock name="Price" />
        <HeaderBlock name="Remove" />
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total mt-[30px] ml-auto text-3xl">
        <span className="">TOTAL ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
