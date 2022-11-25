// ======== Create a new game ============
export default class Game {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }

  populateList = (obj) => {
    obj = {};
    const list = document.querySelector('.added-scores');
    const listItems = document.createElement('li');
    for (let i = 0; i < obj.length; i += 1) {
      const { user } = obj[i];
      const { score } = obj[i];
      listItems.textContent = `${user}: ${score}`;
      list.appendChild(listItems);
    }
  }

    populate = async () => {
      const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VdccZg4ehGmA0ER5EhxA/scores';
      const request = new Request(requestURL);
      const response = await fetch(request);
      const game = await response.json().result;
      this.populateList(game);
    }
}