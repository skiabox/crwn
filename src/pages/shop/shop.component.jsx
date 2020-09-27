import React from "react";

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super();

    //collections is an array of category objects with the following fields (id, title, routeName, items)
    //every buyable object has the following fields: id, name, imageUrl(local url), price
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    //get collection by destructuring state object
    const { collections } = this.state;

    //destructure single collection object in the map function
    //...otherCollectionProps is title, routeName, items (array)
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
