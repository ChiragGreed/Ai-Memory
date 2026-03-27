import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000/api/items',
    withCredentials: true
})

export const getItemsApi = async () => {
    const response = await api.get('/getItems');
    return response.data;
}

export const searchItemsApi = async(Query)=>{
    const response = await api.get(`/searchItems?query=${Query}`);
    return response.data;
}