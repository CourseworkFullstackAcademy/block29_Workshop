// DeletePlayerHelper.js

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b';

export async function deletePlayer(playerId) {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Failed to delete player');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting player:', error);
    throw error; // Re-throw the error so it can be caught at a higher level if needed
  }
}
