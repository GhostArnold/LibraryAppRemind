import { useSelector, useDispatch } from 'react-redux';
// Иконка удаления
import { MdDelete } from 'react-icons/md';
// удаление
import { deleteBook } from '../../redux/books/actionCreators';
// Содержимое title из Filter
import { selectTitleFilter } from '../../redux/slices/filterSlices';

import style from '../BookList/BookList.module.scss';
const BookList = () => {
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector(selectTitleFilter); // Используем селектор
  const dispatch = useDispatch();

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    return matchesTitle; // Не забываем return!
  });

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
          {filteredBooks.map((book, i) => {
            // Используем отфильтрованный массив
            return (
              // Присваиваем id созданный через библиотеку
              <li key={book.id} className={style.itemInside}>
                <div className={style.item}>
                  <div>
                    {book.title} by <strong>{book.author}</strong>
                  </div>
                  <div className={style.delete}>
                    <MdDelete onClick={() => dispatch(deleteBook(book.id))} />
                  </div>
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
