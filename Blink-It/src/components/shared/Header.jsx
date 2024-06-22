import { FaRegUser } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import {useState} from 'react'
import { CartButton } from '../cart';
import LocationPicker from '../LocationPicker';
import SearchBox from '../SearchBox';
import './Header.css';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <header className="_nav px-2 sm:px-0">
        <div className="_header sm:flex h-full">
          <div className="hidden sm:flex max-w-[150px] md:max-w-[178px] w-full cursor-pointer sm:hover:bg-gray-50 items-center justify-center border-r _border-light">
            <span className="name">WinkIt</span>
          </div>
          <div className="w-full sm:w-[240px] xl:w-[320px] py-4 px-1 sm:p-0 _header_loc flex items-center sm:justify-center cursor-pointer">
            <LocationPicker />
          </div>
          <div className="flex-1 relative _header_search">
            <SearchBox />
          </div>
          <div className="login-button flex items-center justify-center cursor-pointer sm:hover:bg-gray-50 max-w-[80px] lg:max-w-[160px] w-full" onClick={toggleLogin}>
            <span className="font-medium text-default hidden sm:block">
              Login
            </span>
            <span className="sm:hidden text-default">
              <FaRegUser className="icon-default" size={22} />
            </span>
          </div>
          <div className="py-2 hidden md:flex h-full items-center mr-8 ml-3">
            <CartButton />
          </div>
        </div>
      </header>
      {showLogin && <Login toggleLogin={toggleLogin} />}
    </div>
  );
};

const Login = ({ toggleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with', { username, password });
  };

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Redirecting to signup page');
  };

  return (
    <div className="login-overlay" onClick={toggleLogin}>
      <div className="login-container" onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn login-btn">Login</button>
        </form>
        <button onClick={handleSignup} className="btn signup-btn">Signup</button>
      </div>
    </div>
  );
};

export default Header;
