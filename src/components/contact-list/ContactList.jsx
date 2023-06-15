import React from 'react';

const ContactList = ({ dataContact }) => {
  const contact = dataContact.contacts;
  console.log(contact);

  <ul>
    {contact.map(obj => (
      <li key={obj.id}>
        {obj.name}: {obj.number}
        <button id={obj.id}>Delete</button>
      </li>
    ))}
  </ul>;
};

export default ContactList;
