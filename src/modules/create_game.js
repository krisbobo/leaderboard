const createGame = async (value) => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(value),
    },
  ).then((response) => response.json());
};

export default createGame;