import React from 'react'
import './MiniHeader.css'

export default function MiniHeader(){
  return (
    <>
     <div className='d-flex p-2 justify-content-between'>
       <div className='d-flex align-items-center'>
          <p className='me-5 text-white mb-0'>En</p>
          <i className='bx text-white bxs-edit-location'></i>
          <span className='text-white'>Austin, TX</span>
       </div>
       <div>
         <a className='text-white me-5' href='tel:0000'>1(800) 532 6220</a>
         <a className='text-white' href='#'>Help center</a>
       </div>
     </div>
    </>
  )
}