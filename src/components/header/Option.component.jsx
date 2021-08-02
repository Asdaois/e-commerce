import React from "react";
import { Link } from "react-router-dom";

export default function Option({ to, name }) {
  return (
    <Link to={to} className="Option py-3 px-4 font-bold">
      {name}
    </Link>
  );
}
