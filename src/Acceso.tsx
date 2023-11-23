import { useState } from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/acceso.css";
import { useNavigate } from "react-router-dom";

const Acceso = () => {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const onIngresar = async() => {{
        if(correo == ""){
            alert("El correo es requerido");
            return; 
        }

        }
        if(contrasena == ""){
            alert("La contraseña es requerida");
            return; 
        }
        const url = "http://localhost:4000/inicio/IniciarSesion";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                CorreoElectronico: correo,
                Contrasena: contrasena
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            navigate("/categorias");
        }else {
            alert("Acceso correcto");
            navigate("/inicio")
        }
    }

    return(
        <div className="contenedora">

        <div className="tituloa">Enseña.Me LSM</div>

        <div>
        <img src={logotipo} className="logoa"/>
        </div>
        
        <div className="agrupador-correoa">
        <div>Correo Electronico</div>
        <div>
            <input
            type="text"
            placeholder="Ingresa tu correo electrónico"
            className="caja-correoa"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)} />
        </div>
        </div>

        <div className="agrupador-passworda">
            <div>Contraseña</div>
        <div>
            <input
            type="password"
            placeholder="Password"
            className="caja-passworda"
            value={contrasena}
            onChange={(e)=> setContrasena(e.target.value)}
            />
        </div>
        </div>

        <div className="agrupador-botona">
            <button className="boton-ingresara" onClick={()=> onIngresar() }>Ingresar</button>
        </div>

        <div className="otros-botonesa">
            <a href="/registro" className="link-registroa">Registrarse</a>
            <a href="recuperar-password" className="link-passworda ">Olvidé mi contraseña</a>
        </div>

        </div>
    )
}

export default Acceso
