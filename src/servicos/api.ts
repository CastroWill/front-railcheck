import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.1.11:8080"
});

api.interceptors.request.use(request => {   console.log('URL completa da requisição:', request.url);   return request; });

export default api;