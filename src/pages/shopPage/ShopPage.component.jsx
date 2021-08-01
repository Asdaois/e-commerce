import React, { useState } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";
import SHOP_DATA from "./shopPage.data";

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...collection }) => {
        return <CollectionPreview key={id} {...collection} />;
      })}
    </div>
  );
}

export default ShopPage;
