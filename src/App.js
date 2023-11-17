import './App.css';
import Test from './Components/test';
import Searchbar from './Components/searchbar';
import Dessert from './Components/dessert';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {BrowserRouter as Router,Route,Switch,Routes} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Iron } from '@mui/icons-material';


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
