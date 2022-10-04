import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {  PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
import '../styles/Body.css'
import NavBar  from './NavBar'
import Votes from './Votes'
import '../styles/global.css'
export function Body() {
    const [showModal, setShowModal] = useState(false);
    const navigate= useNavigate();
  return (
    <>
    <NavBar/>
    <div className='main__container'>
     <div>
     <h1 className='main__title'>Congreso aprueba la Vacancia Presidencial en AFP: Más del 70% votó a favor</h1>
        <p className='main__hook'>Después de un extenso pleno, el congreso aprobo la vacancia del presidente. Entérate más sobre los resultados.</p>
        {<img className="main__image"
                  src={require('./assets/congre.jpg')}
                    alt='logo' />}
        <p className='main__paragraph'> El jefe de Estado, electo en un principio para un periodo de cinco años, queda privado de seguir ejerciendo su cargo. El artículo 113 de la Constitución señala los casos en que se puede aplicar la figura</p>
      <div>
        <h2> Votación</h2>
        <p>De los 130 congresistas del los diferentes partidos participantes, un total de 107 votaron a favor, mientras que 4 votaron en contra</p>
        
        {showModal ? (<Votes />) : null}
             <h3 className='mainNew__link' onClick={() => { setShowModal(true) }}>Dale click aquí para conocer el voto de tus congresistas.</h3>
             <h1>Porcentajes</h1>

             <PieChart data={[["Voto a favor", 107], ["Voto em contra", 4], ["Ausente",18]]} />
             
             <p>Como se puede apreciar el 82% del parlamento dio la decisión de aprobar este decreto de tendrá como objetivo la vacancia del actual presidente, ya que se le acusa de incapacidad moral</p>
             <div>Para tener más detalles sobre esta importante desición de los congresitas dale click a la siguiente noticia 
             <h3 className='mainNew__link--red' onClick={() => navigate('/Conoce-a-los-congresistas')}>Conoce a las bancadas y a sus congresistas </h3></div>
      </div>
     </div>
    </div>
    </>
  )
}

export default Body