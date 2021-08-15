import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import CollectionPage from "../collection/Collection.component";

function ShopPage() {
  const math = useRouteMatch();
  return (
    <div className="shop-page">
      <Route exact path={`${math.path}`} component={CollectionsOverview} />
      <Route path={`${math.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage;
