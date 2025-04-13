import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
      <Link to="/">All Books</Link>
      <Link to="/add">Add Book</Link>
    </header>
  );
};

export default Header;
