//NewPlayerForm.jsx

import { createPlayer } from '../NewPlayerFormHelper';
import { useState } from 'react';


 export default function NewPlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [teamId, setTeamId] = useState('');
  const handleStatusChange = (event) => {
    setStatus(event.target.value); // Update status when the dropdown value changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlayer = {
      name,
      breed,
      status,
      imageUrl,
      teamId: parseInt(teamId, 10), // Convert to integer
    };

	console.log('New player data:', newPlayer);

    try {
      const response = await createPlayer(newPlayer);
      console.log('New player created:', response);
      // Clear form fields after successful submission
      setName('');
      setBreed('');
      setStatus('');
      setImageUrl('');
      setTeamId('');
    } catch (error) {
      console.error('Error creating player:', error);
    }
  };

  return (
    <div>
      <h1>Create New Player</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Breed:
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <br />
        <label>
        Status:
          <select value={status.toLowerCase()} onChange={handleStatusChange}>
            <option value="">Select Status</option>
            <option value="field">Field</option>
            <option value="bench">Bench</option>
          </select>
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <br />
        <label>
          Team ID:
          <input type="number" value={teamId} onChange={(e) => setTeamId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
}


