import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";
import {
  convertCollectionSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/Collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage(props) {
  const { updateCollections } = props;
  const [loading, setLoading] = useState(true);
  const math = useRouteMatch();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      setLoading(false);
    });
   
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${math.path}`}>
        <CollectionsOverviewWithSpinner isLoading={loading} />
      </Route>
      <Route
        path={`${math.path}/:collectionId`}
        render={(props) => {
          return <CollectionPageWithSpinner isLoading={loading} {...props} />;
        }}
      ></Route>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
