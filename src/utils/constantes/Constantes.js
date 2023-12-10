import router from "@/router";
import {DatosPersonales} from "@/api/provides/usuario.services";

export const CREDENCIALES = "Credenciales"
export const BASEURL = "http://localhost:5193"

export const verificarAcceso =  () => {
    if(localStorage.getItem("Credenciales") == null){
        router.push("/");
    }
}

export const verificarRol = async () => {
    var rol = await DatosPersonales.userRol();
    console.log(rol);
    if (rol === "Usuario") {
        router.push('/Terminos')
    }
}