import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-donamaid.herokuapp.com/',
});

export default api;
