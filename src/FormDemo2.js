import alertify from "alertifyjs";
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    alertify.success(this.state.email + " Kullanıcı Eklendi");

    event.preventDefault();
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              name="password"
              type="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              name="description"
              type="textarea"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              id="city"
              name="city"
              type="select"
              onChange={this.handleChange}
            >
              <option>İstanbul</option>
              <option>Ankara</option>
              <option>İzmir</option>
              <option>Rize</option>
              <option>Zonguldak</option>
            </Input>
          </FormGroup>
          <Button type="submit">Kaydet</Button>
        </Form>
      </div>
    );
  }
}
