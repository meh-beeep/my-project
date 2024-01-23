import { createContext , useState} from "react";

export const ShopContext = createContext();

export const ShopContextProvider = (props)=>{
    const [cartItems , setCartItems] = useState([])

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
    
    const contextValues = {cartItems , addToCart , removeFromCart};
    return (<ShopContext.Provider value={contextValues}>{props.children} </ShopContext.Provider>);
};
