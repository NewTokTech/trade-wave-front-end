import axios from 'axios';

export const axiosInstance = axios.create({
    // baseURL: 'https://music-api-nh5j.onrender.com/api/',
    baseURL: 'http://localhost:8080/api/',
  });