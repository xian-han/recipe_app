import React from 'react'
import { useRef } from 'react';

function MenuItem({front_image,back_image,name,price}) {
  
  const listElement = useRef(null);
  
  const show =()=>{
      const dialog=document.querySelector('.dialogFrame');
      dialog.showModal();
  };
  const close=()=>{
      const dialog = document.querySelector('.dialogFrame');
      dialog.close();
  };
  const test=()=>{
    listElement.current.classList.toggle('');
    let a=document.getElementById('filp-container');
    console.log(a.classList);
    //`${document.getElementById('filp-container')}`
  };
  return (
    <div className="menuItem">
      <div id="flip-container" className="flip-container" onTouchStart={""}>
        <div style={front_image!=""?{backgroundImage:`url(${front_image})`}:{backgroundImage:`url()`}} className="front_image"></div>
        <div style={front_image!=""?{backgroundImage:`url(${back_image})`}:{backgroundImage:`url()`}} className="back_image"></div>
      </div>
      <h1>{name}</h1>
      <p>${price}</p>
      <button onClick={show}>show</button>
      <dialog className="dialogFrame">
        <div>
          <p>hello</p>
          <button onClick={close}>close</button>
          <footer >
            
          </footer>
        </div>
      </dialog>      
    </div>
  )
}

export default MenuItem
