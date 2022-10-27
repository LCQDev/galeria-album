import logo from '../assets/spotify-logo.png';

export const Header = () => {
    return (
        <div className='bg-slate-900'>
            <div className="container mx-auto grid grid-cols-3 md:grid-cols-6 px-4 py-4">
                <div className='col-span-1 md:col-span-1'>
                    <img src={logo} alt="Spotify" />
                </div>
                <div className='col-span-2 md:col-span-5 place-self-end gap-4 px-4'>
                    <h1 className='font-oswald text-2xl md:text-5xl text-white'>Galeria de Álbum</h1>
                </div>
            </div>
        </div>
    )
}