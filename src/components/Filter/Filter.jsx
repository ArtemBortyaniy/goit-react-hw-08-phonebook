import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/features/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          required
          className={css.input}
          onChange={handleChangeFilter}
        />
      </label>
    </div>
  );
};
