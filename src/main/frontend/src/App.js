import './App.css';
import Login from './components/Login';
import TopArtists from "./components/TopArtists";
import { Routes, Route } from "react-router-dom";
import TopSongs from './components/TopSongs';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/top-artists" element={<TopArtists/>} />
        <Route exact path="/top-songs" element={<TopSongs/>} />
      </Routes>
    </div>
  );
}

export default App;
