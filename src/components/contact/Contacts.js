import React from 'react';
import Contact from './Contact';

const Contacts = ({ contacts, deleteContact, updateContact }) => (
  <>
    <ul>
      { contacts.map( contact => <Contact key={contact.id} {...contact} 
      deleteContact={deleteContact} updateContact={updateContact} /> )}
    </ul>
  </>
)

export default Contacts;