import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    this.setState({ name: '', number: '' });

    // console.log(this.state.contacts);
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  onDeleteContact = () => {};

  render() {
    return (
      <>
        <form onSubmit={this.addContact}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.handleChange}
            required
          ></input>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          ></input>
          <button type="submit"> Add contact</button>
        </form>
        {this.state.contacts.length > 0 && <h2>Contacts</h2>}
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteContact}
        />
      </>
    );
  }
}
