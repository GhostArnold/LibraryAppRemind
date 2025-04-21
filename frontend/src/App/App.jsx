import Filter from '../components/Filter/Filter';
import BookForm from '../components/BookForm/BookForm';
import BookList from '../components/BookList/BookList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Book Library App</h1>
      </header>
      <main>
        <div className="app-main">
          <div className="up-left-column">
            <BookForm />
          </div>
          <div className="up-right-column">
            <Filter />
            <BookList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
