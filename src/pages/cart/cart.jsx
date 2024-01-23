import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { PRODUCTS } from "../../data/products";
import Product from "../shop/product";

const Cart = () =>{
    const {cartItems , resetCart} = useContext(ShopContext);
    return(
        <React.Fragment>
        <h1>Your Cart items</h1>
        <div className="row">
            {PRODUCTS.map((p)=>{
                if( cartItems?.some((i)=> i.id === p.id && i.count >0))
                return <Product data={p}></Product>
            })}
        </div>
        <button className="btn btn-warnning m-3" onClick={resetCart}>reset</button>
        </React.Fragment>
    )
}
export default Cart;