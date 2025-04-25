import { useSelector } from 'react-redux';
import style from '../BookList/BookList.module.scss';
const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className={style.bookList}>
      <h2>Book List</h2>
      {/* Если редьсер books пустой  */}
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        // Если не пустой, то внутри нумуреванного списка выводим элементы
        <ol>
          {/* Перебираем массив и выводим */}
          {books.map((book, i) => {
            return (
              // Присваиваем id созданный через библиотеку
              <li key={book.id}>
                <div>
                  {book.title} by <strong>{book.author}</strong>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};

export default BookList;
