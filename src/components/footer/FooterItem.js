import React from 'react'
import './Footer.css'

const footerItem = [
  {
    links: [
      'For Customers',
      'Returns',
      'Payment Accounts',
      'Policies',
      'Personal Assistance',
      'Shipping Tracking',
    ]
  },
  {
    links: [
      'For Vendors',
      'Pricing',
      'Shipping Requirements',
      'Balance Recharge',
      'How to Advertise',
    ]
  },
  {
    links: [
      'Company',
      'About',
      'Jobs',
      'Press Kit',
      'Contact',
      'Privacy & Terms',

    ]
  },
  {
    links: [
      'Help Center',
      'Shipping Rates & Policies',
      'Returns & Replacements',
      'Manage your accounts',
      'Epallet Assistance',
      'Help',


    ]
  },

]

export default function FooterLists(){
  return (
    <>
     
    <ul className="mb-5 d-flex justify-content-between w-100  p-0 list-unstyled">
         
    {footerItem.map((item, i) =>{
      return (
        <>
         <li>
           {item.links.map(el =>{
             return <a className="footer-links" href="#">{el} <br></br></a>
           })}
         </li>
        </>
      )
    })}
   </ul>
    </>
  )
}