import React from "react";
import "./custom-button.css";

export default function CustomButton({ children, isGoogleSignIn, ...props }) {
  return (
    <button
      className={`custom-button min-w-166px w-auto h-12 tracking-wide leading-10 py-0 px-9 text-base bg-black text-white uppercase font-bold border border-transparent border-solid cursor-pointer hover:bg-white  hover:border-subColor-900 block ${
        isGoogleSignIn
          ? "bg-[#4285F4] text-white hover:bg-[#357ae8] border-none hover:text-white"
          : "hover:text-black"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
