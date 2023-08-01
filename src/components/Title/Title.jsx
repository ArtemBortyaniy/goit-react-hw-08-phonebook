import css from './Title.module.css';
import PropTypes from 'prop-types';

export const Title = ({ title, type }) => {
  let Tag = 'div'; // По умолчанию используется тег <div>

  switch (type) {
    case 'h1':
      Tag = 'h1';
      break;
    case 'h2':
      Tag = 'h2';
      break;
    case 'h3':
      Tag = 'h3';
      break;
    // Добавьте дополнительные кейсы для других типов тегов, если необходимо
    default:
      break;
  }

  return <Tag className={css.container}>{title}</Tag>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired, // Определите доступные типы тегов
};
