import React from 'react'
import '../styles/navBar.css'
function NavBar() {
  return (
 <div className='header__navcontainer'>
     <div className='header__navcontainer--size'>
         {<img className="logo"
                  src={require('./assets/logo-white.PNG')}
                    alt='logo' />}
    </div>
   
</div>
  )
}

export default NavBar