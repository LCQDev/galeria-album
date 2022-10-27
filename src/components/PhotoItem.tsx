import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Photo } from '../types/Photo';

type Props = {
    data: Photo
}

export const PhotoItem = ({data}:Props) => {
    return (
        <div className="col-span-1 text-white">
            <Link to={`/details/${data.id}`}>
                <img src={data.thumbnailUrl} alt="Photos" className='w-full rounded-2xl'/>
            </Link>
        </div>
    )
}