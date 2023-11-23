import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/Registro.css";

const Registro = () => {
    const [correo, setCorreo] = useState("");

    const navigate = useNavigate();
    
    const [nombre, setNombre] = useState("");

    const [contrasena, setContrasena] = useState("");

    const onRegistrar = async () => {{
        if(correo == ""){
            alert("El correo es requerido");
            return; 
        }
        if(nombre == ""){
            alert("El nombre es requerido");
            return; 
        }
        if(contrasena == ""){
            alert("La contraseña es requerida");
            return; 
        }
        const url = "http://localhost:4000/Registrarse/Enviar";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                Nombre: nombre,
                CorreoElectronico: correo,
                Contrasena: contrasena
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
            alert("Usuario registrado correctamente");
            navigate("/");
        }
    }}

    return(
        <div className="contenedorc">

        <div className="tituloc">Enseña.Me LSM</div>

        <div>
        <img src={logotipo} className="logoc"/>
        </div>
        
        <div className="Registroc">
           Registrarme
        </div>
        <div className="agrupador-correoc">
        <div>Correo Electronico</div>
        <div>
            <input
            type="text"
            placeholder="Ingresa tu correo electrónico"
            className="caja-correoc"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)} />
        </div>
        </div>
        <div className="agrupador-nombrec">
        <div>Nombre</div>
        <div>
            <input
            type="text"
            placeholder="Ingresa tu nombre completo"
            className="caja-nombrec"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)} />
        </div>
        </div>
        <div className="agrupador-contrasenac">
        <div>Contraseña</div>
        <div>
            <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className="caja-contrasenac"
            value={contrasena}
            onChange={(e)=> setContrasena(e.target.value)} />
        </div>
        </div>
        

        <div className="agrupador-botonc">
            <button className="boton-aceptarc" onClick={()=> onRegistrar() }>Registrarse</button>
        </div>

        <div className="agrupador-botonc">
            <a className="boton-regresarc" href="/">Regresar</a>
        </div>

        </div>
    )
}

export default Registro
