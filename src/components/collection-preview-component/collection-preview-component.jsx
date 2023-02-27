import React from "react";

import "./collection-preview-components.styles.scss";

import CollectionItem from "../collection-item-component/collection-item-component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items?.map((item) => (
          <CollectionItem
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
