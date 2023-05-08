import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactListContainer,
  ContactListItem,
  ContactListText,
  ConractListButton,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactListContainer>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem key={id}>
        <ContactListText>{name}:</ContactListText>
        <ContactListText>{number}</ContactListText>
        <ContactListButton
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </ContactListButton>
      </ContactListItem>
    ))}
  </ContactListContainer>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
