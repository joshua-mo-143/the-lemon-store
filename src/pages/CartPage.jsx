import React, { useContext } from 'react'
import { cartContext } from '../components/Contexts'
import { Navbar } from '../components/Navbar/Navbar';
import { Announcement } from '../components/Navbar/Announcement';
import { SettingsApplicationsRounded } from '@material-ui/icons';

export const CartPage = () => {

    const {cart, addCart} = useContext(cartContext);
    const cartTotal = Number(cart.reduce((total, cart) => (cart.itemPrice * cart.itemQty) + total, 0).toFixed(2));
    const shipping = 15.99
    const totalWithShipping = cartTotal + shipping;

  return (
    <>
    <h1 style={{textAlign: 'center'}}>your cart</h1>
    {cart.length == 0 ?
    <h1 style={{textAlign: 'center'}}>you haven't put anything in your cart :(</h1> :
    <div className="cart-page-wrapper">
    <div className="cart-page-container">
        {cart.map((item) => (
          <>
            <div className="cart-item-container" key={item.itemId}>
              <img src={item.itemImg}/>
                <div className="cart-text-container">
                <p>item name: {item.itemName.toLowerCase()}</p>
                <p>price: £{item.itemPrice}</p>
                <p>quantity: {item.itemQty}</p>
                </div>
            </div>
          </>
        ))}
    </div>
    <div className="cart-summary-container">
      <h1>total summary</h1>
      <hr/>
          <h3><span>total: </span>£{cartTotal}</h3>
          <h3><span>shipping: </span> £{cartTotal >= 300 ? `0.00` : `15.99`}</h3>
        <hr/>
          <h2>summary total: £{cartTotal >= 300 ? cartTotal : (totalWithShipping).toFixed(2)}</h2>
          <button className="pay-with-stripe">Pay with Stripe</button>
          <button className="dump-cart" onClick={() => addCart([])}>Dump cart</button>
        </div>
    </div>
    
    }
    </>
  )
}
