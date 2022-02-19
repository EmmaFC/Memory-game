import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import { Router, Route } from 'react-router';
// import EasyGameDisplay from './pages/EasyGameDisplay.js';

function App() {
  return (
    <div className="App">

    <Header />
      <body>
        
      <img src={logo} className="App-logo" alt="logo" />
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        </a>
      </body>
    <Router>
      <Route to="/EasyGameDisplay">Easy Game</Route>
      </Router>
    <Footer/>
    
    </div>
  );
}

export default App;
