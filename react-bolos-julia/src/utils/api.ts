import axios from "axios";    //chamando pacote axios

const api = axios.create({
    baseURL:"http://localhost:3000/"     //configurando a url para rodar a api
})

export default api;