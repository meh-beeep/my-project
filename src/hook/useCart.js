import { useEffect, useState } from "react"

export const useCart = ()=>{
    const [cartItems , setCartItems] = useState();

    useEffect(()=>{
        const data = localStorage.getItem("customer_cart")
        setCartItems(!!JSON.parse(data) ? JSON.parse(data) : [])
    }
     , [])

    useEffect(()=>{
        if( cartItems !== undefined )
        localStorage.setItem("customer_cart" , JSON.stringify(cartItems))
    },[cartItems])

    const addToCart=function(itemId){
        if(!cartItems?.find((item)=> item.id === itemId))
        setCartItems([...cartItems , {id : itemId , count : 1}])
        else
        setCartItems(cartItems.map((newItem)=>{
            if (newItem.id === itemId)
                return {...newItem , count : newItem.count+1} 
                else return newItem
        }))
    }

    const removeFromCart = (itemId)=>{
        setCartItems(cartItems.map ((i)=>{
            if(i.id === itemId)
            return {...i , count : i.count===0? 0 : i.count-1}
            else return i
        }))
    }
    const resetCart =()=>{
        setCartItems([]);
        localStorage.removeItem("customer_cart");
        localStorage.clear()
    }
    return {cartItems , addToCart , removeFromCart , resetCart}
}