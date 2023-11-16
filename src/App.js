import './App.css';
import Test from './Components/test';
import Searchbar from './Components/searchbar';
import Dessert from './Components/dessert';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {BrowserRouter as Router,Route,Switch,Routes} from 'react-router-dom';



function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  
  );
  
  /*
    return(
      <Test />
    );
    */
}

export default App;
