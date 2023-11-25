import axios from 'axios';
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
        'Authorization': `Bearer ${localStorage.getItem(CREDENCIALES)}`
    }
})

export { _httpGet, _http, _httpToken }