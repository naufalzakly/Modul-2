import data from './data/album';
import Nav from './component/nav';
import Header from './component/header';
import PageMusic from './pages';
import './App.css';
import { SearchProvider, useSearchResult } from './component/search';

function App() {
  const { result } = useSearchResult()
  return (
    <div className="App flex flex-col min-h-screen">
        <Nav />
        {
          result.length === 0 &&
          <Header
            imageUrl={data.album.images[0].url}
            albumName={data.album.name}
          />
        }
        <PageMusic />
        <div className='text-xs bg-gray-800 py-3 text-white'>
          Generasi Gigih Frontend Track Homework by Naufal Zakly Santoso
        </div>
    </div>
  );
}

const AppContainer = () => {
  return (
    <SearchProvider>
      <App />
    </SearchProvider>
  )
}

export default AppContainer;
