import PropTypes from 'prop-types';

import {ContactItem, Name, Number,ButtonDelete} from './ContactsListItem.styled';

export const ContactsListItem = ({ name, number, id, onDelete }) => {
  return (
    <ContactItem>
      <Name>
        {name}:
      </Name>
      <Number>{number}</Number>
      <ButtonDelete type="button" onClick={() => onDelete(id)}>
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};