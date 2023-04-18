import styled from '@emotion/styled';
export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;

export const ContactName = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

export const ContactNumber = styled.p`
  margin-left: 10px;
`;

export const DeleteButton = styled.button`
  border: none;
  border-radius: 4px;
  color: rgba(25, 3, 45, 0.822);
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    rgba(81, 13, 13, 0.292) 0%,
    #f422f76d 51%,
    rgba(81, 13, 13, 0.178) 100%
  );
  background-size: 200% auto;
  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  align-items: baseline;
`;
