import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  padding: 20px;
  border: 1px solid white;
  border-radius: 10px;
`;

export const StyledLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 18px;

  margin-bottom: 5px;
  text-align: start;
`;

export const StyledField = styled(Field)`
  padding: 15px;
  font-size: 1rem;
  border: 1px solid white;
  border-radius: 20px;
  margin-bottom: 15px;
`;

export const StyledErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  background-image: linear-gradient(
    to right,
    rgba(81, 13, 13, 0.292) 0%,
    #f422f76d 51%,
    rgba(81, 13, 13, 0.178) 100%
  );
  width: 200px;
  margin: 0 auto;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgba(25, 3, 45, 0.822);

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
