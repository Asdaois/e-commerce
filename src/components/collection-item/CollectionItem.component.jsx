import React from "react";

export default function CollectionItem({
  id,
  name = "",
  price = "",
  imageUrl = "",
}) {
  return (
    <div className="collection-item w-1/5 flex flex-col items-center h-22">
      <div
        className="image w-full h-95/100 bg-cover bg-center mb-1"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div
        className="collection-footer w-full h-5/100 justify-between flex 
        text-lg font-extralight"
      >
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}
