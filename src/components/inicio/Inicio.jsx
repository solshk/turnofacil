import React from 'react'
import { Link } from "react-router-dom";

import './inicio.css';



function Inicio() {


    return (
        <main>
            <nav>
                <img src="./img/favicon/android-chrome-192x192.png" alt="" />
                <ul>
                    <li><a href="#demo">Demo</a></li>
                    <li><a href="#demo">Precios</a></li>
                    <li><a href="#registro">Login</a></li>
                </ul>
            </nav>

            <div class="name">
                <h1>RAPITURNO</h1>
            </div>

            <div class="catchphrase">
                <h2>El único sistema de gestión de agenda que necesitas</h2>
            </div>

            <div className="reg-action">
                <p>Registrate gratis con Google</p>
                <Link to="/login">
                    <button type="submit" className='btn-verde'>Google</button>
                </Link>

                <p>-- o --</p>
                <Link to="/login">
                    <a>Registrate gratis con tu email</a>
                </Link>

            </div>

            <div class="demo-img" id='demo'>
                <div>
                    <img src="./img/favicon/android-chrome-192x192.png" alt="" />
                </div>
            </div>

            <div class="demo-text1">
                <div>
                    <h3>blablabla</h3>
                </div>
            </div>

            <div class="demo-text2">
                <div>
                    <h3>blablabla</h3>
                </div>
            </div>

            <div class="reviews">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>

            <div class="registro" id='registro'>
                <div className="registro-container">
                    <h3>Registrate para tener tu cuenta en Rapiturno</h3>
                    <form action="">
                        <input type="email" id="email" name="email" placeholder='Ingresá tu email' />
                    </form>
                    <Link to="/login">
                        <button type="submit" className='btn-verde'>Registrate</button>
                    </Link>
                    <p>-- o --</p>
                    <Link to="/login">
                        <button type="button" className='btn-azul'>Registrate con Google</button>
                    </Link>
                    <a href="#registro"><p>Iniciar sesión</p></a>
                </div>
            </div>

            <footer>
                <p className="footer__creditos">Hecho con ❤ por <a href="https://github.com/solshk">solshk</a></p>
            </footer>
        </main>
    )

}

export default Inicio