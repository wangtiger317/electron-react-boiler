import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="Hello">
        <Link to="/other">go to other page</Link>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};
const Other = () => {
  return <div>other page is working</div>;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </Router>
  );
}
