import React from 'react'
import Data from '../data/data.json'

import '../styles/Votes.css'
export function Votes() {
  return (
  <>
  <div className='explainer'> Si=A favor | No= En contra | Ausente=No estuvo en el pleno  </div>
  <br/>
  <div  className='body__container--data'>
    <div className='body__data--head'>
    <h4>Congresista</h4>
    <h4 className='body__data--title'>Voto</h4>
    </div>
    {
       Data && Data.length>0 && Data.map((item)=> {
       return(
     <div className='body__data'>
     
      <p className='body__element--nombre body__element'>{item.nombre}</p>
      
       <p className='body__element--voto body__element'>{item.voto}</p>
     </div>  
       )})
     }
      </div>
     </>
  )
}

export default Votes