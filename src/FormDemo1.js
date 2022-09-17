import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { userName: "" };
  onChangeHandler = (event) => {
    this.setState({ userName: event.target.value });
  };
  onSubmitandler = (event) => {
    alert(this.state.userName)

    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitandler}>
          <h3>User Name</h3>
          <input onChange={this.onChangeHandler} type="text"></input>
          <h3>User Name is: {this.state.userName}</h3>
          <input type="submit" value="Kaydet"></input>
        </form>
      </div>
    );
  }
}
