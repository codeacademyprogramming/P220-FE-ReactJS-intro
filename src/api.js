import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `http://localhost:3333/`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export { axiosInstance };