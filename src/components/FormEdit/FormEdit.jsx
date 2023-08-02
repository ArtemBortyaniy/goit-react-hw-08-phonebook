import { useDispatch } from 'react-redux';
import { editContacts } from 'redux/contacts/operations';
import './FormEdit.css';
import { Button } from '@mui/material';

export const FormEdit = ({ id, name, number, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      editContacts({
        contactId: id,
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    onClose();
  };

  return (
    <form className="form-edit" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className="form-edit-input"
          type="text"
          name="name"
          placeholder={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className="form-edit-input"
          type="tel"
          name="number"
          placeholder={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <div>
        <Button variant="contained" type="submit">
          Edit
        </Button>
      </div>
    </form>
  );
};
