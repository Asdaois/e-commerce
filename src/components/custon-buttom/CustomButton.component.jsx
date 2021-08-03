import React from "react";

export default function CustomButton({ children, ...props }) {
  return (
    <button
      className="custom-button min-w-165px w-auto h-12 tracking-wide leading-10 
      py-0 px-9 text-base bg-black text-white uppercase font-bold 
      border border-transparent border-solid
      cursor-pointer hover:bg-white hover:text-black hover:border-subColor-900"
      {...props}
    >
      {children}
    </button>
  );
}
