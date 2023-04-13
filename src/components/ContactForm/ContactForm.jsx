import React, { Component } from 'react';
import { Button, Form, Label } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: this.props.name || '',
    number: this.props.number || '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="name">
            <p>Name:</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </Label>
          <br />
          <Label htmlFor="number">
            <p>Number:</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={number}
              onChange={this.handleChange}
              required
            />
          </Label>
          <br />
          <Button type="submit">Add Contact</Button>
        </Form>
      </>
    );
  }
}
export default ContactForm;
