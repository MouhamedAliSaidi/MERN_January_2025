import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BookCatalog from './views/BookCatalog';
import AddBook from './views/AddBook';
import ViewBook from './views/ViewBook';
import UpdateBook from './views/UpdateBook';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BookCatalog />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/book/:id" element={<ViewBook />} />
        <Route path="/book/:id/update" element={<UpdateBook />} />

      </Routes>
    </>
  );
}

export default App;
