import React from "react";
import { Link } from "react-router-dom";

export default function Option({ name, ...props }) {
  return (
    <Link className="Option py-3 px-4 font-bold cursor-pointer" {...props}>
      {name}
    </Link>
  );
}
