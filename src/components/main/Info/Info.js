import React from 'react'
import InfoTabs from './InfoTabs'
import Tables from './Tables'


export default function Info(){
  return (
    <>
     <section className='mt-5'>
       <div className='container'>
         <InfoTabs/>

         <Tables/>

       </div>
     </section>
    
    </>

  )
}