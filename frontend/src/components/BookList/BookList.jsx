import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { deleteBook } from '../../redux/books/actionCreators';
import style from '../BookList/BookList.module.scss';
const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
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
