import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist";

const exampleTracks = [
  {
    artist: 'Halestorm',
    title: 'Painkiller'
  },
  {
    artist: '5 Doors Down',
    title: 'Kryptonite'
  },
  {
    artist: 'Nirvana',
    title: 'Smells Like Teen Spirit'
  },
  {
    artist: 'John Williams',
    title: 'Imperial March'
  }
]

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults results={exampleTracks} />
      <Playlist />
    </div>
  );
}

export default App;
