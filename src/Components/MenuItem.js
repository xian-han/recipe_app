import React from 'react'

function MenuItem({image,name,price}) {
  const show =()=>{
      const dialog=document.querySelector('.dialogFrame');
      dialog.showModal();
  };
  const close=()=>{
      const dialog = document.querySelector('.dialogFrame');
      dialog.close();
  };
  return (
    <div className="menuItem">
      <div style={{backgroundImage:`url(${image})`}}></div>
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
