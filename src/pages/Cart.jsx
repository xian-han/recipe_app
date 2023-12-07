import React, { useContext } from 'react';
import { MenuList } from '../helpers/Menu/MenuList'; 
import { ShopContext } from '../helpers/Menu/Shop-Context';
import CartItem from '../Components/CartItem';
import '../styles/Cart.css';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const {cartItems,getCartTotalAmount} = useContext(ShopContext);
  const totalAmount = getCartTotalAmount();
  const navigate = useNavigate();
  return (
    <div className = "cart">
      <div className="cartTitle">
        <h1>My Cart</h1>
      </div>
      <div className = "cartList">
          {MenuList.map((product)=>{
            if(cartItems[product.id]!==0)
            return <CartItem data={product}/>;
          })}
      </div>
      {totalAmount >0 ?(
      <div className="checkout">
          <p>subtotal:${totalAmount}</p>
          <button onClick={()=>navigate('/menu')}>Countinue Shopping</button>
          <button>CheckOut</button>
      </div>
      ):(
      <div className="checkout">
          <h1>Your Cart is Empty!</h1>
          <button onClick={()=>navigate('/menu')}>Countinue Shopping</button>
      </div>
      )
      }
    </div>
  )
}

export default Cart
