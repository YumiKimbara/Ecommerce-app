import React, { useState } from "react";
import "../../scss/SearchPage.scss";
import { FaTimes } from "react-icons/fa";
import ProductCard from "../productCard/ProductCard";
import { Button, Row, Container } from "react-bootstrap";
import axios from "axios";
import _ from "lodash";

const SearchPage = ({ search, setSearch }) => {
  const [fetchedData, setFetchedData] = useState();
  const [visible, setVisible] = useState(20);

  const SeeMore = () => {
    setVisible(visible + 20);
  };

  const fetchProductQuery = async (name) => {
    try {
      const api = `https://e-commerce-api.belzaondrej.com/products/search?q=${name}`;

      const fetchData = await axios.get(api);

      if (fetchData.status === 404)
        throw new Error(`Invalid name.(${fetchData.status})`);

      setFetchedData(fetchData.data);
    } catch (err) {
      alert(`Something went wrong. ${err.message}`);
    }
  };

  //pass input value as a parameter and fetch data from API
  const handleQuery = _.debounce((query) => {
    if (query.trim().length === 0) {
      return;
    }

    fetchProductQuery(query);
  }, 1000);

  return (
    <>
      <div className="searchContainer">
        <div className="search">
          <form>
            {/*pass input value to the function*/}
            <input
              onChange={(e) => {
                handleQuery(e.target.value);
              }}
              type="text"
              placeholder="Search for products"
            ></input>
          </form>
          <div
            className="closeBtn"
            onClick={() => {
              setSearch(false);
            }}
          >
            <FaTimes />
          </div>
        </div>
        {fetchedData && (
          <div>
            <Container>
              <Row>
                {/*map all fetched data and pass them to the ProductCard component */}
                {fetchedData.slice(0, visible).map((p, i) => (
                  <ProductCard
                    product={p}
                    key={i}
                    search={search}
                    setSearch={setSearch}
                  />
                ))}
              </Row>
            </Container>
            {/*if fetchedData.length is more than visible, show see more button*/}
            {visible < fetchedData.length && (
              <div className="seeMoreButtonContainer">
                <Button
                  className="seeMoreButton"
                  variant="dark"
                  onClick={SeeMore}
                >
                  See more
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default SearchPage;
