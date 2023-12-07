import React from 'react'
import{Link} from 'react-router-dom'
//import BannerImage from '../dessert/cakeBackground.jpg'
import BannerImage from '../dessert/Basque1.jpg'
import '../styles/Home.css'
function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
      <div className="headerContainer" >
        <h1>Bettkery</h1>
        <p>Welcome to Bettkery</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home

 