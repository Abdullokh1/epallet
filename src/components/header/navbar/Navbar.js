import React from 'react'
import './Navbar.css'
const NavArr = ['Food Service', 'Health & Beauty', 'Indusrtial Ingredients', 'Beverages', 'Pet Supplies', 'Frozen', 'Cleaning Products']

export default function Navbar(){
  return (
    <>
      <ul className='m-0 mt-3 p-0 list-unstyled d-flex justify-content-between'>
        {NavArr.map((item, i) =>{
         return <li key={i}><a className='nav-link p-0' href='#'>{item}</a></li>
        })}
      </ul>
    </>
  )
}