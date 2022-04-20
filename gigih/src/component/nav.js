// import axios from "axios";
import { useEffect, useState } from 'react'
import Container from "./container";
import { Link } from 'react-router-dom';
import { useSearchResult } from './search';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../component/autoreduce';
import { useStoreApi } from "../data/storeApi";
import Button from '@mui/material/Button';
    
const BASE_URL = 'https://api.spotify.com/v1/'
const CLIENT_ID = '3bb5b74152ac472b94729257efbdae86'
const AUTHORIZE_URL = 'https://accounts.spotify.com/authorize'
const REDIRECT_URI = 'http://localhost:3000/'
const SCOPE = 'playlist-modify-private'
const Nav = () => {
    const [query,setQuery] = useState('')
    const { result, setResult } = useSearchResult()
    const { axios } = useStoreApi()

    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    const handleAuthorizeUser = () => {
        window.location.replace(`${AUTHORIZE_URL}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`)
    }

    const parseToken = (url) => {
        const parsed = url.split('&')[0].split('=')
        const token = parsed[parsed.length-1] ?? null
        dispatch(setToken(token))
    }

    const handleSearch = async () => {
        await axios.get(`${BASE_URL}search`,{
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
    }

    useEffect(() => {
        if (window.location.hash) parseToken(window.location.hash)
    })

    return (
        <section className="bg-gray-900 py-4">
            <Container>
                {/* flexbox */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-2">
                    <Link to="/" className="text-white font-bold text-lg lg:text-xl">
                        Spotify Clone
                    </Link>
                    {
                        !token &&
                        <Button
                            variant="outlined"
                            onClick={handleAuthorizeUser}
                            className="text-white border border-white rounded-full py-2 px-6 hover:bg-gray-700">
                            Login
                        </Button>
                    }
                    {
                        token && 
                        
                        <div className='flex flex-col md:flex-row items-start md:items-center my-2 space-y-2'>
                            {
                                result.length > 0 &&
                                <Button variant="outlined"className='mr-4 text-white' onClick={() => {
                                    setResult([])
                                    setQuery('')
                                }}>
                                    Clear Result
                                </Button>
                            }
                            <div className='flex'>
                                <input name="query" className='rounded-l-full py-2 px-4' value={query} onChange={(e) => setQuery(e.target.value)} />
                                <Button variant="contained" className='bg-green-500 py-2 px-4 rounded-r-full' onClick={handleSearch}>Search</Button>
                            </div>
                        </div>
                    }
                </div>
            </Container>
        </section>
    )
}
export default Nav