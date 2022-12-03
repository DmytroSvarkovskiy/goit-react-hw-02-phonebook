import { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ContactForm } from './ContactForm/ContactForm';
import { Contaclist } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li,p{list-style:none;margin:0;padding:0;};
  body{
    height:50%;
   display: flex;
   justify-content:center;
   align-items:center;
   color: '#010101'; 
  }
`;
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = (values, { resetForm }) => {
    const newContact = { id: nanoid(3), ...values };
    const newContactName = newContact.name.toLowerCase();
    if (
      this.state.contacts.find(
        people => people.name.toLowerCase() === newContactName
      )
    ) {
      alert(`${newContact.name} is already in contact`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
      resetForm();
    }
  };
  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter />
        <Contaclist listAbonents={this.state.contacts} />
      </div>
    );
  }
}
