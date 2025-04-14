import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    available: true,
  });

  useEffect(() => {
    // Fetch existing book data by ID
    axios
      .get(`http://localhost:5000/api/books/${id}`)
      .then((res) => setFormData(res.data))
      .catch((err) => console.error('Error fetching book:', err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/books/${id}`, formData)
      .then(() => navigate('/'))
      .catch((err) => console.error('Error updating book:', err));
  };

  return (
    <div className="update-book">
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Author:</label>
          <input name="author" value={formData.author} onChange={handleChange} required />
        </div>
        <div>
          <label>Year:</label>
          <input name="year" type="number" value={formData.year} onChange={handleChange} required />
        </div>
        <div>
          <label>Available:</label>
          <input name="available" type="checkbox" checked={formData.available} onChange={handleChange} />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;