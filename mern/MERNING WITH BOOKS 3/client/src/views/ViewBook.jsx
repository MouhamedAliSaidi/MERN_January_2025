// client/src/Views/ViewBook.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ViewBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(err => console.error('Error fetching book:', err));
  }, [id]);

  const handleBorrow = () => {
    fetch(`http://localhost:5000/api/books/${id}`, {
      method: 'DELETE'
    })
      .then(() => navigate('/'))
      .catch(err => console.error('Error deleting book:', err));
  };

  if (!book) return <p>Loading book details...</p>;

  return (
    <div className="view-book">
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</p>
      <button onClick={handleBorrow}>Borrow</button>
    </div>
  );
};

export default ViewBook;
