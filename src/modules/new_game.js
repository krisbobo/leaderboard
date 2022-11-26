// ======== Get players from the api ============
export default class Game {
    populate = async () => {
      const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VdccZg4ehGmA0ER5EhxA/scores/';
      const response = await fetch(requestURL);
      const game = await response.json();
      return game;
    }

    populateList = async () => {
      const players = await this.populate();
      const list = document.querySelector('.added-scores');
      list.innerHTML = '';
      players.result.forEach((player) => {
        const listItems = document.createElement('li');
        listItems.textContent = `${player.user}: ${player.score}`;
        list.appendChild(listItems);
      });
    }
}

export const freshGame = new Game();