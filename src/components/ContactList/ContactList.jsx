import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/filters/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {visibleContacts.map(({ id, name, phone }) => {
          return <ContactItem id={id} name={name} phone={phone} key={id} />;
        })}
      </ul>
    </div>
  );
};
