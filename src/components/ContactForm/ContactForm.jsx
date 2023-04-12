import React from 'react';

const ContactForm = ({ name, number, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    Name
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      value={name}
      // value={this.state.name}
      onChange={onChange}
      // onChange={this.handleChange}
      required
    ></input>
    Number
    <input
      type="tel"
      name="number"
      value={number}
      // value={this.state.number}
      onChange={onChange}
      // onChange={this.handleChange}
    ></input>
    <button type="submit"> Add contact</button>
  </form>
);

export default ContactForm;
