import { freshGame } from './new_game';

const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VdccZg4ehGmA0ER5EhxA/scores/';
const name = document.querySelector('#username');
const scoreInput = document.querySelector('#score');

const sendResult = async () => {
  const result = await fetch(
    requestURL,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: name.value,
        score: scoreInput.value,
      }),
    },
  );
  name.value = '';
  scoreInput.value = '';
  freshGame.populateList();
  return result.json();
};

export default sendResult;