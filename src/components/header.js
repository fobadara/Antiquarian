import { Link } from 'react-router-dom';
import icon from '../images/icon.png';

const Header = () => (
  <>
    <header>
      <span>
        <Link to="/"><h1>Antiquarian</h1></Link>
        <img src={icon} alt="A book and a feather (Company logo)" height="50" />
      </span>
      <nav>
        <Link to="/">Books</Link>
        <Link to="categories"> Categories</Link>
      </nav>
    </header>
  </>
);

export default Header;
