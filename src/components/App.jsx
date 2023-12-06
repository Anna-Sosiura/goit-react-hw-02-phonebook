import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
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

  formSubmit = data => {
    const { contacts } = this.state;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [...contacts, { id: nanoid, ...data }],
    });
  };

  handleChangeFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  getFilter = () => {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  deleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };

  render() {
    const filterContacts = this.getFilter();
    return (
      <div
        style={{
          marginLeft: 50,
        }}
      >
        <h1>Phoneboock</h1>
        <ContactForm onSubmit={this.formSubmit}></ContactForm>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList
          filterContacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
