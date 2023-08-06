//NewPlayerFormHelper.js

const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b';

export async function createPlayer(playerData) {
  try {
    const response = await fetch(`${BASE_URL}/players`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: 'An error occurred while creating the player' };
  }
}
