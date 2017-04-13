import React from 'react';
import ProductList from './product-list'

//we're exporting a function below
export default (props) => {
  return <div className="container">
      <div className="page-header">
         <h1>Product Catalog</h1>
      </div>
      <ProductList />
    </div>;
}
