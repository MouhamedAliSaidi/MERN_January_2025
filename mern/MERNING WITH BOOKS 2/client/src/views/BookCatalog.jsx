import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookCatalog = () => {
const [books, setBooks] = useState([]);

useEffect(() => {
    fetch('http://localhost:5000/api/books')
    .then(res => res.json())
    .then(data => setBooks(data))
    .catch(err => console.error('Error fetching books:', err));
}, []);

return (
    <div className="catalog">
      <h1> Book Catalog</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th><th>Author</th><th>Year</th><th>Available</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.available ? 'Yes' : 'No'}</td>
              <td>
                <Link to={`/book/${book._id}`}>
                  <button>View Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookCatalog;
