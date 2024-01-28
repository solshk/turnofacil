import React from 'react'
import { Link } from 'react-router-dom'

import './login.css';

function Login() {
  return (
    <>
      <nav>
        <img src="./img/favicon/android-chrome-192x192.png" alt="" />
      </nav>
      <div className='login-main'>
        <div>
          <h1>Bienvenidx de nuevo a RapiTurnos</h1>
          <form action="">
            <input type="email" id="email" name="email" placeholder='Ingresá tu email' />
            <input type="text" id="pass" name="pass" placeholder='Ingresá tu contraseña' />

            <button type="submit" className='btn-verde'>Log In</button>
          </form>
          <p>Si no tenés una cuenta en RapiTurnos, <Link to="/signup">registrate acá</Link></p>
        </div>
        
      </div>
    </>
  )
}

export default Login