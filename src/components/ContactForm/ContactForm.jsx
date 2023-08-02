import { Button, TextField, styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';

const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f5f5f5',
  backgroundImage: 'linear-gradient(to bottom right, #ffffff, #f5f5f5)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const Label = styled('label')({
  fontSize: '16px',
  marginBottom: '10px',
});

const Input = styled(TextField)({
  width: '100%',
  padding: '8px',
  fontSize: '14px',
  borderRadius: '4px',
});

const BtnContainer = styled('div')({
  marginTop: '10px',
});

const SubmitButton = styled(Button)({
  padding: '8px 12px',
  fontSize: '16px',
  backgroundColor: '#4caf50',
  color: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#45a049',
  },
  '&:active': {
    backgroundColor: '#3e8e41',
  },
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      addContacts({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          label="Name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          label="Number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <BtnContainer>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </BtnContainer>
    </FormContainer>
  );
};
