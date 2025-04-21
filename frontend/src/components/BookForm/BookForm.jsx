import { useState } from 'react';
import style from './BookForm.module.scss';
const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(title, author);
    setTitle('');
    setAuthor('');
  };
  return (
    <div className={style.bookForm}>
      <h1>Add a new book</h1>
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
