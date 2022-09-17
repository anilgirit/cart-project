import React, { Component } from "react";
import { Table, Button} from "reactstrap";



export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Ürün İsmi</th>
            <th>Ürün Fiyatı (₺)</th>
            <th>Stok Miktarı</th>
            <th>Sepete Eklenen Miktar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                {" "}
                <Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>Sil</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
