import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "./CartSummary";
 
export default class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Alışveriş Uygulaması</NavbarBrand>
          <NavbarText>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {/* <NavItem>
                  <NavLink>
                    <Link to="form1">Form Demo 1</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link to="form2">Form Demo 2</Link>
                  </NavLink>
                </NavItem> */}
                <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
              </Nav>
            </Collapse>
          </NavbarText>
        </Navbar>
      </div>
    );
  }
}
 