import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    available: true
  });

  const [errors, setErrors] = useState({
    title: '',
    author: '',
    year: ''
  });

  const validate = (name, value) => {
    let message = '';

    if (name === 'title') {
      if (!value.trim()) message = 'Title is required.';
      else if (value.trim().length < 2) message = 'At least 2 characters.';
    }

    if (name === 'author') {
      if (!value.trim()) message = 'Author is required.';
      else if (value.trim().length < 2) message = 'At least 2 characters.';
    }

    if (name === 'year') {
      if (!value) message = 'Year is required.';
      else if (!/^\d{4}$/.test(value)) message = 'Enter a 4-digit year.';
    }

    setErrors(prev => ({ ...prev, [name]: message }));
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    validate(name, val);
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:5000/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(() => navigate('/'))
      .catch(err => console.error('Error:', err));
  };

  const hasErrors = Object.values(errors).some(err => err);
  const allFilled = formData.title && formData.author && formData.year;

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label><br />
          <input name="title" value={formData.title} onChange={handleChange} />
          {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Author</label><br />
          <input name="author" value={formData.author} onChange={handleChange} />
          {errors.author && <div style={{ color: 'red' }}>{errors.author}</div>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>Year</label><br />
          <input name="year" type="number" value={formData.year} onChange={handleChange} />
          {errors.year && <div style={{ color: 'red' }}>{errors.year}</div>}
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>
            <input
              name="available"
              type="checkbox"
              checked={formData.available}
              onChange={handleChange}
            />
            {' '}Available
          </label>
        </div>

        {!hasErrors && allFilled && (
          <button style={{ marginTop: '15px' }} type="submit">Add Book</button>
        )}
      </form>
    </div>
  );
};

export default AddBook;
