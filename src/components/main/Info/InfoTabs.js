import React from 'react'
import './Info.css'

const InfoTab = ['Overview', 'Nutritionals', 'Palette/Case Configuration', 'Shipping/Storage', 'Docs & Certs']


export default function InfoTabs(){
  return (
    
    <>
     <ul className='m-0 d-flex p-0 list-unstyled'>
       {InfoTab.map((item, i) =>{
         return <li key={i} className='info-item active'><button className='info-links'>{item}</button></li>
         
       })}

     </ul>
    
    </>
  )
}