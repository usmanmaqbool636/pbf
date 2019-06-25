import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3080',
    timeout: 10000
})
export default instance;