import axios from 'axios'

const api = axios.create({
    baseURL:'http://170.81.209.22:3333'
});

export default api;
