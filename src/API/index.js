//index.js

export async function fetchPlayers() {
  try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b/players');
    const data = await response.json();
    
    // Check if the data structure has 'players' property
    if (data.success && data.data && data.data.players) {
      return data.data.players;
    } else {
      console.error('Error fetching players:', data.error);
      return [];
    }
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
}
