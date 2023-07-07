import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/custom.css";
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
