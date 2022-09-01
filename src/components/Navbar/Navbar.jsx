import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { userContext, cartContext } from '../Contexts';


export const Navbar = () => {

    const {user, setUser} = useContext(userContext);

    const [auth, setAuth] = useState(false);
    const {cart, addCart} = useContext(cartContext);
    
  useEffect(() => {
    if (user) {
        setAuth(true)
    }
    },[])

  return (
    <nav className="navbar">
        <div className="nav-left"></div>
        <div className="nav-center">
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}><h3>the lemon store</h3></Link>
        </div>
        <div className="nav-right">
            <ul className="navbar-nav">
            <li className="nav-item">
                    <Link to="/products" style={{textDecoration: 'none', color: 'black'}}>products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}>{`cart (${cart.length})`}</Link>
                </li>

            </ul>
        </div>
    </nav>
  )
}
