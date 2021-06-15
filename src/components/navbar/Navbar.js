import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRegHandPeace,
  FaSearch,
  FaUserAlt,
  FaShoppingBag,
} from "react-icons/fa";

import "../../scss/Navbar.scss";
import axios from "axios";
import NavbarDropdown from "./NavbarDropdown";
import SearchPage from "./SearchPage";

const Navbar = ({ bag, search, setSearch }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const url = `https://e-commerce-api.belzaondrej.com/products/categories`;
    try {
      let response = await axios.get(url);
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-2">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <FaRegHandPeace />
            Brand
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-uppercase"
            id="navbarText"
          >
            <ul className="navbar-nav mx-auto">
              {categories &&
                categories.map((category) => (
                  <NavbarDropdown key={category.id} category={category} />
                ))}
            </ul>
            <ul className="nav navbar-nav ms-20">
              {/* when search btn was clicked change search state. */}
              <li
                className="nav-item"
                onClick={() => {
                  if (search === true) {
                    setSearch(false);
                  } else {
                    setSearch(true);
                  }
                }}
              >
                <a className="nav-link" href="#">
                  <FaSearch />
                </a>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  <FaUserAlt />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shopping-bag" className="nav-link shopping-bag">
                  <FaShoppingBag />
                  {bag.length > 0 && <div className="items">{bag.length}</div>}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*if search is true render SearchPage component*/}
      {search && <SearchPage search={search} setSearch={setSearch} />}
    </>
  );
};

export default Navbar;
