import React from 'react'
import { Products } from '../../Data'
import { Link } from 'react-router-dom'

export const NewArrivals = () => {
  return (
  <div className="new-arrivals-wrapper">
    <h1 style={{textAlign: 'center'}}>new arrivals</h1>
    <div className="new-arrivals-container">
        {Products.slice(-3).sort((a, b) => {return b.id - a.id}).map((item) => (
            <div className="item-container" key={item.id}>
                <Link to={`/products/${item.id}`}><img src={item.img}/></Link>
                <p className="item-title">{item.title.toLowerCase()}</p>
                <p className="item-price">£{item.price}</p>
            </div>
        ))}

    </div>
    <Link to="/products"><button className="see-more">see more products</button></Link>
    </div>
    
  )
}
