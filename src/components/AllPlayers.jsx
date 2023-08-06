//AllPlayers.jsx

import { useState, useEffect } from 'react';
import { fetchPlayers } from '../API'; 
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import HeaderText from '../HeaderText';

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPlayers();
      setPlayers(data);
    }

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredPlayers = players.filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredPlayers);
  };

  const playersToRender = searchResults.length > 0 ? searchResults : players;

  return (
    <div>
      <h1 className="welcome-text"> Welcome to the Puppy Bowl! </h1>
       <HeaderText searchResults={searchResults} />
    <div className="search-bar">
      <SearchBar onSearch={handleSearch} />
    </div>
      <div className="players-container">
  {playersToRender.map(player => (
    <div key={player.id} className="player-card">
      <Link to={`/players/${player.id}`}>
        <div className="player-image">
            <img
              src={player.imageUrl}
              alt={`${player.name} - ${player.id}`}
            /> 
        </div>
        <h2 className="player-name">{player.name}</h2>
      </Link>
    </div>
  ))}
</div>

    </div>
  );
}

export default AllPlayers;
