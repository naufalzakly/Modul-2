// import { useSearchResult } from "../component/search";
import axios from "axios";
import { useEffect, useState,useCallback } from 'react'
import MusicComponent from "../component/music";



const Nav = () => {

    
    const BASE_URL = 'https://api.spotify.com/v1/'
    const CLIENT_ID = '3bb5b74152ac472b94729257efbdae86'
    const AUTHORIZE_URL = 'https://accounts.spotify.com/authorize'
    const REDIRECT_URI = 'http://localhost:3000/'
    const SCOPE = 'playlist-modify-private'
    const [token,setToken] = useState(null);
    const [query,setQuery] = useState('');
    const [result,setResult] = useState([])


    const handleAuthorizeUser = () => {
        window.location.replace(`${AUTHORIZE_URL}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`)
    }

    const parseToken = (url) => {
        const parsed = url.split('&')[0].split('=')
        const token = parsed[parsed.length-1] ?? null
        setToken(token)
    }

    const handleSearch = useCallback ( async  () => {
        axios.get(`${BASE_URL}search`,{
            params: {
                q: query,
                type: 'track'
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            setResult(response.data.tracks.items)
        })
    }, [query,token])

    useEffect(() => {
        
        handleSearch();
        if (window.location.hash) parseToken(window.location.hash)
    },[handleSearch])

    
    return(
        <section className="bg-gray-800 py-4">

            <div className="flex items-center justify-between px-2">
                {
                    !token &&
                    <button
                        onClick={handleAuthorizeUser}
                        className="text-white border border-white rounded-full py-2 px-6 hover:bg-gray-700">
                        Login
                    </button>
                }
                {
                    token && 
                    <div className=''>
                        {
                            result.length > 0 &&
                            <button className='mr-4 text-white' onClick={() => {
                                setResult([])
                                setQuery('')
                            }}>
                                Clear Result
                            </button>
                        }
                        <input name="query" value={query} onChange={(e) => setQuery(e.target.value)} />
                        <button className='bg-green-500 py-2 px-4 rounded-r-full' onClick={handleSearch}>Search</button>
                    </div>
                }
            </div>
            <div>
            { result.length > 0 && result.map((music, index)=>
                    <MusicComponent
                        key={music.id}
                        title={music.name}
                        image={music.album.images[0].url}
                        artis={music.album.artists[0].name}
                        date={music.album.release_date}
                        populer = {music.popularity}
                    />
                )}
            </div>
        </section>
    )
}
export default Nav