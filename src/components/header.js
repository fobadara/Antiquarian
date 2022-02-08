import { Link } from 'react-router-dom';
import person from '../images/person.png';

const Header = () => {
  const nav = {
    color: 'black',
    marginRight: '1em',
  };

  return (
    <header className="section container flex">
      <div className="container-2 flex">
        <div>
          <Link className="company-logo" to="/"><h1>Antiquarian</h1></Link>
        </div>
        <nav className="flex" style={{ margin: '2.3em 1.3em' }}>
          <Link className="company-logo" style={nav} to="/">Books</Link>
          <Link className="company-logo" style={nav} to="categories">Categories</Link>
        </nav>
      </div>
      <img className="icon" src={person} alt="user-icon" />
    </header>
  );
};

export default Header;
