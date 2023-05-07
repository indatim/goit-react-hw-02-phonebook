import React, { Component } from 'react';
import shortid from 'shortid';
import { ContactsForm, ContactFormLabel, ContactFormInput, ContactFormButton } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  contactNameId = shortid.generate();
  contactNumberId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    return (
      <ContactsForm onSubmit={this.handleSubmit}>
        <ContactFormLabel htmlFor={this.contactNameId}>
          Name
          <ContactFormInput
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.contactNameId}
          />
        </ContactFormLabel>
        <ContactFormLabel htmlFor={this.contactNumberId}>
          Number
          <ContactFormInput
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.contactNumberId}
          />
        </ContactFormLabel>

        <ContactFormButton type="submit">
          Add contact
        </ContactFormButton>
      </ContactsForm>
    );
  }
}

export default ContactForm;
