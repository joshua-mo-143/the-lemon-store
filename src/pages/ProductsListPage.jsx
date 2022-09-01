import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Announcement } from '../components/Navbar/Announcement'
import { Navbar } from '../components/Navbar/Navbar'
import { ProductsList } from '../components/Products/ProductsList'

export const ProductsListPage = () => {
  return (
    <>
        <h1 style={{textAlign: 'center'}}>all products</h1>
    <ProductsList/>
    </>

  )
}
