import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from '../ContactForm/ContactForm';
import {ContactsList}  from "../ContactList/ContactList";
import  {Filter}  from "../Filter/Filter";
import { Wrap, TitleBook, ContactTitle, ContactWrap } from "./App.styled";



export default class App extends Component { 
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

addToList = contacts => {
const { name, number } = contacts;

for (const contact of this.state.contacts) {
  if (contact.name.toLowerCase() === name.toLowerCase()) {
    alert(`${name} is already in contacts`);
    return;
  }
}

const contact = {
  id: nanoid(),
  name,
  number,
};

this.setState(prevState => ({
  contacts: [contact, ...prevState.contacts],
}));
  };

deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

changeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

renderFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalizedValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };




  render() {
    const filteredContacts = this.renderFilteredContact();
    const { filter } = this.state;
    return (
  <>
    <Wrap>
        <TitleBook>
          Phonebook
        </TitleBook>
        <ContactForm onSubmit={this.addToList} />
        <ContactTitle>Contacts</ContactTitle>
        <ContactWrap>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        </ContactWrap>
    </Wrap>
</>
    )
  }
}