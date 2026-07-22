import axios from 'axios'

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/knowledgeGraph`,
    withCredentials: true
})

export const getGraphApi = async () => {
    const response = await api.get(`/getGraph`);
    return response.data;
}
