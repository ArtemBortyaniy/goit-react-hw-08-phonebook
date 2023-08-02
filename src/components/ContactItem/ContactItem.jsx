import css from '../ContactList/ContactsList.module.css';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { FormEdit } from 'components/FormEdit/FormEdit';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = id => {
    return dispatch(deleteContacts(id));
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <li className={css.item}>
      <p>
        {name}: {number}
      </p>
      <button type="button" id={id} onClick={() => handleToggleModal()}>
        Edit
      </button>
      <button
        type="button"
        className={css.buttonDelete}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
      {showModal && (
        <Modal onClose={handleToggleModal}>
          <FormEdit
            id={id}
            name={name}
            number={number}
            onClose={handleToggleModal}
          />
        </Modal>
      )}
    </li>
  );
};
