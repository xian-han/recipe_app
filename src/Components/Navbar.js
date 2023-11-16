import React,{useState} from 'react'
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

    const [openLinks,setOpenLinks] = useState(false);
    const toggleNavbar = ()=>{
      setOpenLinks(!openLinks);
    };

    const medeleine = require('../dessert/Madeleine.jpg');
    const cakeIcon = require('../dessert/cakeIcon.png');
    const basque = require('../dessert/Basque2.png');
    return (
    <div className="navbar">
      <div className="leftbar" id={openLinks?"open":"close"}>
        <img src={basque}></img>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div id="rightbar" className="rightbar">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        
      </div>
    </div>
  )
}

export default Navbar





