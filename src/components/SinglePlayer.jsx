// SinglePlayer.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom';
import DeletePlayerButton from './DeletePlayerButton';
import { deletePlayer } from '../DeletePlayerHelper';

function SinglePlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = React.useState(null);

  const fetchPlayerDetails = async () => {
	try {
		const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b/players/${id}`);
		if (!response.ok) {
		console.error('Error fetching player details:', response.statusText);
		return;
	}
		const data = await response.json();
		console.log('Fetched player details:', data);
		setPlayer(data.data.player); 
	} catch (error) {
		console.error('Error fetching player details:', error);
	}
  };

  React.useEffect(() => {
    fetchPlayerDetails();
  }, []);

  const handleDelete = async () => {
    try {
      await deletePlayer(id);
      // Handle success, e.g., navigate back to the list of players
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  if (!player) {
    return <div>Player not found.</div>;
  }

  const statusCapitalized = player.status.charAt(0).toUpperCase() + player.status.slice(1);

  return (
    <div>
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} />
      <p>Breed: {player.breed}</p>
      <p>Status: {statusCapitalized}</p>
      <p>Team: {player.teamId}</p>
      <DeletePlayerButton onDelete={handleDelete} />
      <Link to="/">Back to All Players</Link>
    </div>
  );
}

export default SinglePlayerDetails;
