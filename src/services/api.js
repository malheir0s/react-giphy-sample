import axios from 'axios';


const api_giphy = axios.create({
    baseURL: 'http://api.giphy.com/v1',
});

export default api_giphy;