import data from '../data/album';
import Navbar from '../component/nav'
import Header from '../../components/Header'
import Tracks from '../component/tracks'
import UserPlaylist from '../component/playlist/index';
import { useSearchResult } from "../component/searcht";


const Home = () => {
    const { result } = useSearchResult()
    return (
        <div className="App flex flex-col min-h-screen">
            <Navbar />
            {
                result.length === 0 &&
                <Header
                    imageUrl={data.album.images[0].url}
                    albumName={data.album.name}
                />
            }
            <UserPlaylist />
            <Tracks />
            <div className='text-xs bg-gray-800 py-3 text-white'>
                Generasi Gigih Frontend Track Homework by Naufal Zakly Santoso
            </div>
        </div>
    );
}

export default Home;