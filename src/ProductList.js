import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>

        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ürün İsmi</th>
              <th>Ürün Miktarı</th>
              <th>Ürün Fiyatı (₺)</th>
              <th>Ürün Stoğu</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    color="success"
                    size="sm"
                  >
                    Spete Ekle
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
