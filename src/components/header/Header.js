import React from 'react'
import './Header.css'
import MiniHeader from './miniHeader/MiniHeader'
import MainLogo from '../../Images/main-logo.svg'
import Navbar from './navbar/Navbar'

export default function Header (){
  return (
   <>
    <header>

      <div className='mini-header'>
        <div className='container'>
          <MiniHeader/>
        </div>
      </div>

      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>

          <div className='d-flex align-items-center'>

            <a className='me-5' href='#'><img src ={MainLogo} width='100' height='100'></img></a>
            <div className='input-wrapper'>
              <i className='bx bx-search'></i>
              <input className='header-input' placeholder='Type to search' type='text'></input>
              <select className='header-select pb-1'>
                <option>All categories</option>
                <option>Food</option>
                <option>Clothes</option>
                <option>Fruits</option>
              </select>
            </div>
          </div>

          <ul className='m-0 d-flex p-0 list-unstyled'>
            <li className='d-flex category-item align-items-center'>
              <i className='bx category-icon bx-envelope'></i>
              <a className='ms-1 category-link' href='#'>Orders</a>
            </li>

            <li className='d-flex category-item align-items-center'>
              <i className='bx category-icon bx-basket' ></i>
              <a className='ms-1 category-link' href='#'>Cart</a>
            </li>

            <li className='d-flex category-item align-items-center'>
              <i className='bx category-icon bx-user'></i>
              <a className='ms-1 category-link' href='#'>Profile</a>
            </li>
          </ul>
        </div>

        <Navbar/>
      </div>

    </header>
   </>
  )
}