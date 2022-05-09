import React from 'react'
import './Product.css'
import ProductPrice from './ProductPrice'
import ProductImg from '../../../Images/product-img.jpeg'
import ProductOrder from './ProductOrder'

export default function Product(){
  return (
    <>
     <section className='mt-5'>
       <div className='container'>
         <div className='d-flex justify-content-between'>
           <div className='me-5'>
             <img className='product-img' src={ProductImg} width='400' height='400'></img>
             <ul className='m-0 mt-4 d-flex p-0 list-unstyled'>
               <li>
                 <button className='product-btn'>
                   <img className='product-img' src={ProductImg} width='50' height='50'></img>
                 </button>
               </li>

               <li>
                 <button className='product-btn'>
                   <img className='product-img' src={ProductImg} width='50' height='50'></img>
                 </button>
               </li>

               <li>
                 <button className='product-btn'>
                   <img className='product-img' src={ProductImg} width='50' height='50'></img>
                 </button>
               </li>

               <li>
                 <button className='product-btn'>
                   <img className='product-img' src={ProductImg} width='50' height='50'></img>
                 </button>
               </li>

               <li>
                 <button className='product-btn'>
                   <img className='product-img' src={ProductImg} width='50' height='50'></img>
                 </button>
               </li>
             </ul>
           </div>

           <div className='col-4'>
             <p className='mb-3 product-name'>MOTT'S</p>
             <p className='mb-1 product-desc'>Motto's Unsweetened Applesauce</p>
             <span className='product-size mb-3 d-inline-block'>Pack Size: <span className='text-dark'>24/16.90 oz</span></span>
             <p className='product-size'>Chef Maxwell Applesauce is a delicious classic and part of a healty diet low in saturated fat with 40% Vitamin C</p>
             <a className='p-0 text-decoration-underline fs-7' href='#'>
               <i className='bx fs-3 bx-cloud-download'></i>
               Download Spec Sheet
              </a><br></br>
              <span className='line'></span>

              <ProductPrice/>

           </div>
            <ProductOrder/>
         </div>

       </div>
     </section>
    </>

  )
}