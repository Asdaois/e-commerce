import React from "react";
import CollectionItem from "../collection-item/CollectionItem.component";
import PropTypes from "prop-types";

export default function CollectionPreview({ title = "", items = [] }) {
  return (
    <div className="flex flex-col collection-preview mb-7">
      <h1 className="mb-6 text-3xl title">{title.toUpperCase()}</h1>
      <div className="flex justify-between preview">
        {items
          .filter((v, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
}

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
