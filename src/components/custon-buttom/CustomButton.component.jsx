import React from "react";
import "./custom-button.css";

export default function CustomButton({ children, isGoogleSignIn, ...props }) {
  return (
    <button
      className={`block w-auto h-13 py-0 text-base font-bold leading-10 tracking-wide text-white uppercase bg-black border border-transparent border-solid cursor-pointer custom-button min-w-167px px-9 hover:bg-white hover:border-subColor-900 ${
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
