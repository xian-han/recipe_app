import React, { useContext } from 'react'
import { useRef ,useState} from 'react';
import { ShopContext } from '../helpers/Menu/Shop-Context';
function MenuItem({id,front_image,back_image,name,price}) {
  
  const [isHover,setIsHover] = useState(false);
  
  const {addToCart,removeFromCart,cartItems} = useContext(ShopContext);
  
  const cartItemAmount = cartItems[id];

  const show =()=>{
      const dialog=document.querySelector('.dialogFrame');
      dialog.showModal();
  };

  const close=()=>{
      const dialog = document.querySelector('.dialogFrame');
      dialog.close();
  };

  const test= event=>{
    setIsHover(current => !current);
  };

  const test2 =(event)=>{
    console.log("touched");
  }

  return (
    <div className="menuItem">
      <div  id="flip-container" className={isHover?"hover":"flip-container"} onClick={show} >
        <div style={front_image!=""?{backgroundImage:`url(${front_image})`}:{backgroundImage:`url()`}} className={isHover?"hover":"front_image"} onTouchStart={test2}></div>
        <div style={front_image!=""?{backgroundImage:`url(${back_image})`}:{backgroundImage:`url()`}} className="back_image"></div>
      </div>
      <h1>{name}</h1>
      <p>${price}</p>
      <button className="removeFromCartBtn" onClick={()=>removeFromCart(id)} >&#45;</button>
      <button>
        cart amount { cartItemAmount>0 && <>({cartItemAmount})</>}
      </button>
      <button className="addToCartBtn" onClick={()=>addToCart(id)}>&#43;</button>
    </div>
  )
}

export default MenuItem
