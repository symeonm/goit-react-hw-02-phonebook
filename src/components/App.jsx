import { Component } from 'react';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addInState = data => {
    const contact = { name: data.name, number: data.number, id: data.id };
    this.state.contacts.push(contact);
  };

  listContacts = () => {
    return this.state
  }

  // deleteContactState = id => {
  //   const { contacts } = this.state;
  //   const updContacts = contacts.filter(obj => obj.id !== id);
  //   this.setState({ contacts: updContacts });
  // };

  render() {
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addInState} />
        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList
          dataContact={this.listContacts()}
          // deleteList={this.deleteContactState}
        />
      </div>
    );
  }
}
