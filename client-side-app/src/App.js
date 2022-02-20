import './App.css';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import Router from './Router/Router.js'

function App() {

  return (

    <div className="App">
      <Header />
        <body  className="center_items">
          <Router />
        </body>
      <Footer/>
    </div>

  );

}

export default App;
