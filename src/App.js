import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import {BrowserRouter as Router,Route,Switch,Routes} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Iron } from '@mui/icons-material';
import { ShopContextProvider } from './helpers/Menu/Shop-Context';


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


function App() {
    
    const [isLoading,setIsLoading] = useState(false);
    const [query,setQuery]= useState("");
    const [recipes,setRecipes] = useState([]);

    const searchRecipes = async () =>{
        setIsLoading(true);
        const url = apiUrl + query ;
        //console.log("url="+url);
        const res = await fetch(url);
        //console.log("res="+res);
        const data = await res.json();
        //console.log(data);
        setRecipes(data.meals);
        setIsLoading(false);
    };

    useEffect(()=>{
        searchRecipes();
    },[])

    return (
      
      <div className="App">
        <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
          <Footer />
        </Router>
        </ShopContextProvider>
      </div>
    
    );
  
  /*
    return(
      <Test />
    );
    */
}

export default App;
