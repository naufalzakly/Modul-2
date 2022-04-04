import { useSearchResult } from "../component/search"

const MusicComponent = ({number,title,artist,album, uri, song}) => {
    const {selectedSongs, setSelectedSongs} = useSearchResult()
    const generateButtonText = () => {
        const selected = selectedSongs.findIndex((song) => song.uri === uri)
        if (selected !== -1) return 'Deselect'
        return 'Select'
    }

    const handleSelect = () => {
        const selected = selectedSongs.findIndex((song) => song.uri === uri)
        if (selected > -1) {
            const newSelectedSongs = selectedSongs.filter((song) => song.uri !== uri)
            setSelectedSongs(newSelectedSongs)
        } else {
            const newSelectedSongs = [...selectedSongs,song]
            setSelectedSongs(newSelectedSongs)
        }
    }

    console.log(selectedSongs)


    return (
        <div>
            <div className="grid grid-cols-[50px_1fr_80px] gap-4 text-white mb-3">
                <div className="flex items-center justify-center">
                    {number+1}
                </div>
                <div className="text-left">
                    <h3 className="font-semibold">{title}</h3>
                    <div>
                        <span className="text-gray-300">{album}</span>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="transition-all py-2 px-5 text-sm border border-gray-600 hover:border-gray-400 rounded-full"
                        onClick={handleSelect}
                    >
                        {generateButtonText()}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MusicComponent;