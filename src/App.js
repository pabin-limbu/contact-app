import React from "react";
import contacts, { compareName } from "./Helper/contact";
import ContactList from "./Components/ContactList";

import "./styles.css";
import AddContactForm from "./Components/AddContactForm";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showContacts: false,
      contacts: contacts,
      showAddContactForm: false
    };
  }

  //sort name in alphabetical order.
  sort = () => {
    this.setState((previous) => ({
      contacts: [...previous.contacts].sort(compareName)
    }));
  };

  toggleContact = () => {
    this.setState((prev) => ({ showContacts: !prev.showContacts }));
  };
  toggleShowAddContactForm = () => {
    this.setState((prev) => ({ showAddContactForm: !prev.showAddContactForm }));
  };

  render() {
    if (this.state.showAddContactForm) return <AddContactForm />;
    return (
      <div>
        <h1>Contacts</h1>
        <button onClick={this.toggleContact}>Toggle Contacts</button>
        <button onClick={this.toggleShowAddContactForm}>Add Contact</button>
        {this.state.showContacts && <ContactList contacts={contacts} />}
      </div>
    );
  }
}
