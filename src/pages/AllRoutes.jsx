import React, {useContext, useState, useMemo, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from './Home'
import {ProductPage} from './ProductPage'
import {ProductsListPage} from './ProductsListPage'
import { cartContext, userContext } from '../components/Contexts'
import { LoginPage } from './LoginPage'
import { Announcement } from '../components/Navbar/Announcement'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { CartPage } from './CartPage'
import { CallReceived } from '@material-ui/icons'

export const AllRoutes = () => {

  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);

  const [cart, addCart] = useState([]);

  return (
    
    <userContext.Provider value={{user, setUser}}>
      <cartContext.Provider value={{cart, addCart}}>
      <div className="page-wrapper" style={{minHeight: 'calc(100vh-50px)'}}>
      <Navbar user={user}/>
    <Announcement/>

  <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/products" element={<ProductsListPage/>}/>
    <Route path="/products/:id" element={<ProductPage/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
  </Routes>
  </div>
  <Footer/>
  </cartContext.Provider>
  </userContext.Provider>
  
  )
}
