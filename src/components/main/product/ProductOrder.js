import React from 'react'
import './ProductOrder.css'

export default function ProductOrder(){
  return (
    <>
     <ul className='m-0 d-flex order-list flex-wrap p-0 list-unstyled'>

       <li className='order-item'>
         <div className='order-inner'>
           <p className='order-text'>1 Pallet Delivered Price</p>
         </div>
         <div className='order-part pt-3'>
           <span  className='bold-price'>$5.65/Cs</span>
           <p className='bold-price'>$565.13/Pit</p>
           <p>$0.02/oz</p>
         </div>
       </li>

       <li className='order-item'>
         <div className='order-inner'>
           <p className='order-text'>3 Pallet Delivered Price</p>
         </div>
         <div className='order-part pt-3'>
           <span  className='bold-price'>$5.23/Cs</span>
           <p className='bold-price'>$523.13/Pit</p>
           <p>$0.02/oz</p>
           <p className='order-text text-danger'>(Save Up To 12%)</p>
         </div>
       </li>

       <li className='order-item'>
         <div className='order-inner'>
           <p className='order-text'>5 Pallet Delivered Price</p>
         </div>
         <div className='order-part pt-3'>
           <span  className='bold-price'>$4.97/Cs</span>
           <p className='bold-price'>$565.13/Pit</p>
           <p>$0.02/oz</p>
           <p className='order-text text-danger'>(Save Up To 16%)</p>
         </div>
       </li>
       
     </ul>
    
    </>
  )
}