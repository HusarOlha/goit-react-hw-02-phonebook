import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import * as yup from 'yup';
import {
  StyledForm,
  StyledLabel,
  StyledField,
  StyledErrorMessage,
  StyledButton,
} from './ContactForm.styled';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name must match the following: "a-z, A-Z, а-я, А-Я".'
    )
    .required('Name is required'),
  number: yup
    .string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/g,
      'Invalid phone number'
    ),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <StyledForm>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledField
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorMessage component={StyledErrorMessage} name="name" />
        <StyledLabel htmlFor="number">Phone number</StyledLabel>
        <StyledField
          type="text"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <ErrorMessage component={StyledErrorMessage} name="number" />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
