import React from "react";

export default function FormInput({ label, handleChange, ...props }) {
  return (
    <div className="group relative my-11 mx-0 w-full">
      <label
        className={`${
          props.length ? "text-mainColor -top-3 text-xs" : ""
        } form-input-label focus-within:text-mainColor text-2xl
        focus-within:text-xs capitalize text-subColor-600`}
      >
        <span className="top-4 relative ">{label ? `${label}` : ""}</span>
        <input
          onChange={handleChange}
          {...props}
          className="form-input bg-white text-subColor-700 text-lg py-2 pr-2 
          pl-1 block rounded-none my-6 mx-0 w-full
          focus:outline-none border-solid border-b-2 border-subColor-700 "
        />
      </label>
    </div>
  );
}
