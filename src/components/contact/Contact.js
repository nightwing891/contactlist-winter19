import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Contact extends Component {
  state = { editing: false }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  render() {
    const { firstName, id, phone, deleteContact, updateContact } = this.props
    return(
      <>
        <h2>{firstName}</h2>
        <p>{phone}</p>
        <button onClick={() => deleteContact(id)}>Delete</button>
        {
          this.state.editing ? 
          <ContactForm {...this.props} toggleEdit={this.toggleEdit} />
          :
          <button onClick={this.toggleEdit}>Edit</button>
        }
      </>
    )
  }
}

export default Contact;