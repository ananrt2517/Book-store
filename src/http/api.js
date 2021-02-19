import http from './http';

export const getBooksApi = async (query) =>{
    try {
        const { data } = await http.get(`/search.json?q=${query}`);
        return data
    } catch (error) {
        return error.message
    }
    
    
}