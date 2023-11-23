import { useState } from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/Recuperar.css";

const Recuperar = () => {
    const [correo, setCorreo] = useState("");
    
    const onIngresar = async () => {{
        if(correo == ""){
            alert("El correo es requerido");
            return; 
        }
        const url = "http://localhost:4000/Recuperar/Enviar";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                CorreoElectronico: correo
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            const mensaje = await response.json();
            alert(mensaje);
        }
        else {
            alert("Correo enviado correctamente");
        }
    }}

    return(
        <div className="contenedorb">

        <div className="titulob">Enseña.Me LSM</div>

        <div>
        <img src={logotipo} className="logob"/>
        </div>
        
        <div className="RecuperarContrasenab">
           Recuperar Contraseña 
        </div>
        <div className="agrupador-correob">
        <div>Correo Electronico</div>
        <div>
            <input
            type="text"
            placeholder="Ingresa tu correo electrónico"
            className="caja-correob"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)} />
        </div>
        </div>

        <div className="agrupador-botonb">
            <button className="boton-aceptarb" onClick={()=> onIngresar() }>Aceptar</button>
        </div>

        <div className="agrupador-botonb">
            <a className="boton-regresarb" href="/">Regresar</a>
        </div>

        </div>
    )
}

export default Recuperar
