import PropTypes from 'prop-types';
import {
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
  ContactContainer,
} from './ContactList.styled.jsx';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactContainer>
            <ContactName>{name}:</ContactName>
            <ContactNumber>{number}</ContactNumber>
          </ContactContainer>
          <DeleteButton onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactListItem>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
