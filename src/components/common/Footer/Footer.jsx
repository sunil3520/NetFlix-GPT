import React, { useState } from 'react'
import { Footer_Data } from '../../../utils/constant'
import FooterCart from './FooterCart'
const Footer = () => {
  const [expandAll, setExpandAll] = useState(false)


  const getOnlySixElement = () =>{
    let output = Footer_Data.filter((el,i)=>i<6)
    return output;
  }

  return (
   <div className=' p-12 bg-black text-white'>
     <div className=' grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6'>
        {
          expandAll && Footer_Data.map((el,i)=>{
            return(
              <FooterCart heading={el.heading} name={el.name} expandFlag = {expandAll}/>
            )
          })
        }

        {
          !expandAll && getOnlySixElement().map((el,i)=>{
            return (
              <FooterCart heading={el.heading} name={el.name}/>
            )
          })
        }
        
    </div>
      <div className="text-center -mt-3">
      <span className='text-[14px] cursor-pointer text-green-500' onClick={()=>setExpandAll(!expandAll)}> {expandAll? "Collapse All⬆" :"Expand All ⬇"}</span>
      </div>
   </div>
  )
}

export default Footer