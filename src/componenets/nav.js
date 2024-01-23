import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import iccart from '../icons/shopping-cart-2030.png'
import styles from "./nav.css";

const Nav = () =>{
    const {cartItems} = useContext(ShopContext)
    const itemCount = cartItems?.reduce((prev , current)=> {
        return prev + current.count
    } , 0);
    return(
        <div className="navbar navbar-light bg-dark navbar-expand-lg">
            <div className="containter">
                <a className="navbar-brand">MHA</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className='nav-link'>shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className='nav-link'>
                        <img src={iccart} alt="icon" />
                        { itemCount>0 && <span className={styles.cartItemCount}>{itemCount}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;