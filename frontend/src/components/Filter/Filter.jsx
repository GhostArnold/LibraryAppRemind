import { useDispatch, useSelector } from 'react-redux';
import { selectAuthorFilter } from '../../redux/slices/filterSlices';
import {
  setTitleFilter,
  resetFilter,
  setAuthorFilter,
} from '../../redux/slices/filterSlices';
import style from '../Filter/Filter.module.scss';
const Filter = () => {
  // Для отправки действий
  const dispatch = useDispatch();
  // Присваиваем к переменной значение перменной title в редьюсере фильтер
  const titleFilter = useSelector((state) => state.filter.title);
  const authorFilter = useSelector(selectAuthorFilter);
  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };
  const handleResetFilters = () => {
    dispatch(resetFilter());
  };
  return (
    <div className={style.filter}>
      <input
        type="text"
        placeholder="Filter by title..."
        value={titleFilter}
        onChange={handleTitleFilterChange}
        className={style.filterInput}
      />
      <input
        type="text"
        placeholder="Input by author..."
        value={authorFilter}
        onChange={handleAuthorFilterChange}
      />
      <button onClick={handleResetFilters}>Reset</button>
    </div>
  );
};

export default Filter;
