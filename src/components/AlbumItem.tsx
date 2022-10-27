import { Link } from 'react-router-dom';
import { Album } from '../types/Album';

type Props = {
    data: Album
}

export const AlbumItem = ({data}:Props) => {
    return (
        <div className="col-span-1 text-white">
            <Link to={`/album/${data.id}`}>
                <h1 className='font-oswald font-light text-2xl hover:text-slate-400 hover:animate-pulse'>{data.title}</h1>
            </Link>
        </div>
    )
}