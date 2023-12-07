import React,{createContext,useState} from 'react';
import {MenuList} from './MenuList';
export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    var cart = {};
    //因為MenuList產品id從1開始,所以i從1開始
    for(let i=1 ; i<MenuList.length+1;i++){
        cart[i]=0;
    }
    return cart;
};
export const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    const getCartTotalAmount = ()=>{
            let totalAmount = 0;
            for(const item in cartItems){
                if(cartItems[item]>0){
                    let itemInfo=MenuList.find((product)=>
                        product.id===Number(item)
                    );
                    totalAmount +=cartItems[item]*itemInfo.price;
                }
            }
            return totalAmount;
    };
    
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));   
    };

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:(prev[itemId]>0)?prev[itemId]-1 :0}));   
    };

    const updateCartItemCount = (newCount,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newCount}));
    }

    const contextValue = {
        cartItems,
        getCartTotalAmount,
        addToCart,
        removeFromCart,
        updateCartItemCount
    };
    
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}
