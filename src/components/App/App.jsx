import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../СontactList';
import { Container, Title } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = ({ name, number }) => {
    const { contacts } = this.state;
    const nameExists = contacts.some(contact => contact.name === name);
    nameExists
      ? alert(`${name} is already in contacts`)
      : this.setState({
          contacts: [{ name, number, id: nanoid() }, ...contacts],
        });
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleSubmit} />
        <Title>Contacts</Title>
        <Filter onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.handleDelete}
        />
      </Container>
    );
  }
}
export default App;
