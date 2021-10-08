import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../collection/Collection.component";

function ShopPage({updateCollections}) {
  const math = useRouteMatch();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    const unsubscribe = collectionRef.onSnapshot(async snapshot => {
      const collectionMap =  convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionMap);
    })

    return () => {
      unsubscribe();
    };
  }, []);
  
  return (
    <div className="shop-page">
      <Route exact path={`${math.path}`} component={CollectionsOverview} />
      <Route path={`${math.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
