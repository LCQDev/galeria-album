import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { api } from '../api';
import { Photo } from '../types/Photo';
import { Loading } from '../components/Loading';
import { PhotoItem } from '../components/PhotoItem';

export const Details = () => {

    const params = useParams();

    const [photo, setPhoto] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(false);

    const loadPhoto = async () => {
        setLoading(true);
        let json = await api.getPhoto(`${params.id}`)
        console.log(json)
        setLoading(false);
        setPhoto(json);
    }

    useEffect( () => {
        loadPhoto();
    }, []);

    return (
        <div className='bg-slate-800 min-h-screen'>

            {loading &&
                <div className='container mx-auto grid grid-cols-1 gap-8 py-8 place-content-center'>
                    <span className='text-white text-lg font-oswald text-center flex justify-center'>
                        <Loading />
                        <div className='flex items-center'>Carregando fotos...</div>
                    </span>
                </div>
            }
            {!loading &&
                <div className="container mx-auto grid grid-cols-6 gap-8 py-8 place-content-center">

                    {photo.map( (item, index) => (
                        <>
                            <div className='col-span-2'>
                                <img src={item.url} alt="Photos" className='w-full'/>
                            </div>
                            <div className='col-span-4'>
                                <h1 className='text-white font-oswald text-5xl'>{item.title}</h1>
                                <h3 className='text-slate-200 font-oswald text-xl py-5'>Albúm ID: {item.albumId}</h3>
                                <p className='text-slate-500 mb-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque, est vel euismod tempor, ante metus consequat metus, eu malesuada diam eros sed diam. Pellentesque congue sit amet nisi vestibulum dapibus. Quisque facilisis facilisis nulla nec euismod. Nam quis orci accumsan, porta metus ut, porttitor ipsum. Donec viverra efficitur ullamcorper. Etiam nisl massa, pretium at velit in, posuere semper massa. Donec cursus luctus turpis, non gravida elit mattis sit amet. Duis blandit, ligula non elementum auctor, eros elit feugiat libero, ut porta dolor odio quis velit. Suspendisse ut lectus sed massa tristique dapibus.
                                </p>
                                <p className='text-slate-500 mb-4'>
                                    Suspendisse tempor metus nec mi porttitor, id feugiat sapien elementum. Sed volutpat leo nec aliquam vestibulum. Duis eu efficitur nisl, ut pulvinar lectus. Curabitur quis egestas est. In sed facilisis nunc, in accumsan elit. Quisque dapibus pharetra nulla et euismod. Proin eu feugiat elit. Ut tincidunt id nisl non consectetur. Ut feugiat nisi justo, ac egestas purus suscipit sit amet. Integer ornare nibh a sem dapibus fringilla. In et laoreet ligula. Donec nulla ex, imperdiet ac vestibulum eu, aliquam laoreet velit. Phasellus mauris tellus, sodales a pulvinar ut, tempor id leo.
                                </p>
                                <p className='text-slate-500 mb-4'>
                                    Vestibulum ut ultrices lorem, sit amet lacinia est. Nulla ac augue auctor, aliquam ipsum laoreet, consectetur nibh. Praesent imperdiet at neque non vestibulum. Quisque eget tincidunt nisi. Proin vel iaculis purus. Morbi id lectus metus. Fusce varius vestibulum aliquet. Nulla efficitur faucibus consectetur. Proin eu nisl sem. Praesent pharetra odio eu varius commodo. Duis vel odio ac enim bibendum condimentum quis at ipsum. Sed mollis arcu velit, tempor ullamcorper ipsum eleifend ut. Nullam fringilla egestas dolor id convallis. Nam nunc nunc, venenatis quis velit ac, posuere mattis nisl.
                                </p>
                                <p className='text-slate-500 mb-4'>
                                    Etiam euismod efficitur tellus, eu commodo eros tempor sed. Curabitur consequat tincidunt eros at interdum. Etiam ac felis vel lectus dictum tincidunt sed vel diam. Donec eget metus a lacus ullamcorper condimentum. In commodo quam nec risus aliquam cursus. Donec eleifend purus facilisis tempus mattis. Vestibulum et hendrerit nisi, non molestie est. Mauris magna neque, egestas sed leo ac, euismod sagittis magna. Cras justo est, imperdiet sed nisi at, convallis ornare dolor. Morbi egestas erat hendrerit tortor blandit accumsan. Vestibulum ac ultricies sem. Praesent tempus sapien ligula, eget blandit elit laoreet in. Quisque vel metus id augue hendrerit pellentesque at eu ipsum.
                                </p>
                                <p className='text-slate-500 mb-4'>
                                    Integer vitae tortor blandit, congue felis tempus, varius eros. Quisque cursus id dui et gravida. Cras porta tempus interdum. In interdum venenatis suscipit. Phasellus sodales nec lorem ut molestie. Vestibulum at mauris a arcu faucibus elementum commodo in nunc. Sed sit amet leo luctus, vehicula urna a, imperdiet dolor.
                                </p>
                            </div>
                            <div className="col-span-6 flex justify-center">
                                <Link to={`/album/${item.albumId}`} className='bg-slate-900 hover:bg-slate-600 text-white px-8 py-4 rounded animate-pulse'>VOLTAR</Link>
                            </div>
                        </>
                    ))}

                </div>
            }

        </div>
    )
}