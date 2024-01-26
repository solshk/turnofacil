import React from 'react'
import './inicio.css';


function Inicio() {


    return (
        <main>
            <nav>
                <img src="./img/favicon/android-chrome-192x192.png" alt="" />
                <ul>
                    <li>Demo</li>
                    <li>Precios</li>
                    <li>Login</li>
                </ul>
            </nav>

            <div class="name">
                <h1>RAPITURNO</h1>
            </div>

            <div class="catchphrase">
                <h2>El único sistema de gestión de agenda que necesitas</h2>
            </div>

            <div class="demo-img">
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

            <div class="registro">
                <h3>Registrate para tener tu cuenta en Rapiturno</h3>
                <form action="">
                    <input type="email" id="email" name="email" placeholder='Ingresá tu email'/>
                </form>
                <button type="submit" className='btn-verde'>Registrate</button>

                <p>-- o --</p>
                
                <button type="button" className='btn-azul'>Registrate con Google</button>
                
                <a href=""><p>Iniciar sesión</p></a>

                  
            </div>

            <footer>
                <p className="footer__creditos">Hecho con ❤ por <a href="https://github.com/solshk">solshk</a></p>
            </footer>
        </main>
    )
    
}

export default Inicio