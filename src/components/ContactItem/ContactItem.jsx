import css from '../ContactList/ContactsList.module.css';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { FormEdit } from 'components/FormEdit/FormEdit';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

export const ContactItem = ({ id, name, phone }) => {
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
        {name}: {phone}
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
            phone={phone}
            onClose={handleToggleModal}
          />
        </Modal>
      )}
    </li>
  );
};
