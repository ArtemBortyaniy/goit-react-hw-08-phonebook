import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/Title/Title';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { fethContacts } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fethContacts());
  }, [dispatch]);

  return (
    <div>
      <Title title={'Phonebook'} type={'h1'}></Title>
      <ContactForm />
      <Title title={'Contacts'} type={'h2'}></Title>
      <Filter />
      {isLoading && <b>Request in progress...</b>}
      {error && <b>Error</b>}
      <ContactList />
    </div>
  );
};

export default Contacts;
