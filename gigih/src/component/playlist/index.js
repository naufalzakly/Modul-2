import Container from "../container";
import { useEffect, useState } from "react";
import { useStoreApi } from "../../data/storeApi";
import Item from './item'

const Playlist = () => {
    const { axios, token } = useStoreApi()
    const [playlists,setPlaylists] = useState([])

    useEffect(() => {
        const fetchPlaylistData = async () => {
            try {
                const response = await axios.get('/me/playlists')
                if (response) {
                    setPlaylists(response?.data?.items)
                }
            } catch (error) {
                console.log(error)
            } 
        }
        if (token) fetchPlaylistData()
    },[token,axios])

    return (
        <section className="py-8 bg-gradient-to-b from-gray-700 to-gray-800 text-white text-left">
            <Container>
                <div className="mb-3">
                    <h1 className="text-xl font-bold">Your Playlist</h1>
                    {!token && 
                        <div className="mt-2">
                            Sign in to see your playlist
                        </div>
                    }
                </div>
                <div>
                    {
                        playlists.map((item,idx) => {
                            return <Item key={idx} playlist={item} />
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default Playlist;