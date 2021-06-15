import React from "react";
import "../scss/Product.scss";
import Products from "../components/products/Products";

const ProductsPage = ({ props, search, setSearch }) => {
  return (
    <>
      <Products props={props} search={search} setSearch={setSearch} />
    </>
  );
};

export default ProductsPage;
