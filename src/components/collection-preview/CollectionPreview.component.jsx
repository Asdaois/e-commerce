import React from "react";
import CollectionItem from "../collection-item/CollectionItem.component";

export default function CollectionPreview({ title = "", items = [] }) {
  return (
    <div className="collection-preview flex flex-col mb-7">
      <h1 className="title text-3xl mb-6">{title.toUpperCase()}</h1>
      <div className="preview flex justify-between">
        {items
          .filter((v, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
}
