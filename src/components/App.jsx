import { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ContactForm } from './ContactForm/ContactForm';
const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li{list-style:none;margin:0;padding:0;};
  body{
    height:80vh;
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
  addContact = obj => {
    if (this.state.contacts.find(people => people.name === obj.name)) {
      alert(`${obj.name} is already in contact`);
    } else {
      this.setState(prevState => ({ contacts: [obj, ...prevState.contacts] }));
    }
  };
  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>PhoneBook</h1>
        <ContactForm addContact={this.addContact} />
      </div>
    );
  }
}
