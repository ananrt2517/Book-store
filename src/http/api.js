import http from './http';

export const getBooksApi = async () =>{
    try {
        const { data } = await http.get('/search.json?q=lord+of')
        return data
    } catch (error) {
        return error.message
    }
    
    
}