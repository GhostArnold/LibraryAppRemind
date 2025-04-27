import { useDispatch, useSelector } from 'react-redux';
import { setTitleFilter } from '../../redux/slices/filterSlices';
import style from '../Filter/Filter.module.scss';
const Filter = () => {
  // Для отправки действий
  const dispatch = useDispatch();
  // Присваиваем к переменной значение перменной title в редьюсере фильтер
  const titleFilter = useSelector((state) => state.filter.title);
  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
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
    </div>
  );
};

export default Filter;
