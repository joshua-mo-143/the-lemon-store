import React from 'react'
import { Announcement } from '../components/Navbar/Announcement'
import { Navbar } from '../components/Navbar/Navbar'

export const PaymentCompleted = () => {
  return (
    <Navbar/>
    <Announcement/>
    <h1>Payment completed!</h1>

    <Link to="/">Back to home</Link>
  )
}
