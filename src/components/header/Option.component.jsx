import React from "react";
import { Link } from "react-router-dom";

export default function Option({ name, ...props }) {
  return (
    <Link className="px-4 py-3 font-bold cursor-pointer Option" {...props}>
      {name}
    </Link>
  );
}
