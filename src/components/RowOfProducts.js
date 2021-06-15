import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import ProductCard from "./productCard/ProductCard";

const RowOfProducts = ({
  productId,
  category,
  isHomePage,
  bag,
  setBag,
  search,
  setSearch,
}) => {
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const url = `https://e-commerce-api.belzaondrej.com/products`;
    try {
      let response = await axios.get(url);
      const products = response.data;
      //if the RowOfProducts component is on the homepage get products with subcategory equal to category from the props
      //or if it is not on the home page then get products with subcategory equal to category from the props but have different id from the productId in props
      //and get only 4 products
      setFilteredProducts(
        products
          .filter(
            (p) =>
              (isHomePage && p.subcategory.name === category) ||
              (!isHomePage &&
                p.id !== productId &&
                p.subcategory.name === category)
          )
          .slice(0, 4)
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container className="my-4">
      <div
        className={`d-flex flex-row ${
          isHomePage ? "justify-content-between" : "justify-content-center"
        } mb-3`}
      >
        <h4 className="fw-bold text-uppercase">
          {isHomePage ? category : "You might like"}
        </h4>
        {isHomePage && (
          <a className="link-dark fw-bold" href={`/category/${category}`}>
            View all
          </a>
        )}
      </div>
      <Row>
        {filteredProducts &&
          filteredProducts.map((f, i) => {
            const product = {
              id: f.id,
              name: f.name,
              price: f.price,
              stock: f.stock,
              previewImage: f.previewImage,
            };
            return (
              <ProductCard
                key={f.id}
                product={product}
                bag={bag}
                setBag={setBag}
                search={search}
                setSearch={setSearch}
              />
            );
          })}
      </Row>
    </Container>
  );
};

export default RowOfProducts;
