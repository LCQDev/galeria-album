import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { api } from '../api';
import { Album } from '../types/Album';
import { AlbumItem } from './AlbumItem';
import { Loading } from './Loading';

export const Albums = () => {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(false);

    // Função melhorada usando async/await
    const loadAlbums = async () => {
        setLoading(true);
        let json = await api.getAlbums();
        setLoading(false);
        setAlbums(json);
    }

    useEffect( () => {
        loadAlbums();
    }, []);

    return (
        <div className="bg-slate-800 min-h-screen">
            
            {loading &&
                <div className='container mx-auto grid grid-cols-1 gap-8 py-8 place-content-center'>
                    <span className='text-white text-lg font-oswald text-center flex justify-center'>
                        <Loading />
                        <div className='flex items-center'>Carregando fotos...</div>
                    </span>
                </div>
            }
            
            {!loading && albums.length > 0 &&
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-5 py-8 place-content-center">

                    {albums.map( (item, index) => (
                        <AlbumItem data={item} key={index} />
                    ))}

                </div>
            }
            
        </div>
    )
}