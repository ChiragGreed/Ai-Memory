import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000/api/items',
    withCredentials: true
})

export const getItems = async () => {
    const response = await api.get('/getItems');
    return response.data;
}