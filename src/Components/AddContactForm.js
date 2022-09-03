import React from "react";

export default class AddContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: ""
    };
  }

  handleNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          ></input>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          ></input>
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}
