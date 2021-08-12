import React from "react";
import { connect } from "react-redux";

export const CheckoutItem = ({
  cartItem: { name, imageUrl, price, quantity },
}) => {
  return (
    <div className="checkout-item w-full min-h-[100px] flex border-b border-subColor-700 border-solid py-[15px] px-0 text-[20px] items-center">
      <div className="image-container w-[23%] pr-[15px]">
        <img src={imageUrl} alt="item" className="w-full h-full" />
      </div>
      <span className="name w-[23%]">{name}</span>
      <span className="quantity w-[23%] pl-5">{quantity}</span>
      <span className="price w-[23%]">{price}</span>
      <div className="remove-button pl-[12px] cursor-pointer">&#10007;</div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
