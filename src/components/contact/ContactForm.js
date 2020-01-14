import React, { Component } from 'react';

class ContactForm extends Component {
  state = { firstName: '', phone: '' }

  componentDidMount() {
    if (this.props.id) {
      const { firstName, phone } = this.props
      this.setState({ firstName: firstName, phone: phone })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit= (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateContact(this.props.id, this.state)
      this.props.toggleEdit()
    } else {
      this.props.addContact(this.state)
    }
    this.setState({ firstName: '', phone: '' })
  }

  render() {
    const { firstName, phone } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          name='firstName'
          value={firstName}
          onChange={this.handleChange}

          label="First Name"
          required
        />
        <input 
          name='phone'
          value={phone}
          onChange={this.handleChange}
          label="Phone"
          required
        />
        <input type='submit' />
      </form>
    )
  }
}

export default ContactForm;