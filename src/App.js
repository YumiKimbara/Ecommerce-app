import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect, useState } from "react";

import "./scss/App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProductsPage from "./pages/ProductsPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import "./scss/App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShoppingBag from "./pages/ShoppingBagPage";
import SearchPage from "./components/navbar/SearchPage";
import Checkout from "./pages/Checkout";

function App() {
  const [bag, setBag] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("bag") === null) {
      localStorage.setItem("bag", JSON.stringify(bag));
    } else {
      setBag(JSON.parse(localStorage.getItem("bag")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [bag]);

  return (
    <>
      <Router>
        <div className="App">
          <Navbar bag={bag} search={search} setSearch={setSearch} />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  bag={bag}
                  setBag={setBag}
                  search={search}
                  setSearch={setSearch}
                />
              )}
            />
            <Route path="/signin" exact component={SignInPage} />
            <Route
              path="/products/:id"
              exact
              render={(props) => (
                <ProductDetailsPage
                  {...props}
                  bag={bag}
                  setBag={setBag}
                  search={search}
                  setSearch={setSearch}
                />
              )}
              routerProps={":id"}
            />
            <Route
              path="/shopping-bag"
              exact
              render={(props) => (
                <ShoppingBag {...props} bag={bag} setBag={setBag} />
              )}
            />
            <Route path="/search/" exact component={SearchPage} />
            <Route
              path="/category/:category/:subcategory"
              exact
              render={(props) => (
                <ProductsPage
                  {...props}
                  bag={bag}
                  setBag={setBag}
                  search={search}
                  setSearch={setSearch}
                />
              )}
            />
            <Route
              path="/category/:category"
              exact
              render={(props) => (
                <ProductsPage
                  {...props}
                  bag={bag}
                  setBag={setBag}
                  search={search}
                  setSearch={setSearch}
                />
              )}
            />
            <Route
              path="/category/all-products"
              exact
              render={(props) => (
                <ProductsPage
                  {...props}
                  bag={bag}
                  setBag={setBag}
                  search={search}
                  setSearch={setSearch}
                />
              )}
            />
            <Route
              path="/checkout"
              exact
              render={(props) => <Checkout {...props} setBag={setBag} />}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
