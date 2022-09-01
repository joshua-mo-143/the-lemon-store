import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'

export const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-left">
        <ul className="footer-contact-list">
            <li className="footer-contact-item">
                <Twitter/> @thelemonstore
            </li>
            <li className="footer-contact-item">
                <Instagram/> @thelemonstore
            </li>
            <li className="footer-contact-item">
                <Facebook/> @thelemonstore
            </li>
        </ul>
        </div>
        <div className="footer-center"></div>
        <div className="footer-right"></div>
    </div>
  )
}
