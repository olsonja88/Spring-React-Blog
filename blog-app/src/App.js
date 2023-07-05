import './assets/css/custom_bootstrap.css';
import Posts from './components/Posts';
import Navbar from './components/BlogNav';

function App() {
    return (
        <div className="main-container bg-custom2">
            <Navbar />
            <Posts />
        </div>
    );
}

export default App;
