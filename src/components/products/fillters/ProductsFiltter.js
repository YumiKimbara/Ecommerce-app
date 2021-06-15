import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tabs, Container, Row, Col } from "react-bootstrap";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import SortByFilter from "./SortByFilter";

const ProductsFilter = ({
  title,
  order,
  onSortOrderChange,
  selectedSizes,
  setSelectedSizes,
}) => {
  return (
    <>
      <Container className="productBanner">
        <img src="/image/productImage.jpg" alt="productBanner" />
        <h2 className="text-uppercase">{title}</h2>
      </Container>
      <Container className="filterContianer">
        <Row>
          <Col>
            <span>FILTERS:</span>
          </Col>
          <Col xs={11}>
            <Tabs
              defaultActiveKey="size"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tabs
                eventKey="size"
                title={
                  <span>
                    SIZE <MdKeyboardArrowDown />
                  </span>
                }
                className="filter"
              >
                <SizeFilter
                  selectedSizes={selectedSizes}
                  setSelectedSizes={setSelectedSizes}
                />
              </Tabs>
              <Tabs
                eventKey="color"
                title={
                  <span>
                    COLOR <MdKeyboardArrowDown />
                  </span>
                }
                className="filter"
              >
                <ColorFilter />
              </Tabs>
              <Tabs
                eventKey="sortby"
                title={
                  <span>
                    SORT BY <MdKeyboardArrowDown />
                  </span>
                }
                className="filter"
              >
                <SortByFilter
                  order={order}
                  onSortOrderChange={onSortOrderChange}
                />
              </Tabs>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductsFilter;
