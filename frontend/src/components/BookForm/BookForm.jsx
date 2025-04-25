import { useState } from 'react';
// Для отправки действий
import { useDispatch } from 'react-redux';
// ActionCreators - объект для диспатча
import style from './BookForm.module.scss';
import { addBook } from '../../redux/books/actionCreators';
const BookForm = () => {
  // Состояние названия
  const [title, setTitle] = useState('');
  // Состояние автора
  const [author, setAuthor] = useState('');
  // dispatch
  const dispatch = useDispatch();

  // Функция при субмите
  const onSubmitHandler = (e) => {
    // Чтобы не обновлялась страница при субмите
    e.preventDefault();

    // Если в title и автор что-то есть, то выполняем
    if (title && author) {
      // Формируем объект из состояний
      const book = {
        title,
        author,
      };
      // Отправляем действия в редьюсер
      dispatch(addBook(book));
    }

    // Вывод состояний в консоль
    console.log(title, author);
    // При субмите обнуляем инпуты
    setTitle('');
    setAuthor('');
  };
  return (
    <div className={style.bookForm}>
      <h1>Add a new book</h1>
      {/* Создаём форму с инпутами */}
      <form onSubmit={onSubmitHandler}>
        <div className={style.input}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className={style.buttonSubmit}>
          <button type="submit">Добавить</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
