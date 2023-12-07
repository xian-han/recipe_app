import React from 'react'
import { MenuList } from '../helpers/Menu/MenuList';
import MenuItem from '../Components/MenuItem';
import '../styles/Menu.css'
function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
            {MenuList.map((menuItem,key)=>{
              return <MenuItem 
              key={key}
              id={menuItem.id}
              front_image={menuItem.front_image} 
              back_image={menuItem.back_image}
              name={menuItem.name} 
              price={menuItem.price}/> ;    
            })}
        </div>
    </div>
  )
}

export default Menu




