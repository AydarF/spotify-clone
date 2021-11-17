import './App.css';
import Login from './components/Login';
import TopArtists from "./components/TopArtists";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/top-artists" element={<TopArtists/>} />
      </Routes>
    </div>
  );
}

export default App;
