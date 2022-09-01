import React, {useContext, useState} from 'react'
import { useParams } from 'react-router-dom';
import { cartContext } from '../components/Contexts';
import { Footer } from '../components/Footer/Footer';
import { Announcement } from '../components/Navbar/Announcement';
import { Navbar } from '../components/Navbar/Navbar';
import { Products } from '../Data'


export const ProductPage = (props) => {

    const productId = useParams().id;

    const {cart, addCart} = useContext(cartContext);

    const [qty, setQty] = useState(1);
    const [addToCart, setAddToCart] = useState({});

  return (
    <>
    <div className="product-page-wrapper">
    {Products.filter(x => x.id == productId).map((item) => (
        <div className="product-page-container" key={item.id}>
          <div className="product-img-container">
            <img src={item.img}/>
            </div>
            <div className="product-text-container">
                <h1>{item.title.toLowerCase()}</h1>
                <h3>£{item.price}</h3>
                <h3>{item.desc.toLowerCase()}</h3>
                <div className="product-toCart-container">
                  {/* check if item in cart; if not, add to cart */}
              <button onClick={() => { 
                cart.find((x) => x.itemId == item.id) ?
                cart.forEach((cartItem) => {
                  if (cartItem.itemId == item.id) {
                    cartItem.itemQty++
                  }
                })
                :
              // add single item to cart
               addCart([...cart, {
                itemId: item.id, 
                itemImg: item.img,
                itemName: item.title, 
                itemPrice: item.price, 
                itemQty: 1}])}}>
                Add to cart
                </button>
            </div>
            </div>
        </div>
    ))}
    </div>
    </>
  )
}
