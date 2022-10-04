import React from 'react'
import {useNavigate} from 'react-router-dom'
import Data from '../data/data.js'
import 'chartkick/chart.js'
import NavBar from './NavBar'
import "../styles/global.css"
import  '../styles/Votes.css'
import '../styles/ContentTwo.css'

function ContentTwo() {
const navigate=useNavigate();
  return (
    <>
    
     <button className='button__return' onClick={() => navigate('/')}>Regresar</button>
 <NavBar/>
  <div className='content__container'>
    <div className='contentMain__container '>
    
        <h1 className='main__title'>Conoce los Partidos y las regiones de los congresista </h1>
        <p className='main__hook'>El congreso contiene 130 curules los cuales representan y deciden por el futuro de esta país. Conozcamos quienes toman el puesto en esos curules</p>
        {<img className="main__image--content"
                  src={require('./assets/congres.jpg')}
                    alt='imagen' />}
        <p className='main__paragraph'>.</p>
      </div>

   <div className='container__information'>
      <h2>Conozcamos a los Congresistas por sus partidos</h2>
  <div  className='body__container--data'>
      
    {
       Data && Data.length>0 && Data.map((item)=> {
       return(
     <div className='body__data'>
     
      <p className='body__element--nombre body__element'>{item.nombre}</p>
      
       <p className='body__element--voto body__element'>{item.bancada}</p>
     </div>  
       )})
     }
        </div>
      </div>
      <div className='container__information--region'>
      <h2>Conozcamos a los Congresistas por sus regiones</h2>
  <div  className='body__container--data'>
      
    {
       Data && Data.length>0 && Data.map((item)=> {
       return(
     <div className='body__data'>
     
      <p className='body__element--nombre body__element'>{item.nombre}</p>
      
       <p className='body__element--voto body__element'>{item.region}</p>
     </div>  
       )})
     }
        </div>
      </div>
    </div>
    </>
  )
}

export default ContentTwo