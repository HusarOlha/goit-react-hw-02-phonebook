import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
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

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    const id = nanoid();
    this.setState({ contacts: [{ name, number, id }, ...contacts] });
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
  nameInputId = nanoid();
  render() {
    // const { name, number } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <section>
          <h1>Phonebook</h1>
          <form>
            <label htmlFor={this.nameInputId}>Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={this.handleChange}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.handleChange}
              required
            />
            <button type="submit" onClick={this.handleSubmit}>
              Add contacts
            </button>
          </form>
        </section>
        <section>
          <label>Find contacts by name</label>
          <input
            type="tel"
            name="filter"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.changeFilter}
            required
          ></input>
          <ul>
            {visibleContacts.map(contact => (
              <li key={contact.id}>
                {contact.name} {contact.number}
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
export default App;
