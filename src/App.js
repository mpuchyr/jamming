import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

const exampleTracks = [
  {
    artist: 'Halestorm',
    title: 'Painkiller',
    id: 1
  },
  {
    artist: '5 Doors Down',
    title: 'Kryptonite',
    id: 2
  },
  {
    artist: 'Nirvana',
    title: 'Smells Like Teen Spirit',
    id: 3
  },
  {
    artist: 'John Williams',
    title: 'Imperial March',
    id: 4
  }
]


function App() {
  const [results, setResults] = useState(exampleTracks);
  const [userPlayList, setUserPlayList] = useState([]);

  function handleAddToUserPlayList(newTrack) {
    setUserPlayList(prevPlayList => [...prevPlayList, newTrack]);
  }

  function handleRemoveFromUserPlayList(trackId) {
    setUserPlayList(prevPlayList => prevPlayList.filter(track => track.id !== trackId))
  }

  return (
    <div className="App">
      <SearchBar />
      <SearchResults results={results} handleAddToUserPlayList={handleAddToUserPlayList} />
      <Playlist tracks={userPlayList} handleRemoveFromUserPlayList={handleRemoveFromUserPlayList}/>
    </div>
  );
}

export default App;
