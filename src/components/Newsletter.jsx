import { ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'

export const Newsletter = () => {
  return (
    <div className="newsletter-container">
        <h1>subscribe to receive lemons</h1>
        <form className="newsletter-form">
            <input className="newsletter-email-input" type='email'></input>
            <button className="newsletter-submit"><ArrowForwardIosOutlined/></button>
        </form>
    </div>
  )
}
