import React, { Component } from 'react';
import Contacts from './components/contact/Contacts';
import ContactForm from './components/contact/ContactForm';

class App extends Component {
  state = { 
    contacts: [
      { id: 1, firstName: 'Jerry', phone: '801-123-1233'},
      { id: 2, firstName: 'Bob', phone: '801-143-1233'},
      { id: 3, firstName: 'Jill', phone: '901-123-1233'}
    ]
  }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  updateContact = (id, incomingContact) => {
    let updatedContact = { id: id, ...incomingContact }
    const contacts = this.state.contacts.map( contact => {
      if (contact.id === id) {
        return updatedContact
      }
      return contact
    })
    this.setState({ contacts: [ ...contacts ] })
  }

  addContact = (contactData) => {
    let newContact = { id: this.getId(), ...contactData }
    this.setState({ contacts: [ newContact, ...this.state.contacts ] })
  }

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter( contact => {
      if (contact.id !== id) 
        return contact
    })
    this.setState({ contacts: [...newContacts] })
  }

  render() {
    const { contacts } = this.state
    return(
      <>
        <h1>React Contact List</h1>
        <ContactForm addContact={this.addContact} />
        <Contacts 
          contacts={contacts} 
          deleteContact={this.deleteContact} 
          updateContact={this.updateContact}
        />
      </>
    )
  }
}

export default App;
