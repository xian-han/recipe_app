import React,{useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import  InstagramIcon  from '@mui/icons-material/Instagram';
import  TwitterIcon  from '@mui/icons-material/Twitter';
import  FacebookIcon  from '@mui/icons-material/Facebook';
import  LinkedinIcon  from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';
function Footer() {
    //const inputRef = useRef(null);// ref={inputRef}
    //useEffect(()=>{
     // inputRef.current.setAttribute()
  //},[]);
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to={"https://www.google.com"} >
          <InstagramIcon/>
        </Link>
         <TwitterIcon /> <FacebookIcon /> <LinkedinIcon />
      </div>
      <p>&copy; 2023 XianHan.com</p>
    </div>
  )
}

export default Footer
