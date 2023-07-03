import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import Navbar from './components/BlogNav';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;
