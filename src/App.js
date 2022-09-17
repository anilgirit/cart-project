import { Container, Row, Col, Form } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import React, { Component } from "react";
import alertify from "alertifyjs";
import NotFound from "./NotFound";
import CartList from "./CartList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
  componentDidMount() {
    this.getProducts();
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts(categoryId) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  }
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    // eslint-disable-next-line no-useless-concat
    alertify.success("'" + product.productName + "'" + " Sepete Eklendi");
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error("'" + product.productName + "'" + " Sepetten Çıkarıldı.");

  };

  render() {
    let categoryInfo = { title: "KATEGORİLER" };
    let productInfo = { title: "ÜRÜNLER" };
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ProductList
                        products={this.state.products}
                        addToCart={this.addToCart}
                        currentCategory={this.state.currentCategory}
                        info={productInfo}
                      />
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <CartList
                        cart={this.state.cart}
                        removeFromCart={this.removeFromCart}
                      />
                    }
                  />
                  <Route path="/form1" element={<FormDemo1/>}></Route>
                  <Route path="/form2" element={<FormDemo2/>}></Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
