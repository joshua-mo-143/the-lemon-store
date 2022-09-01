import React from 'react'
import { Products } from '../../Data'
import { Link } from 'react-router-dom'

export const ProductsList = () => {
  return (
    <div className="all-products-container">
    {Products.sort((a, b) => {return b.id - a.id}).map((item) => (
        <div className="item-container" key={item.id}>
            <Link to={`/products/${item.id}`}><img src={item.img}/></Link>
            <p className="item-title">{item.title.toLowerCase()}</p>
            <p className="item-price">£{item.price}</p>
        </div>
    ))}
    </div>
  )
}
