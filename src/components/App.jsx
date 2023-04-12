import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerFilter)
    );
  };
  onDeleteContact = () => {};

  render() {
    const { filter, name, number } = this.state;
    const visibleContacts = this.filterContacts();
    return (
      <>
        <ContactForm
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.addContact}
        />
        {this.state.contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter value={filter} onChange={this.handleChange} />
          </>
        )}
        <ContactList
          contacts={visibleContacts}
          onDelete={this.onDeleteContact}
        />
      </>
    );
  }
}
