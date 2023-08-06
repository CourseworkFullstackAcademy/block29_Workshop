//App.jsx
import { Routes, Route } from "react-router-dom";
import './App.css';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div id="container">
    
          <NavBar /> {/* Use the NavBar component */}
          
      <div id="main-section">
        <Routes>
          <Route path='/' element={<AllPlayers />} exact/>
          <Route path='/players/:id' element={<SinglePlayer />} />
          <Route path='/newplayerform' element={<NewPlayerForm />} />
        </Routes>
      </div>
    </div>
  )
}
