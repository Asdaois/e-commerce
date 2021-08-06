import React from "react";
import "./collection-item.css";
export default function CollectionItem({
  id,
  name = "",
  price = "",
  imageUrl = "",
}) {
  return (
    <div className="flex flex-col items-center w-1/5 collection-item h-22">
      <div
        className="w-full mb-1 bg-center bg-cover image h-95/100"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-footer ">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}
