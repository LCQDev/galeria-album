import axios from 'axios';

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAlbums: async () => {
        try {
            let response = await http.get('/albums');
            return response.data;
        } catch(e){
            alert('Erro! Tente mais tarde');
        }
    },
    getAlbum: async (albumId: string) => {
        let response = await http.get('/photos/', {
            params: { albumId: albumId }
        });
        return response.data;
    },
    getPhotos: async () => {
        try {
            let response = await http.get('/photos');
            return response.data.slice(0, 18);
        } catch(e){
            alert('Erro! Tente mais tarde');
        }
    },
    getPhoto: async (id: string) => {
        let response = await http.get('/photos/', {
            params: { id: id }
        });
        return response.data;
    }
}