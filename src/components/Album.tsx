import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { api } from '../api';
import { Photo } from '../types/Photo';
import { Loading } from './Loading';
import { PhotoItem } from './PhotoItem';

export const Album = () => {
    const params = useParams();

    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(false);

    // Função melhorada usando async/await
    const loadAlbum = async () => {
        setLoading(true);
        let json = await api.getAlbum(`${params.albumId}`);
        console.log(params)
        setLoading(false);
        setPhotos(json);
    }

    useEffect( () => {
        loadAlbum();
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
            
            {!loading && photos.length > 0 &&
                <>
                    <div className="container mx-auto grid grid-cols-3 md:grid-cols-6 gap-8 px-5 py-8 place-content-center">

                        {photos.map( (item, index) => (
                            <PhotoItem data={item} key={index} />
                        ))}


                    </div>

                    <div className="col-span-1 py-8 flex justify-center">
                        <Link to="/" className='bg-slate-900 hover:bg-slate-600 text-white px-8 py-4 rounded animate-pulse'>VOLTAR</Link>
                    </div>
                </>
                
            }
            
        </div>
    )
}