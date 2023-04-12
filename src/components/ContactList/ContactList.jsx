import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}
        {number}
      </li>
    ))}
  </ul>
);

export default ContactList;

//   <Button
//     key={option}
//     type="button"
//     onClick={() => onLeaveFeedback(option)}
//     >
//     </Button>
