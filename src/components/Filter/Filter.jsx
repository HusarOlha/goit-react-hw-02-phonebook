import PropTypes from 'prop-types';
import { FilterContainer, Label, Input } from './Filter.styled';

const Filter = ({ onChange }) => {
  return (
    <FilterContainer>
      <Label>Find contacts by name</Label>
      <Input type="text" name="filter" onChange={onChange} required />
    </FilterContainer>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
