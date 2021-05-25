import React from 'react';

function App5 () {
    return (
        <div id="Password">
            <p>Ingrese Email de verificación: </p>
            <input id="Mail" type="text" placeholder="Email" name="uname" required />
            <p>Ingrese contraseña Nueva: </p>
            <input id="password1"  type="password" placeholder="Nueva contraseña" name="uname" required></input>
            <p>Confirmar contraseña Nueva: </p>
            <input id="password2"  type="password" placeholder="Confirmar contraseña" name="uname" required></input>
                <a href="/Products">
                  <button id="button">
                   Confirmar
                  </button>
                </a>
        </div>
    )
}

export default App5;
