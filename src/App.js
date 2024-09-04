import { useState, useEffect } from 'react';
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const exampleTracks = [
  {
    artist: 'Halestorm',
    title: 'Painkiller',
    album: 'Painkiller',
    id: 1
  },
  {
    artist: '5 Doors Down',
    title: 'Kryptonite',
    album: 'Self Titled Album',
    id: 2
  },
  {
    artist: 'Nirvana',
    title: 'Smells Like Teen Spirit',
    album: "Nirvana's Greatest Hits",
    id: 3
  },
  {
    artist: 'John Williams',
    title: 'Imperial March',
    album: 'The Empire Strikes Back Soundtrack',
    id: 4
  }
]


function App() {
  const [accessToken, setAccessToken] = useState('');
  const [results, setResults] = useState(exampleTracks);
  const [userPlayList, setUserPlayList] = useState([]);
  const [playListTitle, setPlayListTitle] = useState('My Playlist');

  useEffect(() => {
    // API Access Token
    let authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
      },
      body: 'grant_type=client_credentials'
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))

  }, [])
    

  function handleAddToUserPlayList(newTrack) {
    setUserPlayList(prevPlayList => [...prevPlayList, newTrack]);
  }

  function handleRemoveFromUserPlayList(trackId) {
    setUserPlayList(prevPlayList => prevPlayList.filter(track => track.id !== trackId))
  }

  return (
    <div className="App">
      <SearchBar setResults={setResults}/>
      <SearchResults results={results} handleAddToUserPlayList={handleAddToUserPlayList} />
      <Playlist tracks={userPlayList} handleRemoveFromUserPlayList={handleRemoveFromUserPlayList} playListTitle={playListTitle} setPlayListTitle={setPlayListTitle} />
    </div>
  );
}

export default App;
