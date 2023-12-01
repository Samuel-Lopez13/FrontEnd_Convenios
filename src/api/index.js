/*import axios from 'axios';
import {CREDENCIALES} from "@/utils/constantes/Constantes";

const _baseUrl = 'http://localhost:5193';

const _httpGet = axios.create({baseURL: _baseUrl})
const _http = axios.create({
    baseURL: _baseUrl,
    headers: {
        'Content-Type': 'application/json',
    }
})

const _httpToken = axios.create({
    baseURL: _baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("Credenciales")}`
    }
})

const _httpTokenFile = axios.create({
    baseURL: _baseUrl,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem("Credenciales")}`
    }
})

export { _httpGet, _http, _httpToken, _httpTokenFile }*/

// Axios.js
import axios from 'axios';

let _httpGet, _http, _httpToken, _httpTokenFile;

const configurarAxios = () => {
    console.log("ya cargué");
    const _baseUrl = 'http://localhost:5193';

    _httpGet = axios.create({ baseURL: _baseUrl });
    _http = axios.create({
        baseURL: _baseUrl,
        headers: {
            'Content-Type': 'application/json',
        }
    });
    _httpToken = axios.create({
        baseURL: _baseUrl,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Credenciales")}`
        }
    });
    _httpTokenFile = axios.create({
        baseURL: _baseUrl,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem("Credenciales")}`
        }
    });
};

// Exporta las funciones de configuración para que puedan ser llamadas desde otros módulos
export { configurarAxios, _httpGet, _http, _httpToken, _httpTokenFile };
