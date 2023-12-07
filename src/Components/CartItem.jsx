import React,{useContext} from 'react'
import { ShopContext } from '../helpers/Menu/Shop-Context'

function CartItem(props) {
  const {id,front_image,back_image,name,price}= props.data;
  const {addToCart,removeFromCart,updateCartItemCount,cartItems} = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={front_image}/>
      <h1>{name}</h1>
      <p>${price}</p>
      <button className="removeFromCartBtn" onClick={()=>removeFromCart(id)} >&#45;</button>
      <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}></input>
      <button className="addToCartBtn" onClick={()=>addToCart(id)}>&#43;</button>

    </div>
  )
}

export default CartItem

