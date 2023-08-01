import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { fethContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const App = () => {
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
