import axios from 'axios'

const api = axios.create({
    baseURL: 'https://vexa-second-brain.onrender.com/api/knowledgeGraph',
    withCredentials: true
})

export const getGraphApi = async () => {
    const response = await api.get(`/getGraph`);
    return response.data;
}
