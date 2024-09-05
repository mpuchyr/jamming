import { useState, useEffect } from 'react';
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Spotify from './spotify';


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const redirect_url = 'http://localhost:3000/'

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [results, setResults] = useState([]);
  const [userPlayList, setUserPlayList] = useState([]);
  const [playListTitle, setPlayListTitle] = useState('My Playlist');

  // useEffect(() => {
  //   // API Access Token
  //   let authParameters = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
  //     },
  //     body: 'grant_type=client_credentials'
  //   }
  //   fetch('https://accounts.spotify.com/api/token', authParameters)
  //     .then(result => result.json())
  //     .then(data => setAccessToken(data.access_token))

  // }, [])

  useEffect(() => {
    Spotify.getAccessToken();
  }, [])

  async function handleSearch(searchInput) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${searchInput}&type=track`,{
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
    const data = await response.json();
    setResults(data.tracks.items);
  }

  async function getUsername() {
    const response = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    })
    const data = await response.json();
    console.log(data);
  }

    

  function handleAddToUserPlayList(newTrack) {
    setUserPlayList(prevPlayList => [...prevPlayList, newTrack]);
  }

  function handleRemoveFromUserPlayList(trackId) {
    setUserPlayList(prevPlayList => prevPlayList.filter(track => track.id !== trackId))
  }

  return (
    <div className="App">
      <SearchBar setResults={setResults} handleSearch={handleSearch} />
      <SearchResults results={results} handleAddToUserPlayList={handleAddToUserPlayList} />
      <Playlist tracks={userPlayList} handleRemoveFromUserPlayList={handleRemoveFromUserPlayList} playListTitle={playListTitle} setPlayListTitle={setPlayListTitle} />
    </div>
  );
}

export default App;
